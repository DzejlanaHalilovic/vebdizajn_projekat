const app = Vue.createApp({
 
  template :`
  
  
  <div class="nav">Nording</div>
  <div class=" row">
    <div class="centriraj">
      <div class="dogadjaj">
        <h2>Dobrodošli!</h2>
        <p>Nording je nova web development grupa koja se prvenstveno orijentiše za izradu veb dizajna.Budite i vi naš klijent!</p>
        <p>Takođe vam nudimo i opcije react sa vlasnikom kompanije  <span >Dzejlana Halilovic.</span></p>
        <p> Student druge godine softverskog inženjerstva na Državnom univerzitetu u Novom Pazaru.</p>
        <p>Pretvaranje ideje u stvarnost je nas moto!
         Nording svakodnevno ulazi u izazov sa klijentima,
         </p>
         <p> u oblasti razvoja web aplikacija, poslovnih aplikacija, 
         web dizajna i implementacija softverskih rešenja.</p>
      
    </div>  
      </div>
      <div class="slika"><img class="img-circle" src="mojaslika.png"  /></div>
      </div>
      <div class="Sekcija padd-15ld">
 
 

 <div class="Sekcija padd-15ld">
 <h2>Naše usluge</h2>
 
 <div class="row novi">
 <div class="section-item">
 <div class="icon">
 <i class="fa fa-mobile-alt"></i>
 </div>
 <h2>Web Design</h2>
    <contact1></contact1>
 </div>
 <div class="section-item">
 <div class="icon">
 <i class="fa fa-code"></i>
 
 </div>
 <h2>Back-end development</h2>
 
 <contact2></contact2>
 </div>
 <div class="section-item">
 <div class="icon">
 <i class="fa fa-laptop-code"></i>
 </div>
 <h2>Front-end development</h2>
 <contact3></contact3>
 </div>
 </div>
 </div> 
 
 <div class="Sekcija padd-15ld">
 <h2>Naši projekti</h2>
 
 <div class="row-novi">
 <div class="section-item novost">
 <a href="../PROJ.html">
 <img src="https://img.freepik.com/free-psd/medical-psd-template_203846-5.jpg?size=338&ext=jpg" class="img-fluid" alt="nesto">
              
 </a>
 </div>
 
 <div class="section-item novost">
 
 <img src="https://img.freepik.com/free-psd/fruits-food-online-ecommerce-store-web-page-template_120329-73.jpg?size=338&ext=jpg" class="img-fluid" alt="nesto">
         
 </div>
 <div class="section-item novost">
 <img src="https://img.freepik.com/free-vector/web-page-vertical-design-set-with-new-project-symbols_1284-10212.jpg?size=338&ext=jpg" class="img-fluid" alt="nesto">
 </div>
 
 </div>
 
 <div class="row-novi">
 <div class="section-item novost">
 <img src="https://img.freepik.com/free-vector/beautiful-vegan-restaurant-landing-page-template_1361-898.jpg?size=338&ext=jpg" class="img-fluid" alt="nesto">
 </div>
 <div class="section-item novost">
 <img src="https://img.freepik.com/free-psd/corporate-creative-design-agency-landing-page-banner_85586-292.jpg?size=338&ext=jpg" class="img-fluid" alt="nesto">
 
 </div>
 <div class="section-item novost">
 <img src="https://img.freepik.com/free-vector/travel-adventure-landing-page-template_1361-896.jpg?size=338&ext=jpg" class="img-fluid" alt="nesto">
 </div>
 </div>
 </div>
 
 <div class="about">
 
 <h2 style="margin-left:1rem">Kontakt</h2>
 
 
 <div class="row-novi">
 <div class="about-icon">
 
 <h2>Naše središte</h2>
 <a href="https://www.google.com/maps/place/%D0%9D%D0%BE%D0%B2%D0%B8+%D0%9F%D0%B0%D0%B7%D0%B0%D1%80/@43.1422279,20.4804034,13z/data=!3m1!4b1!4m5!3m4!1s0x4756283de66eab45:0x2ea7623f36196cd8!8m2!3d43.1406733!4d20.5181368?hl=sr">
 <i class="fas fa-map-marker-alt"></i>
 </a>
 <h3>Novi Pazar,Srbija</h3>
 </div>
 <div class="about-icon">
 
 
 <h2>Telefon</h2>
 <a href="https://www.google.com/maps/place/%D0%9D%D0%BE%D0%B2%D0%B8+%D0%9F%D0%B0%D0%B7%D0%B0%D1%80/@43.1422279,20.4804034,13z/data=!3m1!4b1!4m5!3m4!1s0x4756283de66eab45:0x2ea7623f36196cd8!8m2!3d43.1406733!4d20.5181368?hl=sr">
 <i class="fas fa-phone"></i>
 </a>
 <h3>+389 456789</h3>
 </div>
 <div class="about-icon">
 <h2>Email</h2>
 <a href="http://www.gmail.com/">
 <i class="fas fa-envelope"></i>
 </a>
 <h3>nording@gmail.com</h3>
 </div>
 </div>
 </div>
 <div class="footer"><p> <span class="name"> Nording</span></p> </div>
  
  `
  
 
 ,
 

  
 });
 app.component('contact1', {
  template: `
  <li >
   
    <button class="dodaj" @click="toggleDetails()">
      {{ detailsAreVisible ? 'Ukloni' : 'Prikaži' }} Detalje
    </button>
    
    <ul v-if="detailsAreVisible">
    <li><strong>{{ sekcija1.name }}</strong></li>
      <li><strong> {{ sekcija1.Text}} </strong></li>

    </ul>
  </li>
  `,

  
  data() {
    return {
      detailsAreVisible: false,
      sekcija1: {
        id: 'manuel',
        name: 'Izrada web dizajna',
        Text: 'Kreiranje veb dizajna uz pomoć html i css biblioteka,izrađivanje jedinstvenog dizajna po želji klijenta,po izuzetno povoljnoj ceni.U nastavku pogledajte nekoliko naših projekata!',
        
      },

    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
 }
 )
 app.component('contact2', {
  template: `
  <li >
   
    <button class="dodaj" @click="toggleDetails2()">
      {{ detailsAreVisible ? 'Ukloni' : 'Prikaži' }} Detalje
    </button>
    
    <ul v-if="detailsAreVisible">
    <li><strong>{{ sekcija2.name }}</strong></li>
      <li><strong> {{ sekcija2.Text}} </strong></li>

    </ul>
  </li>
  `,



  data() {
    return {
      detailsAreVisible: false,
      sekcija2: {
        id: 'manuel',
        name: 'Razvoj back-enda ',
        Text: 'Kreiranje i razvoj back-enda složenih MERN-stack aplikacija,uz poznavanje React.js i Vue.js i mogućnost kreiranja full-stack aplikacije u zavisnosti od želje klijenta.Programeri NWD tima vode računa o osiguravanju podataka naših klijenata.Pogledajte neke od naših projekata u nastavku! ',
        
      },

    };
  },
  methods: {
    toggleDetails2() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});
app.component('contact3', {
  template: `
  <li >
   
    <button class="dodaj" @click="toggleDetails1()">
      {{ detailsAreVisible ? 'Ukloni' : 'Prikaži' }} Detailje
    </button>
    
    <ul v-if="detailsAreVisible">
    <li><strong>{{ sekcija3.name }}</strong></li>
      <li><strong> {{ sekcija3.Text}} </strong></li>

    </ul>
  </li>
  `,



  data() {
    return {
      detailsAreVisible: false,
      sekcija3: {
        id: 'manuel',
        name: 'Razvoj front-enda ',
        Text: 'Kreiranje i razvoj front-enda uz pomoć javascript framework-ova kao što su Reactjs i Vuejs,po izuzetno povoljnim cenama.Pogledajte neke naše prethodne projekte u nastavku!',
        
      },

    };
  },
  methods: {
    toggleDetails1() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
  
}

);

  app.mount('#app')
  
  
  
