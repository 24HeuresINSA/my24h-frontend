<template>
  <div id="body">
    <NavBar/>

    <div id="main_page">
      <div id="content">
        <div id="page">
          <h1 style="text-align: center">Inscription aux courses</h1>
          <br>
          <P style="text-align: center">Votre compte Strava a bien été enregistré ! Merci de compléter ce formulaire
            pour finaliser votre
            inscription</P>
          <br>

          <div id="form">
            <b-form @click="onClick">
              <b-container align="center" fluid>
                <b-row class="lines">
                  <b-col sm="5">
                    <label class="label">Genre :</label>
                  </b-col>
                  <b-col sm="5">
                    <b-form-select class="input" v-model="form.sex" :options="options"></b-form-select>
                  </b-col>
                </b-row>
                <br>
                <b-row class="lines">
                  <b-col sm="5">
                    <label class="label">Nom :</label><br>
                  </b-col>
                  <b-col sm="5">
                    <b-form-input class="input" type="text" v-model="form.name" placeholder="Votre nom"></b-form-input>
                    <br>
                  </b-col>
                </b-row>

                <b-row class="lines">
                  <b-col sm="5">
                    <label class="label">Prénom :</label><br>
                  </b-col>
                  <b-col sm="5">
                    <b-form-input class="input" type="text" v-model="form.surname"
                                  placeholder="Votre prénom"></b-form-input>
                    <br>
                  </b-col>
                </b-row>

                <b-row class="lines">
                  <b-col sm="5">
                    <label class="label">Date de naissance :</label><br>
                  </b-col>
                  <b-col sm="5">
                    <b-form-input class="input" type="date" v-model="form.birthday"
                                  placeholder="Votre date de naissance"></b-form-input>
                    <br>
                  </b-col>
                </b-row>

                <b-row class="lines">
                  <b-col sm="5">
                    <label class="label">Numéro de téléphone :</label><br>
                  </b-col>
                  <b-col sm="5">
                    <b-form-input class="input" type="tel" v-model="form.phone_number"
                                  placeholder="Votre numéro de téléphone"></b-form-input>
                    <br>
                  </b-col>
                </b-row>

                <b-row class="lines">
                  <b-col sm="5">
                    <label class="label">Adresse : </label><br>
                  </b-col>
                  <b-col sm="5">
                    <b-form-input class="input" type="text" v-model="form.address"
                                  placeholder="Votre adresse"></b-form-input>
                    <br>
                  </b-col>
                </b-row>

                <b-row class="lines">
                  <b-col sm="5">
                    <label class="label">Code postal :</label><br>
                  </b-col>
                  <b-col sm="5">
                    <b-form-input class="input" type="number" v-model="form.postal_code"
                                  placeholder="Votre code postal"></b-form-input>
                    <br>
                  </b-col>
                </b-row>

                <b-row class="lines">
                  <b-col sm="5">
                    <label class="label">Commune :</label><br>
                  </b-col>
                  <b-col sm="5">
                    <b-form-input class="input" type="text" v-model="form.city"
                                  placeholder="Votre commune"></b-form-input>
                    <br>
                  </b-col>
                </b-row>

                <b-row class="lines">
                  <b-col>
                    <br>
                    <b-button type="click" variant="success">Suivant</b-button>
                    <br>
                  </b-col>
                </b-row>
              </b-container>

            </b-form>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

import NavBar from "@/components/NavBar";

export default {
  name: "Inscriptions",
  components: {
    NavBar
  },
  data() {
    return {
      form: {
        sex: "",
        name: "nom_strava",
        surname: "prenom_strava",
        birthday: "",
        address: "",
        postal_code: "",
        city: "",
        phone_number: ""
      },
      options: [{value: 'male', text: 'Monsieur'},
        {value: 'female', text: 'Madame'},
        {value: 'unknown', text: 'Non genré'}]

    }
  },
  methods:{
    onClick(event){
      event.preventDefault()
      //gérer l'envoi et la vérification des champs
      //prévenir les injections sql
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