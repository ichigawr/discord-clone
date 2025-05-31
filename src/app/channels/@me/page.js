import { useNavigate } from "react-router-dom";
import useCurrentUser from "@/hooks/useCurrentUser";

import config from "@/config";
import authService from "@/services/authService";

import Button from "@/components/Button";
import FriendsList from "./components/FriendsList";
import SideBar from "./components/SideBar";
import styles from "./DirectMessages.module.css";

function DirectMessages() {
  const navigate = useNavigate();
  const currentUser = useCurrentUser();

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

export default DirectMessages;
