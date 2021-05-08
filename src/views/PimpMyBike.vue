<template>
  <div id="body">
    <NavBar/>

    <div id="main_page">
      <div id="content">
        <div id="page" style="text-align: center">
          <b-img id="logo_24_generique" :src="require('../assets/logo_24.png')" alt="logo_24_generique" fluid></b-img>
          <h1>Pimp My Bike</h1>
          <br>
          <h4>Retrouvez toutes les informations relatives aux challenge Pimp my bike 46ème édition</h4>
          <br>
          <br>
          <p>
              Cette année, la course folklo ne peut avoir lieu à cause des restrictions sanitaires…😥 mais on vous rassure, l’équipe des 24 Heures vous a concocté un nouveau challenge à la place ! 🤩 Nous l’avons rapidement introduit dans le post précédent : c’est le challenge Pimp my Bike !
              <br><br>
              Pour participer, décores ton vélo, transforme-le… rends-le le plus original possible ! 🤪
              <br><br>
              Ensuite, du dimanche 16 mai au dimanche 23 mai, tu auras une semaine pour nous envoyer une photo ou une vidéo de ton œuvre sur
              <a class="link"
                 href="https://www.facebook.com/events/462940684927497/?acontext=%7B%22event_action_history%22%3A[%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22page_upcoming_events_card%22%2C%22surface%22%3A%22page%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22create_dialog%22%7D]%7D&amp;onload_action=online_event_upsell_dialog">
                notre événement facebook des courses.
              </a>
              Un vote aura lieu le dimanche entre les 6 meilleures participations choisies par notre équipe sur la page facebook des 24h. Le lundi 24, nous annoncerons le grand gagnant, qui sera bien évidemment récompensé 😉
              <br><br>
              Le règlement du concours
            <a class="link" href="https://www.24heures.org/documents/R%C3%A9glement-Concours-Pimp-my-bike.pdf">
              sur ce lien
            </a>
              <br><br>
              On compte sur vous, soyez créatifs !
          </p>
          <br>

        </div>
      </div>
    </div>

    <FootBar/>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import FootBar from '../components/FootBar.vue'

export default {
  name: "PimpMyBike",
  components: {
    NavBar,
    FootBar
  }
}
</script>

<style scoped>

#body{
  height: auto;
  width: auto;
  margin: 0;
}

#main_page {
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.9) 100%), url(../assets/pimpmybike.jpg);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#content {
  padding: 10%;
  width: auto;
  height: auto;
  margin: auto;
}

#page {
  background-color: white;
  padding: 4%;
}

.button {
  margin: 0.5em;
}

.link {
  color: #007bff !important;
}
</style>
