import "./globals.css";
import StickyButton from "../components/StickyButton";
import StickyClaim from "../components/StickyClaim";
import Head from "next/head";
import NDFilterOverlay from "../components/NDFilterOverlay";
import { ThemeProvider } from "../context/ThemeContext";
import FalseColor from "../components/FalseColor";

export const metadata = {
  title: "Campos Viola gUG (i.G.) – Impactful Creative Media Projects",
  description: "",
};

export default function RootLayout({ children, params }) {
  const locale = params?.locale || "en";

  return (
    <html lang={locale}>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/tru2edl.css" />
      </Head>
      <body>
        <ThemeProvider>
          {children}
          <NDFilterOverlay />
          <FalseColor />
          <StickyClaim />
          <StickyButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
