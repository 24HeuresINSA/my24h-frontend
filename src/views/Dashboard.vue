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

          <b-modal id="confirm_quit" ref="confirm_quit" title="Êtes-vous sûr?" hide-footer>
            <p>Vous vous apprêtez à quitter votre équipe, cette action est irrémédiable.
              <strong>Voulez-vous vraiment continuer ?</strong></p>
            <br>
            <b-container align="center">
              <b-button class="buttons" variant="outline-success" @click="$refs['confirm_quit'].hide()">
                Annuler
              </b-button>
              <b-button class="buttons" variant="danger" @click="leaveTeam">Oui, continuer</b-button>
            </b-container>

          </b-modal>

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

              <b-tab title="Ma course">
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
                    <b-col><br><br></b-col>
                  </b-row>

                  <div v-show="!duathlon">

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
                        <b-card-text><strong>Dénivelé total : </strong></b-card-text>
                      </b-col>
                      <b-col sm="4">
                        <b-card-text>{{ race.total_elev_gain }} m</b-card-text>
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

                  </div>

                  <div v-show="duathlon">

                    <b-row>
                      <b-col sm="4"></b-col>
                      <b-col sm="2">
                        <b-card-text><strong>Distance cumulée : </strong></b-card-text>
                      </b-col>
                      <b-col sm="4">
                        <b-card-text class="margin-zero">{{ race.cumul_distance }} km en course à pied</b-card-text>
                        <b-card-text>{{ race.cumul_distance_duat_velo }} km en vélo</b-card-text>
                      </b-col>
                      <b-col sm="2"></b-col>
                    </b-row>

                    <b-row>
                      <b-col><br></b-col>
                    </b-row>

                    <b-row>
                      <b-col sm="4"></b-col>
                      <b-col sm="2">
                        <b-card-text><strong>Vitesse moyenne : </strong></b-card-text>
                      </b-col>
                      <b-col sm="4">
                        <b-card-text class="margin-zero">{{ race.avg_speed }} km/h en course à pied</b-card-text>
                        <b-card-text>{{ race.avg_speed_duat_velo }} km/h en vélo</b-card-text>
                      </b-col>
                      <b-col sm="2"></b-col>
                    </b-row>

                    <b-row>
                      <b-col><br></b-col>
                    </b-row>

                    <b-row>
                      <b-col sm="4"></b-col>
                      <b-col sm="2">
                        <b-card-text><strong>Dénivelé total : </strong></b-card-text>
                      </b-col>
                      <b-col sm="4">
                        <b-card-text class="margin-zero">{{ race.total_elev_gain }} m en course à pied</b-card-text>
                        <b-card-text>{{ race.total_elev_gain_duat_velo }} m en vélo</b-card-text>
                      </b-col>
                      <b-col sm="2"></b-col>
                    </b-row>

                    <b-row>
                      <b-col><br></b-col>
                    </b-row>

                    <b-row>
                      <b-col sm="4"></b-col>
                      <b-col sm="2">
                        <b-card-text><strong>Temps cumulé : </strong></b-card-text>
                      </b-col>
                      <b-col sm="4">
                        <b-card-text class="margin-zero">{{ race.cumul_time }} / 8h00 en course à pied</b-card-text>
                        <b-card-text>{{ race.cumul_time_duat_velo }} / 16h00 en course vélo</b-card-text>
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
                        <b-card-text class="margin-zero">{{ race.max_distance }} km en course à pied</b-card-text>
                        <b-card-text>{{ race.max_distance_duat_velo }} km en vélo</b-card-text>
                      </b-col>
                      <b-col sm="2"></b-col>
                    </b-row>

                    <b-row>
                      <b-col><br></b-col>
                    </b-row>

                    <b-row>
                      <b-col sm="4"></b-col>
                      <b-col sm="2">
                        <b-card-text><strong>Record temps : </strong></b-card-text>
                      </b-col>
                      <b-col sm="4">
                        <b-card-text class="margin-zero">{{ race.max_time }} en course à pied</b-card-text>
                        <b-card-text>{{ race.max_time_duat_velo }} en vélo</b-card-text>
                      </b-col>
                      <b-col sm="2"></b-col>
                    </b-row>

                    <b-row>
                      <b-col><br></b-col>
                    </b-row>

                    <b-row>
                      <b-col sm="4"></b-col>
                      <b-col sm="2">
                        <b-card-text><strong>Record dénivelé : </strong></b-card-text>
                      </b-col>
                      <b-col sm="4">
                        <b-card-text class="margin-zero">{{ race.max_elev_gain }} m en course à pied</b-card-text>
                        <b-card-text>{{ race.max_elev_gain_duat_velo }} m en vélo</b-card-text>
                      </b-col>
                      <b-col sm="2"></b-col>
                    </b-row>

                    <b-row>
                      <b-col><br></b-col>
                    </b-row>

                    <b-row>
                      <b-col sm="4"></b-col>
                      <b-col sm="2">
                        <b-card-text><strong>Record vitesse moyenne : </strong></b-card-text>
                      </b-col>
                      <b-col sm="4">
                        <b-card-text class="margin-zero">{{ race.max_avg_speed }} km/h en course à pied</b-card-text>
                        <b-card-text>{{ race.max_avg_speed_duat_velo }} km/h en pied</b-card-text>
                      </b-col>
                      <b-col sm="2"></b-col>
                    </b-row>

                  </div>

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
                      <b-button class="buttons" variant="success" @click="stravaRefresh">Ajouter une activité</b-button>
                    </b-col>
                  </b-row>

                </b-container>
              </b-tab>

              <b-tab title="Mon équipe">
                <b-card-text v-show="show_no_team">Oups, il semblerait que vous ne soyez pas affilié à une équipe...
                </b-card-text>
                <b-button v-show="show_no_team" variant="success" to="/team">Rejoindre une équipe</b-button>

                <b-container v-show="!show_no_team">
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
                      <b-card-text><strong>Type : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{ team.type }}</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Catégorie : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{ team.members }}</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col><br><br></b-col>
                  </b-row>

                  <div v-show="!duathlon">

                    <b-row>
                      <b-col sm="4"></b-col>
                      <b-col sm="2">
                        <b-card-text><strong>Record distance cumulée: </strong></b-card-text>
                      </b-col>
                      <b-col sm="4">
                        <b-card-text>{{ team.max_distance }} km</b-card-text>
                      </b-col>
                      <b-col sm="2"></b-col>
                    </b-row>

                    <b-row>
                      <b-col sm="4"></b-col>
                      <b-col sm="2">
                        <b-card-text><strong>Record temps cumulé: </strong></b-card-text>
                      </b-col>
                      <b-col sm="4">
                        <b-card-text>{{ team.max_time }}</b-card-text>
                      </b-col>
                      <b-col sm="2"></b-col>
                    </b-row>

                    <b-row>
                      <b-col sm="4"></b-col>
                      <b-col sm="2">
                        <b-card-text><strong>Record dénivelé cumulé: </strong></b-card-text>
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

                  </div>

                  <div v-show="duathlon">

                    <b-row>
                      <b-col sm="4"></b-col>
                      <b-col sm="2">
                        <b-card-text><strong>Record distance cumulée: </strong></b-card-text>
                      </b-col>
                      <b-col sm="4">
                        <b-card-text class="margin-zero">{{ team.max_distance }} km en course à pied</b-card-text>
                        <b-card-text>{{ team.max_distance_duat_velo }} km en vélo</b-card-text>
                      </b-col>
                      <b-col sm="2"></b-col>
                    </b-row>

                    <b-row>
                      <b-col><br></b-col>
                    </b-row>

                    <b-row>
                      <b-col sm="4"></b-col>
                      <b-col sm="2">
                        <b-card-text><strong>Record temps cumulé: </strong></b-card-text>
                      </b-col>
                      <b-col sm="4">
                        <b-card-text class="margin-zero">{{ team.max_time }} en course à pied</b-card-text>
                        <b-card-text>{{ team.max_time_duat_velo }} en vélo</b-card-text>
                      </b-col>
                      <b-col sm="2"></b-col>
                    </b-row>

                    <b-row>
                      <b-col><br></b-col>
                    </b-row>

                    <b-row>
                      <b-col sm="4"></b-col>
                      <b-col sm="2">
                        <b-card-text><strong>Record dénivelé cumulé: </strong></b-card-text>
                      </b-col>
                      <b-col sm="4">
                        <b-card-text class="margin-zero">{{ team.max_elev_gain }} m en course à pied</b-card-text>
                        <b-card-text>{{ team.max_elev_gain_duat_velo }} m en vélo</b-card-text>
                      </b-col>
                      <b-col sm="2"></b-col>
                    </b-row>

                    <b-row>
                      <b-col><br></b-col>
                    </b-row>

                    <b-row>
                      <b-col sm="4"></b-col>
                      <b-col sm="2">
                        <b-card-text><strong>Record vitesse moyenne : </strong></b-card-text>
                      </b-col>
                      <b-col sm="4">
                        <b-card-text class="margin-zero">{{ team.max_avg_speed }} km/h en course à pied</b-card-text>
                        <b-card-text>{{ team.max_avg_speed_duat_velo }} km/h en vélo</b-card-text>
                      </b-col>
                      <b-col sm="2"></b-col>
                    </b-row>

                  </div>

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
                      <b-button class="buttons" v-b-modal.confirm_quit variant="danger">Quitter mon équipe</b-button>
                    </b-col>
                  </b-row>

                </b-container>
              </b-tab>

              <b-tab title="Classements et records">
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

                  <div v-show="!duathlon">
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
                  </div>

                  <div v-show="duathlon">
                    <b-row>
                      <b-col sm="4"></b-col>
                      <b-col sm="2">
                        <b-card-text><strong>Record distance : </strong></b-card-text>
                      </b-col>
                      <b-col sm="4">
                        <b-card-text class="margin-zero">{{ records.max_distance }} km en course à pied</b-card-text>
                        <b-card-text>{{ records.max_distance_duat_velo }} km en vélo</b-card-text>
                      </b-col>
                      <b-col sm="2"></b-col>
                    </b-row>

                    <b-row>
                      <b-col><br></b-col>
                    </b-row>

                    <b-row>
                      <b-col sm="4"></b-col>
                      <b-col sm="2">
                        <b-card-text><strong>Record temps : </strong></b-card-text>
                      </b-col>
                      <b-col sm="4">
                        <b-card-text class="margin-zero">{{ records.max_time }} en course à pied</b-card-text>
                        <b-card-text>{{ records.max_time_duat_velo }} en vélo</b-card-text>
                      </b-col>
                      <b-col sm="2"></b-col>
                    </b-row>

                    <b-row>
                      <b-col><br></b-col>
                    </b-row>

                    <b-row>
                      <b-col sm="4"></b-col>
                      <b-col sm="2">
                        <b-card-text><strong>Record dénivelé : </strong></b-card-text>
                      </b-col>
                      <b-col sm="4">
                        <b-card-text class="margin-zero">{{ records.max_elev_gain }} m en course à pied</b-card-text>
                        <b-card-text>{{ records.max_elev_gain_duat_velo }} m en vélo</b-card-text>
                      </b-col>
                      <b-col sm="2"></b-col>
                    </b-row>

                    <b-row>
                      <b-col><br></b-col>
                    </b-row>

                    <b-row>
                      <b-col sm="4"></b-col>
                      <b-col sm="2">
                        <b-card-text><strong>Record vitesse moyenne : </strong></b-card-text>
                      </b-col>
                      <b-col sm="4">
                        <b-card-text class="margin-zero">{{ records.max_avg_speed }} km/h en course à pied</b-card-text>
                        <b-card-text>{{ records.max_avg_speed_duat_velo }} km/h en vélo</b-card-text>
                      </b-col>
                      <b-col sm="2"></b-col>
                    </b-row>
                  </div>


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
        name: "--",
        surname: "--",
        birthdate: "--",
        phone: "--",
        email: "--",
        address: "--",
        zip_code: "--",
        city: "--",
        team_id: ""
      },
      race: {
        race_type: "--",
        cumul_distance: null,
        cumul_distance_duat_velo: null,
        cumul_time: "--",
        cumul_time_duat_velo: "--",
        avg_speed: null,
        avg_speed_duat_velo: null,
        total_elev_gain: null,
        total_elev_gain_duat_velo: null,
        max_avg_speed: null,
        max_avg_speed_duat_velo: null,
        max_elev_gain: null,
        max_elev_gain_duat_velo: null,
        max_distance: null,
        max_distance_duat_velo: null,
        max_time: "--",
        max_time_duat_velo: "--",
        activity_count: null,
        total_points: null,
        rank: null,
        total_runners: null
      },
      team: {
        name: "",
        type: "",
        members: null,
        cumul_distance: "--",
        max_avg_speed: "--",
        max_avg_speed_duat_velo: "--",
        max_elev_gain: "--",
        max_elev_gain_duat_velo: "--",
        max_distance: "--",
        max_distance_duat_velo: "--",
        max_time: "--",
        max_time_duat_velo: "--",
        max_points: "--",
        total_points: "--",
        rank: "--",
        total_teams: "--",
        type_id: null,
        category_id: null
      },
      records: {
        max_avg_speed: null,
        max_avg_speed_duat_velo: null,
        max_elev_gain: null,
        max_elev_gain_duat_velo: null,
        max_distance: null,
        max_distance_duat_velo: null,
        max_time: "--",
        max_time_duat_velo: "--"
      },
      show_no_team: false,
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
      serv_err_type: "",
      duathlon: false
    }
  },
  methods: {
    onDisconnect(event) {
      event.preventDefault();
      //TODO requete post pour dire au serveur de drop le token
      localStorage.clear(); //on erase toutes les données persistantes avec les token
      this.$router.push({name: 'Home'});
    },
    stravaRefresh(event) {
      event.preventDefault();
      //TODO changer l'url de redirection si localhost
      checker.default.checkCredentials().then(resolve => {
        console.log(resolve);
        window.location = 'https://www.strava.com/oauth/authorize?client_id=64981&response_type=code&redirect_uri=http://localhost:8080/&approval_prompt=auto&scope=activity:read';
      }).catch(reject => {
        console.log(reject);
      })

    },
    leaveTeam(event) {
      event.preventDefault();
      var erase = new URLSearchParams();
      erase.append('user_id', localStorage.getItem('uid'));
      checker.default.checkCredentials().then(resolve => {
        console.log(resolve);
        axios.post(this.$baseUrl + '/api/teams/' + this.profile.team_id + '/leave/', erase, {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access')}})
            .then(res => {
              console.log(res);
              location.reload();
            }).catch(err => {
          console.log(err);
          this.server_error = true;
          this.serv_err_type = "Impossible de quitter l'équipe, réessayez. Si le problème persiste contactez courses@24heures.org. Code : " + err
        });
      }).catch(reject => {
        console.log(reject)
      })

      this.$refs['confirm_quit'].hide()
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
            this.profile.zip_code = results.data.zip_code;
            this.profile.city = results.data.city;
            this.profile.phone = results.data.phone;
            this.profile.email = results.data.user.email;
            this.profile.birthdate = results.data.birthday;
            this.race.race_type = results.data.race.name;
            if (results.data.team !== null) {
              this.profile.team_id = results.data.team.id;
            } else {
              this.show_no_team = true;
            }
            console.log(results)

            if (results.data.strava_id === null) {
              this.$router.push({name: "Strava"}); //on redirige vers la page strava si pas de strava_id
            } else {
              localStorage.setItem('stravaConnected', 'true');
            }

            axios.get(this.$baseUrl + '/api/teams/' + this.profile.team_id + '/members/', {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access')}})
                .then(res => {
                  this.team.members = res.data.category.name;
                  this.team.category_id = res.data.category.id;
                  this.team.type_id = res.data.race.id;
                  this.team.name = res.data.name;
                  this.team.type = res.data.race.name;
                }).catch(err => {
              console.log(err);
              this.server_error = true;
              this.serv_err_type = "Impossible de récupérer les données équipes, veuillez recharger la page. Code erreur : " + err;
            });

            axios.get(this.$baseUrl + '/api/teams/' + this.profile.team_id + '/stat/', {
              headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('access')
              }
            }).then(res => {
              if (res.data.length === 2) {
                this.duathlon = true;
                this.team.max_distance = res.data["Course à pied"].record_distance;
                this.team.max_time = res.data["Course à pied"].record_time;
                this.team.max_avg_speed = res.data["Course à pied"].record_avg_speed;
                this.team.max_elev_gain = res.data["Course à pied"].record_elevation;
                this.team.max_distance_duat_velo = res.data["Course cycliste"].record_distance;
                this.team.max_time_duat_velo = res.data["Course cycliste"].record_time;
                this.team.max_avg_speed_duat_velo = res.data["Course cycliste"].record_avg_speed;
                this.team.max_elev_gain_duat_velo = res.data["Course cycliste"].record_elevation;
                this.team.total_points = res.data["Course à pied"].points + res.data["Course cycliste"].points;
              } else {
                this.team.max_distance = res.data[this.team.type].record_distance;
                this.team.max_time = res.data[this.team.type].record_time;
                this.team.max_avg_speed = res.data[this.team.type].record_avg_speed;
                this.team.max_elev_gain = res.data[this.team.type].record_elevation;
                this.team.total_points = res.data[this.team.type].points;
              }
            }).catch(err => {
              console.log(err);
              this.server_error = true;
              this.serv_err_type = "Impossible de récupérer les données équipes, veuillez recharger la page. Code erreur : " + err;
            });

            axios.get(this.$baseUrl + '/api/athletes/' + localStorage.getItem('uid') + '/stat/', {
              headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('access')
              }
            }).then(res => {
              if (res.data.length === 2) {
                this.duathlon = true;
                this.race.max_distance = res.data["Course à pied"].record_distance;
                this.race.max_distance_duat_velo = res.data["Course cycliste"].record_distance;
                this.race.max_time = res.data["Course à pied"].record_time;
                this.race.max_time = res.data["Course cycliste"].record_time;
                this.race.max_avg_speed = res.data["Course à pied"].record_avg_speed;
                this.race.max_avg_speed = res.data["Course cycliste"].record_avg_speed;
                this.race.max_elev_gain = res.data["Course à pied"].record_elevation;
                this.race.max_elev_gain = res.data["Course cycliste"].record_elevation;
                this.race.total_points = res.data["Course à pied"].points + res.data["Course cycliste"].points;
                this.race.cumul_time = res.data["Course à pied"].total_time;
                this.race.cumul_time = res.data["Course cycliste"].total_time;
                this.race.cumul_distance = res.data["Course à pied"].total_km;
                this.race.cumul_distance = res.data["Course cycliste"].total_km;
                this.race.avg_speed = res.data["Course à pied"].total_avg_speed;
                this.race.avg_speed = res.data["Course cycliste"].total_avg_speed;
                this.race.total_elev_gain = res.data["Course à pied"].total_elevation;
                this.race.total_elev_gain = res.data["Course cycliste"].total_elevation;
                this.race.activity_count = res.data["Course à pied"].nb_activities + res.data["Course cycliste"].nb_activities;

              } else {
                this.race.max_distance = res.data[this.profile.race_type].record_distance;
                this.race.max_time = res.data[this.profile.race_type].record_time;
                this.race.max_avg_speed = res.data[this.profile.race_type].record_avg_speed;
                this.race.max_elev_gain = res.data[this.profile.race_type].record_elevation;
                this.race.total_points = res.data[this.profile.race_type].points;
                this.race.cumul_time = res.data[this.profile.race_type].total_time;
                this.race.cumul_distance = res.data[this.profile.race_type].total_km;
                this.race.avg_speed = res.data[this.profile.race_type].total_avg_speed;
                this.race.total_elev_gain = res.data[this.profile.race_type].total_elevation;
                this.race.activity_count = res.data[this.profile.race_type].nb_activities;
              }
            })

          }).catch(err => {
        this.server_error = true;
        this.serv_err_type = "Impossible de récupérer les données coureur, veuillez recharger la page. Code erreur : " + err;
      });

      axios.get(this.$baseUrl + '/api/teams/' + this.profile.team_id + '/ranking/', {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('access')
        }
      }).then(res => {
        console.log(res);
        //TODO finir le classement
      }).catch(err => {
        console.log(err);
        this.server_error = true;
        this.serv_err_type = "Impossible de récupérer les données de classement équipes, veuillez recharger votre page. Code erreur : " + err;
      });

      axios.get(this.$baseUrl + '/api/athletes/' + localStorage.getItem('uid') + '/ranking/', {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('access')
        }
      }).then(res => {
        console.log(res);
        //TODO finir le classement
      }).catch(err => {
        console.log(err);
        this.server_error = true;
        this.serv_err_type = "Impossible de récupérer les données de classement équipes, veuillez recharger votre page. Code erreur : " + err;
      });

    }).catch(err => {
      this.server_error = true;
      this.serv_err_type = err;
    });
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

.margin-zero {
  margin: 0;
}
</style>