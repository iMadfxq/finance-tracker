import { useState } from "react"
import { useLogin } from '../../hooks/useLogin'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {login, error, isPending} = useLogin()

  const handleSubmit = e => {
    e.preventDefault()
    login(email, password)
    setEmail('')
    setPassword('')
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>email</span>
          <input required type="text" value={email} onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>
          <span>password</span>
          <input required type="password" value={password} onChange={e => setPassword(e.target.value)}/>
        </label>
        {!isPending && <button type="submit">Submit</button>}
        {isPending && <button disabled >Processing...</button>}
      </form>
      {error && <p>{error}</p>}
    </section>
  )
}