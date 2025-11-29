import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';

export const metadata = {
  title: 'StarWrath RTS',
  description: 'A slow-burn RTS set among the stars'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container my-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
