export const metadata = {
  title: "Discord",
  description: "A clone of Discord",
  openGraph: {
    title: "Discord",
    description: "A clone of Discord",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
