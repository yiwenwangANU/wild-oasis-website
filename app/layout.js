import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
const josefin = Josefin_Sans({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: { template: "%s / Wild Oasis", default: "Welcome / The Wild Oasis" },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen`}
      >
        <Header />

        <main>{children}</main>
      </body>
    </html>
  );
}
