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

        <aside className="w-1/6 border-r p-4 sticky top-[50px]">
          <Sidebar />
        </aside>

        <main className="w-5/6 p-2">
          <div className="max-w-[768px] mx-auto">{children}</div>
        </main>
      </body>
    </html>
  );
}
