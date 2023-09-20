import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLogin = defineStore('login', () => {
    const isLogin = ref(false)

    function login() {
        isLogin.value = true
    }
    function logout() {
        isLogin.value = false
    }

    return { isLogin, login, logout }
})