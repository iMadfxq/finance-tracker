import { useState } from "react"

export default function TransactionForm() {
  const [transactionName, setTransactionName] = useState('')
  const [transactionAmount, setTransactionAmount] = useState('')

  const handleSubmit = (e) => {
e.preventDefault()
alert(transactionName+transactionAmount)
  }


  return (
    <>
      <h2>Record transaction</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name of the transaction</span>
          <input type="text"
          required
          onChange={(e) => setTransactionName(e.target.value)}
          />
        </label>
        <label>
          <span>Amount</span>
          <input type="number"
          required
          onChange={(e) => setTransactionAmount(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}