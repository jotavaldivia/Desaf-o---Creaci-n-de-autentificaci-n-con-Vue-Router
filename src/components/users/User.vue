<template>
<div>
    <h1>Usuario</h1>
    <img :src="form.image" width="300" alt="img">
    <form>
        <label for="">Editar :</label>
        <input type="checkbox" v-model="edit"><br>
        <label for="">Nombre</label>
        <input type="text" v-model="form.name" :disabled="!edit"><br>
        <label for="">Apellido</label>
        <input type="text" v-model="form.lastname" :disabled="!edit"><br>
        <label for="">Correo</label>
        <input type="text" v-model="form.email" :disabled="!edit"><br>
        <label for="">Imagen</label>
        <input type="text" v-model="form.image" :disabled="!edit"><br>
        <select v-model="form.type" :disabled="!edit">
            <option v-for="type in types" :key="type">{{type}}</option>
        </select><br>
        <button @click.prevent="editUser" :disabled="!edit">Editar</button>
        <button @click.prevent="destroyUser">Eliminar</button>
    </form>
</div>
</template>

<script>
import {
    mapGetters,
    mapState,
    mapActions
} from 'vuex'
export default {
    name: 'User',
    props: ['id'],
    data: function () {
        return {
            form: {
                name: "",
                lastname: "",
                email: "",
                type: "",
                image: "",
            },
            edit: false
        }
    },
    computed: {
        ...mapGetters(['getUser']),
        ...mapState(['types'])
    },
    methods: {
        // -- Metodos
        async setUser() {
            let user = this.getUser(this.id)
            console.log(user)
            if (user === undefined) {
                let resp = await this.fetchIdUser(this.id)
                user = resp.data()
            }

            this.form.name = user.name
            this.form.lastname = user.lastname
            this.form.type = user.type
            this.form.image = user.image
            this.form.email = user.email
        },
        editUser() {
            let user = this.form
            user.id = this.id

            let response = this.updateUser(user)

            response.then(() => {
                alert('Usuario actualizado')
                this.$router.push("/usuarios")
            }).catch(error => {
                console.log(error)
            })
        },
        destroyUser() {
            let res = confirm("¿Estas seguro de querer borrar este usuario?")

            if (!res) return //guardia

            this.deleteUser(this.id).then(() => {
                alert("Usario Eliminado");
                this.$router.push("/usuarios")
            }).catch(error => {
                console.log(error)
            })

        },
        ...mapActions(['fetchIdUser', 'updateUser', 'deleteUser'])
    },
    // components: {},
    created() {
        this.setUser();
    }
}
</script>

<style scoped>
form {
    display: inline-block;
    vertical-align: top;
}
</style>
