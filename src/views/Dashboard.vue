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
          <b-alert variant="info" show>Merci de vous être inscrit à nos courses ! La plate-forme est maintenant
            pleinement fonctionnelle.
            Pour importer une activité, allez dans Ma course, puis ajouter une activité. Vous avez jusqu'au <strong>dimanche
              23 mai 14h</strong>
            pour importer vos activités Strava. En cas de problème, contactez courses@24heures.org. Bon courage à tous !
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

                    <!--                    <b-row>-->
                    <!--                      <b-col sm="4"></b-col>-->
                    <!--                      <b-col sm="2">-->
                    <!--                        <b-card-text><strong>Vitesse moyenne : </strong></b-card-text>-->
                    <!--                      </b-col>-->
                    <!--                      <b-col sm="4">-->
                    <!--                        <b-card-text>{{ race.avg_speed }} km/h</b-card-text>-->
                    <!--                      </b-col>-->
                    <!--                      <b-col sm="2"></b-col>-->
                    <!--                    </b-row>-->

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
                        <b-card-text>{{ race.cumul_time }} / 24:00:00</b-card-text>
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

                    <!--                    <b-row>-->
                    <!--                      <b-col sm="4"></b-col>-->
                    <!--                      <b-col sm="2">-->
                    <!--                        <b-card-text><strong>Vitesse moyenne : </strong></b-card-text>-->
                    <!--                      </b-col>-->
                    <!--                      <b-col sm="4">-->
                    <!--                        <b-card-text class="margin-zero">{{ race.avg_speed }} km/h en course à pied</b-card-text>-->
                    <!--                        <b-card-text>{{ race.avg_speed_duat_velo }} km/h en vélo</b-card-text>-->
                    <!--                      </b-col>-->
                    <!--                      <b-col sm="2"></b-col>-->
                    <!--                    </b-row>-->

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
                        <b-card-text class="margin-zero">{{ race.cumul_time }} / 8:00:00 en course à pied</b-card-text>
                        <b-card-text>{{ race.cumul_time_duat_velo }} / 16:00:00 en course vélo</b-card-text>
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
                      <b-card-text>{{ race.race_type }}</b-card-text>
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
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Choisir une catégorie : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-form-select v-model="selected_category" :options="all_categories"
                                     style="width: 60%"></b-form-select>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col><br></b-col>
                  </b-row>

                  <b-row>
                    <b-col align="center">
                      <b-button variant="success" @click="onRaceSelected">Afficher le classement</b-button>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col><br><br></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Classement oneGum : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{ records.max_time }} points par {{ records.max_time_username }}</b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4"></b-col>
                    <b-col sm="2">
                      <b-card-text><strong>Classement TDR : </strong></b-card-text>
                    </b-col>
                    <b-col sm="4">
                      <b-card-text>{{ records.max_elev_gain }} m cumulés par {{
                          records.max_elev_gain_username
                        }}
                      </b-card-text>
                    </b-col>
                    <b-col sm="2"></b-col>
                  </b-row>

                  <b-row>
                    <b-col><br><br></b-col>
                  </b-row>

                  <b-row>
                    <b-col><p><strong>Rappel :</strong> 1km en course à pied vaut 3 points, 1km en vélo vaut 1 point.
                    </p></b-col>
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
        name: "--",
        surname: "--",
        birthdate: "--",
        phone: "--",
        email: "--",
        address: "--",
        zip_code: "--",
        city: "--",
        team_id: null
      },
      race: {
        race_type: "--",
        race_id: null,
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
        total_runners: null,
        discipline_name: ""
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
        rank: null,
        total_teams: null,
        type_id: null,
        category_id: null
      },
      records: {
        max_elev_gain: null,
        max_elev_gain_username: "--",
        max_time: "--",
        max_time_username: "--"
      },
      show_no_team: false,
      selected_race: "",
      selected_category: "",
      all_races: [],
      all_categories: [
        {value: 0, text: 'Solo'}
      ],
      ranking_fields: [
        {key: 'rank', label: "Rang"},
        {key: 'name', label: "Nom", sortable: true},
        {key: 'total_points', label: "Points", sortable: true}
      ],
      ranking_list: [],
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
        window.location = 'https://www.strava.com/oauth/authorize?client_id=64981&response_type=code&redirect_uri=https://my24h.24heures.org/&approval_prompt=auto&scope=activity:read';
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
    },
    onRaceSelected(event) {
      event.preventDefault();
      this.ranking_list = [];
      checker.default.checkCredentials().then(resolve => {
        console.log(resolve);

        if (this.selected_category === 0) {
          var data_to_send = new URLSearchParams();
          data_to_send.append('race_id', this.selected_race);

          axios.post(this.$baseUrl + '/api/athletes/' + localStorage.getItem('uid') + '/ranking/', data_to_send, {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('access'),
              'content-type': 'application/x-www-form-urlencoded'
            }
          }).then(res => {
            for (const [key, value] of Object.entries(res.data)) {
              this.ranking_list.push({
                rank: key,
                name: value.username,
                total_points: (value.total_points / 1000).toFixed(1)
              });
            }
          }).catch(err => {
            this.server_error = true;
            this.serv_err_type = "Impossible de récupérer le classement, veuillez réessayer. Code erreur : " + err;
          });

        } else {
          var rank_to_claim = new URLSearchParams();
          rank_to_claim.append('race_id', this.selected_race);
          rank_to_claim.append('category_id', this.selected_category);

          axios.post(this.$baseUrl + '/api/teams/1/ranking/', rank_to_claim, {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('access'),
              'content-type': 'application/x-www-form-urlencoded'
            }
          }).then(res => {
            for (const [key, value] of Object.entries(res.data)) {
              this.ranking_list.push({
                rank: key,
                name: value.name,
                total_points: (value.total_points / 1000).toFixed(1)
              });
            }
          }).catch(err => {
            this.server_error = true;
            this.serv_err_type = "Impossible de récupérer le classement, veuillez réessayer. Code erreur : " + err;
          })
        }
      }).catch(reject => {
        console.log(reject);
      })

    },
    secondsToHms(d) {
      d = Number(d);
      var h = Math.floor(d / 3600);
      var m = Math.floor(d % 3600 / 60);
      var s = Math.floor(d % 3600 % 60);

      var hDisplay = h > 0 ? h + (h === 1 ? ":" : ":") : "";
      var mDisplay = m > 0 ? m + (m === 1 ? ":" : ":") : "";
      var sDisplay = s > 0 ? s + (s === 1 ? ":" : "") : "";
      return hDisplay + mDisplay + sDisplay;
    },
  },
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

                if (results.data.team === null) { //c'est vrmt nul à chier ce code mais flemme
                  this.show_no_team = true;
                  this.race.race_id = results.data.race.id;

                  if (results.data.race.name !== 'Course cycliste') {
                    this.race.race_type = results.data.race.name;
                  } else {
                    this.race.race_type = 'Vélo';
                  }

                } else {
                  this.profile.team_id = results.data.team.id;
                  this.race.race_id = results.data.team.race.id;
                  if (results.data.team.race.name !== 'Course cycliste') {
                    this.race.race_type = results.data.team.race.name;
                  } else {
                    this.race.race_type = 'Vélo';
                  }

                }

                console.log(results)

                if (results.data.strava_id === null) {
                  this.$router.push({name: "Strava"}); //on redirige vers la page strava si pas de strava_id
                } else {
                  localStorage.setItem('stravaConnected', 'true');
                }

                if (this.profile.team_id !== null) {
                  axios.get(this.$baseUrl + '/api/teams/' + this.profile.team_id + '/members/', {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access')}})
                      .then(res => {
                        this.team.members = res.data.category.name;
                        this.team.category_id = res.data.category.id;
                        this.team.type_id = this.race.race_id;
                        this.team.name = res.data.name;

                        if (this.profile.team_id !== null) {
                          axios.get(this.$baseUrl + '/api/teams/' + this.profile.team_id + '/stat/', {
                            headers: {
                              'Authorization': 'Bearer ' + localStorage.getItem('access')
                            }
                          }).then(res => {
                            if (Object.keys(res.data).length !== 0) {
                              if (Object.keys(res.data).length === 2) {
                                this.duathlon = true;
                                this.team.max_distance = (res.data["Course à pied"].record_distance / 1000).toFixed(2);
                                this.team.max_time = this.secondsToHms(res.data["Course à pied"].record_time);
                                this.team.max_avg_speed = res.data["Course à pied"].record_avg_speed;
                                this.team.max_elev_gain = res.data["Course à pied"].record_elevation;
                                this.team.max_distance_duat_velo = (res.data["Vélo"].record_distance / 1000).toFixed(2);
                                this.team.max_time_duat_velo = this.secondsToHms(res.data["Vélo"].record_time);
                                this.team.max_avg_speed_duat_velo = res.data["Vélo"].record_avg_speed;
                                this.team.max_elev_gain_duat_velo = res.data["Vélo"].record_elevation;
                                //this.team.total_points = ((res.data["Course à pied"].points + res.data["Vélo"].points) / 1000).toFixed(1);
                              } else {
                                console.log(this.race.race_type);
                                console.log(this.race.race_type);
                                console.log(res.data[this.race.race_type]);
                                this.team.max_distance = (res.data[this.race.race_type].record_distance / 1000).toFixed(2);
                                this.team.max_time = this.secondsToHms(res.data[this.race.race_type].record_time);
                                this.team.max_avg_speed = res.data[this.race.race_type].record_avg_speed;
                                this.team.max_elev_gain = res.data[this.race.race_type].record_elevation;
                                //this.team.total_points = (res.data[this.race.race_type].points / 1000).toFixed(1);
                              }
                            }
                          }).catch(err => {
                            console.log(err);
                            this.server_error = true;
                            this.serv_err_type = "Impossible de récupérer les données équipes, veuillez recharger la page. Code erreur : " + err;
                          });
                        }

                        var data_ranking_team = new URLSearchParams();
                        data_ranking_team.append('race_id', this.race.race_id);
                        data_ranking_team.append('category_id', this.team.category_id);

                        axios.post(this.$baseUrl + '/api/teams/1/ranking/', data_ranking_team, {
                          headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem('access')
                          }
                        }).then(res => {
                          console.log(res);
                          for (const [key, value] of Object.entries(res.data)) {
                            if (value.team_id === this.profile.team_id) {
                              this.team.rank = key;
                              this.team.total_points = (value.total_points / 1000).toFixed(1);
                            }
                          }
                          this.team.total_teams = Object.keys(res.data).length;

                        }).catch(err => {
                          console.log(err);
                          this.server_error = true;
                          this.serv_err_type = "Impossible de récupérer les données de classement équipes, veuillez recharger votre page. Code erreur : " + err;
                        });

                      }).catch(err => {
                    console.log(err);
                    this.server_error = true;
                    this.serv_err_type = "Impossible de récupérer les données équipes, veuillez recharger la page. Code erreur : " + err;
                  });
                }

                axios.get(this.$baseUrl + '/api/athletes/' + localStorage.getItem('uid') + '/stat/', {
                  headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('access')
                  }
                }).then(res => {
                  console.log(res);

                  if (Object.keys(res.data).length !== 0) {

                    if (Object.keys(res.data).length === 2) {
                      this.duathlon = true;
                      console.log(res.data);
                      this.race.max_distance = (res.data["Course à pied"].record_distance / 1000).toFixed(2);
                      this.race.max_distance_duat_velo = (res.data["Vélo"].record_distance / 1000).toFixed(2);
                      this.race.max_time = this.secondsToHms(res.data["Course à pied"].record_time);
                      this.race.max_time_duat_velo = this.secondsToHms(res.data["Vélo"].record_time);
                      this.race.max_avg_speed = (res.data["Course à pied"].record_avg_speed / 1).toFixed(1);
                      this.race.max_avg_speed_duat_velo = (res.data["Vélo"].record_avg_speed / 1).toFixed(1);
                      this.race.max_elev_gain = res.data["Course à pied"].record_elevation;
                      this.race.max_elev_gain_duat_velo = res.data["Vélo"].record_elevation;
                      //this.race.total_points = ((res.data["Course à pied"].points + res.data["Vélo"].points) / 1000).toFixed(1);
                      this.race.cumul_time = this.secondsToHms(res.data["Course à pied"].total_time);
                      this.race.cumul_time_duat_velo = this.secondsToHms(res.data["Vélo"].total_time);
                      this.race.cumul_distance = (res.data["Course à pied"].total_km / 1000).toFixed(2);
                      this.race.cumul_distance_duat_velo = (res.data["Vélo"].total_km / 1000).toFixed(2);
                      //this.race.avg_speed = res.data["Course à pied"].total_avg_speed;
                      //this.race.avg_speed_duat_velo = res.data["Vélo"].total_avg_speed;
                      this.race.total_elev_gain = res.data["Course à pied"].total_elevation;
                      this.race.total_elev_gain_duat_velo = res.data["Vélo"].total_elevation;
                      this.race.activity_count = res.data["Course à pied"].nb_activities + res.data["Vélo"].nb_activities;

                    } else {
                      this.race.max_distance = (res.data[this.race.race_type].record_distance / 1000).toFixed(2);
                      this.race.max_time = this.secondsToHms(res.data[this.race.race_type].record_time);
                      this.race.max_avg_speed = res.data[this.race.race_type].record_avg_speed;
                      this.race.max_elev_gain = res.data[this.race.race_type].record_elevation;
                      //this.race.total_points = (res.data[this.race.race_type].points / 1000).toFixed(1);
                      this.race.cumul_time = this.secondsToHms(res.data[this.race.race_type].total_time)
                      this.race.cumul_distance = (res.data[this.race.race_type].total_km / 1000).toFixed(2);
                      //this.race.avg_speed = res.data[this.race.race_type].total_avg_speed;
                      this.race.total_elev_gain = res.data[this.race.race_type].total_elevation;
                      this.race.activity_count = res.data[this.race.race_type].nb_activities;
                    }
                    var athlete_ranking = new URLSearchParams();
                    athlete_ranking.append('race_id', this.race.race_id);

                    axios.post(this.$baseUrl + '/api/athletes/' + localStorage.getItem('uid') + '/ranking/', athlete_ranking, {
                      headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('access')
                      }
                    }).then(res => {
                      console.log(res);
                      this.race.total_runners = Object.keys(res.data).length;
                      for (const [key, value] of Object.entries(res.data)) {
                        if (value.athlete_id === parseInt(localStorage.getItem('uid'))) {
                          this.race.rank = key;
                          this.race.total_points = (value.total_points / 1000).toFixed(1);
                        }
                      }

                    }).catch(err => {
                      console.log(err);
                      this.server_error = true;
                      this.serv_err_type = "Impossible de récupérer les données de classement coureur, veuillez recharger votre page. Code erreur : " + err;
                    });
                  }
                });


                axios.get(this.$baseUrl + '/api/races/' + this.race.race_id + '/challenge_elevation/', {
                  headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('access')
                  }
                }).then(res => {
                  this.records.max_elev_gain = res.data.elevation_points;
                  this.records.max_elev_gain_username = res.data.username;
                }).catch(err => {
                  console.log(err);
                  this.server_error = true;
                  this.serv_err_type = "Erreur dans la récupération du classement TDR, veuilez recharger la page. Code erreur : " + err;
                });

                axios.get(this.$baseUrl + '/api/races/' + this.race.race_id + '/challenge_duration/', {
                  headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('access')
                  }
                }).then(res => {
                  console.log(res);
                  this.records.max_time = res.data.duration_points;
                  this.records.max_time_username = res.data.username;
                }).catch(err => {
                  console.log(err);
                  this.server_error = true;
                  this.serv_err_type = "Erreur dans la récupération du classement OneGum, veuilez recharger la page. Code erreur : " + err;
                });

                axios.get(this.$baseUrl + '/api/categories/', {headers: {'Authorization': 'Bearer ' + localStorage.getItem('access')}})
                    .then(response => {
                      response.data.results.forEach(element => (this.all_categories.push({
                        value: element.id,
                        text: element.name
                      })))
                    }).catch(err => {
                  this.show_alert = true;
                  this.message = "Impossible de récupérer les données du serveur, contactez courses@24heures.org | code : " + err;
                });

                axios.get(this.$baseUrl + '/api/races/').then(response => {
                  response.data.results.forEach(element => (this.all_races.push({
                    value: element.id,
                    text: element.name
                  })));
                  console.log(response);
                }).catch(error => console.log(error));

              }).catch(err => {
            this.server_error = true;
            this.serv_err_type = "Impossible de récupérer les données coureur, veuillez recharger la page. Code erreur : " + err;
          });

        }
    ).catch(err => {
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