export default function mobileMenu() {
  const btnMenu = document.querySelector('button.btn-menu');

  btnMenu.addEventListener('click', () => {
    const menu = document.querySelector('header nav');
    const windowWidth = window.innerWidth;

    if (menu.classList.contains('active')) {
      menu.animate(
        [
          { transform: 'translateX(0px)' },
          { transform: `translateX(-${windowWidth}px)` },
        ],
        {
          duration: 300,
          fill: 'forwards',
          easing: 'ease-out',
        }
      );

      setTimeout(() => {
        menu.classList.remove('active');
      }, 300);
    } else {
      menu.classList.add('active');
      menu.animate(
        [
          { transform: `translateX(-${windowWidth}px)` },
          { transform: 'translateX(0px)' },
        ],
        {
          duration: 300,
          fill: 'forwards',
          easing: 'ease-out',
        }
      );
    }
  });
}

function animElement() {}
