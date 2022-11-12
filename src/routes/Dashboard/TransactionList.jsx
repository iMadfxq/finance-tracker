export default function TransactionList({ documents }) {
  return (
    <section>
      {documents.map((doc) => (
        <p>{doc.transactionName}</p>
      ))}
    </section>
  );
}
