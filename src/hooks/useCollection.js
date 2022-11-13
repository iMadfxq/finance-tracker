import { useState, useEffect, useRef } from "react";
import { projectFirestore } from "../firebase/config";

export const useCollection = (collection, _query, _orderBy) => {
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)

  //to avoid infinite loop on useEffect, _query is an array, which will be different on every function call
  const query = useRef(_query).current
  const orderBy = useRef(_orderBy).current

  useEffect(() => {
    let ref = projectFirestore.collection(collection)

    if(query) {
      ref = ref.where(...query)
    }

    if(orderBy) {
      ref = ref.orderBy(...orderBy)
    }

    const unsub = ref.onSnapshot((snapshot) => {
      let results = []

      snapshot.docs.forEach((doc) => {
        results.push({...doc.data(), id: doc.id})
      })

      setDocuments(results)
    }, (err) => {
      console.log(err)
      setError('could not fetch the data')
    })

    return () => {
      unsub()
    }
   }, [collection, query, orderBy])

   return {documents, error}
}