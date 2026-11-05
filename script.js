const title = document.getElementById("title");
const button = document.getElementById("changeBtn");

let isChanged = false;

button.addEventListener("click", () => {
    if (isChanged === false) {
        title.textContent = "Hello from JavaScript!";
        button.textContent = "Reset Text";
        isChanged = true;
    } else {
        title.textContent = "Hi azgui amitadaa";
        button.textContent = "Change Text";
        isChanged = false;
    }
});

const colorBtn = document.getElementById("colorBtn");

let isBlue = false;

colorBtn.addEventListener("click", () => {
    if (isBlue === false) {
        document.body.style.backgroundColor = "blue";
        isBlue = true;
    } else {
        document.body.style.backgroundColor = "#111";
        isBlue = false;
    }
});
const styleBtn = document.getElementById("styleBtn");

styleBtn.addEventListener("click", () => {
    title.classList.toggle("highlight");
});
const nameInput = document.getElementById("nameInput");
const greetBtn = document.getElementById("greetBtn");
const message = document.getElementById("message");

greetBtn.addEventListener("click", () => {
    const userName = nameInput.value.trim();

    if (userName === "") {
        message.textContent = "Please enter your name!";
    } else {
        message.textContent = "Hello, " + userName + "!";
    }
});
const ageInput = document.getElementById("ageInput");
const checkBtn = document.getElementById("checkBtn");
const ageMessage = document.getElementById("ageMessage");

checkBtn.addEventListener("click", () => {
    const age = Number(ageInput.value);

    if (age >= 18) {
        ageMessage.textContent = "You are an adult!";
    } else {
        ageMessage.textContent = "You are under 18!";
    }
});
calculateBtn.addEventListener("click", () => {
    const year = Number(birthYear.value);

    if (birthYear.value === "") {
        ageResult.textContent = "Please enter your birth year!";
    } 
    else if (year < 1900 || year > 2026) {
        ageResult.textContent = "Please enter a valid year!";
    } 
    else {
        const age = 2026 - year;
        ageResult.textContent = "Your age is " + age;
    }
});
const showBtn = document.getElementById("showBtn");
const profile = document.getElementById("profile");

showBtn.addEventListener("click", () => {
    profile.innerHTML = `
        <h2>ROZAZ</h2>
        <p>DJ | Afro House</p>
        <p>Minimal Deep House</p>
    `;
});
const liveInput = document.getElementById("liveInput");
const preview = document.getElementById("preview");

liveInput.addEventListener("input", () => {
    preview.textContent = liveInput.value;
});
preview.style.color = "blue";
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        alert("You pressed Enter!");
    }
});
const timerBtn = document.getElementById("timerBtn");

timerBtn.addEventListener("click", () => {
    setTimeout(() => {
        alert("3 seconds passed!");
    }, 3000);
});
const clock = document.getElementById("clock");

function updateClock() {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    clock.textContent =
        String(hours).padStart(2, "0") + ":" +
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");
}

updateClock();

setInterval(updateClock, 1000);
const countdown = document.getElementById("countdown");
const startCountdown = document.getElementById("startCountdown");

startCountdown.addEventListener("click", () => {
    let timeLeft = 10;

    countdown.textContent = timeLeft;

    const timer = setInterval(() => {
        timeLeft--;

        countdown.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            countdown.textContent = "Finished!";
        }
    }, 1000);
});
const saveName = document.getElementById("saveName");
const saveBtn = document.getElementById("saveBtn");
const savedMessage = document.getElementById("savedMessage");

saveBtn.addEventListener("click", () => {
    const name = saveName.value.trim();

    if (name === "") {
        savedMessage.textContent = "Please enter your name!";
    } else {
        localStorage.setItem("username", name);
        savedMessage.textContent = "Name saved!";
    }
});
const savedUser = localStorage.getItem("username");

if (savedUser) {
    savedMessage.textContent = "Welcome back, " + savedUser + "!";
}
const myDJ = {
    name: "Rozaz",
    genre: "Afro House",
    age: 23
};

localStorage.setItem("myDJ", JSON.stringify(myDJ));

const savedDJ = JSON.parse(localStorage.getItem("myDJ"));

console.log(savedDJ.name);
console.log(savedDJ.genre);
try {
    const data = JSON.parse("Hello Rozaz");

    console.log(data);
} catch (error) {
    console.log("Invalid JSON!");
}
const djName = document.getElementById("djName");
const djGenre = document.getElementById("djGenre");
const saveDJ = document.getElementById("saveDJ");
const djProfile = document.getElementById("djProfile");

saveDJ.addEventListener("click", () => {

    const dj = {
        name: djName.value.trim(),
        genre: djGenre.value.trim()
    };

    if (dj.name === "" || dj.genre === "") {
        djProfile.textContent = "Please fill all fields!";
        return;
    }

    localStorage.setItem("djProfile", JSON.stringify(dj));

    djProfile.innerHTML = `
        <h2>${dj.name}</h2>
        <p>${dj.genre}</p>
    `;
});
const savedDJData = localStorage.getItem("djProfile");

if (savedDJData) {
    try {
        const savedDJ = JSON.parse(savedDJData);

        djProfile.innerHTML = `
            <h2>${savedDJ.name}</h2>
            <p>${savedDJ.genre}</p>
        `;

        djName.value = savedDJ.name;
        djGenre.value = savedDJ.genre;

    } catch (error) {
        djProfile.textContent = "Could not load profile!";
    }
}