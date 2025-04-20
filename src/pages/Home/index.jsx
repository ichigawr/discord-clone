import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import config from "@/config";
import authService from "@/services/authService";

import Button from "@/components/Button";
import FriendsList from "./FriendsList";
import SideBar from "./SideBar";
import styles from "./Home.module.css";

function Home() {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.auth.currentUser);

  const handleLogout = async () => {
    const res = await authService.logout();

    if (res.status === "success") {
      localStorage.clear();
      navigate(config.routes.login);
    } else {
      console.error(res.message);
    }
  };

  return (
    <div className={styles.container}>
      <aside className={styles.directMessages}>
        <SideBar />
      </aside>
      <main className={styles.main}>
        <FriendsList />
      </main>
      <aside className={styles.activeUsers}>
        <button className={styles.logoutBtn} onClick={handleLogout}>
          Log Out
        </button>
        <Button to={`/p/${currentUser.username}`}>Profile</Button>
      </aside>
    </div>
  );
}

export default Home;
