// Main entry point for the house price prediction application
import './styles/main.css';
import { setupPredictionForm } from './js/predictionForm.js';
import { setupResultCard } from './js/resultCard.js';

document.addEventListener('DOMContentLoaded', () => {
  setupPredictionForm();
  setupResultCard();
});