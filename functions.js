function incrementNumberOfLooking() {
    const defaultNumberOfLook = document.getElementById("looking-number");
    let incrementNumberOfLook = Number(defaultNumberOfLook.textContent);
    incrementNumberOfLook += 1;
    defaultNumberOfLook.textContent = incrementNumberOfLook;
    localStorage.setItem("numberOfLooking", incrementNumberOfLook);
    if (incrementNumberOfLook >= 1) {
        defaultNumberOfLook.style.color = "green";
    }
}

function resetTheNumberOfLooking() {
    const currentNumberOfLook = document.getElementById("looking-number");
    let reset = Number(currentNumberOfLook.textContent);
    reset = 0;
    currentNumberOfLook.textContent = reset;
    localStorage.setItem("numberOfLooking", 0);
    if (currentNumberOfLook.textContent == 0) {
        currentNumberOfLook.style.color = "white";
    }
}

const storedNumber = localStorage.getItem("numberOfLooking");
if (storedNumber) {
    let number = document.getElementById("looking-number")
    number.textContent = storedNumber;
    if (storedNumber >= 1) {
        number.style.color = "green";
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
let voiceIcon = document.getElementById("voiceIcon");



function volumeAdjustment() {
    voice1.volume = range.value / 100;
    voice2.volume = range.value / 100;
    voice3.volume = range.value / 100;
    voice4.volume = range.value / 100;
    if (voice1.volume === 0) {
        voiceIcon.classList.remove("fa-volume-low");
        voiceIcon.classList.add("fa-volume-xmark");
    } else {
        voiceIcon.classList.add("fa-volume-low");
        voiceIcon.classList.remove("fa-volume-xmark");
    }
}

const taskButton = document.getElementById("task-button");
const taskInput = document.getElementById("input-task");
const taskList = document.getElementById("list-for-task");

getItemsFromLocale();

function addTask() {
    const task = taskInput.value.trim();
    if (task) {
        createTaskList(task);
        taskInput.value = "";
        saveTasksInLocale();
    } else {
        alert("You must write something!");
    }
}

taskButton.addEventListener("click", addTask);

function createTaskList(tasks) {
    const taskLI = document.createElement("li");
    taskLI.textContent = tasks;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button ";
    taskLI.appendChild(deleteButton);

    deleteButton.addEventListener("click", function() {
        taskList.removeChild(taskLI);
        saveTasksInLocale();
    });


    taskList.appendChild(taskLI);
}

function saveTasksInLocale() {
    const taskItems = [];
    taskList.querySelectorAll("li").forEach(function(items) {
        taskItems.push(items.textContent.replace("Delete", "").trim());
    });
    localStorage.setItem("taskItems", JSON.stringify(taskItems));
}

function getItemsFromLocale() {
    const getItems = JSON.parse(localStorage.getItem("taskItems")) || [];
    getItems.forEach(createTaskList);
}