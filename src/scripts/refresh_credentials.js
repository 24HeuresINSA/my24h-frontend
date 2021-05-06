import jwt from 'jwt-decode'
import axios from 'axios'
import router from '../router/'


export default {
    checkCredentials() {
        return new Promise((resolve, reject) => {
            if (!localStorage.getItem('access')) {
                reject('pas de cache trouvé !')
                router.push({name: 'Home'}); //on redirige à la page d'accueil si ya pas de cache enregistré
            } else {
                var token = localStorage.getItem('access');
                var decoded = jwt(token);

                var current_timestamp = (Date.now() / 1000);

                if (decoded.exp < current_timestamp) {
                    //on refresh le token avec le refresh_token si celui est encore valide
                    var refresh_token = localStorage.getItem('refresh');
                    var refresh_decoded = jwt(refresh_token);

                    if (refresh_decoded.exp > current_timestamp) {

                        var data_to_send = new URLSearchParams()
                        data_to_send.append('refresh', refresh_token);
                        axios.post('https://www.24heures.org/My24h/api/token/refresh/', data_to_send, {headers: {'content-type': 'application/x-www-form-urlencoded'}}) //TODO changer l'url de base !!
                            .then(response => {
                                resolve('refresh complete !');
                                localStorage.setItem('refresh', response.data.refresh);
                                localStorage.setItem('access', response.data.access);
                            }).catch(err => {
                            reject('Server error')
                            console.log(err);
                            router.push({name: "Login"}); //si ça marche pas on demande à l'utilisateur de se reconnecter
                        })
                    } else {
                        reject("refresh expired !")
                        router.push({name: "Login"}); //si le refresh est foutu, il faut se reconnecter avec ses credentials
                    }
                } else {
                    resolve('pas besoin de refresh le token')
                }
            }


        })
    }
}

