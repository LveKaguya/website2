document.addEventListener('DOMContentLoaded', function () {
    // DOM Manipulation and Styling
    
    // Toggle Day and Night theme
    const toggleThemeBtn = document.getElementById('toggleTheme');
    toggleThemeBtn.addEventListener('click', () => {
        document.body.classList.toggle('night-mode');
        if (document.body.classList.contains('night-mode')) {
            toggleThemeBtn.textContent = 'Switch to Day Mode';
        } else {
            toggleThemeBtn.textContent = 'Switch to Night Mode';
        }
    });

    // Star Rating System
    const stars = document.querySelectorAll('.stars .star');
    const ratingMessage = document.getElementById('ratingMessage');
    stars.forEach(star => {
        star.addEventListener('click', () => {
            stars.forEach(s => s.classList.remove('active'));
            let rating = star.getAttribute('data-value');
            stars.forEach(s => {
                if (s.getAttribute('data-value') <= rating) {
                    s.classList.add('active');
                }
            });
            ratingMessage.textContent = `You rated this course ${rating} stars!`;
        });
    });

   
// FAQ Toggle
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    const question = faq.querySelector('.question');
    const answer = faq.querySelector('.answer');
    
    question.addEventListener('click', () => {
        // Toggle the answer visibility
        if (answer.style.display === 'block') {
            answer.style.display = 'none'; // Hide the answer
        } else {
            answer.style.display = 'block'; // Show the answer
        }

        // Toggle arrow rotation
        const svg = question.querySelector('svg');
        if (svg) {
            svg.style.transform = svg.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
        }
    });
});


    // "Read More" Button
    const readMoreBtn = document.getElementById('readMoreBtn');
    const moreText = document.getElementById('moreText');
    readMoreBtn.addEventListener('click', () => {
        if (moreText.style.display === 'none') {
            moreText.style.display = 'block';
            readMoreBtn.textContent = 'Read Less';
        } else {
            moreText.style.display = 'none';
            readMoreBtn.textContent = 'Read More';
        }
    });

    // Display current time
    const displayTimeBtn = document.createElement('button');
    displayTimeBtn.textContent = 'Show Current Time';
    document.body.appendChild(displayTimeBtn);

    const timeDisplay = document.createElement('p');
    document.body.appendChild(timeDisplay);

    displayTimeBtn.addEventListener('click', () => {
        timeDisplay.textContent = new Date().toLocaleTimeString();
    });
});

//Switch 

document.getElementById('greet-btn').addEventListener('click', displayGreeting);

function displayGreeting() {
    const currentHour = new Date().getHours();
    let greeting;

    switch (true) {
        case (currentHour >= 5 && currentHour < 12):
            greeting = "Good morning!";
            break;
        case (currentHour >= 12 && currentHour < 18):
            greeting = "Good afternoon!";
            break;
        case (currentHour >= 18 && currentHour < 22):
            greeting = "Good evening!";
            break;
        default:
            greeting = "Good night!";
    }

    document.getElementById('greeting-message').textContent = greeting;
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Create an object to hold the data
    const formData = {
        name: name,
        email: email,
    };

    // Call the function to submit the form data
    submitForm(formData, handleResponse);
});

// Function to submit form data
function submitForm(data, callback) {
    fetch('https://example.com/api/contact', { // Replace with your actual API endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        callback(null, data); // Call the callback with success
    })
    .catch(error => {
        callback(error); // Call the callback with error
    });
}

// Callback function to handle the response
function handleResponse(error, data) {
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    
    if (error) {
        errorMessage.textContent = 'There was an error submitting your form. Please try again.';
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    } else {
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
        document.getElementById('contactForm').reset(); // Reset the form fields
    }
}

   // Display the logged-in username
   document.addEventListener("DOMContentLoaded", function() {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        document.getElementById("usernameDisplay").textContent = loggedInUser;
    }
    // Removed redirection if not logged in
});

function logout() {
    localStorage.removeItem("loggedInUser");
    updateNavbar();  // Update the navbar display to show "Login" link
    alert('You have logged out successfully.');
}


// Get the toggle button
const toggleThemeBtn = document.getElementById('mode-toggle');


// Check local storage for the user's preference
const currentMode = localStorage.getItem('mode');

// Apply the stored mode on page load
if (currentMode === 'dark') {
    document.body.classList.add('dark-mode');
    document.querySelector('header').classList.add('dark-mode');
    document.querySelector('footer').classList.add('dark-mode');
}

