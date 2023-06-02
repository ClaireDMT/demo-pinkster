// check if the user entered a password long enough (> 6 characters)
// if not, return an error message

// Listen for submit event on the form
// Get the value of the password input field
// Check if the password is long enough
// If not, display an error message

const errorElement = document.querySelector(".error-message");
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const passwordLength = document.querySelector(".password-input").value.length;
  if (passwordLength < 6) {
    errorElement.innerText = "Password should be at least 6 characters long";
  }
})
