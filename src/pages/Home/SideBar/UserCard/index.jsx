import styles from "./UserCard.module.css";

function UserCard({ name, avatar }) {
  return (
    <div className={styles.userCard}>
      <img src={avatar} alt={name} />
      <span>{name}</span>
    </div>
  );
}

export default UserCard;
