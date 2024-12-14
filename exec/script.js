function prevSlide(button) {
  const card = button.closest('.property-card');
    const slider = card.querySelector('.image-slider');
    const images = slider.querySelectorAll('img');
    const dots = slider.querySelectorAll('.dots span');
  let activeIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
  
    images[activeIndex].classList.remove('active');
    dots[activeIndex].classList.remove('active');
  activeIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    images[activeIndex].classList.add('active');
    dots[activeIndex].classList.add('active');
}


function nextSlide(button) {
    const card = button.closest('.property-card');
    const slider = card.querySelector('.image-slider');
    const images = slider.querySelectorAll('img');
    const dots = slider.querySelectorAll('.dots span');

    let activeIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
    images[activeIndex].classList.remove('active');
     dots[activeIndex].classList.remove('active');

    activeIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    images[activeIndex].classList.add('active');
    dots[activeIndex].classList.add('active');

}


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.image-slider').forEach(slider => {
    const images = slider.querySelectorAll('img');
        const dotsContainer = slider.querySelector('.dots');
      images.forEach((_, i) => {
        const dot = document.createElement('span');
          dot.addEventListener('click', () => {
           const activeIndex = Array.from(images).findIndex(img => img.classList.contains('active'));

            images[activeIndex].classList.remove('active');
            slider.querySelector('.dots span.active').classList.remove('active')
           images[i].classList.add('active');
           dot.classList.add('active')

          });
          dotsContainer.appendChild(dot);
       });
       slider.querySelector('.dots span').classList.add('active');
   });
});