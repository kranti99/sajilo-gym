import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../../components/header";
import Footer from "../../components/footer";
import "./globals.css";
import "./css/style.css";
import "./css/barfiller.css";
import "./css/bootstrap.min.css";
import "./css/flaticon.css";
import "./css/owl.carousel.min.css";
import "./css/font-awesome.min.css";
import "./css/magnific-popup.css";
import "./css/slicknav.min.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sajilo Gym Fitness",
  description: "Be strong Training Hard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
