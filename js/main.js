'use strict';

const listElement = document.querySelector ('.js-list');
const kittenImage = 'https://dev.adalab.es/gato-siames.webp';
const kittenName = 'Anastacio';
const kittenDesc =
  ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenRace = 'Siamés';
const kittenImage1 = 'https://dev.adalab.es/sphynx-gato.webp';
const kittenName1 = 'Fiona';
const kittenDesc1 =
  'Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';
const kittenRace1 = 'Sphynx';
const kittenImage2 = 'https://dev.adalab.es/maine-coon-cat.webp';
const kittenName2 = 'Cielo';
const kittenDesc2 =
  '   Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad.Sus ojos son grandes y las orejas resultan largas y en punta.';
const kittenRace2 = 'Maine Coon';

const kittenOne = `<li class="card">




<article>
  <img
    class="card_img"
    src=${kittenImage}
    alt="gatito"
  />
  <h3 class="card_title " >${kittenName}</h3>
  <h4 class="card_race">${kittenRace}</h4>
  <p class="card_description">${kittenDesc}</p>
</article>
</li>`;
const kittenTwo = ` <li class="card">
<img
  class="card_img"
  src=${kittenImage1}
  alt="sphynx-cat"
/>
<h3 class="card_title">${kittenName1}</h3>
<h4 class="card_race">${kittenRace1}</h4>
<p class="card_description">
  ${kittenDesc1}
</p>
</li>`;
const kittenThree = `  <li class="card">
<img
  class="card_img"
  src=${kittenImage2}
  alt="maine-coon-cat"
/>
<h3 class="card_title">${kittenName2}</h3>
<h4 class="card_race">${kittenRace2}</h4>
<p class="card_description">
  ${kittenDesc2}
</p>
</li>`;

listElement .innerHTML = kittenOne + kittenTwo + kittenThree;
