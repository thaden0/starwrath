'use client';

import { useEffect, useRef } from 'react';
import Phaser from 'phaser';

class TacticalScene extends Phaser.Scene {
  constructor(config) {
    super({ key: 'TacticalScene' });
    this.planets = config.planets;
    this.fog = config.fog;
    this.playerShips = config.playerShips;
  }

  preload() {
    this.load.image('planet', 'https://dummyimage.com/96x96/1e2b52/ffffff.png&text=O');
    this.load.image('ship', 'https://dummyimage.com/32x16/39c0ed/000000.png&text=>');
  }

  create() {
    const { width, height } = this.scale;
    this.add.rectangle(width / 2, height / 2, width, height, 0x03060f).setDepth(-1);

    this.planets.forEach((planet, idx) => {
      const sprite = this.add.sprite(planet.x, planet.y, 'planet');
      sprite.setScale(planet.size / 100);
      sprite.setAlpha(0.85);
      this.add.text(planet.x - 30, planet.y + planet.size / 2, planet.name, {
        fontSize: '12px',
        color: '#e5edff'
      });
      this.add.text(planet.x - 30, planet.y + planet.size / 2 + 12, `Resources: ∞`, {
        fontSize: '10px',
        color: '#9fb3ff'
      });
      if (idx === 0) {
        this.add.circle(planet.x, planet.y, 110, 0x39c0ed, 0.06).setStrokeStyle(1, 0x39c0ed, 0.4);
      }
    });

    this.playerShips.forEach((ship) => {
      const sprite = this.add.sprite(ship.x, ship.y, 'ship');
      sprite.setTint(ship.factionColor);
      sprite.setInteractive({ useHandCursor: true });
      sprite.on('pointerdown', () => this.showShipOverlay(ship));
    });

    this.drawFog();
  }

  drawFog() {
    if (!this.fog) return;
    const { radius, center } = this.fog;
    const maskShape = this.make.graphics({ x: 0, y: 0, add: false });
    maskShape.fillStyle(0xffffff);
    maskShape.fillCircle(center.x, center.y, radius);
    const mask = maskShape.createGeometryMask();

    const fog = this.add.rectangle(0, 0, this.scale.width * 2, this.scale.height * 2, 0x000510, 0.9);
    fog.setOrigin(0, 0);
    fog.setMask(mask);

    this.add.circle(center.x, center.y, radius, 0x39c0ed, 0.05).setStrokeStyle(1, 0x39c0ed, 0.5);
  }

  showShipOverlay(ship) {
    const tooltip = this.add.container(ship.x + 12, ship.y - 12);
    tooltip.add(
      this.add.rectangle(0, 0, 180, 70, 0x0c1329, 0.9).setStrokeStyle(1, 0x39c0ed, 0.4).setOrigin(0, 0)
    );
    tooltip.add(
      this.add.text(8, 6, ship.name, {
        fontSize: '12px',
        color: '#e5edff'
      })
    );
    tooltip.add(
      this.add.text(8, 24, `Cargo: ${ship.cargo}/${ship.cargoCap}`, {
        fontSize: '10px',
        color: '#9fb3ff'
      })
    );
    tooltip.add(
      this.add.text(8, 40, `Fuel: ${ship.fuel} • Warp ${ship.maxWarp}`, {
        fontSize: '10px',
        color: '#9fb3ff'
      })
    );

    this.time.delayedCall(1800, () => tooltip.destroy());
  }
}

export default function PhaserGame() {
  const containerRef = useRef(null);
  const gameRef = useRef(null);

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: containerRef.current?.clientWidth || 900,
      height: 600,
      backgroundColor: '#040912',
      parent: containerRef.current,
      physics: { default: 'arcade' },
      scene: new TacticalScene({
        planets: [
          { name: 'New Carina', x: 140, y: 160, size: 90 },
          { name: 'Vespera', x: 420, y: 260, size: 80 },
          { name: 'Krynn', x: 680, y: 120, size: 70 },
          { name: 'Iacchus', x: 540, y: 400, size: 65 },
          { name: 'Pelor', x: 260, y: 420, size: 60 }
        ],
        fog: { center: { x: 420, y: 260 }, radius: 210 },
        playerShips: [
          { name: 'Construction Drone', x: 170, y: 210, cargo: 120, cargoCap: 1000, fuel: 500, maxWarp: 3, factionColor: 0x39c0ed },
          { name: 'Scout', x: 210, y: 170, cargo: 80, cargoCap: 200, fuel: 300, maxWarp: 5, factionColor: 0xf5c268 },
          { name: 'Star Ship', x: 460, y: 320, cargo: 320, cargoCap: 1600, fuel: 800, maxWarp: 4, factionColor: 0xff7bd1 }
        ]
      })
    };

    gameRef.current = new Phaser.Game(config);
    return () => {
      gameRef.current?.destroy(true);
    };
  }, []);

  return <div className="phaser-container" ref={containerRef} aria-label="StarWrath tactical map" />;
}
