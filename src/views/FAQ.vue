<template>
  <div id="body">
    <NavBar/>

    <div id="main_page">
      <div id="content">
        <div id="page">
          <h1>Foire aux questions (FAQ)</h1>
          <br>
          <p>Ici, vous trouverez toutes les infos nécessaires pour la 46e édition de nos courses !</p>

          <div class="accordion" role="tablist">
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-2 variant="info">Question 1</b-button>
              </b-card-header>
              <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>{{ reponses.tab_1 }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>

          <br>
          <br>
          <p>Copyright 2021 -
            <b-link href="https://www.24heures.org/">Club des 24 heures de l'INSA</b-link>
          </p>
        </div>
      </div>
      <!--      <b-img id="img_course" :src="require('../assets/course.jpg')" alt="Photo_course_velo" fluid-grow></b-img>-->
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'

export default {
  name: "FAQ",
  components: {
    NavBar
  },
  data() {
    return {
      reponses:{
        tab_1: "Je suis la réponse 1"
      }
    }
  }
}
</script>

<style scoped>
#body {
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