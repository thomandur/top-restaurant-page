import plat1 from '../images/plat1.png';

const createPresentation = () => {
  let article = document.createElement('article');
  let articleInformations = document.createElement('div');
  let articleTitle = document.createElement('h1');
  let articleText = document.createElement('p');
  let articleImg = new Image();
  let btnContainer = document.createElement('div');
  let ctaRsvp = document.createElement('button');
  let ctaContact = document.createElement('button');

  article.classList.add('presentation');
  articleInformations.classList.add('infos');
  
  articleTitle.innerHTML = 'Local food from Africa';
  articleText.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis semper eget sit et. Lorem phasellus montes, tristique euismod gravida eget iaculis ac in. Risus platea tempor, aliquet proin quis accumsan, curabitur ac. Facilisis ligula est elementum imperdiet fames.';
  articleImg.src = plat1;

  btnContainer.classList.add('btnContainer');

  ctaRsvp.classList.add('btn-rsvp');
  ctaContact.classList.add('btn-contact');
  ctaRsvp.innerHTML = 'Réserver';
  ctaContact.innerHTML = 'Nous contacter';
  
  article.appendChild(articleImg);
  article.appendChild(articleInformations);
  articleInformations.appendChild(articleTitle);
  articleInformations.appendChild(articleText);
  articleInformations.appendChild(btnContainer);
  btnContainer.appendChild(ctaRsvp);
  btnContainer.appendChild(ctaContact);

  return article;
}

const homePage = () => {
  let el = document.createElement('section');
  let article = createPresentation();
  el.setAttribute('id', 'presentation');
  

  el.appendChild(article);

  return el;

};

export default homePage