function submitDateTime() {
    // Getting the values from date and time input 
    const dateInput = document.getElementById('date').value;
    const timeInput = document.getElementById('time').value;

    // Displaying the selected date and time 
    const outputDiv = document.getElementById('output');
    const imageElement = document.getElementById('image');

    if (dateInput && timeInput) {
        outputDiv.innerHTML = `Hurray! You're off to an awesome date with Jaiveer on <strong>${dateInput}</strong> at <strong>${timeInput}</strong>!! Be aware: He's a COOL GUY 😘`;

        // Changing the image 
        imageElement.src = "https://content.imageresizer.com/images/memes/Celebration-meme-6.jpg";
    } else {
        outputDiv.innerHTML = `<span style="color: black;">Atleast select a valid date and time 😒!</span>`;
    }
}

let i = 0;
function showPickUpLines() {
    const pickupLines = ["🧲 Are you a magnet? Because I’m attracted to you. 💕",
        "Are you French? Because Eiffel for you. 😘",
        "Are you a star? Because your smile lights up my universe. 🌌",
        "Are you a song? Because you’re stuck in my head. 🎵",
        "Are you made of chocolate? Because you’re sweet and irresistible. 😋",
        "Are you honey? Because you’re sweeter than anything I’ve ever tasted. 🐝",
        "Are you Wi-Fi? Because I’m totally feeling a connection. 📡",
        "Are you a puzzle? Because you’re the missing piece to my heart. ❤️",
        "Is it hot in here, or is it just you? 🔥"
    ];

    const randomLine = pickupLines[Math.floor(Math.random() * pickupLines.length)];
    alert(randomLine);
}

document.getElementById('myButton').style.animation = 'heartBeat 1s ease-in-out';