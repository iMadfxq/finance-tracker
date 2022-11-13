import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

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
    <section>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit} autoComplete="on">
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
          autoComplete="username"
          required
          type="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {!isPending && <button type="submit">Submit</button>}
        {isPending && <button disabled>Processing...</button>}
      </form>
      {error && <p>{error}</p>}
    </section>
  );
}
