import { SearchIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Input } from "../../../../components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const DepthFrameByAnima = () => {
  // Navigation menu items data
  const navItems = [
    { label: "Recipes", href: "#" },
    { label: "Ingredients", href: "#" },
    { label: "Tips & Tricks", href: "#" },
    { label: "About", href: "#" },
  ];

  return (
    <header className="flex items-center justify-between px-10 py-3 border-b border-[#e5e8ea] w-full">
      {/* Left side: Logo and Navigation */}
      <div className="flex items-center gap-8">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <h1 className="font-bold text-lg text-[#1c140c] font-['Epilogue',Helvetica]">
            Sofreh Secrets
          </h1>
        </div>

        {/* Navigation Links */}
        <NavigationMenu>
          <NavigationMenuList className="flex gap-9">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  href={item.href}
                  className="font-medium text-sm text-[#1c140c] font-['Epilogue',Helvetica]"
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Right side: SearchIcon and Profile */}
      <div className="flex items-center gap-8">
        {/* SearchIcon Bar */}
        <div className="relative min-w-40 max-w-64">
          <div className="flex items-center bg-[#f2ede8] rounded-xl">
            <div className="pl-4 py-2">
              <SearchIcon className="h-6 w-6 text-[#96724f]" />
            </div>
            <Input
              className="border-0 bg-transparent pl-2 pr-4 py-2 h-auto text-[#96724f] font-['Epilogue',Helvetica] placeholder:text-[#96724f] focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="Search"
            />
          </div>
        </div>

        {/* User Avatar */}
        <Avatar className="w-10 h-10 rounded-[20px]">
          <AvatarImage
            src="https://c.animaapp.com/m9wu7ijgw5981c/img/depth-4--frame-1.png"
            alt="User profile"
          />
        </Avatar>
      </div>
    </header>
  );
};
