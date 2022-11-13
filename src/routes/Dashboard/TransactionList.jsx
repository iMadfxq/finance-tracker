import { useFirestore } from "../../hooks/useFirestore";

export default function TransactionList({ documents }) {

  const {deleteDocument} = useFirestore('transactions')
  return (
    <section>
      {documents.map((doc) => (
        <article>
          <p>{doc.transactionName}</p>
          <p>{doc.transactionAmount}</p>
          <span onClick={() => {deleteDocument(doc.id)}}>x</span>

        </article>
      ))}
    </section>
  );
}
