<template>
  <div id="nav">
    <b-nav align="center" id="navbar">
      <b-navbar-brand href="/">
        <b-img id="img_logo" :src="require('../assets/logo24_2021.png')" alt="Logo des 24_2021" fluid></b-img>
      </b-navbar-brand>
      <div class="dropdown cssdropdown">
        <a href="#" data-toggle="dropdown" >CONCERTS</a>
        <b-icon stacked icon="chevron-down" class="icons"></b-icon>
        <ul class="dropdown-menu">
          <li><a href="https://www.24heures.org/concerts/artistes">ARTISTES</a></li>
          <li><a href="https://www.24heures.org/concerts/tremplins">TREMPLINS</a></li>
        </ul>
      </div>
      <div class="dropdown cssdropdown">
        <a href="#" data-toggle="dropdown" >ANIMATIONS</a>
        <b-icon stacked icon="chevron-down" class="icons"></b-icon>
        <ul class="dropdown-menu">
          <li><a href="https://www.24heures.org/animations">ANIMATIONS</a></li>
          <li><a href="https://www.24heures.org/prevention">PREVENTION</a></li>
        </ul>
      </div>
      <div class="dropdown cssdropdown">
        <a href="#" data-toggle="dropdown" >COURSES</a>
        <b-icon stacked icon="chevron-down" class="icons"></b-icon>
        <ul class="dropdown-menu">
          <li><a href="https://www.24heures.org/animations">24H DE COURSES</a></li>
          <li><a href="https://www.24heures.org/prevention">PIMP MY BIKE</a></li>
        </ul>
      </div>
      <a href="https://www.24heures.org/billetterie" class="dropdown">BILLETTERIE</a>
      <div class="dropdown cssdropdown">
        <a href="#" data-toggle="dropdown" >INFOS PRATIQUES</a>
        <b-icon stacked icon="chevron-down" class="icons"></b-icon>
        <ul class="dropdown-menu">
          <li><a href="https://www.24heures.org/infos/bars-restauration">BARS/RESTAURATION</a></li>
          <li><a href="https://www.24heures.org/infos/payer">COMMENT PAYER ?</a></li>
          <li><a href="https://www.24heures.org/infos/transports">TRANSPORTS</a></li>
          <li><a href="https://www.24heures.org/infos/faq">FAQ</a></li>
        </ul>
      </div>
      <a class="fblink" target="_blank" href="https://www.facebook.com/24heuresinsa/">
        <b-icon icon="facebook" aria-hidden="true" class="logo"></b-icon>
      </a>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}

</script>

<style scoped>

#navbar{
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #3DA936;
  font-size: 15px;
  display: flex;
  align-items: center;
}

.dropdown{
  margin: 0 2em;
}

.dropdown-menu > li{
  margin: 0.2em 0;
  font-size: 14px;
}

.dropdown-menu > li > a {
  font-weight: normal !important;
}

.cssdropdown:hover .dropdown-menu {
  display: block;
  margin-top: 0;
  background-color: #3DA936;
  border: none;
  padding: 1em;
  left: -0.5em;
}

.icons {
  height: 1em;
  margin-left: 0.2em;
}

.fblink{
  font-size: 2em;
}

</style>