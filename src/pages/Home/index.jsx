import SideBar from "./SideBar";
import FriendsList from "./FriendsList";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <aside className={styles.directMessages}>
        <SideBar />
      </aside>
      <main className={styles.main}>
        <FriendsList />
      </main>
      <aside className={styles.activeUsers}></aside>
    </div>
  );
}

export default Home;
