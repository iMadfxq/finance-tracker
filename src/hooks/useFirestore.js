import { useEffect, useReducer, useState } from "react";
import { projectFirestore } from "../firebase/config";

let intialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case "IS_PENDING":
      return {
        ...state,
        isPending: true,
        error: null,
        success: false,
        document: null,
      };
    case "ADDED_DOCUMENT":
      return {
        ...state,
        document: action.payload,
        isPending: false,
        success: true,
        error: null,
      };
    case "ERROR":
      return {
        ...state,
        isPending: false,
        success: false,
        document: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, intialState);
  const [isCancelled, setIsCancelled] = useState(false);

  const dispatchIfNotCanceled = (action) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };

  //collection reference
  const ref = projectFirestore.collection(collection);

  //add documents to collection
  const addDocument = async (doc) => {
    dispatch({ type: "IS_PENDING" });

    try {
      const addedDocument = await ref.add(doc);
      dispatchIfNotCanceled({ type: "ADDED_DOCUMENT", payload: addedDocument });
    } catch (err) {
      dispatchIfNotCanceled({ type: "ERROR", payload: err });
    }
  };

  //delete documents
  const deleteDocument = async (id) => {};

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { addDocument, deleteDocument, response };
};
