import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string[];
}

const Layout = ({
  children,
  title = "May & Moroka Digital Solutions - Professional Digital Solutions for Africa",
  description = "Engineering professional digital solutions for African businesses. We design modern software, web applications, and business solutions that help companies grow, innovate, and scale.",
  keywords = [
    "software development",
    "web design",
    "mobile apps",
    "business software",
    "IT consulting",
    "South Africa",
    "Africa",
    "digital transformation",
  ],
}: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: "#00A86B",
              secondary: "#fff",
            },
          },
          error: {
            duration: 5000,
            iconTheme: {
              primary: "#FF7A00",
              secondary: "#fff",
            },
          },
        }}
      />
    </div>
  );
};

export default Layout;