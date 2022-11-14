import { useFirestore } from "../../hooks/useFirestore";

export default function TransactionList({ documents }) {

  const {deleteDocument} = useFirestore('transactions')
  return (
    <>
      {documents.map((doc) => (
        <article key={doc.id}>
          <p>{doc.transactionName}</p>
          <p>${doc.transactionAmount}</p>
          <span onClick={() => {deleteDocument(doc.id)}}>X</span>

        </article>
      ))}
    </>
  );
}
