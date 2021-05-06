<template>
  <div id="body">
    <NavBar/>

    <div id="main_page">
      <div id="content">
        <div id="page">
          <h1 style="text-align: center">Inscription aux courses</h1>
          <br>
          <P style="text-align: center">1ère étape, vous devez vous inscrire à My24h pour pouvoir être classé. <strong>Tous
            les champs sont obligatoires.</strong></P>
          <br>

          <div id="form">
            <b-form>
              <b-container align="center" fluid>
                <b-row class="lines">
                  <b-col sm="2"></b-col>
                  <b-col sm="3">
                    <label class="label">Civilité :</label>
                  </b-col>
                  <b-col sm="5">
                    <b-form-select class="input" v-model="form.sex" :options="options_sex"></b-form-select>
                  </b-col>
                  <b-col sm="2"></b-col>
                </b-row>
                <br>
                <b-row class="lines">
                  <b-col sm="2"></b-col>
                  <b-col sm="3">
                    <label class="label">Nom :</label><br>
                  </b-col>
                  <b-col sm="5">
                    <b-form-input class="input" type="text" v-model="form.name" placeholder="Votre nom"></b-form-input>
                    <br>
                  </b-col>
                  <b-col sm="2"></b-col>
                </b-row>

                <b-row class="lines">
                  <b-col sm="2"></b-col>
                  <b-col sm="3">
                    <label class="label">Prénom :</label><br>
                  </b-col>
                  <b-col sm="5">
                    <b-form-input class="input" type="text" v-model="form.surname"
                                  placeholder="Votre prénom"></b-form-input>
                    <br>
                  </b-col>
                  <b-col sm="2"></b-col>
                </b-row>

                <b-row class="lines">
                  <b-col sm="2"></b-col>
                  <b-col sm="3">
                    <label class="label">Pseudo :</label><br>
                  </b-col>
                  <b-col sm="5">
                    <b-form-input class="input" type="text" v-model="form.username"
                                  placeholder="Votre pseudo"></b-form-input>
                    <p>Au moins 5 caractères. Notez bien ce pseudo, il vous servira d'identifiant pour vous connecter
                      !</p>
                    <br>
                  </b-col>
                  <b-col sm="2"></b-col>
                </b-row>

                <b-row class="lines">
                  <b-col sm="2"></b-col>
                  <b-col sm="3">
                    <label class="label">Date de naissance :</label><br>
                  </b-col>
                  <b-col sm="5">

                    <b-form-datepicker class="input" max="2005-05-13" value-as-date v-model="form.birthday"
                                       placeholder="Votre date de naissance"></b-form-datepicker>
                    <br>
                    <br>
                  </b-col>
                  <b-col sm="2"></b-col>
                </b-row>

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
                    <label class="label">Mot de passe :</label><br>
                  </b-col>
                  <b-col sm="5">
                    <b-form-input class="input" type="password" v-model="form.password"
                                  placeholder="Votre mot de passe"></b-form-input>
                    <p>Au moins 8 caractères, 1 majuscule, 1 minuscule, 1 chiffre</p>
                  </b-col>
                  <b-col sm="2"></b-col>
                </b-row>

                <b-row class="lines">
                  <b-col sm="2"></b-col>
                  <b-col sm="3">
                    <label class="label">Mot de passe (à nouveau) :</label><br>
                  </b-col>
                  <b-col sm="5">
                    <b-form-input class="input" type="password" v-model="form.password_validation"
                                  placeholder="Votre mot de passe"></b-form-input>
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

                <b-row class="lines">
                  <b-col sm="2"></b-col>
                  <b-col sm="3">
                    <label class="label">Choisir une course :</label>
                    <br>
                  </b-col>
                  <b-col sm="5">
                    <b-form-select class="input" v-model="form.race" :options="options_race"></b-form-select>
                    <br>
                    <br>
                  </b-col>
                  <b-col sm="2"></b-col>
                </b-row>

                <b-row class="lines">
                  <b-col>
                    <b-alert v-model="verify_fields" variant="danger"><strong>Erreur dans votre saisie ! Vérifiez vos
                      informations...</strong> {{ field_pb }}
                    </b-alert>
                  </b-col>
                </b-row>

                <b-row class="lines">
                  <b-col>
                    <b-alert v-model="server_error" variant="danger"><strong>Erreur du serveur</strong><br> code :
                      {{ serv_err_type }} <br>Soit le serveur est injoignable, soit votre nom d'utilisateur/pseudo est
                      probablement déjà pris !<br> Si cette erreur persiste, contactez courses@24heures.org
                    </b-alert>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col>
                    <br>
                    <p>En cliquant sur <strong>Suivant</strong> vous acceptez le
                      <b-link to="/reglement">règlement</b-link>
                      des courses 2021, notamment en vous engageant à jouer le jeu et à ne pas tricher
                    </p>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col>
                    <br>
                    <b-button @click="onClick" variant="success">Suivant</b-button>
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
import axios from 'axios';

