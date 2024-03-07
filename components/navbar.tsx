import React from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-md">
      <div className="flex items-center space-x-4">
        <a
          href="#"
          className="text-lg font-semibold text-gray-900 dark:text-gray-50"
        >
          Vite React
        </a>
        <a href="#" className="text-gray-700 dark:text-gray-200">
          Docs
        </a>
        <a href="#" className="text-gray-700 dark:text-gray-200">
          Blog
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <a href="#" className="text-gray-700 dark:text-gray-200">
          GitHub
        </a>
        <a href="#" className="text-gray-700 dark:text-gray-200">
          Twitter
        </a>
        <a href="#" className="text-gray-700 dark:text-gray-200">
          Discord
        </a>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <img
                src="/assets/avatar.png"
                alt="avatar"
                className="w-8 h-8 rounded-full"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}