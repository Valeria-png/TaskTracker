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
    actions: {
        addTask(task: Task, userLogged: User) {
            userLogged.userTasks.push(task)
        },
        deleteTask(index: number, userLogged: User) {
            userLogged.userTasks.splice(index, 1);

          },
        toggleCompleted(index: number, userLogged: User) {
            const task = userLogged.userTasks[index];
            task.completed = !task.completed;
        },
    },
    persist: true,
});