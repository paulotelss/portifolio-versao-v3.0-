"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var interBubble = document.querySelector('.interactive');
  var curX = 0;
  var curY = 0;
  var tgX = 0;
  var tgY = 0;
  var _move = function move() {
    curX += (tgX - curX) / 20;
    curY += (tgY - curY) / 20;
    interBubble.style.transform = "translate(".concat(Math.round(curX), "px, ").concat(Math.round(curY), "px)");
    requestAnimationFrame(_move);
  };
  window.addEventListener('mousemove', function (event) {
    tgX = event.clientX;
    tgY = event.clientY;
  });
  _move();
});
document.addEventListener('DOMContentLoaded', function () {
  var sections = document.querySelectorAll('.sobre');
  var observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Define o percentual de visibilidade para considerar a entrada
  };
  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target); // Para não adicionar a classe mais de uma vez
      }
    });
  }, observerOptions);
  sections.forEach(function (section) {
    observer.observe(section);
  });
});

// script.js

document.addEventListener('DOMContentLoaded', function () {
  var prevButton = document.querySelector('.prev');
  var nextButton = document.querySelector('.next');
  var contentGrid = document.querySelector('.content-grid');
  var itemWidth = 300; // Ajuste este valor com base na largura dos itens
  var scrollStep = itemWidth + 20; // Largura do item + gap entre itens

  // Função para atualizar o estado dos botões com base na posição de rolagem
  function updateButtons() {
    if (contentGrid.scrollLeft <= 0) {
      prevButton.disabled = true;
    } else {
      prevButton.disabled = false;
    }
    if (contentGrid.scrollLeft >= contentGrid.scrollWidth - contentGrid.clientWidth) {
      nextButton.disabled = true;
    } else {
      nextButton.disabled = false;
    }
  }

  // Inicializa o estado dos botões
  updateButtons();

  // Evento para o botão "Voltar"
  prevButton.addEventListener('click', function () {
    contentGrid.scrollBy({
      left: -scrollStep,
      behavior: 'smooth'
    });
    setTimeout(updateButtons, 300); // Aguarda o término da animação de rolagem
  });

  // Evento para o botão "Mais"
  nextButton.addEventListener('click', function () {
    contentGrid.scrollBy({
      left: scrollStep,
      behavior: 'smooth'
    });
    setTimeout(updateButtons, 300); // Aguarda o término da animação de rolagem
  });

  // Evento de rolagem manual
  contentGrid.addEventListener('scroll', updateButtons);
});
