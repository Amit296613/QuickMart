function validateForm1() {
    const emailOrPhoneInput = document.getElementById('emailOrPhone');
    const passwordInput = document.getElementById('password');
    const emailOrPhoneError = document.getElementById('emailOrPhoneError');
    const passwordError = document.getElementById('passwordError');
    // const LoginForm = document.getElementById('login-form');

    let isValid = true;

    // Reset errors
    emailOrPhoneError.innerHTML = '';
    passwordError.textContent = '';

    // Validate email or phone
    const emailOrPhoneValue = emailOrPhoneInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!emailOrPhoneValue) {
        emailOrPhoneError.textContent = 'Enter a valid email address or mobile phone number.';
        emailOrPhoneError.style.fontSize = '13px';
        emailOrPhoneError.style.color = '#ba0933';
        emailOrPhoneError.style.marginBottom = '5px';
        isValid = false;

    } else if (!emailRegex.test(emailOrPhoneValue) && !phoneRegex.test(emailOrPhoneValue)) {
        emailOrPhoneError.innerHTML = `Invalid email address or mobile phone number. Please correct and try again.`;
        emailOrPhoneError.style.fontSize = '13px';
        emailOrPhoneError.style.color = '#ba0933';
        emailOrPhoneError.style.marginBottom = '5px';
        
        isValid = false;
    } 

    // Validate password
    const passwordValue = passwordInput.value.trim();
    if (!passwordValue) {
        passwordError.textContent = 'Enter your password.';
        passwordError.style.fontSize = '13px';
        passwordError.style.color = '#ba0933';
        passwordError.style.marginBottom = '10px';
        isValid = false;

    } else if (passwordValue.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        passwordError.style.fontSize = '13px';
        passwordError.style.color = '#ba0933';
        passwordError.style.marginBottom = '10px';
        isValid = false;
    }

    if (isValid) {
        alert('Sign-in successful!');
    }

    
}
// -------------------SignUp----------------------
function validateForm2() {
    const emailOrPhone = document.getElementById('email-Phone');
    const password = document.getElementById('Password');
    const emailOrPhoneErr = document.getElementById('email-PhoneError');
    const passwordErr = document.getElementById('password-Error');
    const firstNameInput = document.getElementById('Name');
    const nameError = document.getElementById('NameError');
    const rePasswordInput = document.getElementById('re-password');
    const rePasswordError = document.getElementById('re-passwordError');

    let isValid = true;

    // Reset errors
    emailOrPhoneErr.textContent = '';
    passwordErr.textContent = '';
    nameError.textContent = '';
    rePasswordError.textContent = '';

    // Validate email or phone
    const emailOrPhoneValue = emailOrPhone.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!emailOrPhoneValue) {
        emailOrPhoneErr.textContent = 'Enter a valid email address or mobile phone number.';
        emailOrPhoneErr.style.marginBottom = '5px';
        emailOrPhoneErr.style.fontSize = '13px';
        emailOrPhoneErr.style.color = '#ba0933';
        isValid = false;
    } else if (!emailRegex.test(emailOrPhoneValue) && !phoneRegex.test(emailOrPhoneValue)) {
        emailOrPhoneErr.textContent = 'Invalid email address or mobile phone number. Please correct and try again.';
        emailOrPhoneErr.style.marginBottom = '5px';
        emailOrPhoneErr.style.fontSize = '13px';
        emailOrPhoneErr.style.color = '#ba0933';
        isValid = false;
    }

    // Validate first name
    const firstNameValue = firstNameInput.value.trim();
    if (!firstNameValue) {
        nameError.textContent = 'Enter your first and last name.';
        nameError.style.marginBottom = '5px';
        nameError.style.fontSize = '13px';
        nameError.style.color = '#ba0933';
        isValid = false;
    }
    else if (firstNameValue.length <= 1) {
        nameError.textContent = 'Please enter a valid name.';
        nameError.style.fontSize = '13px';
        nameError.style.color = '#ba0933';
        nameError.style.marginBottom = '5px';
        isValid = false;
    }

    // Validate password
    const passwordValue = password.value.trim();
    if (!passwordValue) {
        passwordErr.textContent = 'Enter your password.';
        passwordErr.style.marginBottom = '5px';
        passwordErr.style.fontSize = '13px';
        passwordErr.style.color = '#ba0933';
        isValid = false;
    } else if (passwordValue.length < 6) {
        passwordErr.textContent = 'Password must be at least 6 characters long.';
        passwordErr.style.marginBottom = '5px';
        passwordErr.style.fontSize = '13px';
        passwordErr.style.color = '#ba0933';
        isValid = false;
    }

    // Validate re-password
    const rePasswordValue = rePasswordInput.value.trim();
    if (!rePasswordValue) {
        rePasswordError.textContent = 'Confirm your password.';
        rePasswordError.style.marginBottom = '10px';
        rePasswordError.style.fontSize = '13px';
        rePasswordError.style.color = '#ba0933';
        isValid = false;
    } else if (rePasswordValue !== passwordValue) {
        rePasswordError.textContent = "passwords aren't the same.";
        rePasswordError.style.marginBottom = '10px';
        rePasswordError.style.fontSize = '13px';
        rePasswordError.style.color = '#ba0933';
        
        isValid = false;
    }

    if (isValid) {
        alert('Sign-up successful!');
    }
}

