import { ref } from "@vue/reactivity"
import { projectFirestore } from "../firebase/config"

const useCollection = (collection) => {
    const error = ref('')

    const addDoc = async (doc) => {
        error.value = null
        try {
          await projectFirestore.collection(collection).add(doc)        
        } catch (err) {
            console.log(err.message)
            error.value = err.message       }

    }
    return { error, addDoc}
}

export default useCollection