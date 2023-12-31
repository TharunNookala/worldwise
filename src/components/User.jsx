import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import styles from "./User.module.css";


const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "jack@example",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function User() {
  const { logout } = useAuth();
  const user = FAKE_USER;
  const navigate = useNavigate();
  function handleClick() {
    logout();
    navigate('/');
  }

  return (
    <div className={styles.user}>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default User;
