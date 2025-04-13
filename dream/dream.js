// Store player data after OCR
let players = [];
let weatherData = {};

// Generate all valid 11-player teams
function generateTeams() {
  const validTeams = [];
  
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

// Display the teams in UI
function displayTeams(teams) {
  const teamsOutput = document.getElementById('teamsOutput');
  teamsOutput.innerHTML = ''; // Clear previous results
  
  teams.forEach((team, index) => {
    const teamDiv = document.createElement('div');
    teamDiv.classList.add('card');
    teamDiv.classList.add('team');
    
    const teamHTML = `
      <h3>Team ${index + 1}</h3>
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

// Download as CSV
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

// OCR for Player Names
function processScreenshot(image) {
  Tesseract.recognize(
    image, 
    'eng', 
    {
      logger: (m) => console.log(m),
    }
  ).then(({ data: { text } }) => {
    console.log('OCR Result: ', text);
    
    // Assuming the OCR gives you names like "Player 1, Player 2, ..."
    const playerNames = text.split(',').map(name => name.trim());
    
    // Fill the player names into input fields
    for (let i = 0; i < playerNames.length; i++) {
      const playerInput = document.getElementById(`playerName${i + 1}`);
      if (playerInput) {
        playerInput.value = playerNames[i];
      }
    }
  }).catch(error => {
    console.error('OCR Error:', error);
  });
}

// Handle Screenshot Upload
document.getElementById('screenshotInput').addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      const img = new Image();
      img.onload = function() {
        processScreenshot(img);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Weather API Integration
async function fetchWeatherAndPitchData(venue) {
  try {
    const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${venue}`);
    weatherData = response.data;
    console.log(weatherData);
  } catch (error) {
    console.error('Weather API Error:', error);
  }
}

// Example of how to call the weather API when a venue is entered
fetchWeatherAndPitchData("Eden Gardens");
