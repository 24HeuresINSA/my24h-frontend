<template>
  <div id="body">
    <NavBar/>

    <div id="main_page">
      <div id="content">
        <div id="page">
          <b-img id="logo_24_generique" :src="require('../assets/logo_24.png')" alt="logo_24_generique" fluid></b-img>
          <h1>Bienvenue sur My24h !</h1>
          <br>
          <P>Au vu des circonstances particulières liées à la crise du covid-19, le club des 24h de l'Insa a décidé
            d'organiser des courses, mais en distanciel !</P>
          <p><strong>Expliquer comment ça marche et tout et faire un lien vers la FAQ</strong></p>
          <br>
          <b-button to="/" variant="outline-danger">Se connecter avec <b-img id="strava_logo" :src="require('../assets/strava.png')" fluid></b-img></b-button>
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
  name: "Home",
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
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.9) 100%), url(../assets/course.jpg);
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
</style>
