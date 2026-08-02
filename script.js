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

        hero.classList.add("hero-intro");

    }, 3000);

});
// ===============================
// Premium Page Transition
// ===============================

function switchSection(currentSection, nextSection) {

    currentSection.classList.add("fade-out");

    setTimeout(() => {

        currentSection.classList.add("hidden");
        currentSection.classList.remove("fade-out");

        nextSection.classList.remove("hidden");
        nextSection.classList.add("fade-in");

        nextSection.scrollIntoView({
            behavior: "smooth"
        });

        setTimeout(() => {
            nextSection.classList.remove("fade-in");
        }, 700);

    }, 350);

}
// Open Gift Button

giftBtn.addEventListener("click", () => {

    switchSection(hero, giftSection);

    if (bgMusic.paused) {

        bgMusic.volume = 0;
        bgMusic.play();
musicPlayer.classList.add("playing");
        let volume = 0;

        const fadeIn = setInterval(() => {

            if (volume < 1) {

                volume += 0.05;
                bgMusic.volume = volume;

            } else {

                clearInterval(fadeIn);

            }

        }, 100);

        musicBtn.innerText = "⏸";

    }

});

// ===============================
// Script Part 2
// ===============================

const openLetterBtn = document.getElementById("openLetterBtn");
const letterSection = document.getElementById("letterSection");

const galleryBtn = document.getElementById("galleryBtn");
const gallerySection = document.getElementById("gallerySection");

const celebrateBtn = document.getElementById("celebrateBtn");
const birthdayVoice = document.getElementById("birthdayVoice");
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
const madeBy = document.getElementById("madeBy");

madeBy.classList.remove("show");

setTimeout(() => {
    madeBy.classList.add("show");
}, 2000);
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

    // 🎉 Confetti
    createConfetti();

    // 🎤 Birthday voice khatam hone ke baad hi automatic scroll
    birthdayVoice.addEventListener("ended", () => {

        setTimeout(() => {

            document.querySelector(".celebrate-card").scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 1000);

    }, { once: true });

});
// Music

const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const musicPlayer = document.getElementById("musicPlayer");

musicBtn.addEventListener("click", () => {

    if (bgMusic.paused) {

        bgMusic.volume = 0;

        bgMusic.play();

        // 🎵 Player animation ON
        musicPlayer.classList.add("playing");

        let volume = 0;

        const fadeIn = setInterval(() => {

            if (volume < 1) {

                volume = Math.min(volume + 0.05, 1);

                bgMusic.volume = volume;

            } else {

                clearInterval(fadeIn);

            }

        }, 100);

        musicBtn.innerText = "⏸";

    } else {

        // 🎵 Player animation OFF
        musicPlayer.classList.remove("playing");

        let volume = bgMusic.volume;

        const fadeOut = setInterval(() => {

            if (volume > 0.05) {

                volume = Math.max(volume - 0.05, 0);

                bgMusic.volume = volume;

            } else {

                clearInterval(fadeOut);

                bgMusic.pause();

                bgMusic.currentTime = 0;

                bgMusic.volume = 1;

            }

        }, 100);

        musicBtn.innerText = "🎵";

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

    // 🎆 Fireworks sound start
    fireworksSound.currentTime = 0;
    fireworksSound.volume = 0.8;
    fireworksSound.loop = true;
    fireworksSound.play();

    setTimeout(() => {

        // 🎵 Background music low
        bgMusic.volume = 0.15;

        // 🎂 Birthday voice start
        birthdayVoice.currentTime = 0;
        birthdayVoice.volume = 1;
        birthdayVoice.play();

        // 🎤 Birthday voice khatam hote hi
        // 🎆 Fireworks sound bhi stop
        birthdayVoice.onended = () => {

            fireworksSound.pause();
            fireworksSound.currentTime = 0;
fireworksSound.loop = false;
            // 🎵 Background music normal
            bgMusic.volume = 1;

        };

    }, 700);

});
// ===============================
// Falling Rose Petals
// ===============================

const petals = document.getElementById("petals");

function createPetal() {

    const petal = document.createElement("div");

    petal.className = "petal";
    petal.innerHTML = "❄️";

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = (5 + Math.random() * 5) + "s";

    petals.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 10000);
}

