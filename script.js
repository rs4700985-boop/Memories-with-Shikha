// ===============================
// Memories with Shikha
// Script Part 1
// ===============================

// Elements

const loader = document.getElementById("loader");
const website = document.getElementById("website");

const giftBtn = document.getElementById("giftBtn");

const hero = document.querySelector(".hero");
const giftSection = document.getElementById("giftSection");

// Loader

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.display = "none";

        website.style.display = "block";

    }, 3000);

});
// ===============================
// Premium Page Transition
// ===============================

function switchSection(currentSection, nextSection) {

    currentSection.classList.add("slide-out");

    setTimeout(() => {

        currentSection.classList.add("hidden");
        currentSection.classList.remove("slide-out");

        nextSection.classList.remove("hidden");
        nextSection.classList.add("slide-in");

        nextSection.scrollIntoView({
            behavior: "smooth"
        });

        setTimeout(() => {
            nextSection.classList.remove("slide-in");
        }, 700);

    }, 350);

}
// Open Gift Button

giftBtn.addEventListener("click", () => {

    hero.classList.add("hidden");

    giftSection.classList.remove("hidden");

    giftSection.scrollIntoView({
        behavior: "smooth"
    });

});
// ===============================
// Script Part 2
// ===============================

const openLetterBtn = document.getElementById("openLetterBtn");
const letterSection = document.getElementById("letterSection");

const galleryBtn = document.getElementById("galleryBtn");
const gallerySection = document.getElementById("gallerySection");

const celebrateBtn = document.getElementById("celebrateBtn");
const celebrationSection = document.getElementById("celebrationSection");

const finalMessageBtn = document.getElementById("finalMessageBtn");
const finalSection = document.getElementById("finalSection");

// Open Letter

openLetterBtn.addEventListener("click", () => {

    giftSection.classList.add("hidden");

    letterSection.classList.remove("hidden");

    letterSection.scrollIntoView({
        behavior: "smooth"
    });

});

// Open Gallery

galleryBtn.addEventListener("click", () => {

    letterSection.classList.add("hidden");

    gallerySection.classList.remove("hidden");

    gallerySection.scrollIntoView({
        behavior: "smooth"
    });

});

// Celebration

celebrateBtn.addEventListener("click", () => {

    gallerySection.classList.add("hidden");

    celebrationSection.classList.remove("hidden");

    celebrationSection.scrollIntoView({
        behavior: "smooth"
    });

});

// Final Message

finalMessageBtn.addEventListener("click", () => {

    celebrationSection.classList.add("hidden");

    finalSection.classList.remove("hidden");

    finalSection.scrollIntoView({
        behavior: "smooth"
    });

});
// ===============================
// Script Part 3 - Floating Hearts
// ===============================

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "💖";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";
    heart.style.transition = "transform 6s linear, opacity 6s linear";
    heart.style.opacity = "1";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.transform = "translateY(-120vh)";
        heart.style.opacity = "0";
    }, 100);

    setTimeout(() => {
        heart.remove();
    }, 6200);
}

setInterval(createHeart, 800);
// ===============================
// Script Part 4 - Confetti
// ===============================

function createConfetti() {

    const colors = [
        "#ff4d6d",
        "#ffb703",
        "#00b4d8",
        "#06d6a0",
        "#ffffff"
    ];

    for (let i = 0; i < 80; i++) {

        const confetti = document.createElement("div");

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.width = "8px";
        confetti.style.height = "8px";
        confetti.style.borderRadius = "50%";
        confetti.style.background =
            colors[Math.floor(Math.random() * colors.length)];
        confetti.style.pointerEvents = "none";
        confetti.style.zIndex = "9999";

        document.body.appendChild(confetti);

        const duration = 3000 + Math.random() * 2000;

        confetti.animate(
            [
                {
                    transform: "translateY(0px) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        "translateY(110vh) rotate(720deg)",
                    opacity: 0
                }
            ],
            {
                duration: duration,
                easing: "linear"
            }
        );

        setTimeout(() => {
            confetti.remove();
        }, duration);

    }

}

// Celebrate button click

celebrateBtn.addEventListener("click", () => {

    createConfetti();

});
// Music

const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {

    if (bgMusic.paused) {

        bgMusic.play();
        musicBtn.innerText = "⏸ Pause Music";

    } else {

        bgMusic.pause();
        musicBtn.innerText = "🎵 Play Music";

    }

});
// ===============================
// Photo Full Screen Viewer
// ===============================

const modal = document.getElementById("imageModal");
const fullImage = document.getElementById("fullImage");
const closeImage = document.getElementById("closeImage");

document.querySelectorAll(".gallery img").forEach(img => {

    img.addEventListener("click", () => {

        fullImage.src = img.src;
        modal.style.display = "flex";

    });

});

closeImage.addEventListener("click", () => {

    modal.style.display = "none";

});

modal.addEventListener("click", (e) => {

    if (e.target === modal) {
        modal.style.display = "none";
    }

});
// ===============================
// Sparkles Background
// ===============================

const sparkles = document.getElementById("sparkles");

function createSparkle() {

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";

    sparkles.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 3000);
}

setInterval(createSparkle, 250);
// ===============================
// Premium Fireworks
// ===============================

function launchFireworks() {

    const colors = [
        "#ff4d6d",
        "#ffd60a",
        "#00e5ff",
        "#7bff00",
        "#ffffff",
        "#ff66ff"
    ];

    for (let i = 0; i < 120; i++) {

        const firework = document.createElement("div");

        firework.className = "firework";

        firework.style.left = "50vw";
        firework.style.top = "50vh";
        firework.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        document.body.appendChild(firework);

        const angle = Math.random() * Math.PI * 2;
        const distance = 80 + Math.random() * 220;

        firework.animate([
            {
                transform: "translate(0,0) scale(1)",
                opacity: 1
            },
            {
                transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: 1500,
            easing: "ease-out"
        });

        setTimeout(() => firework.remove(), 1500);
    }
}

celebrateBtn.addEventListener("click", () => {

    launchFireworks();

});
// ===============================
// Falling Rose Petals
// ===============================

const petals = document.getElementById("petals");

function createPetal() {

    const petal = document.createElement("div");

    petal.className = "petal";
    petal.innerHTML = "🌹";

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = (5 + Math.random() * 5) + "s";

    petals.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 10000);
}

setInterval(createPetal, 700);