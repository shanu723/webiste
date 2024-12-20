document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    
    
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    
    
    let isValid = true;

    if (nameField.value.trim() === '') {
      nameError.style.display = 'block';
      isValid = false;
    } else {
      nameError.style.display = 'none';
    }

    
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailField.value.trim())) {
      emailError.style.display = 'block';
      isValid = false;
    } else {
      emailError.style.display = 'none';
    }

    
    if (isValid) {
      alert('Form submitted successfully!');
    
    }
  });