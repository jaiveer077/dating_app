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
