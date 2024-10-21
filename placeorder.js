function validateForm() { 
    let valid = true;const errorMessages = [
      "nameError", "emailError",
      "phoneError", "addressError","upiError","amountError"
    ];
      errorMessages.forEach(id =>
      document.getElementById(id).textContent = "");
      let name = document.getElementById("name").value.trim(); 
      let email = document.getElementById("email").value.trim(); 
      let phone = document.getElementById("phone").value.trim(); 
      let address = document.getElementById("address").value.trim();
      let upi = document.getElementById("upi").value.trim();
      let amount = document.getElementById("amount").value.trim();  

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
      if (phone === "") {
      document.getElementById("phoneError").textContent = "Phone number is required.";
      valid = false;
      } else if (!/^\d{10}$/.test(phone)) { document.getElementById("phoneError").textContent = "Phone number must be 10 digits.";
      valid = false;
      }
      if (address === "") {
      document.getElementById("addressError").textContent ="Address is required.";
      valid = false;
      }
      let upiPattern =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; if (upi === "") { document.getElementById("upiError").textContent = "Upi Id is required.";
      valid = false;
      } else if (!upiPattern.test(email)) { document.getElementById("upiError").textContent = "Invalid Upi Id format.";
      valid = false;
      }
      let amountpattern=/[0-1]/
      if (amount === "") {
      document.getElementById("amountError").textContent = "Amount is required.";
      valid = false;
      } else if (!/^\d{10}$/.test(amount)) { document.getElementById("amountError").textContent = "Amount must be same as product amount.";
      valid = false;
      }
     return valid;
  }