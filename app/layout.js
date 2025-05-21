
import { Montserrat } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "InnoSphere - From Vision to Deployment",
  description: "Design, Develop, and Deliver High-Performance Applications",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased bg-white`}
      >
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
          {children}
        </div>
      </body>
    </html>
  );
}
