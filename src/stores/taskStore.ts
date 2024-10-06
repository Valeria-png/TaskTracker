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
            this.userLogged.userTasks.splice(index, 1);

          },
        toggleCompleted(index: number) {
            const task = this.userLogged.userTasks[index];
            task.completed = !task.completed;
        },
    },
    getters: {
        getTasks: (state) => state.userLogged.userTasks.filter(t => t.completed === false),
        getCompletedTasks: (state) => state.userLogged.userTasks.filter(t => t.completed === true),
    },
    persist: true,
});