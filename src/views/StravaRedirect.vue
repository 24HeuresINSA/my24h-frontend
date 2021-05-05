<template>
  <div>
    <b-spinner label="Loading..."></b-spinner>
    <p>Veuillez patienter...</p>
    <b-alert v-model="error_active" variant="danger"><strong>Quelque chose ne s'est pas passé comme
      prévu...</strong><br>code erreur : {{ error }}
    </b-alert>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: "StravaRedirect",
  data() {
    return {
      error: "",
      error_active: false
    }
  },
  methods: {
    cleanUpAuthToken(str) {
      return str.split("&")[1].slice(5);
    },
    redirectToHome() {
      this.$router.push({name: 'Login'})
    },
    redirectToStrava() {
      this.$router.push({name: 'Strava'})
    }
  },
  mounted() {
    if (location.search === '') {
      this.$router.push({name: 'Home'}) //on redirige le gars vers le home s'il est arrivé par erreur à cette adresse
    } else {
      const stravaAuthToken = this.cleanUpAuthToken(location.search)
      if (localStorage.my24_user_cache) {

        const data_to_send = {
          strava_code: stravaAuthToken
        }
        const options = {
          headers: {'auth': localStorage.my24_user_cache.access}
        }

        axios.post(this.$baseUrl + '/api/athletes/' + localStorage.my24_user_cache.id + '/strava', data_to_send, options)
            .then(response => {
              console.log(response);
              this.$router.push({name: 'Team'}); //si c'est ok on finalise l'inscription en lui proposant une team
            })
            .catch(error => {
              console.log(error);
              this.error_active = true;
              this.error = "le serveur renvoit une erreur, vous allez être redirigé dans 5s";
              setTimeout(this.redirectToStrava, 5000)
            })//TODO à vérifier avec François
      } else {
        //erreur, c'est pas normal qu'il arrive avec une url strava sans avoir d'id, maybe le gars désactive ses cookies et là on est baisés
        this.error_active = true;
        this.error = "impossible de lire le cache de votre navigateur et de vous authentifier, vos cookies sont peut-être désactivés ? Vous allez être redirigé dans 5s pour vous authentifier";
        setTimeout(this.redirectToHome, 5000)
      }

    }
  }

}
</script>

<style scoped>

</style>