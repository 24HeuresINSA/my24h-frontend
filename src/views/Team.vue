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
                    <b-col sm="7">
                      <label class="label">Nom d'équipe :</label>
                    </b-col>
                    <b-col sm="5">
                      <b-form-input class="input" type="text" v-model="form.new.team_name"
                                    placeholder="Votre nom d'équipe"></b-form-input>
                      <br>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="7">
                      <label class="label">Nombre de participants :</label>
                      <br>
                    </b-col>
                    <b-col sm="5">
                      <b-form-select class="input" v-model="form.new.category_id"
                                     :options="team_size_options"></b-form-select>
                      <br>
                      <br>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="7">
                      <label class="label">Clé pour rejoindre :</label>
                    </b-col>
                    <b-col sm="5">
                      <b-form-input class="input" type="text" v-model="form.new.team_joint_code"
                                    placeholder="Saisir la clé"></b-form-input>
                      <br>
                    </b-col>
                  </b-row>
                </b-container>
              </b-collapse>
            </b-row>


            <b-row>
              <b-collapse id="collapse-existant" visible v-if="form.team_type==='Existant'&&form.team_checked===true"
                          class="collapse-team">
                <b-container>
                  <b-row>
                    <b-col sm="7">
                      <label class="label">Choisir l'équipe :</label>
                    </b-col>
                    <b-col sm="5">
                      <b-form-select class="input" v-model="form.existant.selected_team"
                                     :options="form.existant.options_team"></b-form-select>
                      <br>
                      <br>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="7">
                      <label class="label">Saisir la clé :</label>
                    </b-col>
                    <b-col sm="5">
                      <b-form-input class="input" type="text" v-model="form.existant.team_joint_code"
                                    placeholder="Clé d'équipe"></b-form-input>
                      <br>
                    </b-col>
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
                <b-button variant="success">Suivant</b-button>
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
          category_id: 0, //remplacer par category_id à get choix comme le race inscriptions
          team_joint_code: '' //joint_code
        },
        existant: {
          selected_team: 0,
          team_joint_code: '', //get team pour que l'user choisisse l'équipe
          options_team: [] //team_id
        }
      },
      team_size_options: [{value: 4, text: "2 à 4"}, {value: 12, text: "5 à 12"}],
      show_alert: true,
      message: ""
    }
  },
  methods: {
    onChange() {
      this.form.team_checked = !this.form.team_checked
    },
    onClick(event) {
      event.preventDefault()

    },
    verify() {
      //TODO vérifier les champs d'équipe
    }
  },
  mounted() {
    checker.default.checkCredentials().then(resolve => {
      console.log(resolve);
      axios.get(this.$baseUrl + '/api/teams/', {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access')}})
          .then(response => {
            response.data.results.forEach(element => (this.form.existant.options_team.push({
              value: element.id,
              text: element.name
            })));
          })
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