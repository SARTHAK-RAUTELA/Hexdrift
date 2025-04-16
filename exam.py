from pulp import LpMaximize, LpProblem, LpVariable, lpSum

# Player data from image (ID, performance points, assumed cost, position)
players = [
    {'id': 1, 'name': 'A Sharma', 'performance': 283, 'cost': 15, 'position': 'all-rounder'},
    {'id': 2, 'name': 'S Iyer', 'performance': 164, 'cost': 11, 'position': 'batsman'},
    {'id': 3, 'name': 'H Patel', 'performance': 153, 'cost': 9, 'position': 'bowler'},
    {'id': 4, 'name': 'T Head', 'performance': 146, 'cost': 13, 'position': 'batsman'},
    {'id': 5, 'name': 'P Singh', 'performance': 90, 'cost': 8, 'position': 'wicketkeeper'},
    {'id': 6, 'name': 'P Arya', 'performance': 82, 'cost': 10, 'position': 'batsman'},
    {'id': 7, 'name': 'M Stoinis', 'performance': 78, 'cost': 10, 'position': 'all-rounder'},
    {'id': 8, 'name': 'E Malinga', 'performance': 74, 'cost': 9, 'position': 'bowler'},
    {'id': 9, 'name': 'N Wadhera', 'performance': 49, 'cost': 7, 'position': 'batsman'},
    {'id': 10, 'name': 'A Singh', 'performance': 45, 'cost': 8, 'position': 'bowler'},
    {'id': 11, 'name': 'H Klaasen', 'performance': 41, 'cost': 8, 'position': 'wicketkeeper'},
    {'id': 12, 'name': 'Y Chahal', 'performance': 31, 'cost': 8, 'position': 'bowler'},
    {'id': 13, 'name': 'P Cummins', 'performance': 19, 'cost': 8, 'position': 'bowler'},
    {'id': 14, 'name': 'I Kishan', 'performance': 17, 'cost': 8, 'position': 'wicketkeeper'},
    {'id': 15, 'name': 'G Maxwell', 'performance': 12, 'cost': 9, 'position': 'all-rounder'},
    {'id': 16, 'name': 'K Nitish Reddy', 'performance': 12, 'cost': 7, 'position': 'batsman'},
    {'id': 17, 'name': 'Z Ansari', 'performance': 6, 'cost': 6, 'position': 'bowler'},
    {'id': 18, 'name': 'M Jansen', 'performance': 5, 'cost': 7, 'position': 'all-rounder'},
    {'id': 19, 'name': 'L Ferguson', 'performance': 5, 'cost': 7, 'position': 'bowler'},
    {'id': 20, 'name': 'A Manohar', 'performance': 4, 'cost': 6, 'position': 'batsman'},
    {'id': 21, 'name': 'A Verma', 'performance': 4, 'cost': 6, 'position': 'batsman'},
    {'id': 22, 'name': 'S Singh', 'performance': 3, 'cost': 6, 'position': 'batsman'},
]

# Define the problem
prob = LpProblem("Fantasy_Team_Selection", LpMaximize)

# Define decision variables (whether a player is selected)
x = {player['id']: LpVariable(f"x_{player['id']}", 0, 1, cat='Binary') for player in players}

# Objective Function: Maximize total performance
prob += lpSum([player['performance'] * x[player['id']] for player in players])

# Constraints
prob += lpSum([x[player['id']] for player in players if player['position'] == 'batsman']) == 3
prob += lpSum([x[player['id']] for player in players if player['position'] == 'bowler']) == 3
prob += lpSum([x[player['id']] for player in players if player['position'] == 'all-rounder']) == 2
prob += lpSum([x[player['id']] for player in players if player['position'] == 'wicketkeeper']) == 1

# Budget constraint
prob += lpSum([player['cost'] * x[player['id']] for player in players]) <= 100

# Solve the problem
prob.solve()

# Output the selected players
selected_players = [player['name'] for player in players if x[player['id']].varValue == 1]
print("Selected players:", selected_players)
