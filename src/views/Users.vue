<template>
<div>
    <h1>Usuarios</h1>
    <button type="submit" class="btn btn-success">
        <router-link :to="`/usuario`"> + Nuevo Usuario</router-link>
    </button>
    <ul>
        <li v-for="user in users" :key="user.id" class="book">
            <img :src='user.image' width="200" alt="img"><br>
            <span>Nombre : <router-link :to="`/usuarios/${user.id}`">{{user.name}}</router-link></span><br>
            <span>Apellido: {{user.lastname}}</span><br>
            <span> Email: {{user.email}}</span><br>
            <span>Tipo Usuario: {{user.type}}</span>
        </li><br>
    </ul>
</div>
</template>

<script>
import {
    mapActions,
    mapState
} from 'vuex'

export default {
    name: 'Users-gallery',
    components: {

    },
    methods: {
        ...mapActions(['fetchUsers'])
    },
    computed: {
        ...mapState(['users'])
    },
    created() {
        this.fetchUsers()
    },
}
</script>

<style >

</style>
