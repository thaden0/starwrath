'use client';

import { useMemo, useState } from 'react';
import { factions, shipRoles, sampleGames } from '../lib/gameData';

function Hero() {
  return (
    <section className="hero mb-4" id="top">
      <div className="row align-items-center g-4">
        <div className="col-lg-7">
          <p className="text-uppercase fw-bold text-info mb-1">Slow-burn RTS • One second ticks</p>
          <h1 className="display-5 fw-bold">Command fleets across weeks-long galactic wars.</h1>
          <p className="lead text-muted">
            Build star bases, assign construction drones, and contest distant planets in a tactical sandbox
            where logistics, fog of war, and fuel lines matter as much as firepower.
          </p>
          <div className="d-flex gap-3">
            <a className="btn btn-info text-dark fw-bold" href="#login">
              Login
            </a>
            <a className="btn btn-outline-light" href="#register">
              Register &amp; Join a War
            </a>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="panel">
            <h5 className="mb-3">Key Pillars</h5>
            <ul className="list-unstyled mb-0 small text-muted">
              <li className="mb-2">⏱️ Real-time 1s ticks stretched over 1–2 weeks of play.</li>
              <li className="mb-2">🚀 Travel and scanners tuned for long distances and hours-long warps.</li>
              <li className="mb-2">🛰️ Infinite-resource planets fueling complex cargo and weight logistics.</li>
              <li>🛰️ Phaser-powered tactical map with fog-of-war and faction tech trees.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureGrid() {
  const features = [
    {
      title: 'Planetary Logistics',
      detail: 'Cargo weight, warp costs, and fueling loops matter for every ship.'
    },
    {
      title: 'Fleet-Level Visibility',
      detail: 'Sight ranges, cloaking reductions, and scanner stations define intel.'
    },
    {
      title: 'Station Engineering',
      detail: 'Construction drones place bouys, shipyards, and research stations safely away from planets.'
    },
    {
      title: 'Faction Identity',
      detail: 'Terrains, Pyric, and Bytillian fleets with unique ship roles and tech trees.'
    },
    {
      title: 'Socket-Powered Multiplayer',
      detail: 'Live updates for countdowns, lobby state, and in-map orders.'
    },
    {
      title: 'Phaser Tactical Map',
      detail: 'Planets, starting bases, and fog-of-war overlays rendered in-browser.'
    }
  ];

  return (
    <section id="features" className="mb-4">
      <h4 className="section-title">Features</h4>
      <div className="feature-grid">
        {features.map((feature) => (
          <div key={feature.title} className="panel h-100">
            <h6 className="fw-bold text-info">{feature.title}</h6>
            <p className="text-muted small mb-0">{feature.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FactionShowcase() {
  return (
    <section id="factions" className="mb-4">
      <h4 className="section-title mb-3">Factions</h4>
      <div className="row g-3">
        {factions.map((faction) => (
          <div key={faction.id} className="col-md-4">
            <div className="panel h-100">
              <div className="d-flex justify-content-between align-items-start">
                <h5 className="fw-bold" style={{ color: faction.color }}>
                  {faction.name}
                </h5>
                <span className="badge bg-dark border border-light badge-faction">{faction.restriction}</span>
              </div>
              <ul className="text-muted small mb-0 mt-2">
                {faction.traits.map((trait) => (
                  <li key={trait}>{trait}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SignedInDashboard({ onSelectGame }) {
  const [selectedFaction, setSelectedFaction] = useState('terrains');
  const joined = sampleGames.filter((g) => g.joined);
  const open = sampleGames.filter((g) => !g.joined);

  return (
    <section className="mb-4">
      <h4 className="section-title mb-3">Your Command Console</h4>
      <div className="row g-3">
        <div className="col-lg-4">
          <div className="panel h-100">
            <h6 className="text-info mb-3">Joined wars</h6>
            <div className="list-group list-group-flush">
              {joined.map((game) => (
                <button
                  key={game.id}
                  className="list-group-item list-group-item-action bg-transparent text-start text-white"
                  onClick={() => onSelectGame(game)}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-semibold">{game.name}</span>
                    <small className="text-muted">{game.goal}</small>
                  </div>
                  <small className="text-muted">Starts: {new Date(game.startsAt).toUTCString()}</small>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="row g-3">
            <div className="col-12">
              <div className="panel">
                <h6 className="text-info">Start a new war</h6>
                <div className="row g-3">
                  <div className="col-md-4">
                    <label className="form-label">Game Name</label>
                    <input className="form-control" placeholder="Operation Dawn" />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Password</label>
                    <input className="form-control" placeholder="Optional" type="password" />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Max Players</label>
                    <input className="form-control" type="number" min="2" max="16" defaultValue={8} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Start Date</label>
                    <input className="form-control" type="date" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Start Time</label>
                    <input className="form-control" type="time" />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Goal</label>
                    <input className="form-control" placeholder="Control X planets" />
                  </div>
                  <div className="col-12 text-end">
                    <button className="btn btn-info text-dark fw-bold">Create Lobby</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="panel">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6 className="text-info mb-0">Open games</h6>
                  <small className="text-muted">Click to join (password prompt when needed)</small>
                </div>
                <div className="list-group list-group-flush">
                  {open.map((game) => (
                    <button
                      key={game.id}
                      className="list-group-item list-group-item-action bg-transparent text-start text-white"
                      onClick={() => onSelectGame(game)}
                    >
                      <div className="d-flex justify-content-between">
                        <span className="fw-semibold">{game.name}</span>
                        <small className="text-muted">{game.goal}</small>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">Starts: {new Date(game.startsAt).toUTCString()}</small>
                        <span className="badge bg-secondary">{game.maxPlayers} seats</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="panel">
                <h6 className="text-info">Choose your faction</h6>
                <div className="row g-2 align-items-center">
                  <div className="col-md-6">
                    <select
                      value={selectedFaction}
                      onChange={(e) => setSelectedFaction(e.target.value)}
                      className="form-select"
                    >
                      {factions.map((faction) => (
                        <option key={faction.id} value={faction.id}>
                          {faction.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-6 text-muted small">
                    {factions.find((f) => f.id === selectedFaction)?.traits.join(' • ')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShipRoles() {
  return (
    <section className="mb-4">
      <h4 className="section-title">Ship & Station Roles</h4>
      <div className="panel">
        <div className="row g-2">
          {shipRoles.map((role) => (
            <div key={role} className="col-md-4">
              <div className="d-flex align-items-center gap-2 text-muted">
                <span className="badge bg-info text-dark">{role.charAt(0)}</span>
                <span>{role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const countdown = useMemo(() => {
    if (!selectedGame?.startsAt) return null;
    const diff = Math.max(0, new Date(selectedGame.startsAt).getTime() - Date.now());
    const hours = Math.floor(diff / 1000 / 60 / 60);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }, [selectedGame]);

  return (
    <div className="d-flex flex-column gap-4">
      <Hero />
      <div className="d-flex justify-content-between align-items-center">
        <h4 className="section-title mb-0">Engage</h4>
        <button className="btn btn-outline-info btn-sm" onClick={() => setIsSignedIn((prev) => !prev)}>
          Toggle {isSignedIn ? 'Sign Out' : 'Sign In'} (demo)
        </button>
      </div>
      {isSignedIn ? <SignedInDashboard onSelectGame={setSelectedGame} /> : <FeatureGrid />}
      {selectedGame && (
        <div className="panel">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h6 className="text-info mb-1">{selectedGame.name}</h6>
              <p className="mb-0 text-muted small">Goal: {selectedGame.goal}</p>
            </div>
            <div className="text-end">
              <small className="text-muted d-block">Countdown to start</small>
              <span className="fs-4 fw-bold text-warning">{countdown ?? '00:00:00'}</span>
            </div>
          </div>
          <p className="text-muted small mb-0">You will be moved into the tactical map when the timer hits zero.</p>
        </div>
      )}
      <FactionShowcase />
      <ShipRoles />
    </div>
  );
}
