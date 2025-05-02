import logo from "@/assets/logos/logo.png";
// import spinningLogoMp4 from "@/assets/videos/spinning-logo.mp4";
// import spinningLogoWebm from "@/assets/videos/spinning-logo.webm";

function LoadingScreen() {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <video
        autoPlay
        style={{ width: "200px", height: "200px" }}
        loop
        playsInline
      >
        <source src="/videos/spinning-logo.webm" type="video/webm" />
        <source src="/videos/spinning-logo.mp4" type="video/mp4" />
        <img src={logo} alt="" />
      </video>
    </div>
  );
}

export default LoadingScreen;
