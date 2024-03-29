import "./globals.css";
import { Inter } from "next/font/google";
import "./Style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mitun",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bggBlock">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
