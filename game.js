const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
const numberIndicator = document.querySelector('.numbers');

let active = 0;
const totalItems = items.length;
let timer; // Variável para o autoplay

// Função principal que atualiza o slide
function showSlide(direction) {
  // Remove a classe 'active' do item e do ponto atuais
  document.querySelector('.item.active').classList.remove('active');
  document.querySelector('.dot.active').classList.remove('active');

  // Calcula o próximo índice
  if (direction === 'next') {
    active = (active + 1) % totalItems;
  } else if (direction === 'prev') {
    active = (active - 1 + totalItems) % totalItems;
  }

  // Adiciona a classe 'active' ao novo item e ponto
  items[active].classList.add('active');
  dots[active].classList.add('active');

  // Atualiza o número do indicador
  numberIndicator.textContent = String(active + 1).padStart(2, '0');

  // Reinicia o timer do autoplay
  resetTimer();
}

// Função para avançar para o próximo slide
function nextSlide() {
  showSlide('next');
}

// Função para voltar para o slide anterior
function prevSlide() {
  showSlide('prev');
}

// Configura os eventos de clique nos botões
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// --- Autoplay (Opcional) ---
// Função que reinicia o timer
function resetTimer() {
  clearInterval(timer); // Limpa o timer anterior
  timer = setInterval(nextSlide, 8000); // Inicia um novo timer de 5 segundos
}

// Inicia o autoplay quando a página carrega
resetTimer();
