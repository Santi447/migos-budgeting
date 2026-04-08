import { Geist, Geist_Mono } from "next/font/google";
import { AuthContextProvider } from "../context/AuthContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Migos Budgeting Web App",
  description: "A budgeting web app built with Next.js and Firebase, designed to help users manage their finances effectively.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <AuthContextProvider>
        {children}
        </AuthContextProvider>
        </body>
    </html>
  );
}
