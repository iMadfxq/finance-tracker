import { useEffect } from "react";
import { useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";

export default function TransactionForm({uid}) {
  const [transactionName, setTransactionName] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");

  const { addDocument, response } = useFirestore('transactions');

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({
      transactionName,
      transactionAmount,
      uid
    })
  };

  useEffect(() => {
    if(response.success){
      setTransactionAmount('')
      setTransactionName('')
    }
  }, [response])

  return (
    <>
      <h2>Record transaction</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name of the transaction</span>
          <input
            type="text"
            required
            value={transactionName}
            onChange={(e) => setTransactionName(e.target.value)}
          />
        </label>
        <label>
          <span>Amount</span>
          <input
            type="number"
            required
            value={transactionAmount}
            onChange={(e) => setTransactionAmount(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
