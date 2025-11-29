export const factions = [
  {
    id: 'terrains',
    name: 'Terrains',
    color: '#6bc1ff',
    traits: ['Capital supremacy', 'Long-range torpedoes', 'Probe networks'],
    restriction: 'Cannot cloak'
  },
  {
    id: 'pyric',
    name: 'Pyric',
    color: '#ff7bd1',
    traits: ['Cloaking specialists', 'Mine warfare', 'Deep scanners'],
    restriction: 'Can cloak'
  },
  {
    id: 'bytillian',
    name: 'Bytillian',
    color: '#f5c268',
    traits: ['Carrier command', 'Fighter swarms', 'Rapid scouts'],
    restriction: 'Cannot cloak'
  }
];

export const shipRoles = [
  'Construction Drone',
  'Light Fighter',
  'Heavy Fighter',
  'Scout',
  'Gunboat',
  'Destroyer',
  'Star Ship',
  'Carrier',
  'BattleShip',
  'Bouy',
  'Star Base',
  'Research Station',
  'Light Ship Yard',
  'Medium Ship Yard',
  'Heavy Ship Yard'
];

export const sampleGames = [
  {
    id: 'alpha',
    name: 'Frontier Echoes',
    goal: 'Control 7 planets',
    maxPlayers: 6,
    startsAt: '2025-12-01T12:00:00Z',
    joined: true,
    faction: 'Terrains'
  },
  {
    id: 'beta',
    name: 'Nebula Strife',
    goal: 'Control 5 planets',
    maxPlayers: 8,
    startsAt: '2025-12-03T08:00:00Z',
    joined: false
  },
  {
    id: 'gamma',
    name: 'Outer Rim Accord',
    goal: 'Control 9 planets',
    maxPlayers: 10,
    startsAt: '2025-12-05T17:00:00Z',
    joined: false
  }
];
