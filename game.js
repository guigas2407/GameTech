document.querySelectorAll('.container').forEach((container) => {
  const items = container.querySelectorAll('.item');
  const dots = container.querySelectorAll('.dot');
  const numberIndicator = container.querySelector('.numbers');
  const prevButton = container.querySelector('.arrow-btn-prev');
  const nextButton = container.querySelector('.arrow-btn-next');
  let active = 0;
  let timer;

  function showSlide(direction) {
    items[active].classList.remove('active');
    dots[active].classList.remove('active');

    if (direction === 'next') {
      active = (active + 1) % items.length;
    } else if (direction === 'prev') {
      active = (active - 1 + items.length) % items.length;
    }

    items[active].classList.add('active');
    dots[active].classList.add('active');
    if (numberIndicator) {
      numberIndicator.textContent = String(active + 1).padStart(2, '0');
    }
    resetTimer();
  }

  function nextSlide() {
    showSlide('next');
  }
  function prevSlide() {
    showSlide('prev');
  }

  if (prevButton) prevButton.addEventListener('click', prevSlide);
  if (nextButton) nextButton.addEventListener('click', nextSlide);

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(nextSlide, 5000);
  }
  resetTimer();
});
