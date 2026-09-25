function feeling(answer) {

    const title = document.getElementById("responseTitle");
    const text = document.getElementById("responseText");
    const gif = document.getElementById("responseGif");
    const smileQuestion = document.getElementById("smileQuestion");

    // GREAT
    if (answer === "great") {

        gif.src = "images/Happy.gif";
        title.textContent = "Sana All, masaya! HAHAHA";

        const greatMessages = [

            "I'm happy that you're having a good day. Keep that little bit of happiness with you.",

            "If days were chapters, I hope the pages you're writing right now are filled with the kind of quiet, deep joy that lingers long after the sun goes down, because out of all the things in this vast world, a heart that finds its way to happiness is the most beautiful sight of all.",

            "In a world that is always rushing forward, I hope you pause long enough to realize how deeply wonderful you are—not for what you do, but simply for the soft, steady light you quietly bring into the lives of everyone lucky enough to cross your path.",

            "Whenever the noise of the world feels a little too loud, I hope you remember this exact moment: somewhere out there, someone is genuinely smiling just knowing you exist, hoping that your heart feels as safe, cherished, and treasured as you truly deserve to be."

        ];

        text.textContent =
            greatMessages[Math.floor(Math.random() * greatMessages.length)];

        // Show smile question
        smileQuestion.classList.remove("hidden");

    }

    // OKAY
    else if (answer === "okay") {

        gif.src = "images/NeutralHappy.gif";
        title.textContent = "That's okay.";

        const okayMessages = [

            "You don't have to carry the weight of the whole world on your shoulders. Putting it down for a while doesn't make you weak. It makes you human, and you are allowed to just breathe.",

            "You don't have to have it all figured out right now. Just taking it one gentle breath at a time is enough.",

            "You don't have to be strong every single day. Giving yourself permission to just be is enough."

        ];

        text.textContent =
            okayMessages[Math.floor(Math.random() * okayMessages.length)];

        // Hide smile question
        smileQuestion.classList.add("hidden");

    }

    // TIRED
    else if (answer === "tired") {

        gif.src = "images/Tired Bore Sticker.gif";
        title.textContent = "Maybe you need a little break.";

        const tiredMessages = [

            "Take things slowly today. You don't have to rush through everything.",

            "Maybe you need to set down the heavy things for a little while. Take a soft, deep breath, there is nowhere else you need to be right now.",

            "Maybe you need to give yourself permission to move at a snail's pace today. The world can wait for you to catch your breath.",

            "Maybe you need a moment just for yourself, completely quiet and untouched by demands. Take all the time you need; nothing is more important than your peace."

        ];

        text.textContent =
            tiredMessages[Math.floor(Math.random() * tiredMessages.length)];

        // Hide smile question
        smileQuestion.classList.add("hidden");

    }

    // HARD
    else if (answer === "hard") {

        gif.src = "images/Alothappen.gif";
        title.textContent = "I'm sorry today has been difficult.";

        const hardMessages = [

            "Whatever happened, you deserve a moment to breathe. You don't have to solve everything at once.",

            "I'm sorry today has been so heavy. Whatever is weighing on your heart right now, you don't have to carry it all by yourself.",

            "I'm sorry things are feeling so overwhelming right now. Give yourself permission to just pause, close your eyes, and let go of the pressure to fix it all today.",

            "I'm sorry today hasn't been kind to you. Whatever went wrong, please remember that tomorrow is a fresh page, and right now, you only need to focus on being gentle with yourself."

        ];

        text.textContent =
            hardMessages[Math.floor(Math.random() * hardMessages.length)];

        // Hide smile question
        smileQuestion.classList.add("hidden");

    }

    // UNSURE
    else {

        gif.src = "images/Donotknow.gif";
        title.textContent = "That's completely okay.";

        const unsureMessages = [

            "Sometimes we don't even know how we're feeling. You can simply take things one moment at a time.",

            "That's completely okay. You don't have to make sense of everything right now. Just letting yourself exist in this moment is enough.",

            "That's completely okay. It's alright to feel a little lost sometimes; you don't need all the answers to be worthy of peace.",

            "That's completely okay. Give yourself the grace to not know, to not do, and to just let the dust settle around you."

        ];

        text.textContent =
            unsureMessages[Math.floor(Math.random() * unsureMessages.length)];

        // Hide smile question
        smileQuestion.classList.add("hidden");
    }

    showScreen("response");
}





