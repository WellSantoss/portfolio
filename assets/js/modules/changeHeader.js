export default function changeHeader() {
  const header = document.querySelector('header');
  const hero = document.querySelector('section#hero');

  document.addEventListener('scroll', function () {
    const scrollPos = window.pageYOffset;

    if (scrollPos >= 100) {
      header.classList.add('scroll');
      hero.classList.add('scroll');
    } else {
      header.classList.remove('scroll');
      hero.classList.remove('scroll');
    }
  });
}
