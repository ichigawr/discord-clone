// import useFetch from "@/hooks/useFetch";
import noFriendsOnline from "@/assets/svgs/noFriendsOnline.svg";
import styles from "./FriendsList.module.css";

function FriendsList() {
  // const friends = useFetch("https://dummyjson.com/users");
  const friends = [];

  return (
    <div className={styles.friendsList}>
      {friends.length ? (
        <div className={styles.friendsOnline}>
          <p>Online - {friends.length}</p>
          <ul>
            {friends.map((friend) => (
              <li key={friend.id}>
                <img src={friend.avatar} alt={friend.name} />
                <p>{friend.name}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className={styles.noFriendsOnline}>
          <img src={noFriendsOnline} alt="No friends online" />
          <p>There are no friends online at this time. Check back later!</p>
        </div>
      )}
    </div>
  );
}

export default FriendsList;