setInterval(createPetal, 700);
//// ===============================
// Replay Memories
// ===============================

const replayBtn = document.getElementById("replayBtn");

replayBtn.addEventListener("click", () => {

    // Hide all sections
    giftSection.classList.add("hidden");
    letterSection.classList.add("hidden");
    gallerySection.classList.add("hidden");
    celebrationSection.classList.add("hidden");
    finalSection.classList.add("hidden");
    // 💌 Reset Secret Surprise
secretMessage.classList.remove("show-secret");
secretMessage.classList.add("hidden");
secretBtn.innerText = "💌 One Last Thing...";

    // Show Hero
    hero.classList.remove("hidden");

    // 💌 RESET ENVELOPE
    envelopeOpened = false;

    // 📜 Paper ko wapas envelope ke andar
    if (letterPaper) {
        letterPaper.classList.remove("paper-open");
        letterPaper.classList.remove("paper-out");
    }

    // 🔺 Flap ko close karo
    if (flap) {
        flap.style.transform = "";
    }

    // ❤️ Wax seal wapas dikhao
    if (waxSeal) {
        waxSeal.style.transform = "translateX(-50%) scale(1)";
        waxSeal.style.opacity = "1";
    }

    // 💌 Tap text wapas dikhao
    if (tapText) {
        tapText.classList.remove("hidden-tap");
        tapText.style.opacity = "1";
        tapText.style.visibility = "visible";
    }

    // 🔊 Paper sound reset
    if (paperSound) {
        paperSound.pause();
        paperSound.currentTime = 0;
    }

    // Hero animation restart
    hero.classList.remove("hero-intro");

    setTimeout(() => {
        hero.classList.add("hero-intro");
    }, 50);

    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ⭐ Hollywood Star Background ⭐

const canvas = document.getElementById("starCanvas");

if (canvas) {

    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    const stars = [];

    for (let i = 0; i < 180; i++) {

        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 2,
            a: Math.random(),
            s: Math.random() * 0.02
        });

    }

    let meteor = null;

    function createMeteor() {

        meteor = {
            x: Math.random() * canvas.width,
            y: -50,
            length: 120,
            speed: 10
        };

    }

    function drawStars() {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        for (let star of stars) {

            star.a += star.s;

            if (star.a > 1 || star.a < 0.2) {
                star.s *= -1;
            }

            ctx.beginPath();

            ctx.arc(
                star.x,
                star.y,
                star.r,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
                `rgba(255,255,255,${star.a})`;

            ctx.fill();

        }

        // 🌠 Shooting Star

        if (meteor) {

            ctx.beginPath();

            ctx.moveTo(
                meteor.x,
                meteor.y
            );

            ctx.lineTo(
                meteor.x - meteor.length,
                meteor.y + meteor.length
            );

            ctx.strokeStyle =
                "rgba(255,255,255,0.9)";

            ctx.lineWidth = 2;

            ctx.stroke();

            meteor.x += meteor.speed;
            meteor.y += meteor.speed;

            if (meteor.y > canvas.height) {
                meteor = null;
            }

        }

        requestAnimationFrame(drawStars);

    }

    drawStars();

    // 🌠 Shooting star every 8 seconds

    setInterval(createMeteor, 8000);

}
// ===============================
// 🎂 Happy Birthday Voice
// ===============================

function speakBirthdayWish() {

    if ("speechSynthesis" in window) {

        speechSynthesis.cancel();

        const message = new SpeechSynthesisUtterance(
            "Happy birthday to you, happy birthday to you, happy birthday dear Shikha!"
        );

        message.volume = 1;
        message.rate = 0.9;
        message.pitch = 1.1;

        speechSynthesis.speak(message);
    }

}
// ===============================
// 🎆 Fireworks Sound
// ===============================

const fireworksSound = document.getElementById("fireworksSound");
// ===============================
// 📸 Premium Photo Scroll Reveal
// ===============================

const galleryPhotos = document.querySelectorAll(".gallery img");

const photoObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show-photo");
        }

    });

}, {
    threshold: 0.15
});

