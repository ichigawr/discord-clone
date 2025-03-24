import { Outlet } from "react-router-dom";

import ServerList from "@/components/ServerList";
import styles from "./PrivateChannelLayout.module.css";

function PrivateChannelLayout() {
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

export default PrivateChannelLayout;
