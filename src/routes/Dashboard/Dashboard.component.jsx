import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import TransactionForm from "./TransactionForm";
import { useCollection } from "../../hooks/useCollection";
import TransactionList from "./TransactionList";


export default function Dashboard() {
  const {user} = useContext(AuthContext)
  const {documents, error} = useCollection('transactions', ['uid', '==', user.uid])
  console.log(documents)
  return (
    <>
      <main>
        {error && <p>{error}</p>}
        {documents && <TransactionList documents={documents} />}
      </main>
      <aside>
        <TransactionForm uid={user.uid} />
      </aside>
    </>
  )
}