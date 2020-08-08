export default {
    namespaced: true,
    state: {
        heading: [
            'Tier',
            'Name',
            'Type',
            'Cost',
            'Fire Mode',
            'Head',
            'Body',
            'Leg',
            'Range',
            'Mag Size',
            'Fire Rate',
            'Penetration'
        ],
        weapons: [
            { tier: { name: 'S', rare: 1 }, logo: 'phantom.png', name: 'Phantom', type: 'Rifle', cost: 2900, fire_mode: 'Full Auto', head: 156, body: 39, leg: 33, range: [15, 30, 50], mag_size: 30, fire_rate: [11], penetration: 'Medium' },
            { tier: { name: 'S', rare: 1 }, logo: 'vandal.png', name: 'Vandal', type: 'Rifle', cost: 2900, fire_mode: 'Full Auto', head: 156, body: 39, leg: 33, range: [50], mag_size: 25, fire_rate: [9.25], penetration: 'Medium' },
            { tier: { name: 'A', rare: 2 }, logo: 'sheriff.png', name: 'Sheriff', type: 'Sidearm', cost: 800, fire_mode: 'Semi-Auto', head: 160, body: 55, leg: 47, range: [30], mag_size: 6, fire_rate: [4], penetration: 'High' },
            { tier: { name: 'A', rare: 2 }, logo: 'stinger.png', name: 'Stinger', type: 'SMG', cost: 1000, fire_mode: 'Full Auto/4-Burst', head: 67, body: 27, leg: 23, range: [20], mag_size: 20, fire_rate: [18], penetration: 'Low' },
            { tier: { name: 'A', rare: 2 }, logo: 'spectre.png', name: 'Spectre', type: 'SMG', cost: 1600, fire_mode: 'Full Auto', head: 78, body: 26, leg: 22, range: [20], mag_size: 30, fire_rate: [15.33], penetration: 'Medium' },
            { tier: { name: 'A', rare: 2 }, logo: 'guardian.png', name: 'Guardian', type: 'Rifle', cost: 2700, fire_mode: 'Semi-Auto', head: 185, body: 65, leg: 49, range: ['-'], mag_size: 12, fire_rate: [8.5], penetration: 'Medium' },
            { tier: { name: 'A', rare: 2 }, logo: 'operator.png', name: 'Operator', type: 'Sniper', cost: 4500, fire_mode: 'Full Auto', head: 255, body: 150, leg: 127, range: ['-'], mag_size: 5, fire_rate: [0.75], penetration: 'High' },
            { tier: { name: 'A', rare: 2 }, logo: 'odin.png', name: 'Odin', type: 'Heavy', cost: 3200, fire_mode: 'Full Auto', head: 95, body: 38, leg: 32, range: [30], mag_size: 100, fire_rate: [12, 15.6], penetration: 'High' },
            { tier: { name: 'B', rare: 3 }, logo: 'frenzy.png', name: 'Frenzy', type: 'Sidearm', cost: 400, fire_mode: 'Full Auto', head: 78, body: 26, leg: 22, range: [20, 50], mag_size: 13, fire_rate: [10], penetration: 'Low' },
            { tier: { name: 'B', rare: 3 }, logo: 'ghost.png', name: 'Ghost', type: 'Sidearm', cost: 500, fire_mode: 'Semi-Auto', head: 105, body: 33, leg: 26, range: [30], mag_size: 15, fire_rate: [16.75], penetration: 'Medium' },
            { tier: { name: 'B', rare: 3 }, logo: 'judge.png', name: 'Judge', type: 'Shotgun', cost: 1500, fire_mode: 'Semi-Auto', head: 36, body: 17, leg: 14, range: [10, 15, 50], mag_size: 7, fire_rate: [1.5], penetration: 'Medium' },
            { tier: { name: 'B', rare: 3 }, logo: 'bulldog.png', name: 'Bulldog', type: 'Rifle', cost: 2100, fire_mode: 'Full Auto/3-Burst', head: 159, body: 35, leg: 30, range: [15], mag_size: 24, fire_rate: [9.15], penetration: 'Medium' },
            { tier: { name: 'B', rare: 3 }, logo: 'marshal.png', name: 'Marshal', type: 'Sniper', cost: 1100, fire_mode: 'Semi-Auto', head: 202, body: 101, leg: 85, range: ['-'], mag_size: 5, fire_rate: [1.5], penetration: 'Medium' },
            { tier: { name: 'B', rare: 3 }, logo: 'ares.png', name: 'Ares', type: 'Heavy', cost: 1700, fire_mode: 'Full Auto', head: 72, body: 30, leg: 25, range: [30], mag_size: 50, fire_rate: [10, 13], penetration: 'High' },
            { tier: { name: 'C', rare: 4 }, logo: 'classic.png', name: 'Classic', type: 'Sidearm', cost: 0, fire_mode: 'Semi-Auto', head: 78, body: 26, leg: 22, range: [30], mag_size: 12, fire_rate: [6.75], penetration: 'Low' },
            { tier: { name: 'C', rare: 4 }, logo: 'shorty.png', name: 'Shorty', type: 'Sidearm', cost: 200, fire_mode: 'Semi-Auto', head: 36, body: 22, leg: 19, range: [9, 15], mag_size: 2, fire_rate: [3.3], penetration: 'Low' },
            { tier: { name: 'C', rare: 4 }, logo: 'bucky.png', name: 'Bucky', type: 'Shotgun', cost: 900, fire_mode: 'Semi-Auto', head: 44, body: 22, leg: 19, range: [8, 12, 50], mag_size: 30, fire_rate: [1.1], penetration: 'Low' },
        ]
    },
    getters: {
        weapons(state) {
            return state;
        }
    }
}