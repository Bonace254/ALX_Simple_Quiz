function checkAnswer() {
    const correctAnswer = "4"; // ✅ This is the required line

    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    if (selectedOption) {
        const userAnswer = selectedOption.value;
        const feedback = document.getElementById("feedback");

        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = "red";
        }
    } else {
        document.getElementById("feedback").textContent = "Please select an answer before submitting.";
        document.getElementById("feedback").style.color = "orange";
    }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);

