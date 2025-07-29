function checkAnswer() {
    // Retrieve the correct answer from the HTML (input with id="choice1")
    const correctAnswer = document.getElementById("choice1").value;

    // Get the user's selected radio button
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const feedback = document.getElementById("feedback");

    if (!selectedOption) {
        feedback.textContent = "Please select an answer before submitting.";
        feedback.style.color = "orange";
        return;
    }

    const userAnswer = selectedOption.value;

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";
    }
}

// Add event listener after DOM loads
document.getElementById("submit-answer").addEventListener("click", checkAnswer);

