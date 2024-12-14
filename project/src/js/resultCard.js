export function setupResultCard() {
  // Check if there's a prediction result and show it
  const predictionText = document.getElementById('predictionValue')?.innerText.trim();
  if (predictionText && !predictionText.includes('Error')) {
    showResult();
  }

  // Setup reset button
  const resetButton = document.querySelector('.back-button');
  if (resetButton) {
    resetButton.addEventListener('click', resetForm);
  }
}

function showResult() {
  const formCard = document.getElementById('formCard');
  const resultCard = document.getElementById('resultCard');
  formCard.classList.add('slide-left');
  resultCard.classList.add('slide-center');
}

function resetForm() {
  const formCard = document.getElementById('formCard');
  const resultCard = document.getElementById('resultCard');
  const form = document.getElementById('predictionForm');
  
  // Reset form
  form.reset();
  
  // Remove sliding animation
  formCard.classList.remove('slide-left');
  resultCard.classList.remove('slide-center');
}