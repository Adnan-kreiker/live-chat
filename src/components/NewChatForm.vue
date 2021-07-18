<template>
  <form >  
      <textarea 
      placeholder="type your message here"
      v-model="message"
      @keydown.prevent.enter="handleSubmit"
      ></textarea>
      
      <div v-if="error" class="error">{{ error }}</div>
      <button type="submit" @click.prevent="handleSubmit">Send</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import {projectAuth, timestamp} from '../firebase/config'
import useCollection from '../composables/useCollection'

import { onMounted } from '@vue/runtime-core'


export default {

setup() {
    const { error, addDoc } = useCollection('messages')
    const message = ref('')
   
    const user = ref(projectAuth.currentUser)
    const handleSubmit = async () => {
        const chat = {
            message: message.value,
            user: user.value.displayName,
            createdAt: timestamp()
        }
        await addDoc(chat)
        if(!error.value) {
        message.value = ''
        }
        

    }

    return {message, error, handleSubmit}
}

}
</script>

<style scoped>
form {
    margin: 10px 10px 0px 10px;
    align-items: center;
}
textarea {
    width: 100%;
    max-width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
}

button {
    margin: 20px auto;
}
</style>
