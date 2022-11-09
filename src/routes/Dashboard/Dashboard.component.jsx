import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import TransactionForm from "./TransactionForm";

export default function Dashboard() {
  const {user} = useContext(AuthContext)
  return (
    <>
      <main>
        <h2>transactionList</h2>
      </main>
      <aside>
        <TransactionForm uid={user.uid} />
      </aside>
    </>
  )
}