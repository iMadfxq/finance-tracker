import { useReducer, useState } from "react";
import { projectFirestore } from "../firebase/config";

let intialState = {
  document:null,
  isPending: false,
  error: null,
  success:null
}

const firestoreReducer = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const useFirestore = (collection)=> {
  const [response, dispatch] = useReducer(firestoreReducer, intialState)
  const [isCancelled, setIsCancelled] = useState(false)

  //collection reference
  const ref = projectFirestore.collection(collection)

  

}