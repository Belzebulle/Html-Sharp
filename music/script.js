var paused = false;
var inplay = false;
const volume = 0.2;

let rect, circle, audio;

// function on ready to set variables js classic
document.addEventListener("DOMContentLoaded", function () {
    rect = document.getElementById("rect");
    circle = document.getElementById("circle");
    audio = document.getElementById("mr1");
});

function setMusic(id) {

    switch (id) {
        case "mr1":
            document.querySelector(".circle2").style.cssText = "background : var(--gradient-grey);";
            break;
        case "mr2":
            document.querySelector(".circle2").style.cssText = "background : var(--gradient-blue);";
            break;
        case "mr3":
            document.querySelector(".circle2").style.cssText = "background : var(--gradient-purple);";
            break;
        case "mr4":
            document.querySelector(".circle2").style.cssText = "background : var(--gradient-red);";
            break;
        default:
            document.querySelector(".circle2").style.cssText = "background : var(--gradient-grey);";
            break;
    }

    if (!inplay) {
        playAudio();
        inplay = true;
    } else {
        audio.pause();
        audio.currentTime = 0;
        audio = document.getElementById(id);
        setTimeout(function () {
            audio.volume = volume;
            audio.play();
        }, 250)
    }
}

function playAudio() {
    rect.classList.add("playAudio");
    circle.classList.add("swing");
    setTimeout(function () {
        audio.volume = volume;
        audio.play();
    }, 2500);
}

function pauseAudio() {
    if (paused) {
        paused = false;
        audio.play();
    } else {
        paused = true;
        audio.pause();
    }
}


function stopAudio() {

    audio.pause();
    audio.currentTime = 0;
    rect.classList.add("stopAudio");
    inplay = false;

    setTimeout(function () {
        rect.classList.remove("stopAudio");
        rect.classList.remove("playAudio");
        circle.classList.remove("swing");

    }, 3000);
} 