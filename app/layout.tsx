import Header from "components/common/Header";
import Sidebar from "components/common/Sidebar";
import { Inter } from "next/font/google";
import "./globals.css";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "DSA Solutions - Javascript",
  description: "A collection of DSA problem solutions done in Javascript.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex flex-wrap">
        <Header />

        <aside className="w-1/6 border-r p-2">
          <Sidebar />
        </aside>

        <main className="w-5/6">{children}</main>
      </body>
    </html>
  );
}
