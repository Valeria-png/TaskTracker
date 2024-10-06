<template>
  <div class="h-screen w-screen">
      <div class="flex h-full w-full">
          <div class="h-full p-4 w-2/6 bg-[#F1FAEE]">
              <div class="h-[60%]">
                  <div class="form-control flex flex-col">
                      <textarea class="textarea textarea-bordered textarea-accent my-3" placeholder="Tarea" v-model="taskBody"></textarea>
                      <div class="w-full">
                        <label class="font-bold block ">Categoría</label>
                        <input type="text" placeholder="Escuela, trabajo..." class="input input-accent  w-full my-3" v-model="category">
                      </div>
                      <div class="flex justify-between">
                          <div>
                              <label class="font-bold block">Fecha de inicio</label>
                              <input type="date" class="my-2 block" v-model="startDate">
                          </div>
                          <div>
                              <label class="font-bold block">Fecha de finalización</label>
                              <input type="date" class="my-2 block" v-model="endDate">
                          </div>
                      </div>
                      <button class="btn" @click="newTask" >Añadir</button>
                  </div>
              </div>
              <div class="collapse bg-base-200 w-full my-3">
                  <input type="checkbox" />
                  <div class="collapse-title text-xl font-medium bg-[#A8DADC]">Terminados</div>
                  <div class="collapse-content bg-[#A8DADC]">
                    <TaskItem v-for="(task,index) in completedTasks" :key="index" :taskBody="task.taskBody" :category="task.category" :completed="task.completed" :startDate="task.startDate" :endDate="task.endDate" :index="index" @task-completed="toggleTaskCompletion"></TaskItem>
                  </div>
              </div>
              <button class="btn cerrar my-3 text-[#E63946] " @click="useUserStore().logoutUser()">Cerrar Sesión</button>
          </div>
          <div class="h-full w-4/6 p-4">
                <h1>Tareas de {{ loggedUser.userName }} </h1>
                <div class="overflow-auto">
                    <TaskItem v-for="(task,index) in tasks" :key="index" :taskBody="task.taskBody" :category="task.category" :completed="task.completed" :startDate="task.startDate" :endDate="task.endDate" :index="index"></TaskItem>
                </div>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import { useTaskStore } from '@/stores/taskStore';
import type { Task } from '@/stores/taskStore';
import { useUserStore } from '@/stores/userStore';
import { onUpdated, ref } from 'vue';
import TaskItem from '@/components/TaskItem.vue';

const taskStore = useTaskStore();

const category = ref('');
const taskBody = ref('');
const startDate = ref(new Date);
const endDate = ref(new Date);
const completed = ref(false);
const loggedUser = useUserStore().loggedUser;

function newTask() {
    taskStore.addTask({
    category: category.value,
    taskBody: taskBody.value,
    startDate: startDate.value,
    endDate: endDate.value,
    completed: completed.value
    })
    category.value = '';
    taskBody.value = '';
    startDate.value = new Date;
    endDate.value = new Date;
    window.location.reload()
}

const completedTasks = taskStore.getCompletedTasks;

const tasks = taskStore.getTasks;

// function toggleTaskCompletion(index: number) {
//   taskStore.toggleCompleted(index);
// }

</script>

<style >
    .btn{
        @apply bg-[#457B9D];
        @apply hover:bg-[#1D3557];
        @apply text-[#F1FAEE];
    }
    .cerrar{
        @apply bg-[#1D3557];
        @apply hover:bg-[#E63946];
        @apply hover:text-[#1d3557];
    }
    input[type="date"]{
        @apply input-accent;
        @apply rounded-lg;
    }
    h1{
        @apply text-3xl;
        @apply font-bold;
        @apply text-[#1D3557];

    }
    label,p{
        @apply text-[#1D3557];
    }

</style>