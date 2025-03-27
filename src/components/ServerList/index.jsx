import { NavLink } from "react-router-dom";

import Avatar from "@/components/Avatar";
import useFetch from "@/hooks/useFetch";
import styles from "./ServerList.module.css";

function ServerList() {
  // TODO: replace with actual URL
  const servers = useFetch("/products?page=5");

  return (
    <nav className={styles.serverList}>
      <NavLink to="/" className={styles.btn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="26"
          viewBox="0 0 27 26"
          fill="none"
        >
          <path
            d="M22.9996 5.56968C21.3061 4.77731 19.4952 4.20141 17.602 3.87354C17.3694 4.29389 17.0978 4.85928 16.9105 5.30906C14.898 5.0064 12.904 5.0064 10.9285 5.30906C10.7412 4.85928 10.4634 4.29389 10.2288 3.87354C8.33354 4.20141 6.5206 4.77941 4.82701 5.57388C1.41103 10.7359 0.485007 15.7697 0.948017 20.732C3.21368 22.424 5.40938 23.4517 7.56803 24.1243C8.10101 23.3908 8.57637 22.611 8.98587 21.7892C8.20596 21.4929 7.45897 21.1271 6.75314 20.7026C6.9404 20.5639 7.12354 20.4188 7.30052 20.2696C11.6055 22.2831 16.2829 22.2831 20.5364 20.2696C20.7155 20.4188 20.8986 20.5639 21.0838 20.7026C20.3759 21.1292 19.6269 21.495 18.847 21.7913C19.2565 22.611 19.7298 23.3929 20.2648 24.1264C22.4255 23.4538 24.6233 22.4261 26.8889 20.732C27.4322 14.9794 25.9609 9.99185 22.9996 5.56968ZM9.57235 17.6802C8.28004 17.6802 7.22026 16.4738 7.22026 15.0046C7.22026 13.5355 8.2574 12.3269 9.57235 12.3269C10.8873 12.3269 11.9471 13.5334 11.9244 15.0046C11.9265 16.4738 10.8873 17.6802 9.57235 17.6802ZM18.2646 17.6802C16.9723 17.6802 15.9125 16.4738 15.9125 15.0046C15.9125 13.5355 16.9496 12.3269 18.2646 12.3269C19.5795 12.3269 20.6393 13.5334 20.6167 15.0046C20.6167 16.4738 19.5795 17.6802 18.2646 17.6802Z"
            fill="white"
          />
        </svg>
      </NavLink>

      <div className={styles.separator}></div>

      {servers.map((server) => {
        const id = server.id;
        const name = server.title;
        const thumbnail = server.thumbnail;

        return (
          <NavLink to={`/`} key={id} className={styles.btn}>
            <Avatar key={id} name={name} thumbnail={thumbnail} />
          </NavLink>
        );
      })}

      <NavLink to="/" className={styles.btn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M9 0H7V7H0V9H7V16H9V9H16V7H9V0Z"
            // TODO: fix the UI bug
            styles={{ fill: "#b5bac1" }}
          />
        </svg>
      </NavLink>

      <NavLink to="/" className={`${styles.btn} ${styles.discovery}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path d="M10 8.9C9.39 8.9 8.9 9.39 8.9 10C8.9 10.61 9.39 11.1 10 11.1C10.61 11.1 11.1 10.61 11.1 10C11.1 9.39 10.61 8.9 10 8.9ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM12.19 12.19L4 16L7.81 7.81L16 4L12.19 12.19Z" />
        </svg>
      </NavLink>
    </nav>
  );
}

export default ServerList;
