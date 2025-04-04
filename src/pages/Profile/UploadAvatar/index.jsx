import Button from "@/components/Button";
import styles from "./UploadAvatar.module.css";
import { useState } from "react";
import httpRequest from "@/utils/httpRequest";

function UploadAvatar({ avatarFile, toggleModal }) {
  const [isLoading, setIsLoading] = useState(false);
  const preview = URL.createObjectURL(avatarFile);
  console.log(avatarFile);

  const handleUpdateAvatar = async () => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append("image", avatarFile);
    await httpRequest.post("/users/1?_method=patch", formData);
    toggleModal();

    setIsLoading(false);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <img src={preview} alt="" className={styles.preview} />
        <div>
          <Button isLoading={isLoading} onClick={handleUpdateAvatar}>
            Update
          </Button>
          <Button variant="destructive" onClick={toggleModal}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UploadAvatar;
