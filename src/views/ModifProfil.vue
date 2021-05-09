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
            <b-form>
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
                      {{ serv_err_type }} <br> Si cette erreur persiste, contactez courses@24heures.org
                    </b-alert>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col>
                    <br>
                    <b-button class="button" variant="outline-success" to="/dashboard">Revenir au tableau de bord
                    </b-button>
                    <b-button class="button" @click="onClick" variant="success">Suivant</b-button>
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
import axios from "axios";
import * as checker from "../scripts/refresh_credentials"

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
      },
      field_pb: [],
      verify_fields: false,
      server_error: false,
      serv_err_type: ""
    }
  },
  mounted() {
    checker.default.checkCredentials().then((resolve) => {
      console.log(resolve);
      axios.get(this.$baseUrl + '/api/athletes/' + localStorage.getItem('uid') + '/', {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access')}})
          .then(results => {
            this.form.address = results.data.address;
            this.form.postal_code = results.data.zip_code;
            this.form.city = results.data.city;
            this.form.phone_number = results.data.phone;
            this.form.email = results.data.user.email;
          }).catch(err => {
        this.server_error = true;
        this.serv_err_type = err;
      });
    }).catch(reject => {
      this.server_error = true;
      this.serv_err_type = reject;
    })
  },
  methods: {
    verify() {
      this.field_pb = [] //on réinitialise
      var regex_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var regex_phone = /^([0-9]{10})$/;
      var regex_zipcode = /^([0-9]{5})$/;

      if (!regex_email.test(this.form.email)) {
        this.field_pb.push("Email invalide");

      }
      if (this.form.email !== this.form.email_validation) {
        this.field_pb.push("Les 2 emails ne correspondent pas");
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

      return this.field_pb.length === 0;
    },
    onClick(event) {
      event.preventDefault();

      var data_to_send = new URLSearchParams()
      data_to_send.append('phone', this.form.phone_number)
      data_to_send.append('email', this.form.email)
      data_to_send.append('address', this.form.address)
      data_to_send.append('zip_code', this.form.postal_code)
      data_to_send.append('city', this.form.city)

      if (this.verify()) {
        axios.put(this.$baseUrl + '/api/athletes/' + localStorage.getItem('uid') + '/', data_to_send, {
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + localStorage.getItem('access')
          }
        })
            .then(results => {
              console.log(results);
              this.$router.push({name: "Dashboard"});
            }).catch(err => {
          this.server_error = true;
          this.serv_err_type = err;
        });
      } else {
        this.verify_fields = true;
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

.button {
  margin: 0.5em;
}
</style>