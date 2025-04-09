import Button from "@/components/Button";
import styles from "./UploadAvatar.module.css";
import { useCallback, useState } from "react";
import httpRequest from "@/utils/httpRequest";

function UploadAvatar({ avatarFile, userId, closeModal, updateAvatar }) {
  const [isLoading, setIsLoading] = useState(false);
  const preview = URL.createObjectURL(avatarFile);

  const handleUpdateAvatar = useCallback(async () => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append("image", avatarFile);
    await httpRequest.post(`/users/${userId}?_method=patch`, formData);
    updateAvatar(preview);
    closeModal();

    setIsLoading(false);
  }, [avatarFile, closeModal, preview, updateAvatar, userId]);

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <img src={preview} alt="" className={styles.preview} />
        <div>
          <Button isLoading={isLoading} onClick={handleUpdateAvatar}>
            Update
          </Button>
          <Button variant="destructive" onClick={() => {
            URL.revokeObjectURL(preview);
            closeModal();
          }}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UploadAvatar;
