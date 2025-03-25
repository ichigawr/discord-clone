import { useNavigate } from "react-router-dom";

import config from "@/config";
import auth from "../../utils/auth";
import SideBar from "./SideBar";
import FriendsList from "./FriendsList";
import styles from "./Home.module.css";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    const data = auth("logout", null, {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    });

    if (data) {
      localStorage.removeItem("token");
      navigate(config.routes.login);
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
      </aside>
    </div>
  );
}

export default Home;
