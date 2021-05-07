<template>
  <div id="body">
    <NavBar/>

    <div id="main_page">
      <div id="content">
        <div id="page">
          <h1 style="text-align: center">Tableau de bord</h1>
          <br>
          <br>
          <p style="text-align: center">Bienvenue sur votre tableau de bord ! Ici, vous pourrez accéder à votre profil,
            voir votre classement, ajouter une activité et bien plus encore !</p>
          <br>
          <br>

          <b-alert v-model="server_error" variant="danger"><strong>Erreur du serveur</strong><br> code :
            {{ serv_err_type }} <br> Si cette erreur persiste, contactez courses@24heures.org
          </b-alert>
          <br>
          <b-alert variant="info" show>Merci de vous être inscrit à nos courses ! Pour le moment la plate-forme My24h ne
            permet que de
            s'inscrire. Le reste des fonctionnalités va être progressivement déployé d'ici le début des courses. Soyez
            prêts le vendredi 14 mai à 14h !
          </b-alert>
          <br>

          <b-card no-body>
            <b-tabs fill justified card>
              <b-tab title="Mon profil" active>
                <b-container>
                  <b-row>
                    <b-col><br></b-col>
                  </b-row>
                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Nom : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{ profile.name }}</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Prénom : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{ profile.surname }}</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Date de naissance: </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{ profile.birthdate }}</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>E-Mail : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{ profile.email }}</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>N° tel : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{ profile.phone }}</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Adresse : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{ profile.address }} {{ profile.zip_code }} {{ profile.city }}</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col style="text-align: center">
                      <br>
                      <b-button class="buttons" variant="success" to="/modifProfile">Modifier le profil</b-button>
                      <b-button class="buttons" variant="primary" v-show="false">Changer mot de passe</b-button>
                      <b-button class="buttons" variant="danger" @click="onDisconnect">Déconnexion</b-button>
                    </b-col>
                  </b-row>

                </b-container>
              </b-tab>

              <b-tab title="Ma course" disabled>
                <b-container>
                  <b-row>
                    <b-row>
                      <b-col><br></b-col>
                    </b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Type de course : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{ race.race_type }}</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col><br></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Distance cumulée : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{ race.cumul_distance }} km</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Vitesse moyenne : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{ race.avg_speed }} km/h</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Dénivelé moyen : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{ race.avg_elev_gain }} m</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Temps cumulé : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{ race.cumul_time }} / 24h00</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="3"></b-col>
                    <b-col sm="6">
                      <br>
                      <b-progress show-progress value="75" variant="success" striped></b-progress>
                      <br>
                      <br>
                    </b-col>
                    <b-col sm="3"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Record distance : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{ race.max_distance }} km</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Record temps : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{ race.max_time }}</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Record dénivelé : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{ race.max_elev_gain }} m</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Record vitesse moyenne : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{ race.max_avg_speed }} km/h</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col><br><br></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Nombre de points total : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{ race.total_points }} point(s)</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Nombre d'activités Strava : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{ race.activity_count }} activité(s)</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Votre rang : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{ race.rank }} / {{ race.total_runners }} coureurs</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col style="text-align: center">
                      <br>
                      <b-button class="buttons" variant="success" to="/activity">Ajouter une activité</b-button>
                    </b-col>
                  </b-row>

                </b-container>
              </b-tab>

              <b-tab title="Mon équipe" disabled>
                <b-card-text v-show="show_no_team">Oups, il semblerait que vous ne soyez pas affilié à une équipe...
                </b-card-text>
                <b-button v-show="show_no_team" variant="success" to="/team">Rejoindre une équipe</b-button>

                <b-container v-show="show_no_team">
                  <b-row>
                    <b-col><br></b-col>
                  </b-row>
                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Nom de l'équipe : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{ team.name }}</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>type : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{ team.type }}</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Taille : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{ team.members }} membres</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col><br><br></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Record distance : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{ team.max_distance }} km</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Record temps : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{ team.max_time }}</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Record dénivelé : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{ team.max_elev_gain }} m</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Record vitesse moyenne : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{ team.max_avg_speed }} km/h</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Record points individuel : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{ team.max_points }} points</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col><br><br></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Nombre de points total : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{ team.total_points }} point(s)</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Votre rang : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{ team.rank }} / {{ team.total_teams }} équipes</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col style="text-align: center">
                      <br>
                      <b-button class="buttons" variant="success" to="/manageTeam">Voir mon équipe en détail</b-button>
                    </b-col>
                  </b-row>

                </b-container>
              </b-tab>

              <b-tab title="Classements et records" disabled>
                <b-container>
                  <b-row>
                    <b-col><br></b-col>
                  </b-row>
                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Choisir une épreuve : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-form-select v-model="selected_race" :options="all_races" style="width: 60%"></b-form-select>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col><br><br></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Record distance : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{ records.max_distance }} km</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Record temps : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{ records.max_time }}</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Record dénivelé : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{ records.max_elev_gain }} m</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Record vitesse moyenne : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{ records.max_avg_speed }} km/h</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col><br><br></b-col>
                  </b-row>

                </b-container>

                <b-table striped hover :items="ranking_list" :fields="ranking_fields" responsive="true"
                         sticky-header="true"></b-table>
              </b-tab>

            </b-tabs>
          </b-card>


        </div>
      </div>
    </div>

    <FootBar/>
  </div>
