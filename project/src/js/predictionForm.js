export function setupPredictionForm() {
  const form = document.getElementById('predictionForm');
  
  form.addEventListener('submit', (event) => {
    if (!validateForm()) {
      event.preventDefault();
      return;
    }
    
    showResult();
  });
}

function validateForm() {
  const sqft = document.getElementById('sqft').value;
  const bath = document.getElementById('bath').value;
  const bhk = document.getElementById('bhk').value;
  
  const errors = [];
  
  if (sqft <= 0) {
    errors.push("Square feet must be greater than 0");
  }
  if (bath < 1) {
    errors.push("Number of bathrooms must be at least 1");
  }
  if (bhk < 0) {
    errors.push("Number of bedrooms cannot be negative");
  }
  
  if (errors.length > 0) {
    alert(errors.join("\n"));
    return false;
  }
  
  return true;
}

function showResult() {
  const formCard = document.getElementById('formCard');
  const resultCard = document.getElementById('resultCard');
  formCard.classList.add('slide-left');
  resultCard.classList.add('slide-center');
}