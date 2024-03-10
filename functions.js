function incrementNumberOfLooking() {
    const defaultNumberOfLook = document.getElementById("looking-number");
    let incrementNumberOfLook = Number(defaultNumberOfLook.textContent);
    incrementNumberOfLook += 1;
    defaultNumberOfLook.textContent = incrementNumberOfLook;
    if (incrementNumberOfLook >= 1) {
        defaultNumberOfLook.style.color = "green";
    }
}

function resetTheNumberOfLooking() {
    const currentNumberOfLook = document.getElementById("looking-number");
    let reset = Number(currentNumberOfLook.textContent);
    reset = 0;
    currentNumberOfLook.textContent = reset;
    if (currentNumberOfLook.textContent == 0) {
        currentNumberOfLook.style.color = "white";
    }
}


function playVoice(type0fVoice) {
    let voice = document.getElementById("voice" + type0fVoice);
    let birdicon = document.getElementById("iconbird");
    let rainicon = document.getElementById("iconrain");
    let windicon = document.getElementById("iconwind");
    let seaicon = document.getElementById("iconsea");
    if (voice.paused) {
        voice.play();
        if (type0fVoice === "bird") {
            birdicon.className = "fa-solid fa-pause fa-2x";
        }
        if (type0fVoice === "rain") {
            rainicon.className = "fa-solid fa-pause fa-2x";
        }
        if (type0fVoice === "wind") {
            windicon.className = "fa-solid fa-pause fa-2x";
        }
        if (type0fVoice === "sea") {
            seaicon.className = "fa-solid fa-pause fa-2x";
        }
    } else {
        voice.pause();
        if (type0fVoice === "bird") {
            birdicon.className = "fa-solid fa-crow fa-2x";
        }
        if (type0fVoice === "rain") {
            rainicon.className = "fa-solid fa-cloud-rain fa-2x";
        }
        if (type0fVoice === "wind") {
            windicon.className = "fa-solid fa-wind fa-2x";
        }
        if (type0fVoice === "sea") {
            seaicon.className = "fa-solid fa-water fa-2x";
        }
    }
}
let range = document.getElementById("slider-audio");
let voice1 = document.getElementById("voicebird");
let voice2 = document.getElementById("voicerain");
let voice3 = document.getElementById("voicewind");
let voice4 = document.getElementById("voicesea");

function volumeAdjustment() {
    voice1.volume = range.value / 100;
    voice2.volume = range.value / 100;
    voice3.volume = range.value / 100;
    voice4.volume = range.value / 100;
}