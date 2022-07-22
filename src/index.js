import _ from 'lodash';
import './css/style.scss';
import './css/reset.scss';
import { initMenu, currentPage } from './modules/menu';
import homePage from './modules/homepage';
import platesPage from './modules/plates';
import contactPage from './modules/contact';
import Animations from './modules/animations';

const app = document.getElementById('content');

const circle1 = document.getElementById('circle-1');
const circle1Pos = circle1.getBoundingClientRect();
const circle2 = document.getElementById('circle-2');
const circle2Pos = circle2.getBoundingClientRect();

app.appendChild(initMenu());
app.appendChild(homePage());

const changePage = () => {
  let section = app.querySelector('section');
  app.removeChild(section);
  switch (currentPage()) {
    case 0:
      app.appendChild(homePage());
      break;
    case 1:
      app.appendChild(platesPage());
      break;
    case 2:
      app.appendChild(contactPage());
      break;
    default:
      app.appendChild(homePage());
      break;
  }
}


document.addEventListener('mousemove', e => Animations(circle1, circle1Pos, e.clientX, e.clientY)); // fontion pour le paralax des cercles
document.addEventListener('mousemove', e => Animations(circle2, circle2Pos, e.clientX, e.clientY)); // fontion pour le paralax des cercles


const menuListen = document.querySelector('ul');
menuListen.addEventListener('click', () => changePage());

