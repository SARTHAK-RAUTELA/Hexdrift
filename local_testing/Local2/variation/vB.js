// Dream11 Team Generator in Pure JavaScript with Optimizations and CSV Export
const allPlayers = [
    // Team A
    { id: "A1", name: "A1", team: "A", role: "WK" },
    { id: "A2", name: "A2", team: "A", role: "BAT" },
    { id: "A3", name: "A3", team: "A", role: "BAT" },
    { id: "A4", name: "A4", team: "A", role: "BAT" },
    { id: "A5", name: "A5", team: "A", role: "AR" },
    { id: "A6", name: "A6", team: "A", role: "AR" },
    { id: "A7", name: "A7", team: "A", role: "BOWL" },
    { id: "A8", name: "A8", team: "A", role: "BOWL" },
    { id: "A9", name: "A9", team: "A", role: "BOWL" },
    { id: "A10", name: "A10", team: "A", role: "BOWL" },
    { id: "A11", name: "A11", team: "A", role: "BAT" },
    // Team B
    { id: "B1", name: "B1", team: "B", role: "WK" },
    { id: "B2", name: "B2", team: "B", role: "BAT" },
    { id: "B3", name: "B3", team: "B", role: "BAT" },
    { id: "B4", name: "B4", team: "B", role: "BAT" },
    { id: "B5", name: "B5", team: "B", role: "AR" },
    { id: "B6", name: "B6", team: "B", role: "AR" },
    { id: "B7", name: "B7", team: "B", role: "BOWL" },
    { id: "B8", name: "B8", team: "B", role: "BOWL" },
    { id: "B9", name: "B9", team: "B", role: "BOWL" },
    { id: "B10", name: "B10", team: "B", role: "BOWL" },
    { id: "B11", name: "B11", team: "B", role: "BAT" },
  ];
  
  function getCombinations(arr, k) {
    const results = [];
    const recurse = (start, path) => {
      if (path.length === k) {
        results.push([...path]);
        return;
      }
      for (let i = start; i < arr.length; i++) {
        path.push(arr[i]);
        recurse(i + 1, path);
        path.pop();
      }
    };
    recurse(0, []);
    return results;
  }
  
  function isValidTeam(team) {
    const roleCount = { WK: 0, BAT: 0, AR: 0, BOWL: 0 };
    let teamA = 0, teamB = 0;
    team.forEach(p => {
      roleCount[p.role]++;
      p.team === "A" ? teamA++ : teamB++;
    });
    return (
      teamA >= 4 && teamA <= 7 &&
      teamB >= 4 && teamB <= 7 &&
      roleCount.WK >= 1 && roleCount.WK <= 4 &&
      roleCount.BAT >= 3 && roleCount.BAT <= 6 &&
      roleCount.AR >= 1 && roleCount.AR <= 4 &&
      roleCount.BOWL >= 3 && roleCount.BOWL <= 6
    );
  }
  
  function assignCaptainVice(team) {
    const results = [];
    for (let i = 0; i < team.length; i++) {
      for (let j = 0; j < team.length; j++) {
        if (i !== j) {
          results.push({
            players: team,
            captain: team[i],
            viceCaptain: team[j]
          });
        }
      }
    }
    return results;
  }
  
  function generateDream11Teams() {
    const combos = getCombinations(allPlayers, 11);
    const validTeams = [];
    for (let team of combos) {
      if (isValidTeam(team)) {
        validTeams.push(team);
        if (validTeams.length >= 3) break; // Limit for performance
      }
    }
    const finalTeams = validTeams.flatMap(assignCaptainVice);
    console.log("Generated:", finalTeams.length, "teams with C/VC");
    return finalTeams;
  }
  
  function exportToCSV(teams) {
    let csv = "Team#,Captain,ViceCaptain,Players\n";
    teams.forEach((team, idx) => {
      const playerNames = team.players.map(p => p.name).join("|");
      csv += `${idx + 1},${team.captain.name},${team.viceCaptain.name},${playerNames}\n`;
    });
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "dream11_teams.csv";
    a.click();
    URL.revokeObjectURL(url);
  }
  
  // Run
  const dream11Teams = generateDream11Teams();
  exportToCSV(dream11Teams);
  