import { SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const DepthFrameByAnima = () => {
  // Navigation links data
  const navLinks = [
    { title: "Home", href: "#" },
    { title: "Recipes", href: "#" },
    { title: "About Us", href: "#" },
    { title: "Contact", href: "#" },
  ];

  return (
    <header className="flex items-center justify-between px-10 py-3 w-full border-b border-[#e5e8ea]">
      {/* Left side: Logo and Navigation */}
      <div className="flex items-center gap-8">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="relative w-4 h-4">
            <img
              className="w-4 h-4"
              alt="Logo"
              src="https://c.animaapp.com/m9yjlkqjSvoVOw/img/vector---1.svg"
            />
          </div>
          <h1 className="font-bold text-lg text-[#1c160c] font-['Plus_Jakarta_Sans',Helvetica]">
            Taste of Persia
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-9">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="font-medium text-sm text-[#1c160c] font-['Plus_Jakarta_Sans',Helvetica]"
            >
              {link.title}
            </a>
          ))}
        </nav>
      </div>

      {/* Right side: SearchIcon and Login */}
      <div className="flex items-center gap-8">
        {/* SearchIcon Bar */}
        <div className="relative min-w-40 max-w-64">
          <div className="flex items-center bg-[#f4efe5] rounded-xl">
            <div className="pl-4 flex items-center">
              <SearchIcon className="h-6 w-6 text-[#a08249]" />
            </div>
            <Input
              className="border-0 bg-transparent pl-2 pr-4 py-2 h-10 text-[#a08249] font-['Plus_Jakarta_Sans',Helvetica] placeholder:text-[#a08249] focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Login Button */}
        <Button className="h-10 px-4 bg-[#009963] hover:bg-[#008855] rounded-[20px] font-bold text-sm font-['Plus_Jakarta_Sans',Helvetica]">
          Log in
        </Button>
      </div>
    </header>
  );
};
