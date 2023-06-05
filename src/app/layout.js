import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./store/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Friends",
  description: "Project with React Nextjs Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