function showScreen(screenId) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    const nextScreen = document.getElementById(screenId);

    if (nextScreen) {
        nextScreen.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}





/* Food question */
function answerFood(answer, selectedButton) {

    // Hide the other choice
    const choices = document.querySelectorAll(".food-choice");

    choices.forEach(choice => {
        if (choice !== selectedButton) {
            choice.classList.add("hidden");
        }
    });

    const response = document.getElementById("foodResponse");
    const nextButton = document.getElementById("restButton");

    const title = document.getElementById("foodTitle");
    const message = document.getElementById("foodMessage");
    const gif = document.getElementById("foodGif");

    if (answer === "yes") {

        response.textContent =
            "Buti naman at kumain ka.";
        // Show "Ok poo"
        // Wait 1.5 seconds, then continue
        setTimeout(() => {
            showScreen("choose");
        }, 4000);

    } else {

        response.textContent =
            "Kain ka na muna, dahan-dahan lang, walang tubig.";

        // Hide the question
        title.classList.add("hidden");
        message.classList.add("hidden");

        // Change the GIF
        gif.src = "images/Fast Food Cat Sticker by Pusheen.gif";

        // Start falling food
        startFoodRain();

        // Show Continue button
        nextButton.classList.remove("hidden");
    }
}

/*foods*/

const foodImages = [
    "images/Burger Sticker by Mister Dips.gif",
    "images/Cake Cupcake Sticker by imoji.gif",
    "images/French Fries Cheese Sticker by Mister Dips.gif",
    "images/seafood lobster Sticker by Major Food Group.gif",
    "images/Chocolate Cake Sticker by foodbabyny.gif"
];

let foodRainActive = false;
let foodTimer;

function startFoodRain() {

    if (foodRainActive) return;

    foodRainActive = true;

    // Create food every 500ms
    foodTimer = setInterval(() => {

        if (!foodRainActive) return;

        createFallingFood();

    }, 500);
}

function createFallingFood() {

    const container = document.getElementById("foodRain");

    const food = document.createElement("img");

    const randomFood =
        foodImages[Math.floor(Math.random() * foodImages.length)];

    food.src = randomFood;
    food.classList.add("falling-food");

    container.appendChild(food);

    // Random starting position
    let x = Math.random() * (window.innerWidth - 100);
    let y = -100;

    let velocityY = 0;
    let velocityX = (Math.random() - 0.5) * 2;

    const gravity = 0.35;
    const bounce = 0.15;

    let rotation = Math.random() * 20 - 10;
    let rotationSpeed = (Math.random() - 0.5) * 2;

    food.style.left = `${x}px`;
    food.style.top = `${y}px`;

    // 🍴 Eat food when clicked
    food.addEventListener("click", function () {

        const eatSound = document.getElementById("eatSound");

        if (eatSound) {
            eatSound.currentTime = 0;
            eatSound.play().catch(() => {});
        }

        food.dataset.eaten = "true";

        food.style.transform =
            `rotate(${rotation}deg) scale(1.4)`;

        food.style.opacity = "0";

        setTimeout(() => {
            food.remove();
        }, 150);
    });

    function update() {

        if (food.dataset.eaten === "true") {
            return;
        }

        velocityY += gravity;

        y += velocityY;
        x += velocityX;

        rotation += rotationSpeed;

        const foodWidth = food.offsetWidth;
        const foodHeight = food.offsetHeight;

        // Keep inside screen
        if (x < 0) {
            x = 0;
            velocityX *= -0.5;
        }

        if (x > window.innerWidth - foodWidth) {
            x = window.innerWidth - foodWidth;
            velocityX *= -0.5;
        }

        /*
         * Find the highest surface underneath the food.
         * Start with the bottom of the screen.
         */
        let floor = window.innerHeight - foodHeight;

        const otherFoods =
            document.querySelectorAll(".falling-food");

        otherFoods.forEach(other => {

            if (other === food) return;

            if (other.dataset.eaten === "true") return;

            const otherX = parseFloat(other.style.left);
            const otherY = parseFloat(other.style.top);

            const otherWidth = other.offsetWidth;
            const otherHeight = other.offsetHeight;

            // Check if horizontally overlapping
            const overlapsX =
                x < otherX + otherWidth &&
                x + foodWidth > otherX;

            if (overlapsX) {

                const possibleFloor =
                    otherY - foodHeight;

                // Only land on food that is below us
                if (possibleFloor >= y &&
                    possibleFloor < floor) {

                    floor = possibleFloor;
                }
            }
        });

        // Hit the ground or another food
        if (y >= floor) {

            y = floor;

            velocityY *= -bounce;

            velocityX *= 0.8;
            rotationSpeed *= 0.8;

            // Stop once the bounce becomes tiny
            if (Math.abs(velocityY) < 0.5) {
                velocityY = 0;
                rotationSpeed = 0;
            }
        }

        food.style.left = `${x}px`;
        food.style.top = `${y}px`;

        food.style.transform =
            `rotate(${rotation}deg)`;

        requestAnimationFrame(update);
    }

    update();
}

