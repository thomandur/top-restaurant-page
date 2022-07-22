import imgYassa from '../images/yassa.png';
import imgBoeufCoco from '../images/boeuf-coco.png';
import imgMafe from '../images/mafe.png';

const _allPlates = [
  {
    name: 'Poulet Mafé',
    price: 10.5,
    image: imgMafe,
    description: 'Le mafé est un plat typique du Sénégal qui allie une viande généralement blanche à une préparation épicée avec des cacahuètes.',
    ingredients: [
      'Poulet', 'Cacahuètes', 'Bananes plantin'
    ]
  },
  {
    name: 'Boeuf Coco',
    price: 11.5,
    image: imgBoeufCoco,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt orci vel erat semper, molestie feugiat arcu efficitur. Duis id quam et felis luctus convallis quis eget orci.',
    ingredients: [
      'Boeuf', 'Lait de coco', 'Riz'
    ]
  },
  {
    name: 'Yassa',
    price: 11,
    image: imgYassa,
    description: 'Le poulet Yassa est un plat traditionnel de la cuisine sénégalaise.',
    ingredients: [
      'Poulet', 'Oignons', 'Riz'
    ]
  }
]

const renderPlates = (el) => {
  _allPlates.forEach(plate => {
    const plateContainer = document.createElement('div');
    const plateImg = new Image();
    const plateInformations = document.createElement('div');
    const plateName = document.createElement('p');
    const plateDesc = document.createElement('p');
    const ingredientsContainer = document.createElement('p');
    const platePrice = document.createElement('p');
    const plateIngredients = plate.ingredients;
    
    plateContainer.classList.add('plate');
    plateInformations.classList.add('plate-informations');
    plateName.classList.add('name');
    plateDesc.classList.add('description');
    ingredientsContainer.classList.add('ingredients');
    platePrice.classList.add('price');
    
    plateImg.src = plate.image;
    plateName.innerHTML = plate.name;
    plateDesc.innerHTML = plate.description;
    platePrice.innerHTML = `${plate.price}€`;
    ingredientsContainer.innerHTML = plateIngredients.join(', ');

    plateInformations.appendChild(plateName);
    plateInformations.appendChild(plateDesc);
    plateInformations.appendChild(ingredientsContainer);
    plateInformations.appendChild(platePrice);

    plateContainer.appendChild(plateImg);
    plateContainer.appendChild(plateInformations);
    el.appendChild(plateContainer);
  });
}

const platesPage = () => {
  var el = document.createElement('section');
  el.setAttribute('id', 'plates-page');
  renderPlates(el);
  return el;
}

export default platesPage;