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
              <b-col sm="0.5">
                <b-form-checkbox v-b-toggle.collapse-1 v-model="form.team_checked" name="team_checkbox"
                                 @change="onChange"
                                 switch></b-form-checkbox>
                <br>
              </b-col>
              <b-col sm="5">
                <label>Je souhaite concourir en équipe</label>
                <br>
              </b-col>

            </b-row>

            <b-row>
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
            </b-row>

            <b-row>
              <b-collapse id="collapse-new" visible v-if="form.team_type==='New'" class="collapse-team">
                <b-row>
                  <br>
                  <b-col>
                    <label>Nom d'équipe :</label>
                  </b-col>
                  <b-col>
                    <b-form-input class="input" type="text" v-model="form.new.team_name"
                                  placeholder="Votre nom d'équipe"></b-form-input>
                    <br>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col>
                    <label>Nombre de participants :</label>
                  </b-col>
                  <b-col>
                    <b-form-input class="input" type="text" v-model="form.new.team_size"
                                  placeholder="Nombre de participants"></b-form-input>
                    <br>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col>
                    <label>Clé pour rejoindre :</label>
                  </b-col>
                  <b-col>
                    <b-form-input class="input" type="text" v-model="form.new.team_joint_code"
                                  placeholder="Votre nom d'équipe"></b-form-input>
                    <br>
                  </b-col>
                </b-row>
              </b-collapse>
            </b-row>

            <b-row>
              <b-collapse id="collapse-existant" visible v-if="form.team_type==='Existant'" class="collapse-team">
                <b-row>
                  <b-col>
                    <label>Saisir la clé :</label>
                  </b-col>
                  <b-col>
                    <b-form-input class="input" type="text" v-model="form.existant.team_joint_code"
                                  placeholder="Clé d'équipe"></b-form-input>
                    <br>
                  </b-col>
                </b-row>
              </b-collapse>
            </b-row>

            <b-row>
              <b-button variant="success">Suivant</b-button>
            </b-row>
          </b-container>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar'

export default {
  name: "Team",
  components: {
    NavBar
  },
  data() {
    return {
      form: {
        team_checked: false,
        team_type: '',
        new: {
          team_name: '',
          team_size: 4,
          team_joint_code: ''
        },
        existant: {
          team_joint_code: ''
        }
      }
    }
  },
  methods: {
    onChange() {
      this.form.team_checked = !this.form.team_checked
      console.log("test")
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