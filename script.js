// Fungsi untuk memutar musik dan mengulang otomatis
function playMusic() {
    let audio = document.getElementById("bg-music");
    audio.play();
}

// Saat lagu selesai, ulangi otomatis
document.addEventListener("DOMContentLoaded", function() {
    let audio = document.getElementById("bg-music");
    audio.addEventListener("ended", function() {
        this.currentTime = 0;
        this.play();
    });
});

// Efek ledakan hati saat musik diputar
function createHeartExplosion() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "💖";
    document.body.appendChild(heart);

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    setTimeout(() => {
        heart.remove();
    }, 3000);
}

// Efek ciuman saat hover foto
function kissEffect(event) {
    let kiss = document.createElement("div");
    kiss.textContent = "💋";
    kiss.className = "heart";
    kiss.style.left = event.clientX + "px";
    kiss.style.top = event.clientY + "px";

    document.body.appendChild(kiss);

    setTimeout(() => {
        kiss.remove();
    }, 1000);
}

// Efek hati muncul dari bawah ke atas
setInterval(() => {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}, 300);