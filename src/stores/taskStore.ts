import { defineStore } from "pinia";
import type { User } from "./userStore";
import { useUserStore } from "./userStore";

export interface Task {
    category: string
    taskBody: string
    startDate: Date
    endDate: Date
    completed: Boolean
}
export const useTaskStore = defineStore("task", {
    state: () => ({
        userLogged: useUserStore().loggedUser
    }),
    actions: {
        addTask(task: Task) {
            this.userLogged.userTasks.push(task)
        },
        deleteTask(index: number) {
            if (index > -1 && index < this.userLogged.userTasks.length) {
              this.userLogged.userTasks.splice(index, 1); 
            } else {
              console.error('Invalid index: ', index);
            }
          },
        toggleCompleted(index: number) {
        if (index > -1 && index < this.userLogged.userTasks.length) {
            const task = this.userLogged.userTasks[index];
            task.completed = !task.completed; // Toggle the completed state
        } else {
            console.error('Invalid index: ', index);
        }
        },
    },
    getters: {
        getTasks: (state) => state.userLogged.userTasks.filter(t => t.completed === false),
        getCompletedTasks: (state) => state.userLogged.userTasks.filter(t => t.completed === true),
    },
    persist: true,
});