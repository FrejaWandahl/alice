/** Javascript - Alices resturant **/

console.log('alices.js = ok')



//Selvstudiedag 2
//Burgermenu, som objekt

/* Funktion for burgermenu åben */
function openNav() {
document.getElementById("mySidebar").style.width = "250px";
document.getElementById("main").style.marginLeft = "250px";
}

/* Funktion for brugermenu lukket */
function closeNav() {
document.getElementById("mySidebar").style.width = "0";
document.getElementById("main").style.marginLeft = "0";
}


// Globale variabler gemmes
let d = new Date(); // kan genbruges andre steder
let uge = ['søndag','mandag','tirsdag','onsdag','torsdag','fredag','lørdag'];
let maaneder = ['januar','februar','marts','april','maj','juni','juli','august','september','oktober','november','december'];


//Selvstudiedag 1 spg. 1 og 2
// Footer som objekt
const info = {
  author: 'Freja Wandahl Petersen',
  dag: uge[ d.getDay() ],
  maaned: maaneder[ d.getMonth() ],
  dagImaaned: d.getDate(),
  aar: d.getFullYear(),
  time: d.getHours(),
  minut: d.getMinutes(),
  restaurant: 'Alice\'s Restaurant',
  adresse: 'Volden 234 <br>8000 Aarhus C',
  telefon: '12 34 56 78',

  // En funktion fremstilles
  skrivTilFooter: function() {
    console.log('footeren.skrivTilFooter() = aktiv');
    footerInfo.innerHTML += `
      <div>
        &copy; Tutorial - imaginary restaurant<br>
        by ${this.author}
        ${this.dag}
        ${this.dagImaaned}.
        ${this.maaned}
        ${this.aar}.
      </div>
    `;
  },
  skrivAdresse: function() {
    footerInfo.innerHTML += `
      <div class="adresse">
        <h3>${this.restaurant}</h3>
        <p>
          ${this.adresse}<br>
          ${this.telefon}
        </p>
      </div>
    `
  }
}

info.skrivAdresse();
info.skrivTilFooter();

//Selvstudiedag 1 spg. 3
// Der laves et array med medarbejdere
let vis, ansatte = [
  ' Ejer: Alice Thunderbird',
  'Tjener: Peter Petersen',
  'Tjener: Trille Thomsen',
  'Tjener: Cecilie Møller',
  'Tjener: Trols Hansen',
  'Opvask: Hanne Petersen',
  'Opvask: Sylvester Carlsen',
  'Opvask: Mille Millesen',
  'Opvask: Alma Sørensen',
  'Pedel: Evig Wandahl',
  'Tjener: Bertram Jørgensen'
].sort(); // De ansatte sorteres alfabetisk

for (vis in ansatte){
  hvem.innerHTML += '<li>' + ansatte[ vis ] + '</li>';
}


//Selvstudiedag 1 spg. 4
//Citater fra tidligere gæster gemmes
let citater = [
  '"Lækkert mad og fantastisk service" <br> - Jørge ',
  '"Hyggelig baggård med masser af stemning" <br> - Louise',
  '"Bedste kartoffelsuppe jeg har smagt" <br> - Rikke',
  '"Kan klart anbefale Alices Resturant, flinke tjenere" <br> -Thomas',
  '"Varmeste anbefalinger herfra" <br> -Otto'
];


// Selvkørende funktion, som selv skifter citat fra tidligere kunder
(function dagensCitat() {
  rndNo = Math.floor(Math.random() * citater.length );
  citat.innerHTML = '<em>' +  citater[ rndNo ] + '</em>';
})();


//Selvstudiedag 3
//Book bord formular underside
//form del 1
btn1.addEventListener('click',function(){
  radio.style.display = 'block';
  navn.style.display = 'none';
})

//form del 2
btn2.addEventListener('click',function(){
  tjek.style.display = 'block';
  radio.style.display = 'none';
})

//form del 3
btn2.addEventListener('click',function(){
  tjek.style.display = 'none';
  lastField.style.display = 'block';
})
