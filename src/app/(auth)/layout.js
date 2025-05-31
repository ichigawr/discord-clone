import logoWithText from "@/assets/logos/logo-with-text.svg";
import backgroundArtwork from "@/assets/svgs/background-artwork.svg";
import styles from "./Auth.module.css";

function AuthLayout({ children }) {
  return (
    <div className="container">
      <img
        className={styles.artwork}
        src={backgroundArtwork.src}
        alt="Background Artwork"
      />
      <img
        className={styles.logoWithText}
        src={logoWithText.src}
        alt="Logo With Text"
      />
      {children}
    </div>
  );
}

export default AuthLayout;
