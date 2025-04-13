let players = [];
let weatherData = {};

// Handle Screenshot Upload
document.getElementById('screenshotInput').addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      const img = new Image();
      img.onload = function() {
        processScreenshot(img); // Process the image and extract player names
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Process the Screenshot using OCR (Tesseract.js)
function processScreenshot(image) {
  Tesseract.recognize(
    image, 
    'eng', 
    {
      logger: (m) => console.log(m), // Log progress
    }
  ).then(({ data: { text } }) => {
    console.log('OCR Result: ', text);
    
    // Assuming the OCR gives you names like "Player 1, Player 2, ..."
    const playerNames = text.split(',').map(name => name.trim()).filter(name => name.length > 0);
    
    // Create input fields for player names
    const playerInputsDiv = document.getElementById('playerInputs');
    playerInputsDiv.innerHTML = ''; // Clear previous inputs
    playerNames.forEach((name, index) => {
      const playerNameInput = document.createElement('input');
      playerNameInput.type = 'text';
      playerNameInput.id = `playerName${index + 1}`;
      playerNameInput.value = name;
      playerNameInput.placeholder = `Player ${index + 1}`;
      playerNameInput.classList.add('px-4', 'py-2', 'border', 'rounded', 'w-full');
      
      const playerTeamInput = document.createElement('input');
      playerTeamInput.type = 'text';
      playerTeamInput.id = `playerTeam${index + 1}`;
      playerTeamInput.placeholder = 'Team (e.g., Team A)';
      playerTeamInput.classList.add('px-4', 'py-2', 'border', 'rounded', 'w-full');
      
      const playerRoleInput = document.createElement('select');
      playerRoleInput.id = `playerRole${index + 1}`;
      playerRoleInput.classList.add('px-4', 'py-2', 'border', 'rounded', 'w-full');
      ['BAT', 'BOWL', 'AR', 'WK'].forEach(role => {
        const option = document.createElement('option');
        option.value = role;
        option.textContent = role;
        playerRoleInput.appendChild(option);
      });
      
      const playerPointsInput = document.createElement('input');
      playerPointsInput.type = 'number';
      playerPointsInput.id = `playerPoints${index + 1}`;
      playerPointsInput.placeholder = 'Predicted Points';
      playerPointsInput.classList.add('px-4', 'py-2', 'border', 'rounded', 'w-full');

      const inputDiv = document.createElement('div');
      inputDiv.classList.add('space-y-4');
      inputDiv.appendChild(playerNameInput);
      inputDiv.appendChild(playerTeamInput);
      inputDiv.appendChild(playerRoleInput);
      inputDiv.appendChild(playerPointsInput);

      playerInputsDiv.appendChild(inputDiv);
    });

    // Show the "Generate Teams" button
    document.getElementById('generateTeamsBtn').style.display = 'block';
  }).catch(error => {
    console.error('OCR Error:', error);
  });
}

// Generate all valid 11-player teams
function generateTeams() {
  const validTeams = [];
  
  // Gather player data from input fields
  players = [];
  for (let i = 0; i < 22; i++) {
    const playerName = document.getElementById(`playerName${i + 1}`).value;
    const playerTeam = document.getElementById(`playerTeam${i + 1}`).value;
    const playerRole = document.getElementById(`playerRole${i + 1}`).value;
    const playerPoints = parseInt(document.getElementById(`playerPoints${i + 1}`).value) || 0;
    
    players.push({
      name: playerName,
      team: playerTeam,
      role: playerRole,
      predictedPoints: playerPoints
    });
  }

  // Generate all valid combinations (simplified for example)
  for (let i = 0; i < players.length; i++) {
    for (let j = i + 1; j < players.length; j++) {
      const team = [players[i], players[j]];  // Simplified logic (expand as needed)
      const totalPoints = team.reduce((sum, player) => sum + player.predictedPoints, 0);
      
      validTeams.push({ team, totalPoints });
    }
  }

  validTeams.sort((a, b) => b.totalPoints - a.totalPoints);

  const top20Teams = validTeams.slice(0, 20);
  
  const teamsWithCVC = top20Teams.map(teamData => {
    const team = teamData.team;
    const cvcCombinations = [];
    
    for (let i = 0; i < team.length; i++) {
      for (let j = 0; j < team.length; j++) {
        if (i !== j) {
          const captain = team[i];
          const viceCaptain = team[j];
          cvcCombinations.push({
            team: [...team],
            captain: captain.name,
            viceCaptain: viceCaptain.name,
            totalPoints: teamData.totalPoints
          });
        }
      }
    }

    return cvcCombinations;
  });

  displayTeams(teamsWithCVC.flat()); // Flatten the array to get all C/VC combinations
}

// Display teams on the webpage
function displayTeams(teams) {
  const teamsOutput = document.getElementById('teamsOutput');
  teamsOutput.innerHTML = ''; // Clear previous results
  
  teams.forEach((team, index) => {
    const teamDiv = document.createElement('div');
    teamDiv.classList.add('bg-white', 'p-6', 'rounded-lg', 'shadow-md', 'mb-6');
    
    const teamHTML = `
      <h3 class="text-xl font-semibold">Team ${index + 1}</h3>
      <p><strong>Captain:</strong> ${team.captain}</p>
      <p><strong>Vice Captain:</strong> ${team.viceCaptain}</p>
      <p><strong>Total Points:</strong> ${team.totalPoints}</p>
      <p><strong>Players:</strong> ${team.team.map(player => player.name).join(', ')}</p>
    `;
    
    teamDiv.innerHTML = teamHTML;
    teamsOutput.appendChild(teamDiv);
  });

  document.getElementById('downloadCSVBtn').style.display = 'block'; // Show CSV button
}

// Download CSV of players and teams
document.getElementById('downloadCSVBtn').addEventListener('click', function () {
  const data = players.map(player => ({
    name: player.name,
    team: player.team,
    role: player.role,
    predictedPoints: player.predictedPoints
  }));

  const csv = Papa.unparse(data);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'dream11_teams.csv';
  link.click();
});

// Event listener for generating teams after screenshot data is processed
document.getElementById('generateTeamsBtn').addEventListener('click', generateTeams);
