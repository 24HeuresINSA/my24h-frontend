<template>
  <div id="body">
    <NavBar/>

    <div id="main_page">
      <div id="content">
        <div id="page" style="text-align: center">
          <h1>Importer une activité Strava</h1>
          <br>

          <p>Vous trouverez ci-dessous la liste des activités éligibles trouvées sur votre compte Strava lié.
            Sélectionnez celles que vous souhaitez faire prendre en compte dans le classement puis cliquez sur <strong>Importer</strong>.
            Nous vous rappellons que pour qu'une activité soit valide, elle doit avoir été réalisée entre le <strong>vendredi
              14 mai 2021 à 14h00</strong> et
            le <strong>dimanche 23 mai 2021 14h00</strong>. De plus, cette activité doit être déclarée en <strong>mode
              public</strong> sur Strava, et doit être obligatoirement
            associée à une <strong>trace GPS</strong>. <strong>Toute activité ne répondant pas à ces critères pourra
              être retirée par les organisateurs, sans préavis, conformément à notre règlement.</strong>
          </p>
          <br>
          <br>

          <b-table striped hover :items="activity_list" :fields="fields" responsive="true"
                   sticky-header="true" selectable selected-variant="success" @row-selected="onRowSelected">
            <template #cell(selected)="{ rowSelected }">
              <template v-if="rowSelected">
                <span aria-hidden="true">&check;</span>
                <span class="sr-only">Selected</span>
              </template>
              <template v-else>
                <span aria-hidden="true">&squ;</span>
                <span class="sr-only">Not selected</span>
              </template>
            </template>
          </b-table>

          <br>
          <b-alert v-model="show_alert" variant="info">Attention, pour des raisons techniques la récupération de vos
            activités Strava ne peut se faire qu'une fois toutes les 15 minutes environ
          </b-alert>
          <br>

          <b-alert v-model="server_error" variant="danger"><strong>Erreur du serveur, les activités n'ont pas été
            importées</strong><br> code :
            {{ serv_err_type }} <br> Si cette erreur persiste, contactez courses@24heures.org
          </b-alert>
          <br>
          <b-button class="buttons" variant="primary" to="/dashboard">Retour tableau de bord</b-button>
          <b-button class="buttons" variant="success" @click="onClick" :disabled="selected.length===0">Importer
          </b-button>
          <br>

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
  name: "Activite",
  components: {
    NavBar,
    FootBar
  },
  data() {
    return {
      fields: [
        {key: 'selected', label: "Sélection"},
        {key: 'name', label: "Nom de l'activité", sortable: true},
        {key: 'type', label: "Type", sortable: true},
        {key: 'date', label: "Date", sortable: true},
        {key: 'distance', label: "Distance (km)", sortable: true},
        {key: 'time', label: "Temps", sortable: true},
        {key: 'avg_speed', label: "Vitesse moyenne", sortable: true},
        {key: 'elev_gain', label: "Dénivelé (m)", sortable: true}
      ],
      activity_list: [],
      selected: [],
      show_alert: true,
      server_error: false,
      serv_err_type: ""
    }
  },
  methods: {
    onRowSelected(items) {
      this.selected = items
    },
    onClick(event) {
      event.preventDefault();

      checker.default.checkCredentials().then(resolve => {
        console.log(resolve);

        this.selected.forEach(elem => {

          const activity_to_send = new URLSearchParams();
          activity_to_send.append('activity_id', elem.activity_id); //TODO check avec François des champs qu'il veut

          axios.post(this.$baseUrl + '/api/athletes/' + localStorage.getItem('uid') + '/activites/', activity_to_send, {
            headers: {
              'content-type': 'application/x-www-form-urlencoded',
              'Authorization': 'Bearer ' + localStorage.getItem('access')
            }
          }).then(res => {
            console.log(res);
          }).catch(err => {
            console.log(err);
            this.server_error = true;
            this.serv_err_type = err;
          })
        })
      }).catch(reject => {
        console.log(reject);
      })

    }
  },
  mounted() {
    checker.default.checkCredentials().then(res => {
      console.log(res);
      axios.get(this.$baseUrl + '/api/athletes/' + localStorage.getItem('uid') + '/strava_activities/', {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('access')
        }
      }).then(response => {
        response.data.forEach(element => {
          this.activity_list.push({
            name: element.name,
            type: element.type,
            distance: element.distance,
            time: element.moving_time,
            activity_id: element.id,
            date: element.start_date,
            elev_gain: element.total_elevation_gain,
            avg_speed: element.distance / element.moving_time //TODO demander à François de me la sortir du back
          })
        })
      })
    }).catch(err => {
      console.log(err);
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

.buttons {
  margin: 1em;
}
</style>
