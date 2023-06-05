import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./store/provider";
import { MdPets } from "react-icons/md";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Friends",
  description: "Project with React Nextjs Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
