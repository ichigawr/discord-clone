import { Outlet } from "react-router-dom";
import ServerList from "@/components/ServerList";
import styles from "./DefaultLayout.module.css";

function DefaultLayout() {
  return (
    <div className={styles.container}>
      <aside>
        <ServerList />
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default DefaultLayout;
