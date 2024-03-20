import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
// @import url("https://fonts.googleapis.com/css2?family=Sacramento&family=Slackside+One&display=swap");

const textStyle = {
  fontFamily: '"Slackside One", cursive',
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "40px",
  marginLeft: "8px",
  textDecoration: "none !important", // Prevent text decoration with !important
  color: "white",
};

function Logo() {
  return (
    <>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Sacramento&family=Slackside+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <div>
        <Link to="/">
          <span style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/icon.png"
              alt="Adventurista logo"
              className={styles.logo}
            ></img>
            <h3 style={textStyle}>Adventurista</h3>
          </span>
        </Link>
      </div>
    </>
  );
}

export default Logo;
