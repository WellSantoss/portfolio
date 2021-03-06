export default function mobileMenu() {
  const btnMenu = document.querySelector('button.btn-menu');
  const menu = document.querySelector('header nav');
  const menuItems = menu.querySelectorAll('ul li');
  const windowWidth = window.innerWidth;

  menuItems.forEach((item) => {
    item.addEventListener('click', () => {
      if (menu.classList.contains('active') && windowWidth <= 768) {
        animElement(menu, 0, -windowWidth);
        btnMenu.classList.remove('active');

        setTimeout(() => {
          menu.classList.remove('active');
        }, 300);
      }
    });
  });

  btnMenu.addEventListener('click', () => {
    if (menu.classList.contains('active')) {
      animElement(menu, 0, -windowWidth);
      btnMenu.classList.remove('active');

      setTimeout(() => {
        menu.classList.remove('active');
      }, 300);
    } else {
      menu.classList.add('active');
      btnMenu.classList.add('active');
      animElement(menu, -windowWidth, 0);
    }
  });
}

function animElement(element, from, to) {
  element.animate(
    [
      { transform: `translateX(${from}px)` },
      { transform: `translateX(${to}px)` },
    ],
    {
      duration: 300,
      fill: 'forwards',
      easing: 'ease-out',
    }
  );
}
