<template>
  <div id="body">
    <NavBar/>

    <div id="main_page">
      <div id="content">
        <div id="page">
          <h1 style="text-align: center">Tableau de bord</h1>
          <br>
          <br>
          <b-card-group deck>
            <b-card header="Mon profil" header-class="card_titles">
              <b-container>
                <b-row>
                  <b-col sm="4">
                    <b-card-text><strong>Nom : </strong></b-card-text>
                  </b-col>
                  <b-col sm="8">
                    <b-card-text>{{profile.name}}</b-card-text>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col sm="4">
                    <b-card-text><strong>Prénom : </strong></b-card-text>
                  </b-col>
                  <b-col sm="8">
                    <b-card-text>{{profile.surname}}</b-card-text>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col sm="4">
                    <b-card-text><strong>Age : </strong></b-card-text>
                  </b-col>
                  <b-col sm="8">
                    <b-card-text>{{profile.age}}</b-card-text>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col sm="4">
                    <b-card-text><strong>E-Mail : </strong></b-card-text>
                  </b-col>
                  <b-col sm="8">
                    <b-card-text>{{profile.email}}</b-card-text>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col sm="4">
                    <b-card-text><strong>N° tel : </strong></b-card-text>
                  </b-col>
                  <b-col sm="8">
                    <b-card-text>{{profile.phone}}</b-card-text>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col style="text-align: center">
                    <br>
                    <b-button class="buttons" variant="primary">Modifier le profil</b-button>
                    <b-button class="buttons" variant="danger">Changer mot de passe</b-button>
                  </b-col>
                </b-row>

              </b-container>

            </b-card>

            <b-card header="Ma course" header-class="card_titles">

            </b-card>


            <b-card header="Mon équipe" header-class="card_titles">

            </b-card>

            <b-card header="Classements et records" header-class="card_titles">

            </b-card>

          </b-card-group>

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
  name: "Dashboard",
  components: {
    NavBar,
    FootBar
  },
  data (){
    return {
      profile:{
        name: "NomDuPelo",
        surname: "SonPrenom",
        age: 20,
        phone: "0123456789",
        email: "courses@24heures.org",
        race: "Course à pied en équipe"
      }
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

.card_titles{
  text-align: center;
  font-weight: bold;
}

.buttons {
  margin: 0.5em;
}
</style>