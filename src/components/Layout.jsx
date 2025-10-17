import React from "react";
import { Outlet } from "react-router-dom";
import { FloatingDock } from "./ui/floating-dock";
import {
  Home as HomeIcon,
  FolderGit2,
  Mail,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const Layout = () => {
  const dockItems = [
    { title: "Home", href: "/", icon: <HomeIcon className="h-5 w-5" /> },
    {
      title: "Projects",
      href: "/projects",
      icon: <FolderGit2 className="h-5 w-5" />,
    },
    {
      title: "Contact",
      href: "/contact",
      icon: (
        <>
          <Mail className="h-5 w-5" />
        </>
      ),
    },
  ];
  const socialItems = [
    {
      title: "Github",
      href: "https://github.com/awais7796",
      icon: <Github className="h-5 w-5" />,
    },
    {
      title: "Linkedin ",
      href: "https://www.linkedin.com/in/awais-khan-684935363/",
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      title: "Twitter  ",
      href: "https://x.com/awaizz49",
      icon: <Twitter className="h-5 w-5" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-primary ">
      <main className="flex-grow">
        <Outlet />
      </main>
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <FloatingDock mainItems={dockItems} socialItems={socialItems} />
      </div>
    </div>
  );
};

export default Layout;
