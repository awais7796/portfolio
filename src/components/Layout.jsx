import React from "react";
import { Outlet } from "react-router-dom";
import { FloatingDock } from "./ui/floating-dock";
import Footer from "./Footer";
import { Home as HomeIcon, FolderGit2, Mail } from "lucide-react";

const Layout = () => {
  const dockItems = [
    { title: "Home", href: "/", icon: <HomeIcon className="h-5 w-5" /> },
    {
      title: "Projects",
      href: "/projects",
      icon: <FolderGit2 className="h-5 w-5" />,
    },
    { title: "Contact", href: "/contact", icon: <Mail className="h-5 w-5" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Outlet />
      </main>
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <FloatingDock items={dockItems} />
      </div>

      {/* <div className="sticky top-4 z-50 flex justify-center">
        <FloatingDock items={dockItems} />
      </div> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
