// ===== SELECT ELEMENTS =====
const form = document.getElementById("signupForm");
const message = document.getElementById("message");
const btn = document.getElementById("submitBtn");
const cards = document.querySelectorAll(".card");
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

// ===== FORM HANDLING =====
if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        if (name === "" || email === "") {
            message.textContent = "Please fill in all fields!";
            message.style.color = "red";
        } else {
            message.textContent = "Form submitted successfully!";
            message.style.color = "green";

            if (btn) {
                btn.textContent = "Submitted!";
            }
        }
    });
}

// ===== CARD INTERACTION =====
cards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("active-card");
    });
});

// ===== MOBILE MENU TOGGLE =====
if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}