// Seleção de elementos
const images = document.querySelectorAll('.carousel-image');
const indicators = document.querySelectorAll('.indicator');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
let autoPlayInterval;

// Função para mostrar imagem específica
function showImage(index) {
    // Remove classe active de todas as imagens e indicadores
    images.forEach(img => img.classList.remove('active'));
    indicators.forEach(ind => ind.classList.remove('active'));
    
    // Adiciona classe active na imagem e indicador corretos
    images[index].classList.add('active');
    indicators[index].classList.add('active');
    
    currentIndex = index;
}

// Função para próxima imagem
function nextImage() {
    let newIndex = (currentIndex + 1) % images.length;
    showImage(newIndex);
}

nextBtn.addEventListener('click', () =>{
    nextImage();
    resetAutoPlay();
})

// Função para imagem anterior
function prevImage() {
    let newIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(newIndex);
}

prevBtn.addEventListener('click', () => {
    prevImage();
    resetAutoPlay();
});

// Event listeners para indicadores
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        showImage(index);
        resetAutoPlay();
    });
});


// Auto-play
function startAutoPlay() {
    autoPlayInterval = setInterval(nextImage, 5000);
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

function resetAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
}

// Pausar auto-play quando hover no carrossel
const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', stopAutoPlay);
carousel.addEventListener('mouseleave', startAutoPlay);

// Iniciar auto-play
startAutoPlay();


const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');
const menuLinks = document.querySelectorAll('nav a');

function toggleMenu() {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
  overlay.classList.toggle('active');
}

hamburger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    toggleMenu();
  });
});