const slides = document.querySelector('.slides');
const slideElements = slides.children;
const totalSlides = slideElements.length;

const btnLeft = document.querySelector('.nav-left');
const btnRight = document.querySelector('.nav-right');

let currentIndex = 0;
function updateSlide() {
  const slideStyle = getComputedStyle(slideElements[0]);
  const slideWidth = slideElements[0].offsetWidth;
  const marginRight = parseInt(slideStyle.marginRight);
  const moveX = (slideWidth + marginRight) * currentIndex;

  slides.style.transform = `translateX(-${moveX}px)`;
}


btnRight.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlide();
});

btnLeft.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlide();
});

