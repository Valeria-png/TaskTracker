import { defineStore } from "pinia";
import type { Task } from "./taskStore";
import router from "@/router";


export interface User {
    userName: string
    userUsername: string
    userPassword: string
    userTasks: Array<Task>
}

export const useUserStore = defineStore("user", {
    state: () => ({
        users: Array<User>(),  
        loggedUser: {} as User,  
        isLogged: false
    }),
    actions: {
        createUser(user: User) {
            this.users.push(user); 
            this.loggedUser = {} as User;
            this.loggedUser = user;
            this.isLogged = true;
            router.push('/home');
        },
        loginUser(user: User) {
            this.loggedUser = {} as User;
            this.loggedUser = user
            this.isLogged = true
            router.push('/home')
        },
        logoutUser() {
            this.isLogged = false
            this.loggedUser = {} as User;
            router.push('/')
        }
    },
    persist: true,
});