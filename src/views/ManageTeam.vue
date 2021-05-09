<template>
  <div id="body">
    <NavBar/>

    <div id="main_page">
      <div id="content">
        <div id="page" style="text-align: center">
          <h1>Mon équipe en détail</h1>
          <br>
          <p>Vous retrouverez ici les membres de votre équipe</p>
          <br>

          <p><strong>Nom de l'équipe : </strong>{{ name }}</p>
          <p><strong>Type de course : </strong>{{ race_type }}</p>
          <p><strong>Catégorie : </strong>{{ category }}</p>

          <br>
          <br>

          <b-modal id="confirm_suppression" ref="modal_suppression" title="Êtes-vous sûr?" hide-footer>
            <p>Vous vous apprêtez à expulser cette/ces personnes de votre équipe, cette action est irrémédiable.
              <strong>Voulez-vous vraiment continuer ?</strong></p>
            <br>
            <p v-for="element in selected" :key="element"><strong>{{ element.name }} {{ element.surname }}</strong><br>
            </p>
            <br>
            <b-container align="center">
              <b-button class="buttons_modal" variant="outline-success" @click="$refs['modal_suppression'].hide()">
                Annuler
              </b-button>
              <b-button class="buttons_modal" variant="danger" @click="onClickErase">Oui, continuer</b-button>
            </b-container>

          </b-modal>

          <div v-show="isAdmin">

            <b-table striped hover :items="team_list" :fields="team_fields" responsive="true"
                     sticky-header="true" selectable selected-variant="danger" @row-selected="onRowSelected">
              <template #cell(gestion)="{ rowSelected }">
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
            <b-button class="buttons_modal" variant="outline-success" to="/dashboard">Retour tableau de bord</b-button>
            <b-button class="buttons_modal" v-b-modal.confirm_suppression variant="danger"
                      :disabled="selected.length===0">Supprimer le/les membres sélectionnés
            </b-button>
          </div>

          <div v-show="!isAdmin">

            <b-table striped hover :items="team_list" :fields="team_fields" responsive="true"
                     sticky-header="true">

            </b-table>
            <br>
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

export default {
  name: "ManageTeam",
  components: {
    NavBar,
    FootBar
  },
  data() {
    return {
      name: "test_equipe",
      race_type: "cap",
      category: "loisir",
      isAdmin: true,
      team_fields: [{key: "gestion", label: "Sélection"},
        {key: "name", label: "Nom", sortable: true},
        {key: "surname", label: "Prénom", sortable: true}],
      team_list: [{name: "Test", surname: "Gars", total_points: 213},
        {name: "Test2", surname: "Gars2", total_points: 54}],
      selected: []
    }
  },
  methods: {
    onRowSelected(items) {
      this.selected = items;
    },
    onClickErase(event) {
      event.preventDefault();
      //supprimer le gars
      this.$refs['modal_suppression'].hide();
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

.buttons_modal {
  margin: 0.5em;
}

.label {
  font-weight: bold;
}

.lines {
  text-align: left;
}
</style>