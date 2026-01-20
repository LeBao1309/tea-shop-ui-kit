import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

/**
 * MAIN LAYOUT COMPONENT
 * PHP Usage: 
 * <?php 
 *   $content = 'pages/home.php';
 *   include 'layout/main.php'; 
 * ?>
 * 
 * This wraps all pages with header and footer
 */

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* HEADER */}
      <Header />

      {/* MAIN CONTENT */}
      <main className="flex-1">
        {children}
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default MainLayout;
