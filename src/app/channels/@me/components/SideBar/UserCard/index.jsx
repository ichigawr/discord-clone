import PropTypes from "prop-types";
import validateProps from "@/utils/validateProps";
import styles from "./UserCard.module.css";

function UserCard({ name, avatar }) {
  validateProps(UserCard, { name, avatar });

  return (
    <div className={styles.userCard}>
      <img src={avatar} alt={name} />
      <span>{name}</span>
    </div>
  );
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default UserCard;
