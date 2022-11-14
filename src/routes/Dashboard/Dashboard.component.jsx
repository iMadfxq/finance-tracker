import './Dashboard.styles.scss'
import TransactionForm from "./TransactionForm";
import { useCollection } from "../../hooks/useCollection";
import TransactionList from "./TransactionList";

export default function Dashboard({user}) {
  const { documents, error } = useCollection("transactions", [
    "uid",
    "==",
    user.uid,
  ], ['createdAt', 'desc']);
  console.log(documents);
  return (
    <main>
      <section>
        <h1>Your transactions</h1>
        {error && <p>{error}</p>}
        {documents && <TransactionList documents={documents} />}
      </section>
      <aside>
        <TransactionForm uid={user.uid} />
      </aside>
    </main>
  );
}
