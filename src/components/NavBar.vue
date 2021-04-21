<template>
  <div id="nav">
    <b-navbar toggleable="lg" type="light" variant="success" id="navbar">
      <b-navbar-brand href="/">
        <b-img id="img_logo" :src="require('../assets/logo24_2021.png')" alt="Logo des 24_2021" fluid></b-img>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Accueil</b-nav-item>
          <b-nav-item to="/">Tableau de bord</b-nav-item>
          <b-nav-item to="/faq">Foire aux questions</b-nav-item>
          <b-nav-item to="/reglement">Règlement</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>


  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
#nav {
  padding: 0;
}

#navbar{
  position: fixed;
  top: 0;
  width: 100%;
}

.nav_item {
  color: white;
}
</style>