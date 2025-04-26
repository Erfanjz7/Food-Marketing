import { SearchIcon, Menu } from "lucide-react";
import React, { useState } from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Input } from "../../../../components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const DepthFrameByAnima = () => {
  // State for mobile menu toggle
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation menu items data in Persian
  const navItems = [
    { label: "دستور غذاها", href: "#" },
    { label: "مواد اولیه", href: "#" },
    { label: "نکات و ترفندها", href: "#" },
    { label: "درباره ما", href: "#" },
  ];

  return (
    <header className="relative flex flex-col w-full border-b border-[#e5e8ea] rtl">
      <style>
          {`
            * {
              font-family: 'Vazir', sans-serif !important;
            }
            .rtl {
              direction: rtl;
              text-align: right;
            }
          `}
      </style>
      {/* Desktop and Mobile Header */}
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 w-full">
        {/* Left side in RTL: Search and Profile */}
        {/* Right side in RTL: Logo and Navigation */}
        <div className="flex items-center gap-4 md:gap-8 flex-row-reverse">
          {/* Logo */}
          

          {/* Desktop Navigation Links - Hidden on mobile */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-4 lg:gap-9 flex-row-reverse">
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      href={item.href}
                      className="font-medium text-sm text-[#1c140c] font-['Vazirmatn',sans-serif]"
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center">
            <h1 className="font-bold text-base md:text-lg text-[#1c140c] font-['Vazirmatn',sans-serif]">
              اسرار سفره
            </h1>
          </div>
        </div>
        {/* Left side in RTL: Search and Profile */}
        <div className="flex items-center gap-4 md:gap-8 flex-row-reverse">
          {/* User Avatar */}
          <Avatar className="w-8 h-8 md:w-10 md:h-10 rounded-full md:rounded-[20px]">
            <AvatarImage
              src="https://c.animaapp.com/m9wu7ijgw5981c/img/depth-4--frame-1.png"
              alt="نمایه کاربر"
            />
          </Avatar>
          {/* Search Bar - Hidden on smallest screens */}
          <div className="hidden sm:block relative min-w-32 md:min-w-40 max-w-64">
            <div className="flex items-center bg-[#f2ede8] rounded-xl">
              <div className="pl-2 md:pl-4 py-2">
                <SearchIcon className="h-4 w-4 md:h-6 md:w-6 text-[#96724f] mr-4" />
              </div>
              <Input
                className="border-0 bg-transparent pl-1 md:pl-2 pr-2 md:pr-0 py-1 md:py-2 h-auto text-[#96724f] font-['Vazirmatn',sans-serif] placeholder:text-[#96724f] focus-visible:ring-0 focus-visible:ring-offset-0 text-xs md:text-sm"
                placeholder="جستجو"
              />
            </div>
          </div>

          {/* Mobile Menu Button - Only visible on mobile */}
          <button 
            className="md:hidden flex items-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6 text-[#1c140c]" />
          </button>
        </div>
      </div>

      {/* Mobile Menu - Only visible when toggled */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col w-full bg-white py-2 px-4 border-t border-[#e5e8ea]">
          {/* Mobile Navigation Links */}
          <nav className="flex flex-col gap-3">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href={item.href}
                className="font-medium text-sm text-[#1c140c] font-['Vazirmatn',sans-serif] py-2"
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          {/* Mobile Search Bar */}
          <div className="sm:hidden relative w-full mt-3">
            <div className="flex items-center bg-[#f2ede8] rounded-xl">
              <div className="pl-3 py-2">
                <SearchIcon className="h-4 w-4 text-[#96724f]" />
              </div>
              <Input
                className="border-0 bg-transparent pl-1 pr-3 py-1 h-auto text-[#96724f] font-['Vazirmatn',sans-serif] placeholder:text-[#96724f] focus-visible:ring-0 focus-visible:ring-offset-0 text-xs"
                placeholder="جستجو"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
