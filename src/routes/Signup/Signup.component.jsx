import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import { Link } from "react-router-dom";

import './Signup.styles.scss'

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const { signup, error, isPending } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, username);
  };

  return (
    <main className="signup">
      <h1>Signup</h1>
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
          autoComplete="new-password"
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="username">username</label>
        <input
          id="username"
          required
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {!isPending && <button type="submit">Submit</button>}
        {isPending && <button disabled>Processing...</button>}
      </form>
      <p>Already have an account? <Link to={'/login'}>Click here</Link></p>
      {error && <p>{error}</p>}
    </main>
  );
}
