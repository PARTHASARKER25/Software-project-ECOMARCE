// For toggling between Login and Signup forms
const loginSignupTabs = document.querySelectorAll('.login-signup-tab');
const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup-form');

loginSignupTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Toggle active classes
        loginSignupTabs.forEach(tab => tab.classList.remove('active'));
        tab.classList.add('active');
        
        if (tab.classList.contains('login-tab')) {
            loginForm.style.display = 'block';
            signupForm.style.display = 'none';
        } else {
            signupForm.style.display = 'block';
            loginForm.style.display = 'none';
        }
    });
});

// Add to Cart functionality
const addToCartButtons = document.querySelectorAll('.btn.add-to-cart');
const cartCount = document.querySelector('.cart-count');
let cartItems = 0;

// Listen for "Add to Cart" button clicks
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartItems++;
        cartCount.textContent = cartItems;
        alert('Item added to cart!');
    });
});

// Simple form validation for Contact Us and Login/Signup forms
const contactForm = document.querySelector('.contact form');
const loginFormElement = document.querySelector('.login-form form');
const signupFormElement = document.querySelector('.signup-form form');

// Form validation
function validateForm(form) {
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
    });
    return isValid;
}

// Contact form validation
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validateForm(contactForm)) {
        alert('Message sent successfully!');
        contactForm.reset();
    } else {
        alert('Please fill in all fields!');
    }
});

// Login form validation
loginFormElement.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validateForm(loginFormElement)) {
        alert('Login successful!');
        loginFormElement.reset();
    } else {
        alert('Please fill in all fields!');
    }
});

// Signup form validation
signupFormElement.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validateForm(signupFormElement)) {
        alert('Signup successful!');
        signupFormElement.reset();
    } else {
        alert('Please fill in all fields!');
    }
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('header .nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
        });
    });
});

// Scroll to top button functionality
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = '↑';
scrollToTopBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});
