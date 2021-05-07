<template>
  <div id="body">
    <NavBar/>

    <div id="main_page">
      <div id="content">
        <div id="page" style="text-align: center">
          <b-img id="logo_24_generique" :src="require('../assets/logo_24.png')" alt="logo_24_generique" fluid></b-img>
          <h1>Bienvenue sur My24h !</h1>
          <br>
          <P>Les courses de 24 heures sont le cœur historique du festival, et nous ne pouvons imaginer cette édition
            sans elles. Cependant, l’incertitude dans laquelle nous sommes plongés quant aux mesures sanitaires qui
            seront en vigueur fin mai ne nous permet pas de proposer une course avec un tracé fixe et une date unique. À
            la
            place, nous organisons une course « virtuelle ».
            <br><br>
            Le principe est simple : vous aurez la possibilité de courir où vous voulez et quand vous le voulez ! Vous
            n’aurez ensuite qu’à nous transmettre vos données GPS pour nous communiquer vos résultats et intégrer le
            classement.
            Vous aurez neuf jours, du vendredi 14 mai à 14h au dimanche 23 mai à 14h, pour effectuer 24 heures de course
            au total, d’une seule traite ou en plusieurs étapes. Il sera possible, comme les années précédentes, de
            participer en solo ou en équipe, et les disciplines proposées seront les suivantes : course à vélo, course à
            pied et duathlon.
            <br><br>
            Notre système se basera sur l’application de running « Strava ». Vous aurez la possibilité d’importer vos
            données d’activité Strava sur notre site internet, où nous conserverons pour le classement vos 24 «
            meilleures » heures de course.
            À l’issue de la semaine du défi, les coureurs ayant parcouru la plus grande distance en 24 heures se verront
            récompensés par divers lots au cours d’une cérémonie de remise des prix en distanciel.</P>
          <br>
          <p>N'hésitez pas à consulter notre
            <b-link href="https://www.24heures.org/documents/reglement_24h_de_courses_2021.pdf">règlement</b-link>
            et notre page
            <b-link href="https://www.24heures.org/courses/informations">informations</b-link>
            pour plus de précisions. En cas de problème sur notre site,
            ou de questions, vous pouvez nous contacter par mail à
            <b-link href="mailto:courses@24heures.org">courses@24heures.org</b-link>
          </p>
          <br>
          <b-button class="button" to="/inscriptions" variant="success">S'inscrire</b-button>
          <b-button class="button" to="/login" variant="outline-success">Se connecter</b-button>
          <br>
          <br>
          <br>
          <br>
          <hr>
          <br>
          <br>
          <br>
          <br>
          <h1>Nos partenaires</h1>
          <br>
          <p>Malgré l'annulation de nos courses, nos partenaires continuent de nous soutenir ! Un grand MERCI à eux</p>
          <br>
          <b-container>
            <b-row>
              <b-col>
                <br>
                <br>
                <b-img class="img_logo" :src="require('../assets/TerredeRunning.png')" alt="Logo TDR" fluid
                       href="https://www.terrederunning.com/"></b-img>
                <p>
                  <b-link href="https://www.terrederunning.com/">Terre de Running</b-link>
                </p>
              </b-col>
              <b-col>
                <b-img class="img_logo" :src="require('../assets/oneGum.png')" alt="Logo OneGum" fluid></b-img>
                <p>
                  <b-link href="https://www.onegum.eu/">OneGum</b-link>
                </p>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <br>
                <br>
                <p>Nous soutenons cette année Vaincre la mucoviscidose. N'hésitez pas à faire un don à l'association.
                  Plus d'infos sur notre
                  <b-link href="https://www.24heures.org/courses/course-caritative">page dédiée.</b-link>
                </p>
                <b-img class="img_logo" :src="require('../assets/vlm.png')" alt="Logo des 24_2021" fluid></b-img>
                <p>
                  <b-link href="https://www.vaincrelamuco.org/">Vaincre la mucoviscidose</b-link>
                </p>
              </b-col>
            </b-row>
          </b-container>
        </div>
      </div>
    </div>

    <FootBar/>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import FootBar from '../components/FootBar.vue'
import * as checker from '../scripts/refresh_credentials';

export default {
  name: "Home",
  components: {
    NavBar,
    FootBar
  },
  methods: {
    connected(){
      checker.default.isConnected()
    }
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

.button{
  margin: 0.5em;
}
</style>