export default {
  name: "Inscriptions",
  components: {
    FootBar,
    NavBar
  },
  data() {
    return {
      form: {
        sex: "",
        name: "",
        surname: "",
        username: "",
        birthday: new Date(),
        address: "",
        postal_code: "",
        city: "",
        phone_number: "",
        email: "",
        email_validation: "",
        password: "",
        password_validation: "",
        race: ""
      },
      options_sex: [{value: 'male', text: 'Monsieur'},
        {value: 'female', text: 'Madame'},
        {value: 'unknown', text: 'Non genré'}],
      options_race: [],
      verify_fields: false,
      field_pb: [],
      server_error: false,
      serv_err_type: ""

    }
  },
  methods: {
    onClick(event) {
      event.preventDefault()
      var birthday = this.form.birthday.toISOString().slice(0, 10)
      const data_to_send = new URLSearchParams()
      console.log(this.form.birthday.toLocaleDateString('fr-FR').split('/').reverse().join('-').slice(0, 10))
      data_to_send.append('username', this.form.username)
      data_to_send.append('first_name', this.form.surname)
      data_to_send.append('last_name', this.form.name)
      data_to_send.append('password', this.form.password)
      data_to_send.append('gender', this.form.sex)
      data_to_send.append('address', this.form.address)
      data_to_send.append('zip_code', this.form.postal_code)
      data_to_send.append('city', this.form.city)
      data_to_send.append('phone', this.form.phone_number)
      data_to_send.append('race_id', this.form.race)
      data_to_send.append('birthdate', this.form.birthday.toLocaleDateString('fr-FR').split('/').reverse().join('-').slice(0, 10))
      data_to_send.append('email', this.form.email)

      if (this.verify()) {
        axios.post(this.$baseUrl + '/api/athletes/', data_to_send, {headers: {'content-type': 'application/x-www-form-urlencoded'}}).then(response => {
          localStorage.setItem('access', response.data.access);
          localStorage.setItem('refresh', response.data.refresh);
          localStorage.setItem('uid', response.data.id);
          this.$router.push({name: 'Strava'})
        }).catch((err) => {
          console.log(err);
          this.serv_err_type = err;
          this.server_error = true;
        })
      } else {
        this.verify_fields = true;
      }
    },
    verify() {
      this.field_pb = [] //on réinitialise
      var regex_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var regex_password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
      var regex_phone = /^([0-9]{10})$/;
      var regex_zipcode = /^([0-9]{5})$/;

      if (this.form.sex === "") {
        this.field_pb.push("Sélectionnez votre genre");
      }
      if (this.form.name < 2) {
        this.field_pb.push("Nom invalide");

      }
      if (this.form.surname < 2) {
        this.field_pb.push("Prénom invalide");

      }
      if (this.form.username.length < 5) {
        this.field_pb.push("Pseudo invalide");

      }
      if (this.form.birthday === "") {
        this.field_pb.push("Date de naissance invalide");

      }
      if (!regex_email.test(this.form.email)) {
        this.field_pb.push("Email invalide");

      }
      if (this.form.email !== this.form.email_validation) {
        this.field_pb.push("Les 2 emails ne correspondent pas");

      }
      if (!regex_password.test(this.form.password)) {
        this.field_pb.push("Mot de passe invalide");
      }

      if (this.form.password !== this.form.password_validation) {
        this.field_pb.push("Les 2 mots de passe ne correspondent pas")
      }

      if (!regex_phone.test(this.form.phone_number)) {
        this.field_pb.push("Numéro de téléphone invalide")
      }

      if (this.form.address.length < 10) {
        this.field_pb.push("Adresse invalide")
      }

      if (!regex_zipcode.test(this.form.postal_code)) {
        this.field_pb.push("Code postal invalide")
      }

      if (this.form.address.length < 3) {
        this.field_pb.push("Commune invalide")
      }

      if (this.form.race === "") {
        this.field_pb.push("Veuillez choisir une course")
      }

      const test_age = new Date(this.form.birthday)
      test_age.setFullYear(test_age.getFullYear() + 16);
      var date_jour = new Date(2021, 5, 14);

      if (test_age > date_jour) {
        this.field_pb.push("Vous n'avez pas 16 ans révolus, vous ne pouvez pas vous inscrire !")
      }

      return this.field_pb.length === 0;
    }
  },
  mounted() {
    axios.get(this.$baseUrl + '/api/races/').then(response => {
      response.data.results.forEach(element => (this.options_race.push({
        value: element.id,
        text: element.name
      })));
      console.log(response);
    }).catch(error => console.log(error));
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