import "@/app/_styles/globals.css";
import Header from "@/app/_components/Header";
import { Josefin_Sans } from "next/font/google";
import { ReservationProvider } from "@/app/_components/ReservationContext";
import ReservationReminder from "./_components/ReservationReminder";

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
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 flex flex-col h-dvh relative`}
      >
        <Header />
        <main className="max-w-7xl mx-auto flex-1 py-12 w-full ">
          <ReservationProvider>
            <ReservationReminder />
            {children}
          </ReservationProvider>
        </main>
      </body>
    </html>
  );
}
