<template>
  <div id="body">
    <NavBar/>

    <div id="main_page">
      <div id="content">
        <div id="page">
          <h1>Nos partenaires</h1>
          <b-container>
            <b-row>
              <b-col>
                <b-img class="img_logo" :src="require('../assets/logo_24.png')" alt="Logo des 24_2021" fluid></b-img>
                <p>Partenaire 1</p>
              </b-col>
              <b-col>
                <b-img class="img_logo" :src="require('../assets/logo_24.png')" alt="Logo des 24_2021" fluid></b-img>
                <p>Partenaire 2</p>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-img class="img_logo" :src="require('../assets/logo_24.png')" alt="Logo des 24_2021" fluid></b-img>
                <p>Partenaire 3</p>
              </b-col>
              <b-col>
                <b-img class="img_logo" :src="require('../assets/logo_24.png')" alt="Logo des 24_2021" fluid></b-img>
                <p>Partenaire 4</p>
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