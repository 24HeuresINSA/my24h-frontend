<template>
  <div id="FootBar">
    <div id="socialNetwork">
      <a class="footerlien" target="_blank" href="https://www.facebook.com/24heuresinsa/">
        <b-icon icon="facebook" aria-hidden="true" class="logo"></b-icon>
      </a>
      <a class="footerlien" target="_blank" href="https://twitter.com/24heuresinsa">
        <b-icon icon="twitter" aria-hidden="true" class="logo"></b-icon>
      </a>
      <a class="footerlien" target="_blank" href="https://www.instagram.com/24h_insa/">
        <b-icon icon="instagram" aria-hidden="true" class="logo"></b-icon>
      </a>
      <a class="footerlien" target="_blank" href="https://www.flickr.com/photos/24-heures/albums">
        <b-iconstack class="logo">
          <b-icon stacked icon="square-fill" variant="white"></b-icon>
          <b-icon stacked icon="dot" shift-h="-3"></b-icon>
          <b-icon stacked icon="dot" shift-h="3"></b-icon>
        </b-iconstack>
      </a>
      <a class="footerlien" target="_blank" href="https://www.youtube.com/channel/UC9Zbc7wBMv2nro0hazcVMFw">
        <b-icon icon="youtube" aria-hidden="true" class="logo"></b-icon>
      </a>
    </div>
    <ul class="footer-links">
      <li class="d-inline"><a class="footerlien" href="/mentions-legales">Mentions légales </a></li>◦
      <li class="d-inline"><a class="footerlien" href="/presse">Presse </a></li>◦
      <li class="d-inline"><a class="footerlien" target="_blank" href="https://www.flickr.com/photos/24-heures/albums">Photos </a></li>◦
      <li class="d-inline"><a class="footerlien" href="/benevolat">Bénévoles </a></li>◦
      <li class="d-inline"><a class="footerlien" href="/partenaires">Partenaires </a></li>◦
      <li class="d-inline"><a class="footerlien" href="/infos/contact">Contact </a></li>
    </ul>
    <p></p>
    <p class="">
      © 2020 <a class="footerlien"><b>Les 24 heures de l'INSA</b></a>.
      <br>
      Tous droits reservés.
      <!--Template  by <a target="_blank" href="http://nileforest.com/"><b>nileforest</b></a>-->
    </p>
  </div>
</template>

<script>
export default {
  name: "FootBar"
}
</script>

<style scoped>

p {
  line-height: 20px;
  font-size: 14px;
  font-weight: 400;
  margin: 0px 0 10px 0;
  color: #000;
  letter-spacing: 1px;
}

#FootBar {
background-color: #3DA936;
padding: 0;
padding: 1.5em 0;
display: flex;
flex-direction: column;
  text-align: center;
}

.footerlien {
margin: 5px;
color: #EEEEEE;
}

.logo {
  font-size: 1.33333333em;
  line-height: 0.75em;
  vertical-align: -15%;
  margin: 0 10px 0 0;
}

.footer-links {
  color: #EEEEEE;
  font-size: 13px;
}

</style>