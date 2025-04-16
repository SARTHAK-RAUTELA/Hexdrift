// Sample dataset: list of objects for 22 players
const players = [
  // Left side team (Announced)
  { name: 'J Fraser', points: 120, sel: 30.89, pos: 'BAT' },
  { name: 'A Porel', points: 158, sel: 21.07, pos: 'WK' },
  { name: 'L Rahul', points: 381, sel: 92.5, pos: 'WK' },
  { name: 'A Patel', points: 179, sel: 77.49, pos: 'ALL' },
  { name: 'T Stubbs', points: 260, sel: 48.19, pos: 'BAT' },
  { name: 'A Sharma', points: 159, sel: 13.76, pos: 'BAT' },
  { name: 'V Nigam', points: 269, sel: 40.91, pos: 'ALL' },
  { name: 'M Starc', points: 329, sel: 80.79, pos: 'BOWL' },
  { name: 'K Yadav', points: 294, sel: 61.79, pos: 'BOWL' },
  { name: 'M Sharma', points: 88, sel: 5.53, pos: 'BOWL' },
  { name: 'M Kumar', points: 131, sel: 11.78, pos: 'BOWL' },

  // Right side team (Announced)
  { name: 'R Sharma', points: 80, sel: 45.37, pos: 'BAT' },
  { name: 'R Rickelton', points: 288, sel: 73.45, pos: 'WK' },
  { name: 'W Jacks', points: 156, sel: 22.03, pos: 'ALL' },
  { name: 'S Yadav', points: 381, sel: 87.18, pos: 'BAT' },
  { name: 'T Varma', points: 307, sel: 75.03, pos: 'BAT' },
  { name: 'H Pandya', points: 491, sel: 94.78, pos: 'ALL' },
  { name: 'N Dhir', points: 261, sel: 20.09, pos: 'ALL' },
  { name: 'M Santner', points: 153, sel: 15.26, pos: 'ALL' },
  { name: 'D Chahar', points: 200, sel: 16.61, pos: 'BOWL' },
  { name: 'T Boult', points: 209, sel: 47.41, pos: 'BOWL' },
  { name: 'J Bumrah', points: 17, sel: 66.08, pos: 'BOWL' }
];

  
  
  
  // Function to calculate adjusted points
  function adjustedPoints(player) {
    // Using AP = points * (0.5 + selection/200)
    return player.points * (0.5 + player.sel / 200);
  }
  
  // Pre-calculate adjusted points for each player (optional)
  players.forEach(player => {
    player.adj = adjustedPoints(player);
  });
  
  // Generate 15 random teams (each team is a list of 11 players)
  const teams = [];
  while (teams.length < 15) {
    const team = [];
    const selectedPlayers = new Set();
    
    while (team.length < 11) {
        const randomPlayer = players[Math.floor(Math.random() * players.length)];
        if (!selectedPlayers.has(randomPlayer.name)) {
            team.push(randomPlayer);
            selectedPlayers.add(randomPlayer.name);
        }
    }
  
    // Ensure teams are distinct (by comparing sorted player names)
    const teamNames = team.map(p => p.name).sort();
    if (!teams.some(t => JSON.stringify(t.map(p => p.name).sort()) === JSON.stringify(teamNames))) {
        teams.push(team);
    }
  }
  
  // Compute team strength for each team
  const teamStrengths = teams.map((team, idx) => {
    const strength = team.reduce((sum, player) => sum + player.adj, 0);
    return { teamName: `Team ${idx + 1}`, strength, players: team.map(p => p.name).sort() };
  });
  
  // Log the team strengths
  teamStrengths.forEach((team, idx) => {
    console.log(`${team.teamName}: Strength = ${team.strength.toFixed(2)}, Players = ${team.players.join(', ')}`);
  });
  
  // Function to calculate win probability for two teams
  function winProbability(strengthA, strengthB) {
    return strengthA / (strengthA + strengthB);
  }
  
  // Example: Calculate win probability for two teams
  const team4 = teamStrengths[3];
  const team7 = teamStrengths[6];
  const probTeam4 = winProbability(team4.strength, team7.strength);
  const probTeam7 = 1 - probTeam4;
  
  console.log("\nMatchup Example:");
  console.log(`${team4.teamName} (strength ${team4.strength.toFixed(2)}) vs ${team7.teamName} (strength ${team7.strength.toFixed(2)})`);
  console.log(`Win Probability: ${team4.teamName}: ${(probTeam4 * 100).toFixed(2)}%, ${team7.teamName}: ${(probTeam7 * 100).toFixed(2)}%`);
  