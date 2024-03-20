import { useNavigate } from "react-router-dom";
import styles from "./User.module.css";
import { useAuth0 } from "@auth0/auth0-react";
const FAKE_USER = {
  name: "Siddharth",
  email: "siddharth@example.com",
  password: "Siddharth@123",
  avatar:
    "https://img.freepik.com/free-photo/3d-illustration-teenager-with-funny-face-glasses_1142-50955.jpg?t=st=1710875982~exp=1710879582~hmac=d8b556ccc4cedb5f7a14c250d25f22fadc72fffdcafe138244b3b56815c3c366&w=740",
};

function User() {
  const user = FAKE_USER;
  const navigate = useNavigate();
  // const { logout } = useAuth0();
  // const { user, isAuthenticated } = useAuth0();

  function handleClick(e) {
    e.preventDefault();
    navigate("/");
  }

  return (
    <div className={styles.user}>
      <img
        src="https://img.freepik.com/free-photo/3d-illustration-teenager-with-funny-face-glasses_1142-50955.jpg?t=st=1710875982~exp=1710879582~hmac=d8b556ccc4cedb5f7a14c250d25f22fadc72fffdcafe138244b3b56815c3c366&w=740"
        alt={user.name}
      />
      <span>Welcome!</span>
      <button
        // onClick={() =>
        //   logout({ logoutParams: { returnTo: window.location.origin } })
        // }
        onClick={handleClick}
      >
        Logout
      </button>
    </div>
  );
}

export default User;

/*
CHALLENGE

1) Add `AuthProvider` to `App.jsx`
2) In the `Login.jsx` page, call `login()` from context
3) Inside an effect, check whether `isAuthenticated === true`. If so, programatically navigate to `/app`
4) In `User.js`, read and display logged in user from context (`user` object). Then include this component in `AppLayout.js`
5) Handle logout button by calling `logout()` and navigating back to `/`
*/
