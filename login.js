const form = document.getElementById("loginForm");
const themeBtn = document.getElementById("themeBtn");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const emailInput = document.getElementById("email");
const rememberMe = document.getElementById("rememberMe");
const loader = document.getElementById("loader");
const errorMsg = document.getElementById("error-message");
const loginBtn = document.getElementById("loginBtn");

// Audio
const clickSound = document.getElementById("clickSound");
const successSound = document.getElementById("successSound");

let vantaEffect = null;
let isVanta = false;

// Initialize Remember Me
if (localStorage.getItem("user_email")) {
    emailInput.value = localStorage.getItem("user_email");
    rememberMe.checked = true;
}

// Eye Toggle
togglePassword.onclick = () => {
    const isPass = passwordInput.type === "password";
    passwordInput.type = isPass ? "text" : "password";
    togglePassword.innerHTML = isPass ? '<i class="fa-solid fa-eye-slash"></i>' : '<i class="fa-solid fa-eye"></i>';
};

// Vanta Toggle
themeBtn.onclick = () => {
    clickSound.play();
    isVanta = !isVanta;
    const canvas = document.getElementById("vanta-canvas");
    if (isVanta) {
        canvas.style.display = "block";
        vantaEffect = VANTA.WAVES({
            el: "#vanta-canvas",
            mouseControls: true,
            touchControls: true,
            color: 0x5b0f1f,
            waveHeight: 20,
            shininess: 40
        });
    } else {
        canvas.style.display = "none";
        if (vantaEffect) vantaEffect.destroy();
    }
};

// Login Handle
form.onsubmit = (e) => {
    e.preventDefault();
    clickSound.play();
    
    loader.style.display = "block";
    errorMsg.innerText = "";
    loginBtn.style.opacity = "0.7";

    setTimeout(() => {
        const user = USERS_DB.find(u => u.email === emailInput.value && u.password === passwordInput.value);
        loader.style.display = "none";
        loginBtn.style.opacity = "1";

        if (user) {
            successSound.play();
            if (rememberMe.checked) localStorage.setItem("user_email", emailInput.value);
            else localStorage.removeItem("user_email");
            
            setTimeout(() => {
                window.location.href = "homeindex.html";
            }, 600);
        } else {
            // Error handling - strictly static as requested
            errorMsg.innerText = "Invalid credentials. Please try again.";
        }
    }, 1200);
};