/*food disappears when continued*/

function continueFromFood() {

    // Stop creating new food
    foodRainActive = false;

    clearInterval(foodTimer);

    // Remove all existing food
    const foodRain = document.getElementById("foodRain");

    foodRain.innerHTML = "";

    // Move to the next screen
    showRestQuestion();
}

/* Rest question */

function showRestQuestion() {
    showScreen("rest");
}

function restAnswer(answer, selectedButton) {

    // Hide the other choices
    const choices = document.querySelectorAll(".rest-choice");

    choices.forEach(choice => {
        if (choice !== selectedButton) {
            choice.classList.add("hidden");
        }
    });

    const response = document.getElementById("restResponse");

    if (answer === "yes") {
        response.textContent = "That's good! 🌿 I'm glad you got some time to rest.";
    }
    else if (answer === "little") {
        response.textContent = "Even a little rest counts. 🌷 Take things gently.";
    }
    else if (answer === "no") {
        response.textContent = "That's okay. Maybe you can give yourself a little break when you can. 🍃";
    }

    // Wait 1.5 seconds, then continue
    setTimeout(() => {
        showScreen("choose");
    }, 8000);
}

/* Final choices */

function chooseNeed(choice) {

    const emoji = document.getElementById("finalEmoji");
    const title = document.getElementById("finalTitle");
    const text = document.getElementById("finalText");

    if (choice === "encouragement") {

        emoji.textContent = "🌸";
        title.textContent = "A little reminder for you.";
        text.textContent =
            "You're doing better than you think. Keep going gently, one step at a time.";

    } else if (choice === "music") {

        emoji.textContent = "🎵";
        title.textContent = "Let's add a little music.";
        text.textContent =
            "Sometimes a small song can make a quiet moment feel a little nicer.";

        playMusic();

    } else if (choice === "break") {

        emoji.textContent = "☕";
        title.textContent = "Take a tiny break.";
        text.textContent =
            "Put everything down for a moment. Relax your shoulders. Take a slow breath. You can continue when you're ready.";

    } else {

        emoji.textContent = "💌";
        title.textContent = "A little surprise!";
        text.textContent =
            "You are allowed to have soft moments, silly moments, happy moments, and quiet moments. I hope today gives you at least one.";

    }

    showScreen("final");
}


/* Music */

const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

function playMusic() {

    music.play()
        .then(() => {
            musicButton.textContent = "🔊 Music On";
        })
        .catch(() => {
            musicButton.textContent = "🎵 Tap for Music";
        });
}


function toggleMusic() {

    if (music.paused) {

        playMusic();

    } else {

        music.pause();
        musicButton.textContent = "🔇 Music Off";
    }
}


/* Restart */

function restart() {

    music.pause();
    music.currentTime = 0;

    musicButton.textContent = "🎵 Music";

    document.getElementById("foodResponse").textContent = "";
    document.getElementById("restButton").classList.add("hidden");

    showScreen("intro");
}

function playCatSound() {
    const catSound = document.getElementById("catSound");

    catSound.currentTime = 0;
    catSound.play();
}

function playHiSound() {
    const HiiSound = document.getElementById("HiiSound");

    HiiSound.currentTime = 0;
    HiiSound.play();
}

