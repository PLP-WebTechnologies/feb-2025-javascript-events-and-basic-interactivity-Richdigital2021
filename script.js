document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signupForm");
    const passwordInput = document.getElementById("password");
    const togglePasswordBtn = document.getElementById("togglePassword");
    const bioInput = document.getElementById("bio");
    const charCount = document.getElementById("charCount");
    const message = document.getElementById("formMessage");
  
    // Toggle password visibility
    togglePasswordBtn.addEventListener("click", () => {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePasswordBtn.textContent = "Hide";
      } else {
        passwordInput.type = "password";
        togglePasswordBtn.textContent = "Show";
      }
    });
  
    // Character counter for textarea
    bioInput.addEventListener("input", () => {
      charCount.textContent = bioInput.value.length;
    });
  
    // Form validation
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = passwordInput.value.trim();
  
      if (!username || !email || !password) {
        message.style.color = "red";
        message.textContent = "Please fill in all fields.";
        return;
      }
  
      const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      if (!emailPattern.test(email)) {
        message.style.color = "red";
        message.textContent = "Enter a valid email address.";
        return;
      }
  
      // If all validations pass
      message.style.color = "green";
      message.textContent = "Form submitted successfully!";
      form.reset();
      charCount.textContent = "0";
      togglePasswordBtn.textContent = "Show";
      passwordInput.type = "password";
    });
  });  