export default function darkTheme() {
  const btnSwitcher = document.querySelector('input#switch');
  const btnSwitcher2 = document.querySelector('input#switch2');
  const html = document.documentElement;

  if (window.localStorage.getItem('theme') == 'dark') {
    if (!html.classList.contains('dark')) {
      html.classList.add('dark');
    }

    btnSwitcher.checked = true;
    btnSwitcher2.checked = true;
  }

  btnSwitcher.addEventListener('click', () => {
    html.classList.toggle('dark');
    let theme = 'light';

    if (html.classList.contains('dark')) {
      theme = 'dark';
    }

    window.localStorage.setItem('theme', theme);
  });

  btnSwitcher2.addEventListener('click', () => {
    html.classList.toggle('dark');
    let theme = 'light';

    if (html.classList.contains('dark')) {
      theme = 'dark';
    }

    window.localStorage.setItem('theme', theme);
  });
}
