<template>
  <div id="body">
    <NavBar/>

    <div id="main_page">
      <div id="content">
        <div id="page">
          <h1 style="text-align: center">Sélection équipes</h1>
          <br>
          <p style="text-align: center">Comme sur l'édition classique de nos courses, il est possible de concourir en
            équipe si vous le souhaitez !</p>
          <br>

          <b-container>
            <b-row>
              <b-col>
                <b-form-checkbox v-b-toggle.collapse-1 v-model="form.team_checked" name="team_checkbox"
                                 @change="onChange"
                                 switch>Je souhaite concourir en équipe
                </b-form-checkbox>
                <br>
              </b-col>
            </b-row>

            <b-row>
              <b-col>
                <b-collapse id="collapse-1" visible v-model="form.team_checked" class="collapse-team">
                  <b-form-group label="" v-slot="{ ariaDescribedby }">
                    <b-form-radio v-model="form.team_type" :aria-describedby="ariaDescribedby" name="team_type"
                                  value="New">
                      Je souhaite créer une nouvelle équipe
                    </b-form-radio>
                    <b-form-radio v-model="form.team_type" :aria-describedby="ariaDescribedby" name="team_type"
                                  value="Existant">Je souhaite rejoindre une équipe existante
                    </b-form-radio>
                  </b-form-group>
                </b-collapse>
                <br>
              </b-col>
            </b-row>
            <b-row>
              <br>
            </b-row>
            <b-row>
              <b-collapse id="collapse-new" visible v-if="form.team_type==='New'&&form.team_checked===true"
                          class="collapse-team">
                <b-container>
                  <b-row>
                    <br>
                    <b-col sm="5">
                      <label class="label">Nom d'équipe :</label>
                    </b-col>
                    <b-col sm="5">
                      <b-form-input class="input" type="text" v-model="form.new.team_name"
                                    placeholder="Votre nom d'équipe"></b-form-input>
                      <p>Au moins 5 caractères</p>
                      <br>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="5">
                      <label class="label">Choisir une course :</label>
                      <br>
                    </b-col>
                    <b-col sm="5">
                      <b-form-select class="input" v-model="form.new.race_selected"
                                     :options="form.new.race_options"></b-form-select>
                      <br>
                      <br>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="5">
                      <label class="label">Nombre de participants :</label>
                      <br>
                    </b-col>
                    <b-col sm="5">
                      <b-form-select class="input" v-model="form.new.category_id"
                                     :options="team_size_options"></b-form-select>
                      <br>
                      <br>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="5">
                      <label class="label">Clé pour rejoindre :</label>
                    </b-col>
                    <b-col sm="5">
                      <b-form-input class="input" type="text" v-model="form.new.team_joint_code"
                                    placeholder="Saisir la clé"></b-form-input>
                      <p>Au moins 5 caractères<br></p>
                      <p><strong>Important ! Notez ce code! Il permettra à vos coéquipiers de rejoindre votre
                        équipe.</strong></p>
                      <br>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>
                </b-container>
              </b-collapse>
            </b-row>


            <b-row>
              <b-collapse id="collapse-existant" visible v-if="form.team_type==='Existant'&&form.team_checked===true"
                          class="collapse-team">
                <b-container>
                  <b-row>
                    <b-col sm="5">
                      <label class="label">Choisir l'équipe :</label>
                    </b-col>
                    <b-col sm="5">
                      <b-form-select class="input" v-model="form.existant.selected_team"
                                     :options="form.existant.options_team" @change="onChangeTeams"></b-form-select>
                      <br>
                      <br>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="5">
                      <label class="label">Type de course de l'équipe :</label>
                    </b-col>
                    <b-col sm="5">
                      <p>{{ form.existant.current_race }}</p>
                      <br>
                      <br>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="5">
                      <label class="label">Saisir la clé :</label>
                    </b-col>
                    <b-col sm="5">
                      <b-form-input class="input" type="text" v-model="form.existant.team_joint_code"
                                    placeholder="Clé d'équipe"></b-form-input>
                      <p>Rapprochez-vous du créateur de l'équipe pour connaître la clé.</p>
                      <br>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>
                </b-container>
              </b-collapse>
            </b-row>

            <b-row>
              <b-col>
                <b-alert v-model="show_alert" variant="danger" dismissible>
                  <strong>Cela n'a pas marché...</strong><br>
                  {{ message }}
                </b-alert>
              </b-col>
            </b-row>
            <b-row>
              <b-col style="text-align: center">
                <b-button variant="success" @click="onClick">Suivant</b-button>
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
import NavBar from '../components/NavBar';
import FootBar from "@/components/FootBar";
import * as checker from '../scripts/refresh_credentials';

import axios from 'axios'

