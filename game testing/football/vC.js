// Sample dataset: list of objects for 22 players (Football dataset)
const players = [
    // Forward Players
    { name: 'B Borrello', points: 9.0, sel: 92.22, pos: 'FWD' },
    { name: 'H Ibusuki', points: 9.0, sel: 84.95, pos: 'FWD' },
    { name: 'N Botic', points: 9.0, sel: 86.9, pos: 'FWD' },
    { name: 'Z Sapsford', points: 8.0, sel: 6.59, pos: 'FWD' },

    // Midfield Players
    { name: 'N Milanovic', points: 9.0, sel: 96.32, pos: 'MID' },
    { name: 'R Danzaki', points: 9.0, sel: 90.3, pos: 'MID' },
    { name: 'A Thurgate', points: 8.5, sel: 88.56, pos: 'MID' },
    { name: 'B Kraev', points: 8.5, sel: 91.91, pos: 'MID' },
    { name: 'M Grimaldi', points: 8.5, sel: 5.1, pos: 'MID' },
    { name: 'R Bozinovski', points: 8.5, sel: 10.44, pos: 'MID' },
    { name: 'O Priestman', points: 8.0, sel: 2.37, pos: 'MID' },
    { name: 'J Brillanto', points: 7.5, sel: 0, pos: 'MID' },

    // Defender Players
    { name: 'B Garuccio', points: 9.0, sel: 93.26, pos: 'DEF' },
    { name: 'D Leonard', points: 8.5, sel: 88.32, pos: 'DEF' },
    { name: 'G Cleur', points: 8.5, sel: 83, pos: 'DEF' },
    { name: 'A Pantazopoulos', points: 8.0, sel: 23.26, pos: 'DEF' },
    { name: 'T Russell', points: 8.0, sel: 25.66, pos: 'DEF' },
    { name: 'T Imai', points: 7.5, sel: 4.18, pos: 'DEF' },
    { name: 'A Bonetig', points: 6.5, sel: 1.88, pos: 'DEF' },
    { name: 'A Gorchach', points: 6.5, sel: 0, pos: 'DEF' },

    // Goalkeeper Players
    { name: 'L Thomas', points: 7.0, sel: 75.65, pos: 'GK' },
    { name: 'M Sutton', points: 7.0, sel: 20.88, pos: 'GK' }
];

// Function to calculate adjusted points
function adjustedPoints(player) {
    return player.points * (0.5 + player.sel / 200);
}

// Pre-calculate adjusted points for each player
players.forEach(player => {
    player.adj = adjustedPoints(player);
});

// Function to calculate a valid formation (like 4-4-2, 4-3-3, etc.)
function getValidFormation() {
    const formations = [
        { GK: 1, DEF: 4, MID: 3, FWD: 3 }, // 4-3-3
        { GK: 1, DEF: 3, MID: 4, FWD: 3 }, // 3-4-3
        { GK: 1, DEF: 4, MID: 4, FWD: 2 }, // 4-4-2
        { GK: 1, DEF: 5, MID: 3, FWD: 2 }, // 5-3-2
        { GK: 1, DEF: 3, MID: 5, FWD: 2 }, // 3-5-2
    ];

    return formations[Math.floor(Math.random() * formations.length)];
}

// Generate 15 random teams
const teams = [];
while (teams.length < 15) {
    const formation = getValidFormation();
    const team = [];
    const selectedPlayers = new Set();

    // Select players based on formation requirements
    let positions = { GK: 0, DEF: 0, MID: 0, FWD: 0 };
    while (team.length < 11) {
        const randomPlayer = players[Math.floor(Math.random() * players.length)];
        if (!selectedPlayers.has(randomPlayer.name) && positions[randomPlayer.pos] < formation[randomPlayer.pos]) {
            team.push(randomPlayer);
            selectedPlayers.add(randomPlayer.name);
            positions[randomPlayer.pos]++;
        }
    }

    // Ensure teams are distinct by comparing sorted player names
    const teamNames = team.map(p => p.name).sort();
    if (!teams.some(t => JSON.stringify(t.map(p => p.name).sort()) === JSON.stringify(teamNames))) {
        teams.push(team);
    }
}

// Compute team strength and apply captain/vice-captain multipliers
const teamStrengths = teams.map((team, idx) => {
    // Assuming the first player is captain and second is vice-captain
    let strength = team.reduce((sum, player) => sum + player.adj, 0);
    const captain = team[0]; // First player as captain
    const viceCaptain = team[1]; // Second player as vice-captain

    // Apply captain (1.5x) and vice-captain (2x) multipliers
    strength += captain.adj * 0.5; // Captain 1.5x
    strength += viceCaptain.adj;   // Vice-captain 2x

    return {
        teamName: `Team ${idx + 1}`,
        strength,
        players: team.map(p => `${p.name} (${p.pos})`).sort(),
        captain: captain.name,
        viceCaptain: viceCaptain.name
    };
});

// Sort teams by strength and find the best team
const bestTeam = teamStrengths.sort((a, b) => b.strength - a.strength)[0];

// Log the best team
console.log(`Best Team: ${bestTeam.teamName} with Strength: ${bestTeam.strength.toFixed(2)}`);
console.log(`Players: ${bestTeam.players.join(', ')}`);
console.log(`Captain: ${bestTeam.captain}`);
console.log(`Vice-Captain: ${bestTeam.viceCaptain}`);

// Log all teams and their strengths with captain and vice-captain
teamStrengths.forEach((team) => {
    console.log(`${team.teamName}: Strength = ${team.strength.toFixed(2)}`);
    console.log(`Players: ${team.players.join(', ')}`);
    console.log(`Captain: ${team.captain}`);
    console.log(`Vice-Captain: ${team.viceCaptain}`);
    console.log('---');
});