function toggleSignUp() {
    const loginForm = document.querySelector('#login');
    const signUpForm = document.querySelector('#SignUp-form');

    loginForm.style.display = 'none';
    signUpForm.style.display = 'flex'; // Ensure the sign-up form is visible
}
function toggleSignIn() {
    const loginForm = document.querySelector('#login');
    const signUpForm = document.querySelector('#SignUp-form');

    signUpForm.style.display = 'none';
    loginForm.style.display = 'flex'; // Ensure the login form is visible
}



// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
    // Select all carousels
    const carousels = document.querySelectorAll('.card-outer-container');
    const carousels1 = document.querySelectorAll('.card-2k');

    carousels.forEach(container => {
        const scrollContainer = container.querySelector('.gallery-card');
        const backBtn = container.querySelector('#backBtn');
        const nextBtn = container.querySelector('#nextBtn');

        // Smooth horizontal scrolling with mouse wheel
        scrollContainer.addEventListener("wheel", (e) => {
            // e.preventDefault();
            scrollContainer.scrollLeft += e.deltaY > 0 ? 100 : -100; // Scrolls by 100px per scroll
        });

        // Next button scroll
        nextBtn.addEventListener("click", () => {
            scrollContainer.scrollLeft += scrollContainer.offsetWidth;
        });

        // Back button scroll
        backBtn.addEventListener("click", () => {
            scrollContainer.scrollLeft -= scrollContainer.offsetWidth;
        });
    });

    carousels1.forEach(container => {
        const scrollContainer = container.querySelector('.Cards2-gallerys');
        const backBtn = container.querySelector('#backBtn');
        const nextBtn = container.querySelector('#nextBtn');

        // Smooth horizontal scrolling with mouse wheel
        scrollContainer.addEventListener("wheel", (e) => {
            // e.preventDefault();
            scrollContainer.scrollLeft += e.deltaY > 0 ? 100 : -100; // Scrolls by 100px per scroll
        });

        // Next button scroll
        nextBtn.addEventListener("click", () => {
            scrollContainer.scrollLeft += scrollContainer.offsetWidth;
        });

        // Back button scroll
        backBtn.addEventListener("click", () => {
            scrollContainer.scrollLeft -= scrollContainer.offsetWidth;
        });
    });
});



window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('header');
    // const navLinks = document.querySelectorAll('.nav-links a');
  
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 60) {
        currentSection = section.getAttribute('id');
      }
    });
});

// -----------menubar-----------

const menuBars = document.querySelectorAll(".menu-bar");
const exitMenu = document.querySelectorAll(".exit-menu");

menuBars.forEach(menuBar => {
    menuBar.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const menuBar1 = document.querySelector(".menu-bar-1");
        menuBar1.style.display = "block";
        document.body.classList.toggle('no-scroll');
    });
});
exitMenu.forEach(exitMenu => {
    exitMenu.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const exitMenu = document.querySelector(".menu-bar-1");
        exitMenu.style.display = "none";
        document.body.classList.toggle('no-scroll');
    });
});

//-------main-menu----------------
const mainMenu = document.querySelector(".menu-bar-box");
const backToMenu = document.querySelectorAll(".back-to-menu"); // NodeList
const me = document.querySelectorAll(".main-menu"); // NodeList
const col1 = document.getElementById("col1");
const col2 = document.getElementById("col2");
const col3 = document.getElementById("col3");
const col4 = document.getElementById("col4");
const col5 = document.getElementById("col5");
const col6 = document.getElementById("col6");
const col7 = document.getElementById("col7");
const col8 = document.getElementById("col8");
const col9 = document.getElementById("col9");
const col10 = document.getElementById("col10");
const col11 = document.getElementById("col11");
const menu1 = document.getElementById("main-menu1");
const menu2 = document.getElementById("main-menu2");
const menu3 = document.getElementById("main-menu3");
const menu4 = document.getElementById("main-menu4");
const menu5 = document.getElementById("main-menu5");
const menu6 = document.getElementById("main-menu6");
const menu7 = document.getElementById("main-menu7");
const menu8 = document.getElementById("main-menu8");
const menu9 = document.getElementById("main-menu9");
const menu10 = document.getElementById("main-menu10");
const menu11 = document.getElementById("main-menu11");


// Loop through all "back-to-menu" elements and add event listener
backToMenu.forEach(button => {
    button.addEventListener("click", () => {
        mainMenu.style.display = "block";
        me.forEach(menu => menu.style.display = "none"); // Hide all menus
    });
});

col1.addEventListener("click", () => {
    mainMenu.style.display = "none";
    menu1.style.display = "block";
});

col2.addEventListener("click", () => {
    mainMenu.style.display = "none";
    menu2.style.display = "block";
});
col3.addEventListener("click", () => {
    mainMenu.style.display = "none";
    menu3.style.display = "block";
});
col4.addEventListener("click", () => {
    mainMenu.style.display = "none";
    menu4.style.display = "block";
});
col5.addEventListener("click", () => {
    mainMenu.style.display = "none";
    menu5.style.display = "block";
});
col6.addEventListener("click", () => {
    mainMenu.style.display = "none";
    menu6.style.display = "block";
});
col7.addEventListener("click", () => {
    mainMenu.style.display = "none";
    menu7.style.display = "block";
});
col8.addEventListener("click", () => {
    mainMenu.style.display = "none";
    menu8.style.display = "block";
});
col9.addEventListener("click", () => {
    mainMenu.style.display = "none";
    menu9.style.display = "block";
});
col10.addEventListener("click", () => {
    mainMenu.style.display = "none";
    menu10.style.display = "block";
});
col11.addEventListener("click", () => {
    mainMenu.style.display = "none";
    menu11.style.display = "block";
});


function openNewPage(page) {
    window.open(page, '_self');
}