// Function to set the theme based on the stored value in localStorage
function setTheme() {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('night-mode');
        document.querySelector('header').classList.add('night-mode');
        document.querySelector('footer').classList.add('night-mode');
        document.getElementById('toggleTheme').textContent = 'Switch to Day Mode';
    } else {
        document.body.classList.remove('night-mode');
        document.querySelector('header').classList.remove('night-mode');
        document.querySelector('footer').classList.remove('night-mode');
        document.getElementById('toggleTheme').textContent = 'Switch to Night Mode';
    }
}

toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('night-mode');
    if (document.body.classList.contains('night-mode')) {
        toggleThemeBtn.textContent = 'Switch to Day Mode';
        localStorage.setItem('theme', 'dark'); // Store preference
    } else {
        toggleThemeBtn.textContent = 'Switch to Night Mode';
        localStorage.setItem('theme', 'light'); // Store preference
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Toggle Day and Night theme
    const toggleThemeBtn = document.getElementById('mode-toggle');
    setTheme(); // Apply stored theme on page load

    toggleThemeBtn.addEventListener('click', () => {
        document.body.classList.toggle('night-mode');
        if (document.body.classList.contains('night-mode')) {
            toggleThemeBtn.textContent = 'Switch to Day Mode';
            localStorage.setItem('theme', 'dark'); // Store preference
        } else {
            toggleThemeBtn.textContent = 'Switch to Night Mode';
            localStorage.setItem('theme', 'light'); // Store preference
        }
    });


 // FAQ Toggle
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    const question = faq.querySelector('.question');
    question.addEventListener('click', () => {
        const answer = faq.querySelector('.answer');

        // Toggle the answer visibility
        if (answer.style.display === 'block') {
            answer.style.display = 'none'; // Hide the answer
        } else {
            answer.style.display = 'block'; // Show the answer
        }

        // Toggle arrow rotation
        const svg = question.querySelector('svg');
        if (svg) {
            svg.style.transform = svg.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
        }
    });
});

});

// Function to set the theme based on the stored value in localStorage
function setTheme() {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('night-mode');
        document.getElementById('mode-toggle').textContent = 'Switch to Day Mode';
    } else {
        document.body.classList.remove('night-mode');
        document.getElementById('mode-toggle').textContent = 'Switch to Night Mode';
    }
}

function toggleTheme() {
    const isDarkMode = document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Apply the saved theme on page load
(function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
})();

    // Function to update navbar based on login status
    function updateNavbar() {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        const navbar = document.getElementById('navbar');
    
        // Check if Sign In link already exists and remove it if the user is logged in
        const signInLink = document.querySelector('#navbar #signInLink');
        if (isLoggedIn && signInLink) {
            signInLink.remove();
        }
    
        // If user is not logged in, add the Sign In link
        if (!isLoggedIn) {
            const listItem = document.createElement('li');
            listItem.id = 'signInLink'; // Give it an ID to remove it later if necessary
            const signInAnchor = document.createElement('a');
            signInAnchor.href = 'login.html';
            signInAnchor.textContent = 'Sign In';
            listItem.appendChild(signInAnchor);
            navbar.appendChild(listItem);
        }
    }

    // Run the function when the page loads
    document.addEventListener('DOMContentLoaded', updateNavbar);
    
    // show log out button when logged in 
    function updateNavbar() {
        const user = JSON.parse(localStorage.getItem('user'));
        const loginLink = document.getElementById('loginLink');
        const logoutSection = document.getElementById('logoutSection');
    
        if (user) {
            loginLink.style.display = 'none';  // Hide the login link
            logoutSection.style.display = 'block';  // Show the logout button
        } else {
            loginLink.style.display = 'block';  // Show the login link
            logoutSection.style.display = 'none';  // Hide the logout button
        }
    }
    
    // Call updateNavbar on page load to set the correct display
    document.addEventListener('DOMContentLoaded', updateNavbar);
    

// Logout function to clear the user and update the navbar
function logout() {
    localStorage.removeItem('user');  // Remove user data from localStorage
    alert('You have logged out successfully.');
    updateNavbar();  // Update the navbar display to show the login link again
}

// Call updateNavbar on page load to set the correct display
document.addEventListener('DOMContentLoaded', updateNavbar);
