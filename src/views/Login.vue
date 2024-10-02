<template>
    <div class="w-full flex justify-center p-4 ">
        <div class="flex flex-col w-1/3 p-4 rounded-lg bg-[#a8dadc]">
            <div class="text-center">
                <h1>Inicia Sesión</h1>
            </div>
            
            <div class="flex flex-col form-control">
                <label for="">Username</label>
                <input type="text" v-model="userUsername" placeholder="Username" class="input input-primary" />
                <label for="">Contraseña</label>
                <input type="password" v-model="userPassword" placeholder="Contraseña" class="input input-primary" />
                <button class="btn w-full" @click.prevent="logIn(userUsername, userPassword)">Inicia Sesión</button>
            </div>
            <hr>
            <div class="text-center">
                <p>¿No tienes cuenta? <a href="/registro">Regístrate</a></p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import { useUserStore } from '@/stores/userStore';
import { useRouter } from 'vue-router';

const userArray = useUserStore().users;

const userUsername = ref('');
const userPassword = ref('');

function logIn(userUsername: string, userPassword: string) {
    if (userUsername === '' || userPassword === '') {
        alert('Por favor, rellena todos los campos');
    }
    const user = userArray.find((user) => user.userUsername === userUsername)
        if (user && user.userPassword === userPassword) {
            useUserStore().loginUser(user)
            useUserStore().loggedUser = user
        } else {
            alert('Username o contraseña incorrectos')
// ADD ALERT AND EMPTY VALIDATION
        }
    }


</script>

<style scoped>
    input{
        @apply my-3;
        @apply w-full;
    }
    a{
        @apply text-blue-500;
    }

</style>