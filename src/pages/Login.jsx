import PageNav from "../components/PageNav";
import styles from "./Login.module.css";
import { useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const navigate = useNavigate();
  const [email, setEmail] = useState("siddharth@example.com");
  const [password, setPassword] = useState("siddhu");
  const { loginWithRedirect } = useAuth0();

  function handleClick() {
    navigate("/app/cities");
  }
  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <button
            onClick={handleClick}
            //  onClick={() => loginWithRedirect()}
          >
            Login
          </button>
        </div>
      </form>
    </main>
  );
}
