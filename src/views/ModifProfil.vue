<template>
  <div id="body">
    <NavBar/>

    <div id="main_page">
      <div id="content">
        <div id="page">
          <h1 style="text-align: center">Modifier votre profil</h1>
          <br>
          <P style="text-align: center">Vous pouvez ici modifier vos informations de contact en cas de besoin. <strong>Tous
            les champs sont obligatoires.</strong></P>
          <br>

          <div id="form">
            <b-form @click="onClick">
              <b-container align="center">

                <b-row class="lines">
                  <b-col sm="2"></b-col>
                  <b-col sm="3">
                    <label class="label">E-mail :</label><br>
                  </b-col>
                  <b-col sm="5">
                    <b-form-input class="input" type="email" v-model="form.email"
                                  placeholder="Votre e-mail"></b-form-input>
                    <br>
                  </b-col>
                  <b-col sm="2"></b-col>
                </b-row>

                <b-row class="lines">
                  <b-col sm="2"></b-col>
                  <b-col sm="3">
                    <label class="label">E-mail (à nouveau) :</label><br>
                  </b-col>
                  <b-col sm="5">
                    <b-form-input class="input" type="email" v-model="form.email_validation"
                                  placeholder="Votre e-mail"></b-form-input>
                    <br>
                    <br>
                  </b-col>
                  <b-col sm="2"></b-col>
                </b-row>

                <b-row class="lines">
                  <b-col sm="2"></b-col>
                  <b-col sm="3">
                    <label class="label">Numéro de téléphone :</label><br>
                  </b-col>
                  <b-col sm="5">
                    <b-form-input class="input" type="tel" v-model="form.phone_number"
                                  placeholder="Votre numéro de téléphone"></b-form-input>
                    <br>
                    <br>
                  </b-col>
                  <b-col sm="2"></b-col>
                </b-row>

                <b-row class="lines">
                  <b-col sm="2"></b-col>
                  <b-col sm="3">
                    <label class="label">Adresse : </label><br>
                  </b-col>
                  <b-col sm="5">
                    <b-form-input class="input" type="text" v-model="form.address"
                                  placeholder="Votre adresse"></b-form-input>
                    <br>
                  </b-col>
                </b-row>

                <b-row class="lines">
                  <b-col sm="2"></b-col>
                  <b-col sm="3">
                    <label class="label">Code postal :</label><br>
                  </b-col>
                  <b-col sm="5">
                    <b-form-input class="input" type="number" v-model="form.postal_code"
                                  placeholder="Votre code postal"></b-form-input>
                    <br>
                  </b-col>
                  <b-col sm="2"></b-col>
                </b-row>

                <b-row class="lines">
                  <b-col sm="2"></b-col>
                  <b-col sm="3">
                    <label class="label">Commune :</label><br><br>
                  </b-col>
                  <b-col sm="5">
                    <b-form-input class="input" type="text" v-model="form.city"
                                  placeholder="Votre commune"></b-form-input>
                    <br>
                    <br>
                  </b-col>
                  <b-col sm="2"></b-col>
                </b-row>

                <b-row>
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
    <FootBar/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import FootBar from "@/components/FootBar";

export default {
  name: "ModifProfil",
  components: {
    NavBar,
    FootBar
  },
  data() {
    return {
      form: {
        address: "",
        postal_code: "",
        city: "",
        phone_number: "",
        email: "",
        email_validation: ""
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

.lines {
  text-align: left;
}

.label {
  font-weight: bold;
}
</style>