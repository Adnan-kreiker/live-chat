<template>
  <div class="welcome container">
      <p>Welcome</p>
      <div v-if="toggle">
               <h2>Log in to the chatroom</h2>
      <LoginForm @login="enterChatroom" />
         <p>No accout yet? <span @click="toggle = false">Sign up</span> instead</p>
      </div>
      <div v-else> 
      <h2>Sign up to the chatroom</h2>
      <SignupForm />
         <p>Already registered? <span @click="toggle = true">login</span> instead</p>

      </div>
      <!--<button id="button1" @click="changeView">go to the Sign up page</button> -->
      
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
components: {SignupForm, LoginForm},
setup() {

    const router = useRouter()
    const enterChatroom = () => {
        router.push({name: 'Chatroom'})
    }
    const toggle = ref(true)
    const changeView = () => {
     toggle.value = !toggle.value
     
     var butt = document.getElementById("button1")
     if (butt.innerHTML === 'go to the login page' ) {
         butt.innerHTML = 'Go to the Sign up page'
     }
     else
      butt.innerHTML = 'go to the login page'
     }
    
      return {toggle, changeView, enterChatroom}   
     }
}
    

</script>

<style>
 .welcome {
     text-align: center;
     padding: 20px 0;
 }
 .welcome form {
     width: 300px;
     margin: 20px auto;
 }
 .welcome label {
     display: block;
     margin: 20px 0 10px;
 }
 .welcome input {
     width: 100%;
     padding: 10px;
     border-radius: 20px;
     border: 1px solid #eee;
     outline: none;
     color: #999;
     margin: 10px auto;
 }
.welcome span {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
}

.welcome button {
    margin: 20px auto;
}
</style>