import { Outlet } from "react-router-dom";

import logoWithText from "@/assets/logos/logo-with-text.svg";
import backgroundArtwork from "@/assets/svgs/background-artwork.svg";
import styles from "./AuthPageLayout.module.css";

function AuthPageLayout() {
  return (
    <div className="container">
      <img
        className={styles.artwork}
        src={backgroundArtwork}
        alt="Background Artwork"
      />
      <img
        className={styles.logoWithText}
        src={logoWithText}
        alt="Logo With Text"
      />

      <Outlet />
    </div>
  );
}

export default AuthPageLayout;
