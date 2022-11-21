import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { Link } from "react-router-dom";
import './Login.styles.scss'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <main className="login">
      <h1>Login</h1>
      <form  onSubmit={handleSubmit} autoComplete="on">
        <label htmlFor="email">email</label>
        <input
          id="email"
          autoComplete="email"
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">password</label>
        <input
          id="password"
          autoComplete="current-password"
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {!isPending && <button type="submit">Submit</button>}
        {isPending && <button disabled>Processing...</button>}
      </form>
      <p>Haven't created an account? <Link to={'/signup'}>Click here</Link></p>
      {error && <p>{error}</p>}
    </main>
  );
}
