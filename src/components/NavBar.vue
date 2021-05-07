<template>
  <div id="nav">
    <b-nav align="center" id="navbar">
      <div id="topBar">
        <b-navbar-brand href="https://www.24heures.org/">
          <b-img id="img_logo" :src="require('../assets/logo24_2021.png')" alt="Logo des 24_2021" fluid></b-img>
        </b-navbar-brand>
        <a class="list-icon" target="_blank">
          <b-icon icon="list" aria-hidden="true" scale="2" class="logo" @click="menu()"></b-icon>
        </a>
      </div>
      <div class="dropdown cssdropdown">
        <a href="#" data-toggle="dropdown">CONCERTS</a>
        <b-icon stacked icon="chevron-down" class="icons"></b-icon>
        <ul class="dropdown-menu">
          <li><a href="https://www.24heures.org/concerts/artistes">ARTISTES</a></li>
          <li><a href="https://www.24heures.org/concerts/tremplins">TREMPLINS</a></li>
        </ul>
      </div>
      <div class="dropdown cssdropdown">
        <a href="#" data-toggle="dropdown">LIVES</a>
        <b-icon stacked icon="chevron-down" class="icons"></b-icon>
        <ul class="dropdown-menu">
          <li><a href="https://www.24heures.org/livestream">LIVESTREAM</a></li>
          <li><a href="https://www.24heures.org/webtv">WEBTV</a></li>
        </ul>
      </div>
      <div class="dropdown cssdropdown">
        <a href="#" data-toggle="dropdown">ANIMATIONS</a>
        <b-icon stacked icon="chevron-down" class="icons"></b-icon>
        <ul class="dropdown-menu">
          <li><a href="https://www.24heures.org/animations">ANIMATIONS</a></li>
          <li><a href="https://www.24heures.org/prevention">PREVENTION</a></li>
        </ul>
      </div>
      <div class="dropdown cssdropdown">
        <a href="#" data-toggle="dropdown">COURSES</a>
        <b-icon stacked icon="chevron-down" class="icons"></b-icon>
        <ul class="dropdown-menu">
          <li><a href="/#/home">24H DE COURSES</a></li>
          <li><a href="/#/pimpMyBike">PIMP MY BIKE</a></li>
          <li><a href="https://www.24heures.org/courses/course-caritative">COURSE CARITATIVE</a></li>
          <li><a href="/#/dashboard">TABLEAU DE BORD</a></li>
          <li><a href="https://www.24heures.org/courses/informations">INFORMATIONS</a></li>
          <li><a href="https://www.24heures.org/courses/resultats">RESULTATS</a></li>
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
      <a class="fblink" target="_blank" href="https://www.facebook.com/Courses-des-24-heures-de-lINSA-111750412236566/">
        <b-icon icon="facebook" aria-hidden="true" class="logo"></b-icon>
      </a>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data(){
    return {
      displayMenu : false
    }
  },
  methods: {
    menu() {
      if(!this.displayMenu)
      {
        document.getElementsByClassName("dropdown").forEach(element => element.style.display = "block");
        this.displayMenu = true;
      }
      else
      {
        document.getElementsByClassName("dropdown").forEach(element => element.style.display = "none");
        this.displayMenu = false;
      }
    }
  }
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
  z-index: 2;
}

.dropdown{
  margin: 0 2em;
}

.dropdown-menu > li{
  margin: 0.2em 0;
  font-size: 14px;
  min-width: 10.5rem;
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

.list-icon {
  display: none;
}

@media (min-width: 1px) and (max-width: 600px) {

  #topBar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around !important;
    width: 100%;
  }

  .list-icon {
    display: block;
  }

  .fblink, .icons {
    display: none;
  }

  #navbar {
    display: flex;
    flex-direction: column;
    align-items: normal;
  }

  .dropdown-menu {
    display: contents;
  }

  .dropdown-menu > li {
    margin: 0.5em 0px 0.5em 0.3em;
  }

  .dropdown{
    display: none;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }

}

</style>