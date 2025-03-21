import DiscordIcon from "@/components/icons/DiscordIcon";
import useFetch from "@/hooks/useFetch";
import UserCard from "./UserCard";
import styles from "./SideBar.module.css";
import UserProfile from "./UserProfile";

function SideBar() {
  const users = useFetch("https://dummyjson.com/users?limit=5&skip=150");

  return (
    <div className={styles.sideBar}>
      <div className={styles.homeNav}>
        <div className={styles.friends}>
          <DiscordIcon type="friends" />
          <span>Friends</span>
        </div>
        <div className={styles.nitro}>
          <DiscordIcon type="nitro" />
          <span>Nitro</span>
        </div>
      </div>

      <div className={styles.directMessages}>
        <div className={styles.directMessagesHeader}>
          <span>Direct Messages</span>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
            >
              <path
                d="M6.81615 0.392578H5.56615V5.37508H0.582275V6.62508H5.56615V11.6202H6.81615V6.62508H11.8087V5.37508H6.81615V0.392578Z"
                fill="#B9BBBE"
              />
              <path
                d="M7.00616 0.392578V0.202578H6.81615H5.56615H5.37615V0.392578V5.18508H0.582275H0.392275V5.37508V6.62508V6.81508H0.582275H5.37615V11.6202V11.8102H5.56615H6.81615H7.00616V11.6202V6.81508H11.8087H11.9987V6.62508V5.37508V5.18508H11.8087H7.00616V0.392578Z"
                stroke="#B9BBBE"
                strokeWidth="0.38"
              />
            </svg>
          </button>
        </div>
        <div className={styles.directMessagesList}>
          <div className={styles.directMessage}>
            {users.map((user) => (
              <UserCard
                key={user.id}
                name={user.firstName}
                avatar={user.image}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.userProfile}>
        <UserProfile
          userId="0001"
          name="muatex"
          avatar="https://picsum.photos/id/25/200/200"
        />
      </div>
    </div>
  );
}

export default SideBar;
