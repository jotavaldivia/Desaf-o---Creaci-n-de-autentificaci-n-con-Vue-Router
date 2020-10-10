<template>
<div class="about">
    <form>
        <div class="alert alert-primary" role="alert">
            Iniciar Sesion
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">Correo</label>
            <input type="email" class="form-control" v-model="user" id="exampleInputEmail1" aria-describedby="emailHelp" required>

        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Contraseña</label>
            <input type="password" class="form-control" v-model="pass" id="exampleInputPassword1" required>
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent='login'>Entrar</button>
        <button type="submit" class="btn btn-success" @click.prevent='registrar'>Registrar</button>

    </form>
</div>
</template>

<script>
import firebase from 'firebase'
export default {

    name: 'login',
    data() {
        return {
            user: '',
            pass: ''
        }
    },
    methods: {
        login() {
            if (this.pass == "" && this.user == "") {
                alert('correo o contraseña vacios')
            } else {

                firebase.auth().signInWithEmailAndPassword(this.user, this.pass)
                    .then(() => {
                        this.$router.push('/Home')
                    })
                    .catch((error) => {
                        alert(error);
                    });
            }
        },
        // registrar usuario en el sistema

        registrar() {

            if (this.pass == "" && this.user == "") {
                alert('correo o contraseña vacios')
            } else {
                firebase.auth().createUserWithEmailAndPassword(this.user, this.pass)
                    .then(() => {
                        alert("Usuario Creado");
                    })
                    .catch((error) => {
                        alert(error);
                    });

            }

        },

    }

}
</script>

<style scoped>
form {

    display: inline-block;
    width: 300px;
    height: 300px;
    text-align: center;
    margin-top: 50px;
}
</style>
