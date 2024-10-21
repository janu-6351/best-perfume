function validateForm() { 
    let valid = true;const errorMessages = [
      "nameError", "emailError",
      "passwordError", "confirmPasswordError",
      "phoneError", "addressError", "genderError"
    ];
      errorMessages.forEach(id =>
      document.getElementById(id).textContent = "");
      let name = document.getElementById("name").value.trim(); 
      let email = document.getElementById("email").value.trim(); 
      let password = document.getElementById("password").value; 
      let confirmPassword = document.getElementById("confirmPassword").value;
      let phone = document.getElementById("phone").value.trim(); 
      let address = document.getElementById("address").value.trim(); 

      let namePattern = /^[A-Za-z\s]+$/;
      if (name === "") {
          document.getElementById("nameError").textContent = "Name is required.";
          valid = false;
      } 
      else if (!namePattern.test(name)) { 
      document.getElementById("nameError").textContent = "Name cannot contain numbers or special characters."; valid = false;
      }
      let emailPattern =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; if (email === "") { document.getElementById("emailError").textContent = "Email is required.";
      valid = false;
      } else if (!emailPattern.test(email)) { document.getElementById("emailError").textContent = "Invalid email format.";
      valid = false;
      }
      if (password === "") { document.getElementById("passwordError").textContent =
      "Password is required."; valid = false;
      } else if (password.length < 6) { document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters."; valid = false;
      }
      if (confirmPassword === "") { document.getElementById("confirmPasswordError").textContent =
      "Confirm password is required."; valid = false;
      } else if (confirmPassword !== password) { document.getElementById("confirmPasswordError").textContent =
      "Passwords do not match."; valid = false;
      }
      if (phone === "") {
      document.getElementById("phoneError").textContent = "Phone number is required.";
      valid = false;
      } else if (!/^\d{10}$/.test(phone)) { document.getElementById("phoneError").textContent = "Phone number must be 10 digits.";
      valid = false;
      }
      if (address === "") {
      document.getElementById("addressError").textContent ="Address is required.";
      valid = false;
      } let gender = document.querySelector('input[name="gender"]:checked');
      if (!gender) { document.getElementById("genderError").textContent = "Gender is required.";
      valid = false;
      }
     return valid;
  }