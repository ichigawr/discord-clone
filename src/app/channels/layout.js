import ServerList from "@/components/ServerList";
import styles from "./ChannelLayout.module.css";

function ChannelLayout({ children }) {
  return (
    <div className={styles.container}>
      <aside>
        <ServerList />
      </aside>
      <main>{children}</main>
    </div>
  );
}

export default ChannelLayout;
