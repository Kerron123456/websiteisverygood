const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMsg = document.getElementById('error-msg');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Here you would typically make an AJAX call to your server to check the credentials
  // For this example, we'll just check them locally
  if (username === 'myusername' && password === 'mypassword') {
    // If the credentials are valid, redirect to the home page or any other page
    window.location.href = 'home.html';
  } else {
    // If the credentials are invalid, display an error message
    errorMsg.textContent = 'Invalid username or password. Please try again.';
  }
});
