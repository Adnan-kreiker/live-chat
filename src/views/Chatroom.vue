<template>
<div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatForm />
</div>
  
</template>

<script>
import { ref, watch } from 'vue'
import Navbar from '../components/Navbar.vue'
import ChatWindow from '../components/ChatWindow.vue'
import getUser from '../composables/getUser'
import { useRouter } from 'vue-router'
import { projectAuth } from "../firebase/config"
import NewChatForm from '../components/NewChatForm.vue'
export default {
components: {Navbar, NewChatForm, ChatWindow},
setup() {
    const router = useRouter()
    const { user } = getUser()
    console.log(user.value.displayName)
    watch(user, () => {
        if(!user.value) {
        router.push({ name: 'Welcome'})
        }
    })

    

}

}
</script>

<style>

</style>