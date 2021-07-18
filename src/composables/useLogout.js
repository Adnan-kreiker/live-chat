import { ref } from "@vue/reactivity";
import { projectAuth } from "../firebase/config";

const error = ref(null)

const logout = async () => {
    error.value = null
    try {
         await projectAuth.signOut()
    } catch (error) {
        error.value = error.message
        console.log(error)
    }
}

const useLogout = () => {
    return { error, logout}
}


export default useLogout