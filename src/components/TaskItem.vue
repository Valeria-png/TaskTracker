<template>
    <div class="flex flex-col p-2 m-3">
        <div class="flex justify-between w-full">
            <div class="flex">
                <input type="checkbox" class="checkbox checkbox-error" v-model="isChecked" @change="taskComplete" >
                <p class="text-wrap px-2">{{ taskBody }}</p> 
            </div>

            <div class="cursor-pointer hover:text-[#E63946]" @click="deleteTask">
                ✕
            </div> 
        </div>
        <p class="text-[#457B9D]">Categoría: {{ category }}</p>
        <p>Inicio de Tarea: {{ startDate }} • <span class="text-[#E63946]">Fin de Tarea: {{ endDate }}</span></p>
    </div>
</template>

<script setup lang="ts">
import { ref,defineProps, defineEmits, onMounted } from 'vue';
import { useTaskStore } from '@/stores/taskStore';
import { useUserStore } from '@/stores/userStore';
import type {User} from '@/stores/userStore';

name: 'TaskItem'
const props =defineProps({
    taskBody: String,
    category: String,
    completed: Boolean,
    startDate: String,
    endDate: String,
    index: Number
})

const isChecked = ref(props.completed);

const taskStore = useTaskStore();
const userStore = useUserStore();
const loggedUser = ref({} as User);
onMounted(() => {
    loggedUser.value = userStore.loggedUser;
})

function deleteTask() {
    taskStore.deleteTask(props.index, loggedUser.value);
    window.location.reload()
}

function taskComplete(){
    taskStore.toggleCompleted(props.index, loggedUser.value);
    window.location.reload()
}




</script>

<style scoped>

</style>