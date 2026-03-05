gsap.registerPlugin(ScrollTrigger);

// Background Music Start on Button Click
document.getElementById("startBtn").addEventListener("click", function() {
    document.getElementById("bgMusic").play();
    const bgMusic = document.getElementById("bgMusic");
bgMusic.volume = 0.5;   

    gsap.to(".hero", {
        duration: 1.5,
        opacity: 0,
        y: -100,
        onComplete: () => {
            document.querySelector(".hero").style.display = "none";
        }
    });
});

// Scroll Animation for Panels
gsap.utils.toArray(".panel").forEach(panel => {
    gsap.to(panel, {
        opacity: 1,
        y: -50,
        duration: 1.5,
        scrollTrigger: {
            trigger: panel,
            start: "top 80%",
        }
    });
});

function toggleText(id) {

    // Hide all texts first
    document.querySelectorAll(".hidden-text").forEach(text => {
        if (text.id !== id) {
            text.style.display = "none";
        }
    });

    const selected = document.getElementById(id);

    if (selected.style.display === "block") {
        selected.style.display = "none";
    } else {
        selected.style.display = "block";
    }
}

function goToNext() {
    document.getElementById("section2").scrollIntoView({
        behavior: "smooth"
    });
}