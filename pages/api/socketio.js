import { Server } from 'socket.io';

let ioInstance;

export const config = {
  api: {
    bodyParser: false
  }
};

export default function handler(req, res) {
  if (!ioInstance) {
    const io = new Server(res.socket.server, {
      path: '/api/socketio',
      cors: { origin: '*', methods: ['GET', 'POST'] }
    });

    io.on('connection', (socket) => {
      socket.emit('hello', 'Welcome to StarWrath sockets');
      socket.on('join-game', (gameId) => {
        socket.join(gameId);
        io.to(gameId).emit('player-joined', { id: socket.id, gameId });
      });
    });

    ioInstance = io;
  }
  res.end();
}
