'use client';

import PhaserGame from '../../components/PhaserGame';
import { factions } from '../../lib/gameData';

export default function GamePage() {
  return (
    <div className="d-flex flex-column gap-4">
      <section className="panel">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h3 className="mb-1">StarWrath Tactical Map</h3>
            <p className="text-muted mb-0">Live 1-second ticks. Travel times measured in hours. Fog-of-war enabled.</p>
          </div>
          <div>
            <span className="badge bg-info text-dark">Week-long realtime session</span>
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="row g-3">
          <div className="col-lg-8">
            <PhaserGame />
          </div>
          <div className="col-lg-4">
            <div className="panel h-100">
              <h6 className="text-info">Battle Controls</h6>
              <ul className="text-muted small">
                <li>Right-click an enemy to issue attack orders.</li>
                <li>Right-click your damaged stations to start a repair shuttle loop.</li>
                <li>Construction drones can place stations no closer than 3 warp-minutes from a planet.</li>
                <li>Fog-of-war shrinks when cloaking is active; scanners and bouys pierce it.</li>
                <li>Planets provide infinite resources; cargo transfers occur 1 unit per second per drone.</li>
              </ul>
              <h6 className="text-info mt-3">Faction notes</h6>
              <ul className="text-muted small">
                {factions.map((faction) => (
                  <li key={faction.id}>
                    <span className="fw-semibold" style={{ color: faction.color }}>
                      {faction.name}:
                    </span>{' '}
                    {faction.traits.join(', ')}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