export default {
  name: "Team",
  components: {
    FootBar,
    NavBar
  },
  data() {
    return { //on sait si le mec est admin d'équipe en faisant un get athlete
      form: {
        team_checked: false,
        team_type: '',
        new: {
          team_name: '', //champs name
          race_selected: '',
          race_options: [],
          category_id: null, //remplacer par category_id à get choix comme le race inscriptions
          team_joint_code: '' //joint_code
        },
        existant: {
          current_race: "",
          teams_races: [],
          selected_team: null,
          team_joint_code: '', //get team pour que l'user choisisse l'équipe
          options_team: [] //team_id
        }
      },
      team_size_options: [],
      show_alert: false,
      message: ""
    }
  },
  methods: {
    onChange() {
      this.form.team_checked = !this.form.team_checked
    },
    onChangeTeams() {
      this.form.existant.current_race = this.form.existant.teams_races[this.form.existant.selected_team - 1].race_name;
    },
    assignRaceType(race_id) {
      this.form.new.race_options.forEach(x => {
        if (x.value === race_id) {
          return x.text;
        } else {
          return '';
        }
      });
      return '';
    },
    onClick(event) {
      event.preventDefault()
      console.log("click !")
      if (this.verify()) {
        console.log("vérif ok")

        if (this.form.team_type === 'Existant') {
          var join_data = new URLSearchParams()
          join_data.append('join_code', this.form.existant.team_joint_code);

          console.log("ready to post existant team");

          axios.post(this.$baseUrl + '/api/teams/' + this.form.existant.selected_team + '/join/', join_data, {
            headers: {
              'content-type': 'application/x-www-form-urlencoded',
              'Authorization': 'Bearer ' + localStorage.getItem('access')
            }
          })
              .then(res => {
                console.log(res);
                this.$router.push({name: "Dashboard"});

              }).catch(err => {
            this.message = "Erreur du serveur, l'équipe que vous essayez de rejoindre est probablement pleine, ou la clé n'est pas bonne. Code erreur : " + err
            this.show_alert = true;
          });

        } else if (this.form.team_type === 'New') {
          var new_team_data = new URLSearchParams()
          new_team_data.append('name', this.form.new.team_name);
          new_team_data.append('join_code', this.form.new.team_joint_code);
          new_team_data.append('category_id', this.form.new.category_id);
          new_team_data.append('race_id', this.form.new.race_selected);

          console.log("ready to post new team");

          axios.post(this.$baseUrl + '/api/teams/', new_team_data, {
            headers: {
              'content-type': 'application/x-www-form-urlencoded',
              'Authorization': 'Bearer ' + localStorage.getItem('access')
            }
          })
              .then(res => {
                console.log(res);
                this.$router.push({name: "Dashboard"});

              }).catch(err => {
            this.message = "Erreur du serveur, l'équipe que vous essayez de créer existe probablement déjà. Code erreur : " + err
            this.show_alert = true;
          });
        }
      } else {
        this.show_alert = true;
      }

    },
    verify() {
      if (this.form.team_type === 'Existant') {

        if (this.form.existant.team_joint_code.length < 5) {
          this.message = "Clé saisie invalide";
        }

        if (this.form.existant.selected_team === null) {
          this.message = "Veuillez sélectionner une équipe à rejoindre";
        }

      } else if (this.form.team_type === 'New') {

        if (this.form.new.team_joint_code.length < 5) {
          this.message = "Clé saisie invalide";
        }
        if (this.form.new.category_id === null) {
          this.message = "Veuillez sélectionner une taille d'équipe";
        }
        if (this.form.new.team_name.length < 5) {
          this.message = "Nom d'équipe invalide";
        }

      }

      return this.message === '';
    }
  },
  mounted() {
    checker.default.checkCredentials().then(resolve => {
      console.log(resolve);
      axios.get(this.$baseUrl + '/api/teams/', {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access')}})
          .then(response => {
            response.data.results.forEach(element => {
              this.form.existant.options_team.push({
                value: element.id,
                text: element.name
              });
              this.form.existant.teams_races.push({
                id: element.race,
                race_name: this.assignRaceType(element.race)
              });
            })
          }).catch(err => {
        this.show_alert = true;
        this.message = "Impossible de récupérer les données du serveur, contactez courses@24heures.org | code : " + err;
      });

      axios.get(this.$baseUrl + '/api/categories/', {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access')}})
          .then(response => {
            response.data.results.forEach(element => (this.team_size_options.push({
              value: element.id,
              text: element.name
            })))
          }).catch(err => {
        this.show_alert = true;
        this.message = "Impossible de récupérer les données du serveur, contactez courses@24heures.org | code : " + err;
      });

      axios.get(this.$baseUrl + '/api/races/').then(response => {
        response.data.results.forEach(element => (this.form.new.race_options.push({
          value: element.id,
          text: element.name
        })));
        console.log(response);
      }).catch(error => console.log(error));

    }).catch(reject => {
      console.log(reject);
    })
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

.label{
  font-weight: bold;
}
</style>