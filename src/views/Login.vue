<template>
  <div id="body">
    <NavBar/>

    <div id="main_page">
      <div id="content">
        <div id="page" style="text-align: center">
          <b-img id="logo_24_generique" :src="require('../assets/logo_24.png')" alt="logo_24_generique" fluid></b-img>
          <h1>Se connecter à My24h</h1>
          <br>
          <p>Bienvenue sur My24h ! Veuillez vous connecter ci-dessous avec vos identifiants.</p>
          <br>

          <div id="form">
            <b-form @click="onClick">
              <b-container align="center" fluid>
                <b-row class="lines">
                  <b-col sm="2"></b-col>
                  <b-col sm="3">
                    <label class="label">Email :</label><br>
                  </b-col>
                  <b-col sm="5">
                    <b-form-input class="input" type="email" v-model="form.email"
                                  placeholder="example@xyz.com"></b-form-input>
                    <br>
                  </b-col>
                  <b-col sm="2"></b-col>
                </b-row>

                <b-row class="lines">
                  <b-col sm="2"></b-col>
                  <b-col sm="3">
                    <label class="label">Mot de passe :</label><br>
                  </b-col>
                  <b-col sm="5">
                    <b-form-input class="input" type="password" v-model="form.password"
                                  placeholder="Saisir votre mot de passe"></b-form-input>
                    <br>
                  </b-col>
                  <b-col sm="2"></b-col>
                </b-row>

                <b-row>
                  <b-col>
                    <br>
                    <b-button to="/login" type="click" variant="success">Se connecter</b-button>
                    <br>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col>
                    <br>
                    <br>
                    <p>Pas encore inscrit aux courses des 24 heures de l'Insa 46è édition ?</p>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col>
                    <b-button to="/inscriptions" variant="outline-success">S'inscrire</b-button>
                    <br>
                  </b-col>
                </b-row>

              </b-container>

            </b-form>

          </div>


        </div>
      </div>
    </div>

    <FootBar/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import FootBar from "@/components/FootBar";

export default {
  name: "Login",
  components: {
    NavBar,
    FootBar
  },
  data() {
    return {
      form: {
        email: "",
        password: ""
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

.label {
  font-weight: bold;
}

.lines {
  text-align: left;
}
</style>