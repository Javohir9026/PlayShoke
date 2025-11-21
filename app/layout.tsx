import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />
        <header>
          <Navbar />
        </header>
        <main className="container">{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
