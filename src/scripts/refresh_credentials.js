import jwt from 'jwt-decode'
import axios from 'axios'
import router from '../router/'


export default {
    checkCredentials() {
        if (!localStorage.getItem('access')) {
            router.push({name: 'Home'}); //on redirige à la page d'accueil si ya pas de cache enregistré
        } else {
            var token = localStorage.getItem('access');
            var decoded = jwt(token);

            if (decoded.exp < Date.now()) {
                //on refresh le token avec le refresh_token si celui est encore valide
                var refresh_token = localStorage.getItem('access');
                var refresh_decoded = jwt(refresh_token);

                if (refresh_decoded.exp > Date.now()) {
                    axios.post(this.$baseUrl + '/api/token/refresh/', {refresh: refresh_token}) //TODO check les champs avec François
                        .then(response => {
                            localStorage.setItem('refresh', response.data.refresh);
                            localStorage.setItem('access', response.data.access);
                            localStorage.setItem('uid', response.data.id);
                        }).catch(err => {
                        console.log(err);
                        this.$router.push({name: "Login"}); //si ça marche pas on demande à l'utilisateur de se reconnecter
                    })
                } else {
                    this.$router.push({name: "Login"}); //si le refresh est foutu, il faut se reconnecter avec ses credentials
                }
            }
            //sinon on fait rien
        }

    }
}

