import { ref } from "@vue/reactivity";
import { projectAuth } from "../firebase/config";

const error = ref(null)

const signup = async (email, password, displayName) => {
    error.value = null

    try { 
        const res = await projectAuth.createUserWithEmailAndPassword(email, password)
        await res.user.updateProfile({ displayName })
        return res

    } catch(err) {
        console.log(err.message)
        error.value = err.message
    }

}

const useSignup = () => {

    return {error, signup}

}

export default useSignup