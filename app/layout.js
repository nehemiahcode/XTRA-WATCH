import "./globals.css";
import Themeprovider from "./components/Themeprovider";

export const metadata = {
  title: "XTRA WATCH",
  description: "Skip the impossile Extraordinery Performance with XTRA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Themeprovider>{children}</Themeprovider>
      </body>
    </html>
  );
}
