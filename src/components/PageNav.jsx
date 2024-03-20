import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./PageNav.module.css";
import { useAuth0 } from "@auth0/auth0-react";

const styling = {
  backgroundColor: "var(--color-brand--2)",
  color: "var(--color-dark--0)",
  padding: "0.8rem 2rem",
  borderRadius: "7px",
};

function PageNav() {
  const { loginWithRedirect } = useAuth0();

  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            Login
          </NavLink>
          {/* <button className={styling} onClick={() => loginWithRedirect()}> */}
          {/* Login
          </button> */}
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
