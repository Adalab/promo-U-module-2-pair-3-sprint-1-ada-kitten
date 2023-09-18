'use strict';

const listElement = document.querySelector ('.js-list');
const input_search_desc = document.querySelector('.js_in_search_desc');
const btnAñadir = document.querySelector ('.js-btn-add');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMessageError = document.querySelector('.js-label-error');
const newFormElement = document.querySelector('.collapsed');
const btnmas = document.querySelector('.js-btn-mas');
const buttonSearch = document.querySelector('.js-button-search');

const inputRace = document.querySelector('js-input-race');

//ejemplo de un objeto con la información del primer gatito
const kittenData_1 = {
  image: 'https://dev.adalab.es/gato-siames.webp',
  name: 'Anastacio',
  desc: ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
  race: 'Siamés',
};
const kittenData_2 = {
  image: 'https://dev.adalab.es/sphynx-gato.webp',
  name: 'Fiona',
  desc: 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.',
  race: 'Sphynx',
};
const kittenData_3 = {
  image: 'https://dev.adalab.es/maine-coon-cat.webp',
  name: 'Cielo',
  desc: ' Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad.Sus ojos son grandes y las orejas resultan largas y en punta.',
  race: 'Maine Coon',
};



const kittenOne = `<li class="card"><article><img
    class="card_img"
    src=${kittenImage}
    alt="gatito"  />
  <h3 class="card_title " >${kittenName}</h3>
  <h4 class="card_race">${kittenRace}</h4>
  <p class="card_description">${kittenDesc}</p>
</article>
</li>`;
const kittenTwo = ` <li class="card"><img
  class="card_img"
  src=${kittenImage1}
  alt="sphynx-cat"/>
<h3 class="card_title">${kittenName1}</h3>
<h4 class="card_race">${kittenRace1}</h4>
<p class="card_description">${kittenDesc1}</p></li>`;
const kittenThree = `  <li class="card"><img
  class="card_img"
  src=${kittenImage2}
  alt="maine-coon-cat"/>
<h3 class="card_title">${kittenName2}</h3>
<h4 class="card_race">${kittenRace2}</h4>
<p class="card_description">${kittenDesc2}</p>
</li>`;


listElement.innerHTML += kittenOne;
listElement.innerHTML += kittenTwo;
listElement.innerHTML += kittenThree;

const descrSearchText = input_search_desc.value;

function addNewKitten(event) {
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
    if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMessageError.innerHTML = "¡Uy! parece que has olvidado algo";
    
  } else {
 labelMessageError.innerHTML = "Se ha añadido un gatito nuevo";
  }
}

/*linkNewFormElement.addEventListener('click', handleClickNewCatForm);*/

function showNewCatForm() {
  newFormElement.classList.remove('collapsed');
}
function hideNewCatForm() {
  newFormElement.classList.add('collapsed');
}

function handleClickNewCatForm(event) {
  console.log('Holis');
  event.preventDefault();
  if (newFormElement.classList.contains('collapsed')) {
    newFormElement.classList.remove('collapsed');
  } else {
    newFormElement.classList.add('collapsed');
  }
}

function renderKitten(kittenData) {
  /*const valuePhoto = inputPhoto.value;
  const valueDesc = inputDesc.value;
  const valueName = inputName.value;
  const valueRace = inputRace.value;*/
  this.kittenData.name = name;
  this.KittenData.image = image;
  this.KittenData.desc = desc;
  this.KittenData.race = race;
  return 
}


const filterKitten = (event) => {
 
  if (kittenDesc.includes(descrSearchText)) {
    listElement.innerHTML += kittenOne;
  }
  if (kittenDesc1.includes(descrSearchText)) {
    listElement.innerHTML += kittenTwo;
  }
  if (kittenDesc2.includes(descrSearchText)) {
    listElement.innerHTML += kittenThree;
  }
};

// function renderKitten = () => {
//   const li = <li>
//   <img src="${kittenImage}"alt="gatito"/>
//   <h3 class="card_title " >${kittenName}</h3>
//   <h4 class="card_race">${kittenRace}</h4>
//   <p class="card_description">${kittenDesc}</p>
    
//   </li>;
//   return li;
// };
// const handleListKitten = (event) => {
//   event.preventDefault();
//   listElement.innerHTML = renderKitten(${kittenOne}+${kittenTwo}+${kittenThree})
// };


buttonSearch.addEventListener('click', filterKitten);


btnAñadir.addEventListener ('click', (addNewKitten) 
  
);


btnmas.addEventListener('click', handleClickNewCatForm);