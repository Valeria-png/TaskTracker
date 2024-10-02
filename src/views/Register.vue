<template>
    <div class="w-full flex justify-center p-4">
      <div class="flex flex-col w-1/3 p-4 rounded-lg bg-[#a8dadc]">
        <div class="text-center">
          <h1>Regístrate</h1>
        </div>
        <div class="flex flex-col form-control">
          <label for="">Nombre</label>
          <input type="text" v-model="userName" placeholder="Nombre" class="input input-primary" />
          <label for="">Inventa un username</label>
          <input type="text" v-model="userUsername" placeholder="Username" class="input input-primary" />
          <label for="">Contraseña</label>
          <input type="password" v-model="userPassword" placeholder="Contraseña" class="input input-primary" />
          <button class="btn w-full" @click="register">Regístrame</button>
        </div>
        <hr />
        <div class="text-center">
          <p>¿Ya tienes cuenta? <a href="/">Inicia Sesión</a></p>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
name: 'Register'
import { useUserStore } from '@/stores/userStore';
import type { Task } from '@/stores/taskStore';
const userStore = useUserStore();

const userName = ref('');
const userUsername = ref('');
const userPassword = ref('');



function register() {
  if (userName.value === '' || userUsername.value === '' || userPassword.value === '') {
    alert('Por favor, rellena todos los campos');
    return;
  }
  const newUser = {
  userName: userName.value,
  userUsername: userUsername.value,
  userPassword: userPassword.value,
  userTasks: [],
  };
  userStore.createUser(newUser);
  userStore.loggedUser = newUser;
  userName.value = "";
  userUsername.value = "";
  userPassword.value = "";
  console.log(userStore.users);
}

</script>

<style scoped>
    input {
  @apply my-3;
  @apply w-full;
}
    a {
    @apply text-blue-500;
    }

</style>