<<<<<<< HEAD
// Script for Image Slider
function nextSlide(button) {
    const slider = button.parentElement;
    const images = slider.querySelectorAll('img');
    let activeIndex = [...images].findIndex(img => img.classList.contains('active'));
  
    images[activeIndex].classList.remove('active');
    activeIndex = (activeIndex + 1) % images.length;
    images[activeIndex].classList.add('active');
  }
  
  function prevSlide(button) {
    const slider = button.parentElement;
    const images = slider.querySelectorAll('img');
    let activeIndex = [...images].findIndex(img => img.classList.contains('active'));
  
    images[activeIndex].classList.remove('active');
    activeIndex = (activeIndex - 1 + images.length) % images.length;
    images[activeIndex].classList.add('active');
  }
=======
// Script for Image Slider
function nextSlide(button) {
    const slider = button.parentElement;
    const images = slider.querySelectorAll('img');
    let activeIndex = [...images].findIndex(img => img.classList.contains('active'));
  
    images[activeIndex].classList.remove('active');
    activeIndex = (activeIndex + 1) % images.length;
    images[activeIndex].classList.add('active');
  }
  
  function prevSlide(button) {
    const slider = button.parentElement;
    const images = slider.querySelectorAll('img');
    let activeIndex = [...images].findIndex(img => img.classList.contains('active'));
  
    images[activeIndex].classList.remove('active');
    activeIndex = (activeIndex - 1 + images.length) % images.length;
    images[activeIndex].classList.add('active');
  }
>>>>>>> upstream/main
  