</template>

<script>

import NavBar from "@/components/NavBar";
import FootBar from "@/components/FootBar";
import * as checker from "../scripts/refresh_credentials";
import axios from 'axios';

export default {
  name: "Dashboard",
  components: {
    NavBar,
    FootBar
  },
  data() {
    return {
      profile: {
        name: "",
        surname: "",
        birthdate: "",
        phone: "",
        email: "",
        address: "",
        zip_code: "",
        city: ""
      },
      race: {
        race_type: "Course à pied en équipe",
        cumul_distance: 52,
        cumul_time: "18h03",
        avg_speed: 13,
        avg_elev_gain: 250,
        max_avg_speed: 17,
        max_elev_gain: 560,
        max_distance: 20,
        max_time: "5h54",
        activity_count: 4,
        total_points: 560,
        rank: 5,
        total_runners: 150
      },
      team: {
        name: "Pédales",
        type: "Course à pied en équipe",
        members: 4,
        cumul_distance: 150,
        max_avg_speed: 17,
        max_elev_gain: 560,
        max_distance: 20,
        max_time: "5h54",
        max_points: 123,
        total_points: 897,
        rank: 1,
        total_teams: 12
      },
      records: {
        max_avg_speed: 17,
        max_elev_gain: 560,
        max_distance: 20,
        max_time: "5h54",
      },
      show_no_team: true,
      selected_race: "",
      all_races: [
        {value: "cap_equipe", text: "Course à pied par équipe"}
      ],
      ranking_fields: [
        {key: 'rank', label: "Rang"},
        {key: 'name', label: "Nom", sortable: true},
        {key: 'cumul_time', label: "Temps cumulé", sortable: true},
        {key: 'total_points', label: "Points", sortable: true}
      ],
      ranking_list: [
        {rank: 1, name: "Dupont", cumul_time: "19h45", total_points: 526}
      ],
      server_error: false,
      serv_err_type: ""
    }
  },
  methods: {
    onDisconnect(event) {
      event.preventDefault();
      //TODO requete post pour dire au serveur de drop le token
      localStorage.clear(); //on erase toutes les données persistantes avec les token
      this.$router.push({name: 'Home'});
    }
  },
  //TODO faire redirection pour changer mot de passe
  mounted() {
    checker.default.checkCredentials().then((resolve) => {
      console.log(resolve);
      axios.get(this.$baseUrl + '/api/athletes/' + localStorage.getItem('uid') + '/', {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access')}})
          .then(results => {
            this.profile.name = results.data.user.last_name;
            this.profile.surname = results.data.user.first_name;
            this.profile.address = results.data.address;
            this.profile.postal_code = results.data.zip_code;
            this.profile.city = results.data.city;
            this.profile.phone_number = results.data.phone;
            this.profile.email = results.data.user.email;
            this.profile.birthdate = results.data.birthday;
            console.log(results)

            if (results.data.strava_id === null) {
              this.$router.push({name: "Strava"}); //on redirige vers la page strava si pas de strava_id
            }

          }).catch(err => {
        this.server_error = true;
        this.serv_err_type = err;
      })
    }).catch(err => {
      this.server_error = true;
      this.serv_err_type = err;
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

.card_titles {
  text-align: center;
  font-weight: bold;
}

.buttons {
  margin: 0.5em;
}
</style>