function validateForm() { 
    let valid = true;const errorMessages = [
       "emailError", "passwordError" 
    ];
      errorMessages.forEach(id =>
      document.getElementById(id).textContent = "");
      let email = document.getElementById("email").value.trim(); 
      let password = document.getElementById("password").value; 

      let emailPattern =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; if (email === "") { document.getElementById("emailError").textContent = "Email is required.";
      valid = false;
      } else if (!emailPattern.test(email)) { document.getElementById("emailError").textContent = "Invalid email format.";
      valid = false;
      }
      if (password === "") { document.getElementById("passwordError").textContent ="Password is required."; 
      valid = false;
      } else if (password.length < 6) { document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters."; valid = false;
      }
     return valid;
  }