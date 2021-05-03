<template>
  <div class="content">
    <b-img id="logo_24_generique" :src="require('../assets/logo_24.png')" alt="logo_24_generique" fluid></b-img>
    <h1>Echec authentification</h1>
    <p>La page à laquelle vous essayez d'accéder nécessite une authentification, merci de vous connecter !</p>
    <br>
    <b-button to="/login" variant="outline-success">Se connecter à My24h</b-button>
    <br>
  </div>
</template>

<script>
export default {
  name: "EchecAuth"
}
</script>

<style scoped>

</style>