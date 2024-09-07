document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.querySelector('.interactive');
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const move = () => {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(move);
    };

    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });

    move();
});




document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.sobre');
  
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 // Define o percentual de visibilidade para considerar a entrada
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target); // Para não adicionar a classe mais de uma vez
        }
      });
    }, observerOptions);
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  











// script.js

document.addEventListener('DOMContentLoaded', function() {
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const contentGrid = document.querySelector('.content-grid');

  const itemWidth = 300; // Ajuste este valor com base na largura dos itens
  const scrollStep = itemWidth + 20; // Largura do item + gap entre itens

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
  prevButton.addEventListener('click', () => {
    contentGrid.scrollBy({ left: -scrollStep, behavior: 'smooth' });
    setTimeout(updateButtons, 300); // Aguarda o término da animação de rolagem
  });

  // Evento para o botão "Mais"
  nextButton.addEventListener('click', () => {
    contentGrid.scrollBy({ left: scrollStep, behavior: 'smooth' });
    setTimeout(updateButtons, 300); // Aguarda o término da animação de rolagem
  });

  // Evento de rolagem manual
  contentGrid.addEventListener('scroll', updateButtons);
});
