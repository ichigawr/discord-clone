import { LoadingProvider } from "@/contexts/LoadingContext";
import store from "@/store";

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
        <div id="root">
          <LoadingProvider>
            <ReduxProvider store={store}>{children}</ReduxProvider>
          </LoadingProvider>
        </div>
      </body>
    </html>
  );
}
