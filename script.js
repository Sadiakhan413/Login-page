document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Example validation: Check if fields are not empty
    if (username.trim() === '' || password.trim() === '') {
        document.getElementById('error').textContent = 'Please enter both username and password.';
    } else {
        // Clear previous errors
        document.getElementById('error').textContent = '';
        
        // You can add additional validation or submit the form here
        this.submit();
    }
});