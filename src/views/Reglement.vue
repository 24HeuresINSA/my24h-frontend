<template>
  <div id="body">
    <NavBar/>

    <div id="main_page">
      <div id="content">
        <div id="page" style="text-align: center">
          <h1>Règlement des courses à distance</h1>
          <br>
          <p>Ici, vous trouverez le règlement de la 46e édition de nos courses !</p>

          <br>

        </div>
      </div>
      <FootBar/>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import FootBar from "@/components/FootBar";

export default {
  name: "Reglement",
  components: {
    FootBar,
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