const randomNumber = Math.round(Math.random() * 100);

function checkGuess() {
  const userGuess = parseInt(document.getElementById("userGuess").value);
  const feedback = document.getElementById("feedback");

  if (isNaN(userGuess)) {
    feedback.textContent = "Indtast venligst et gyldigt tal!";
    feedback.style.color = "red";
    return;
  }

  if (userGuess < randomNumber) {
    feedback.textContent = "For lavt! Prøv igen.";
  } else if (userGuess > randomNumber) {
    feedback.textContent = "For højt! Prøv igen.";
  } else {
    feedback.textContent = "Tillykke! Du har gættet det rigtige tal!";
    celebration.style.display = "block";
  }
}
