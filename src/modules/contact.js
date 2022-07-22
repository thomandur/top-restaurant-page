const createInput= (type, name, label) => {
  const container = document.createElement('div');
  const input = document.createElement('input');
  const title = document.createElement('label');
  input.setAttribute('type', type);
  input.setAttribute('name', name);

  title.setAttribute('for', name);
  title.innerHTML = label;

  container.appendChild(title);
  container.appendChild(input);

  return container;
}
const createMap = () => {
//<iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=57.75787353515626%2C80.40930310337673%2C61.68548583984376%2C80.8081201866388&amp;layer=mapnik&amp;marker=80.61080995081768%2C59.7216796875" style="border: 1px solid black"></iframe>
  const el = document.createElement('iframe');
  el.setAttribute('width', '100%');
  el.setAttribute('height', '350');
  el.setAttribute('frameborder', '0');
  el.setAttribute('scrolling', 'no');
  el.setAttribute('marginheight', '0');
  el.setAttribute('marginwidth', '0');
  el.setAttribute('src', 'https://www.openstreetmap.org/export/embed.html?bbox=57.75787353515626%2C80.40930310337673%2C61.68548583984376%2C80.8081201866388&amp;layer=mapnik&amp;marker=80.61080995081768%2C59.7216796875');

  return el;
}

const contactForm = (el) => {
  let msgBox = document.createElement('textarea');
  let form = document.createElement('form');
  let submitBtn = document.createElement('input');

  let name = createInput('text', 'name', 'Nom et prénom :');
  let object = createInput('text', 'object', 'Objet du mail :');
  msgBox.innerHTML = 'Ecrivez votre message ici ...'

  submitBtn.setAttribute('type', 'submit');
  submitBtn.setAttribute('value', 'Envoyer');


  form.appendChild(name);
  form.appendChild(object);
  form.appendChild(msgBox);
  form.appendChild(submitBtn);
  
  el.appendChild(form);

  return el;

}

const contactPage = () => {
  var el = document.createElement('section');
  el.setAttribute('id', 'contact-page');

  contactForm(el);
  el.appendChild(createMap());

  return el;
}

export default contactPage;