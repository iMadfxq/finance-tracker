import { useState } from "react"

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <section>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>email</span>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>
          <span>password</span>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
        </label>
        <label>
          <span>username</span>
          <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}