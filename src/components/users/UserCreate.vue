<template>
<div>
    <h1>Usuario</h1>
    <img :src="form.image" width="300" alt="img">
    <form>

        <label for="">Nombre</label>
        <input type="text" v-model="form.name"><br>
        <label for="">Apellido</label>
        <input type="text" v-model="form.lastname"><br>
        <label for="">Correo</label>
        <input type="text" v-model="form.email"><br>
        <label for="">Imagen</label>
        <input type="text" v-model="form.image"><br>
        <select v-model="form.type">
            <option v-for="type in types" :key="type">{{type}}</option>
        </select><br>
        <button @click.prevent="createUser">Agregar</button>

    </form>
</div>
</template>

<script>
import {
    mapActions,
    mapState
} from 'vuex'
export default {
    name: 'userCreate',
    // props: {},
    data: function () {
        return {
            form: {
                name: "",
                lastname: "",
                email: "",
                type: "",
                image: "",
            },
        }
    },
    computed: {
        ...mapState(['types'])
    },
    methods: {
        // -- Metodos
        createUser() {
            this.addUser(this.form).then(() => {
                alert('Usario creado')
                this.$router.push('/usuarios')
            }).catch(error => {
                console.log(error)
            })

        },
        ...mapActions(['addUser'])
    },
    // components: {},
}
</script>

<style scoped>

</style>
