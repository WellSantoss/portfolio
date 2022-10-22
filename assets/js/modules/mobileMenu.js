export default function mobileMenu() {
  const btnMenu = document.querySelector('button.btn-menu');
  const menu = document.querySelector('header nav.menu');
  const menuItems = menu.querySelectorAll('ul li');
  const header = document.querySelector('header');
  const hero = document.querySelector('section#hero');

  menuItems.forEach((item) => {
    item.addEventListener('click', () => {
      const windowWidth = window.innerWidth;

      if (menu.classList.contains('active') && windowWidth <= 768) {
        btnMenu.classList.remove('active');
        document.body.classList.remove('overflow');
        menu.classList.remove('active');
      }
    });
  });

  btnMenu.addEventListener('click', () => {
    if (menu.classList.contains('active')) {
      btnMenu.classList.remove('active');
      document.body.classList.remove('overflow');
      menu.classList.remove('active');
    } else {
      header.classList.remove('scroll');
      hero.classList.remove('scroll');
      document.body.classList.add('overflow');
      menu.classList.add('active');
      btnMenu.classList.add('active');
    }
  });
}
