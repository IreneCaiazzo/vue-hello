// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const app = Vue.createApp({

    data(){
        return {
            message: 'Hello Vue!',
            image: 'img/Mare.jpg',
        }
    },
});

app.mount('#app')