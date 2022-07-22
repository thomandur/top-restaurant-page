import LogoImg from '../images/logo.svg';

const _menuItem = [
  {
    label: 'Le restaurant',
    id: 0
  },
  {
    label: 'Notre menu',
    id: 1
  },
  {
    label: 'Contactez-nous',
    id: 2
  }
];

let _page = 0;

const setPage = (id) => {
  _page = id;
}

const currentPage = () => {
  return _page;
}


const initMenu = () => {
  const navContainer = document.createElement('nav');
  const img = new Image();
  img.src = LogoImg;
  navContainer.appendChild(img);
  const menu = document.createElement('ul');

  _menuItem.forEach(item => {
    const el = document.createElement('li');
    el.innerHTML = item.label;
    el.addEventListener('click', () => setPage(item.id));
    menu.appendChild(el);
  });
  
  navContainer.appendChild(menu);
  return navContainer;
}

export { initMenu, currentPage }