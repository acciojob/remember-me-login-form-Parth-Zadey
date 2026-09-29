const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const rememberCheckbox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");

// Check if credentials exist in localStorage on page load
function checkSavedCredentials() {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    existingBtn.style.display = "block";
  } else {
    existingBtn.style.display = "none";
  }
}

// Handle form submission
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  alert(`Logged in as ${username}`);

  if (rememberCheckbox.checked) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  // Update existing user button visibility
  checkSavedCredentials();
});

// Handle login as existing user
existingBtn.addEventListener("click", () => {
  const savedUsername = localStorage.getItem("username");
  alert(`Logged in as ${savedUsername}`);
});

// Run initial check on page load
checkSavedCredentials();