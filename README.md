<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Accenture School Portal</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
    .login, .dashboard { text-align: center; }
    .dashboard { display: none; padding: 20px; }
    .tab-buttons { margin-bottom: 20px; }
    .tab-button { padding: 10px 20px; cursor: pointer; }
    .tab-button:hover { background-color: #ccc; }
    .tab-content { display: none; padding: 20px; border-top: 1px solid #ccc; }
    .active-tab { display: block; }
    .logout { margin-top: 20px; }
  </style>
</head>
<body>

  <!-- Login Section -->
  <div class="login">
    <h1>Login</h1>
    <input type="text" id="username" placeholder="Enter Username"><br><br>
    <input type="password" id="password" placeholder="Enter Password"><br><br>
    <button onclick="login()">Login</button>
    <p id="error" style="color: red;"></p>
  </div>

  <!-- Dashboard Section -->
  <div class="dashboard">
    <h1>Welcome to Your Portal, <span id="user-name"></span></h1>
    
    <!-- Tab Navigation -->
    <div class="tab-buttons">
      <button class="tab-button" onclick="showTab('id-view')">ID View</button>
      <button class="tab-button" onclick="showTab('assessment')">Assessment of Fees</button>
      <button class="tab-button" onclick="showTab('elibrary')">e-Library</button>
      <button class="tab-button" onclick="showTab('scholarship')">Scholarship</button>
      <button class="tab-button" onclick="showTab('grades')">Grades</button>
    </div>
    
    <!-- Tab Content -->
    <div class="tab-content" id="id-view">
      <h2>Your ID</h2>
      <p>ID Number: 12345</p>
      <img src="path-to-id-image.jpg" alt="ID Image">
    </div>
    
    <div class="tab-content" id="assessment">
      <h2>Assessment of Fees</h2>
      <p>Total Fee: $1000</p>
      <p>Amount Paid: $500</p>
      <p>Amount Due: $500</p>
    </div>
    
    <div class="tab-content" id="elibrary">
      <h2>e-Library</h2>
      <p>Access books, journals, and articles here.</p>
    </div>
    
    <div class="tab-content" id="scholarship">
      <h2>Scholarship Information</h2>
      <p>Scholarship Status: Active</p>
    </div>
    
    <div class="tab-content" id="grades">
      <h2>Your Grades</h2>
      <ul>
        <li>Math: A</li>
        <li>English: B+</li>
        <li>Science: A-</li>
      </ul>
    </div>

    <button class="logout" onclick="logout()">Logout</button>
  </div>

  <script>
    function login() {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      // Mock validation
      if (username === 'student' && password === '1234') {
        document.querySelector('.login').style.display = 'none';
        document.querySelector('.dashboard').style.display = 'block';
        document.getElementById('user-name').innerText = username;
      } else {
        document.getElementById('error').innerText = 'Invalid login credentials!';
      }
    }

    function logout() {
      document.querySelector('.dashboard').style.display = 'none';
      document.querySelector('.login').style.display = 'block';
      document.getElementById('error').innerText = '';
    }

    function showTab(tabId) {
      // Hide all tab content
      const tabs = document.querySelectorAll('.tab-content');
      tabs.forEach(tab => tab.classList.remove('active-tab'));
      
      // Show the selected tab
      document.getElementById(tabId).classList.add('active-tab');
    }
  </script>

</body>
</html>

