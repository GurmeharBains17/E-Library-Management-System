<script>
    const users = [
      { "username": "abc", "password": "123" },
      { "username": "user1", "password": "password1" },
      { "username": "admin", "password": "admin" }
    ];

    document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault();

      const username = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      
      const user = users.find(user => user.username === username && user.password === password);
      
      if (user) {
        alert("Login successful!");
        window.location.href = "practice.html"; // Redirect to the homepage
      } else {
        alert("Invalid credentials, please try again.");
      }
    });
  </script>
  <script>
    document.getElementById('loginForm').addEventListener('submit', async (event) => {
      event.preventDefault(); // Prevent page refresh
  
      const username = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
  
      const data = await response.json();
      if (data.success) {
        window.location.href = '/dashboard.html'; // Redirect to dashboard after login
      } else {
        alert('Invalid credentials');
      }
    });
    
  </script>
  