galleryPhotos.forEach((photo) => {
    photoObserver.observe(photo);
});
// ===============================
// 📸 Fullscreen Photo Navigation
// ===============================

const galleryImages = document.querySelectorAll(".gallery img");
const prevImage = document.getElementById("prevImage");
const nextImage = document.getElementById("nextImage");

let currentImageIndex = 0;

// Gallery photo click
galleryImages.forEach((img, index) => {

    img.addEventListener("click", () => {

        currentImageIndex = index;
        fullImage.src = img.src;

    });

});

// Previous photo
prevImage.addEventListener("click", (event) => {

    event.stopPropagation();

    currentImageIndex--;

    if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    }

    fullImage.src = galleryImages[currentImageIndex].src;

});

// Next photo
nextImage.addEventListener("click", (event) => {

    event.stopPropagation();

    currentImageIndex++;

    if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    }

    fullImage.src = galleryImages[currentImageIndex].src;

});
// ===============================
// 📱 Mobile Swipe Photo Navigation
// ===============================

let touchStartX = 0;
let touchEndX = 0;

fullImage.addEventListener("touchstart", (event) => {

    touchStartX = event.touches[0].clientX;

});

fullImage.addEventListener("touchend", (event) => {

    touchEndX = event.changedTouches[0].clientX;

    const swipeDistance = touchEndX - touchStartX;

    // Swipe Left → Next Photo
    if (swipeDistance < -50) {

        currentImageIndex++;

        if (currentImageIndex >= galleryImages.length) {
            currentImageIndex = 0;
        }

        fullImage.src = galleryImages[currentImageIndex].src;

    }

    // Swipe Right → Previous Photo
    if (swipeDistance > 50) {

        currentImageIndex--;

        if (currentImageIndex < 0) {
            currentImageIndex = galleryImages.length - 1;
        }

        fullImage.src = galleryImages[currentImageIndex].src;

    }

});
// =================================
// 🎂 Live Birthday Age Counter
// =================================

const birthDate = new Date("August 17, 2012 00:00:00");

function updateAgeCounter() {

    const now = new Date();

    // Exact age in years
    let years = now.getFullYear() - birthDate.getFullYear();

    const birthdayThisYear = new Date(
        now.getFullYear(),
        birthDate.getMonth(),
        birthDate.getDate()
    );

    if (now < birthdayThisYear) {
        years--;
    }

    // Total elapsed time
    const totalMilliseconds = now - birthDate;

    const totalSeconds = Math.floor(totalMilliseconds / 1000);

    const totalMinutes = Math.floor(totalSeconds / 60);

    const totalHours = Math.floor(totalMinutes / 60);

    const totalDays = Math.floor(totalHours / 24);

    // Update values
    document.querySelector(".age-main").textContent =
        `${years} Years Old`;

    document.getElementById("ageDays").textContent =
        totalDays.toLocaleString();

    document.getElementById("ageHours").textContent =
        totalHours.toLocaleString();

    document.getElementById("ageMinutes").textContent =
        totalMinutes.toLocaleString();

    document.getElementById("ageSeconds").textContent =
        totalSeconds.toLocaleString();

}

// Update immediately
updateAgeCounter();

// Update every second
setInterval(updateAgeCounter, 1000);
// ======================================
// 💌 PREMIUM ENVELOPE OPENING
// 📱 Mobile Friendly
// ======================================

const envelope = document.getElementById("envelope");
const flap = document.getElementById("flap");
const waxSeal = document.getElementById("waxSeal");
const letterPaper = document.getElementById("letterPaper");
const tapText = document.getElementById("tapText");

// 📜 Paper opening sound
const paperSound = new Audio("music/paper-open.mp3");

let envelopeOpened = false;

