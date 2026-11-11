import "../styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ToastProvider from "@/components/providers/ToastProvider";

export const metadata = {
  title: "PixelCore's Cocoir Store",
  description:
    "A simple e-commerce app built with Next.js 13, showcasing a variety of products and a seamless shopping experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=box,credit_card,support_agent"
        />
      </head>
      <body>
        <Navbar />
        <ToastProvider />
        <main>{children}</main> 
        <Footer />              
      </body>
    </html>
  );
}