import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { projectAuth } from "../firebase/config"

export const useSignup = () => {
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  const {dispatch} = useContext(AuthContext)

  const signup = async (email, password, username) => {
    setError(null)
    setIsPending(true)

    try {
      //signup
      const res = await projectAuth.createUserWithEmailAndPassword(email, password)
      console.log(res.user)

      if(!res) {
        throw new Error('Could not complete signup')
      }

      await res.user.updateProfile({displayName : username})

      dispatch({type:'LOGIN', payload: res.user})

      setError(null)
      setIsPending(false)
    } catch (err) {
      console.log(err.message)
      setError(err.message)
      setIsPending(false)
    }
  } 

  return {signup, error, isPending}
}