if (envelope && flap && waxSeal && letterPaper) {

    envelope.addEventListener("click", () => {

        if (envelopeOpened) {
            return;
        }

        envelopeOpened = true;

        // ❤️ Hide wax seal
        waxSeal.style.transform = "translateX(-50%) scale(0)";
        waxSeal.style.opacity = "0";

        // 🔺 Open envelope flap
        setTimeout(() => {

            flap.style.transform = "rotateX(180deg)";

        }, 250);

        // 📜 Folded paper comes out
        setTimeout(() => {

            letterPaper.classList.add("paper-out");

        }, 900);

        // 📖 Start unfolding + paper sound
        setTimeout(() => {

            // 🔊 Start paper sound
            paperSound.pause();
            paperSound.currentTime = 0;
            paperSound.volume = 0.8;

            paperSound.play().catch(() => {});

            // 📖 Start unfolding
            letterPaper.classList.add("paper-open");

            // 🔇 Stop sound when paper is fully open
            setTimeout(() => {

                paperSound.pause();
                paperSound.currentTime = 0;

            }, 1400);

        }, 1800);

        // Hide tap text
        if (tapText) {

    tapText.classList.add("hidden-tap");

}
    });

}
// ======================================
// 💌 SECRET SURPRISE
// ======================================

const secretBtn = document.getElementById("secretBtn");
const secretMessage = document.getElementById("secretMessage");

if (secretBtn && secretMessage) {

    secretBtn.addEventListener("click", () => {

        secretMessage.classList.remove("hidden");

        setTimeout(() => {
            secretMessage.classList.add("show-secret");
        }, 50);

        secretBtn.innerText = "💖 You Found It!";

        // Small heart celebration
        for (let i = 0; i < 12; i++) {
            setTimeout(() => {
                createHeart();
            }, i * 150);
        }

    });

}
// ======================================
// ✨ TOUCH SPARKLES EFFECT
// 📱 Mobile Friendly
// ======================================

document.addEventListener("pointerdown", (event) => {

    // Ek tap par kitne sparkles
    const sparkleCount = 6;

    for (let i = 0; i < sparkleCount; i++) {

        const sparkle = document.createElement("div");

        sparkle.className = "touch-sparkle";

        // Random cute symbols
        const symbols = ["✨", "💖", "💗", "🌸"];

        sparkle.innerText =
            symbols[Math.floor(Math.random() * symbols.length)];

        // Tap position
        sparkle.style.left =
            event.clientX + "px";

        sparkle.style.top =
            event.clientY + "px";

        // Random movement
        sparkle.style.setProperty(
            "--move-x",
            (Math.random() * 80 - 40) + "px"
        );

        sparkle.style.setProperty(
            "--move-y",
            (Math.random() * 80 - 40) + "px"
        );

        document.body.appendChild(sparkle);

        // Remove after animation
        setTimeout(() => {

            sparkle.remove();

        }, 900);

    }

});
// ======================================
// 📝 TYPEWRITER LETTER EFFECT
// ======================================

const letterText = document.getElementById("letter");

// 🎵 Typewriter Sound
const typewriterSound = new Audio("music/typewriter.mp3");

typewriterSound.loop = true;
typewriterSound.volume = 0.35;

let originalLetterText = "";

if (letterText) {

    // Original letter text save karo
    originalLetterText = letterText.textContent.trim();

    // Starting me text hide karo
    letterText.textContent = "";

    // Paper open hone ko observe karo
    const letterObserver = new MutationObserver(() => {

        if (
            letterPaper &&
            letterPaper.classList.contains("paper-open") &&
            letterText.dataset.typed !== "true"
        ) {

            letterText.dataset.typed = "true";

            let index = 0;

            // 🎵 Typing sound start
            typewriterSound.currentTime = 0;
            typewriterSound.play().catch(() => {});

            function typeLetter() {

                if (index < originalLetterText.length) {

                    letterText.textContent +=
                        originalLetterText.charAt(index);

                    index++;

                    setTimeout(typeLetter, 25);

                } else {

                    // 🛑 Typing complete → Sound stop
                    typewriterSound.pause();
                    typewriterSound.currentTime = 0;

                }

            }

            // Start typing
            typeLetter();

        }

    });

    letterObserver.observe(letterPaper, {
        attributes: true,
        attributeFilter: ["class"]
    });

}