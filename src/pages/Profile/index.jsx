import { useEffect, useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import httpRequest from "@/utils/httpRequest";

import Button from "@/components/Button";
import EditingForm from "./EditingForm";
import styles from "./Profile.module.css";
import { useParams } from "react-router-dom";
import userService from "@/services/userService";

function Profile() {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isCurrentUser, setIsCurrentUser] = useState(true);
  const [user, setUser] = useState(
    (() => {
      try {
        return JSON.parse(localStorage.getItem("user"));
      } catch (error) {
        console.error(error);
        return null;
      }
    })()
  );

  useEffect(() => {
    const fetchUser = async () => {
      if (params.username !== user?.username) {
        setIsLoading(true);

        const data = await userService.getUserByUsername(params.username);
        setUser(data);
        setIsCurrentUser(false);

        setIsLoading(false);
      }
    };

    fetchUser();
  }, [params, user]);

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      const user = JSON.parse(localStorage.getItem("user"));
      await httpRequest.patch(`/users/${user.id}`, data);
      setIsEditing(false);
      toast.success("Updated successfully!");
    } catch (error) {
      console.error(error);
      toast.error("An unexpected error occurred!");
    }

    setIsLoading(false);
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileHeader}>
        <div
          className={styles.banner}
          style={{ backgroundColor: "#5865f2" }}
        ></div>
        <div className={styles.avatarContainer}>
          <img
            src={user?.image || "https://picsum.photos/200/200"}
            alt={user?.username}
            className={styles.avatar}
          />
        </div>
      </div>

      <div className={styles.profileContent}>
        <div className={styles.userInfo}>
          <h1 className={styles.username}>
            {user?.username}
            <span className={styles.discriminator}>#{user?.id}</span>
          </h1>
        </div>

        <div className={styles.aboutSection}>
          <p className={styles.sectionHeading}>ABOUT ME</p>
          <p className={styles.bio}>
            {user?.bio || "This user hasn't added a bio yet."}
          </p>
        </div>

        <div className={styles.detailsSection}>
          {user &&
            Object.keys(user)
              .slice(1, -3)
              .map((key) => {
                if (key === "image") return null;

                return (
                  <div key={key}>
                    <p className={styles.sectionHeading}>{key.toUpperCase()}</p>
                    <p>{user[key] || "Not updated yet"}</p>
                  </div>
                );
              })}

          <p className={styles.sectionHeading}>VERIFICATION</p>
          <p>
            {user?.emailVerifiedAt ? "Verified account" : "Unverified account"}
          </p>

          <p className={styles.sectionHeading}>DISCORD MEMBER SINCE</p>
          <p>
            {user?.createdAt
              ? new Date(user.createdAt).toLocaleDateString()
              : "Unknown date"}
          </p>

          {!isLoading && isCurrentUser && (
            <div className={styles.actionButtons}>
              <Button size="lg" onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? "Cancel Editing" : "Edit Profile"}
              </Button>
            </div>
          )}
        </div>
      </div>

      {isEditing && (
        <>
          <div className={styles.overlay}></div>
          <EditingForm
            user={user}
            onSubmit={onSubmit}
            handleCancel={() => setIsEditing(false)}
            isLoading={isLoading}
          />
        </>
      )}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
}

export default Profile;
