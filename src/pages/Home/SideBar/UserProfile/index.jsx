import ProfileIcon from "@/components/icons/ProfileIcon";
import styles from "./UserProfile.module.css";

function UserProfile({ userId, name, avatar }) {
  return (
    <div className={styles.userProfile}>
      <div className={styles.user}>
        <img src={avatar} alt={name} />
        <p className={styles.info}>
          <span className={styles.name}>{name}</span>
          <span className={styles.id}>{userId}</span>
        </p>
      </div>
      <div className={styles.settingIcons}>
        <button>
          <ProfileIcon type="mute" />
        </button>
        <button>
          <ProfileIcon type="deafen" />
        </button>
        <button>
          <ProfileIcon type="settings" />
        </button>
      </div>
    </div>
  );
}

export default UserProfile;
