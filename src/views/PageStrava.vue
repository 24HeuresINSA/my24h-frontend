<template>
  <div id="body">
    <NavBar/>

    <div id="main_page">
      <div id="content">
        <div id="page" style="text-align: center">
          <b-img id="logo_24_generique" :src="require('../assets/logo_24.png')" alt="logo_24_generique" fluid></b-img>
          <h1>Lier son compte Strava</h1>
          <br>
          <P>2ème étape, il faut lier votre compte Strava à votre compte My24h nous permettant de récupérer vos données
            course. Vérifiez bien que toutes les autorisations demandées soient cochées sinon nous n'aurons pas accès à
            toutes les données dont nous avons besoin !</p>
          <br>
          <b-button @click="stravaConnect" variant="outline-danger">Lier mon compte
            <b-img id="strava_logo" :src="require('../assets/strava.png')" alt="Strava" fluid></b-img>
          </b-button>
          <br>
          <br>
          <br>
          <p>Besoin d'aide pour utiliser Strava? N'hésitez pas à consulter notre vidéo :</p>
          <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/bzAg4R1gMbM"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
          </div>
          <br>
          <br>
        </div>
      </div>
    </div>

    <FootBar/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import FootBar from "@/components/FootBar";
import * as checker from "../scripts/refresh_credentials"

export default {
  name: "PageStrava",
  components: {
    NavBar,
    FootBar
  },
  methods: {
    stravaConnect(event) {
      event.preventDefault();
      window.location = 'https://www.strava.com/oauth/authorize?client_id=64981&response_type=code&redirect_uri=https://my24h.24heures.org/&approval_prompt=auto&scope=activity:read'
    }
  },
  created() {
    checker.default.checkCredentials().then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }
}
</script>,

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