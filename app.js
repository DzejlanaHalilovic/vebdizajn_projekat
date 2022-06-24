const app = Vue.createApp({
    data() {
      return {
        members: [
          {
            id: "1",
            name: "Goran Stanković",
            phone: "066/154-14-87",
            email: "gorantankovic@gmail.com",
          
            image: "https://i.pravatar.cc/300?img=58",
            
          },
          {
            id: "2",
            name: "Milan Mitrović",
            phone: "063/124-48-72",
            email: "milanmitrovic@gmail.com",
          
            image: "https://i.pravatar.cc/300?img=61",
          },
          {
            id: "3",
            name: "Nikola Dačović",
            phone: "061/148-55-67",
            email: "nikoladacovic@gmail.com",
           
            image: "https://i.pravatar.cc/300?img=53",
          },
         
        ],
        counter: 0,
        donateVisible: false,
        thanks: false,
      };
    },
  
  });
  
  app.component("member", {
    props: ["name", "phone", "email","message", "image"],
    template: `
    <li>
      <h2>{{ name }}</h2>
      <ul v-if="detailsAreVisible" class="inner">
      <li><img :src='image' /></li>
        <li><i class="fas fa-phone-alt"></i> &nbsp;&nbsp; {{ phone }}</li>
        <li><i class="fas fa-envelope"></i> &nbsp;&nbsp; {{ email }}</li>
        
      </ul>
      <button @click="toggleDetails()">
        {{ detailsAreVisible ? (title == 'Our team' ? 'Hide' : 'Sakrij') : (title == 'Our team' ? 'Show' : 'Prikaži') }}  {{ title == 'Our team' ? 'details' : 'detalje' }}
      </button>
      
    </li>
    `,
    data() {
      return {
        detailsAreVisible: false,
        title: document.title,
      };
    },
  
    methods: {
      toggleDetails() {
        this.detailsAreVisible = !this.detailsAreVisible;
      },
    },
  });
  
  app.mount("#app");