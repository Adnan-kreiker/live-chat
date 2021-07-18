<template>
  <form @submit.prevent="handleSubmit">
      <input type="text" required placeholder="display name" v-model="displayName">
      <input type="email" required placeholder="email" v-model="email">
      <input type="password" required placeholder="password" v-model="password">
      <button>Sign up</button>
      <p class="error"> {{ error}}</p> 
  </form>

</template>

<script>
import { ref } from 'vue'
import useSignup from '../composables/useSignup'
import {useRouter} from 'vue-router'
export default {
setup() {


    const {error, signup} = useSignup()
    const router = useRouter()
    const displayName = ref('')
    const email = ref('')
    const password = ref('')

    const handleSubmit = async () => {
        await signup(email.value, password.value, displayName.value)
        if(!error.value)
        console.log('User signed up successfully')
        router.push('/chatroom')
}

    return {displayName, email, password, handleSubmit, error, router}

}
}
</script>

<style>

</style>