import { useState } from "react"
import { useSignup } from "../../hooks/useSignup"

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const {signup, error, isPending} = useSignup()

  const handleSubmit = e => {
    e.preventDefault()
    signup(email, password, username)
  }

  return (
    <section>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>email</span>
          <input required type="text" value={email} onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>
          <span>password</span>
          <input required type="password" value={password} onChange={e => setPassword(e.target.value)}/>
        </label>
        <label>
          <span>username</span>
          <input required type="text" value={username} onChange={e => setUsername(e.target.value)}/>
        </label>
        {!isPending && <button type="submit">Submit</button>}
        {isPending && <button disabled >Processing...</button>}
      </form>
      {error && <p>{error}</p>}
    </section>
  )
}