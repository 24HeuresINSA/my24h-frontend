<template>
  <div id="body">
    <NavBar/>

    <div id="main_page">
      <div id="content">
        <div id="page">
          <h1>Nos partenaires</h1>
          <br>
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

            <b-row>
              <b-col>
                <br>
                <br>
                <b-button variant="success" to="/home">Retour accueil</b-button>
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

export default {
  name: "sponsors",
  components: {
    NavBar,
    FootBar
  }
}
</script>

<style scoped>

#body {
  height: auto;
  width: auto;
  margin: 0;
  text-align: center;
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