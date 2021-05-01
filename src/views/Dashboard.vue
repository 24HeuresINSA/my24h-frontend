<template>
  <div id="body">
    <NavBar/>

    <div id="main_page">
      <div id="content">
        <div id="page">
          <h1 style="text-align: center">Tableau de bord</h1>
          <br>
          <br>
          <p style="text-align: center">Bienvenue sur votre tableau de bord ! Ici, vous pourrez accéder à votre profil, voir votre classement, ajouter une activité et bien plus encore !</p>
          <br>
          <br>
          <b-card no-body>
            <b-tabs fill justified card>
              <b-tab title="Mon profil" active>
                <b-container>
                  <b-row><b-col><br></b-col></b-row>
                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Nom : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{profile.name}}</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Prénom : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{profile.surname}}</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Age : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{profile.age}} ans</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>E-Mail : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{profile.email}}</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>N° tel : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{profile.phone}}</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col style="text-align: center">
                      <br>
                      <b-button class="buttons" variant="success" to="/modifProfile">Modifier le profil</b-button>
                      <b-button class="buttons" variant="primary">Changer mot de passe</b-button>
                      <b-button class="buttons" variant="danger">Déconnexion</b-button>
                    </b-col>
                  </b-row>

                </b-container>
              </b-tab>

              <b-tab title="Ma course">
                <b-container>
                  <b-row>
                    <b-row><b-col><br></b-col></b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Type de course : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{race.race_type}}</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row><b-col><br></b-col></b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Distance cumulée : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{race.cumul_distance}} km</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Vitesse moyenne : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{race.avg_speed}} km/h</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Dénivelé moyen : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{race.avg_elev_gain}} m</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Temps cumulé : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{race.cumul_time}} / 24h00</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="3"></b-col>
                    <b-col sm="6">
                      <br>
                      <b-progress show-progress value="75" variant="success" striped="true"></b-progress>
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
                      <b-card-text>{{race.max_distance}} km</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Record temps : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{race.max_time}}</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Record dénivelé : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{race.max_elev_gain}} m</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Record vitesse moyenne : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{race.max_avg_speed}} km/h</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row><b-col><br><br></b-col></b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Nombre de points total : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{race.total_points}} point(s)</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Nombre d'activités Strava : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{race.activity_count}} activité(s)</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Votre rang : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{race.rank}} / {{race.total_runners}} coureurs</b-card-text>
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

              <b-tab title="Mon équipe">
                <b-card-text v-show="show_no_team">Oups, il semblerait que vous ne soyez pas affilié à une équipe...</b-card-text>
                <b-button v-show="show_no_team" variant="success" to="/team">Rejoindre une équipe</b-button>

                <b-container>
                  <b-row><b-col><br></b-col></b-row>
                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Nom de l'équipe : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{team.name}}</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>type : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{team.type}}</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Taille : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{team.members}} membres</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row><b-col><br><br></b-col></b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Record distance : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{team.max_distance}} km</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Record temps : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{team.max_time}}</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Record dénivelé : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{team.max_elev_gain}} m</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Record vitesse moyenne : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{team.max_avg_speed}} km/h</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Record points individuel : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{team.max_points}} points</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row><b-col><br><br></b-col></b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Nombre de points total : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{team.total_points}} point(s)</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Votre rang : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{team.rank}} / {{team.total_teams}} équipes</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                </b-container>
              </b-tab>

              <b-tab title="Classements et records">
                <b-container>
                  <b-row><b-col><br></b-col></b-row>
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

                  <b-row><b-col><br><br></b-col></b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Record distance : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{records.max_distance}} km</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Record temps : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{records.max_time}}</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Record dénivelé : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{records.max_elev_gain}} m</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Record vitesse moyenne : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{records.max_avg_speed}} km/h</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row><b-col><br><br></b-col></b-row>

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
        email: "courses@24heures.org"
      },
      race:{
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
      team:{
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
      records:{
        max_avg_speed: 17,
        max_elev_gain: 560,
        max_distance: 20,
        max_time: "5h54",
      },
      show_no_team: true,
      selected_race: "",
      all_races: [
        {value: "cap_equipe", text:"Course à pied par équipe"}
      ],
      ranking_fields: [
        {key: 'rank', label: "Rang"},
        {key: 'name', label: "Nom", sortable: true},
        {key: 'cumul_time', label: "Temps cumulé", sortable: true},
        {key: 'total_points', label: "Points", sortable: true}
      ],
      ranking_list: [
        {rank: 1, name: "Dupont", cumul_time: "19h45", total_points: 526}
      ]
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