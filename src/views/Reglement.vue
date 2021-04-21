<template>
  <div id="body">
    <NavBar/>

    <div id="main_page">
      <div id="content">
        <div id="page">
          <h1>Règlement des courses à distance</h1>
          <br>
          <p>Ici, vous trouverez le règlement de la 46e édition de nos courses !</p>

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
  name: "Reglement",
  components: {
    NavBar
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