<template>
<div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <h1> Bienvenido estas logeado</h1>
    <button type="submit" class="btn btn-danger" @click.prevent='logout'>Salir</button>
    <button type="submit" class="btn btn-success">
        <router-link :to="`/usuarios`">Ver Usuarios</router-link>
    </button>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import firebase from 'firebase'

export default {
    name: 'Home',
    components: {
        HelloWorld
    },
    methods: {
        logout() {
            firebase.auth().signOut()
                .then(() => {
                    this.$router.push('/')
                })
                .catch((e) => {
                    alert(e)
                })
        }
    },
}
</script>
