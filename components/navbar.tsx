"use client";

import { useState } from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import logo from "../public/logo/hamro-jatra-logo.png";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Get current Nepali date (simplified - in real app you'd use a proper Nepali calendar library)
  const getCurrentNepaliDate = () => {
    const today = new Date();
    return `२०८१ माघ ${today.getDate()}`;
  };

  return (
    <nav className="bg-white w-full text-black shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              {/* <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
               
              </div> */}
              <Image
                src={logo}
                alt="Hamro Jatra Logo"
                width={100}
                height={100}
              />
              {/* <span className="text-xl font-bold">हाम्रो जात्रा</span> */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-accent transition-colors">
              गृहपृष्ठ
            </Link>
            <Link href="/live" className="hover:text-accent transition-colors">
              प्रत्यक्ष जात्रा
            </Link>
            <Link href="/news" className="hover:text-accent transition-colors">
              समाचार
            </Link>
            <Link
              href="/events"
              className="hover:text-accent transition-colors"
            >
              कार्यक्रमहरू
            </Link>
            <Link href="/about" className="hover:text-accent transition-colors">
              हाम्रो बारेमा
            </Link>
          </div>

          {/* Right side items */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Nepali Date */}
            <div className="flex items-center space-x-2 text-sm bg-primary-foreground/10 px-3 py-1 rounded-full">
              <Calendar className="w-4 h-4" />
              <span>{getCurrentNepaliDate()}</span>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-1 text-sm">
              <MapPin className="w-4 h-4" />
              <span>काठमाडौं</span>
            </div>

            {/* Avatar for login */}
            <Link href="/login">
              <Avatar className="w-8 h-8 cursor-pointer hover:ring-2 hover:ring-accent transition-all">
                <AvatarImage src="/nepali-user-avatar.png" />
                <AvatarFallback className="bg-accent text-accent-foreground">
                  प्र
                </AvatarFallback>
              </Avatar>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary hover:bg-primary-foreground/10"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 absolute top-14 pt-9 p-5 bg-white min-h-screen w-full left-0 right-0 border-t border-primary-foreground/20">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-primary transition-colors"
              >
                गृहपृष्ठ
              </Link>
              <Link
                href="/live"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-primary transition-colors"
              >
                प्रत्यक्ष जात्रा
              </Link>
              <Link
                href="/news"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-primary transition-colors"
              >
                समाचार
              </Link>
              <Link
                href="/events"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-primary transition-colors"
              >
                कार्यक्रमहरू
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-primary transition-colors"
              >
                हाम्रो बारेमा
              </Link>
              <div className="flex items-center justify-between pt-4 border-t border-primary-foreground/20">
                <div className="flex items-center space-x-2 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{getCurrentNepaliDate()}</span>
                </div>
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  <Avatar className="w-8 h-8 cursor-pointer">
                    <AvatarImage src="/nepali-user-avatar.png" />
                    <AvatarFallback className="bg-accent text-accent-foreground">
                      प्र
                    </AvatarFallback>
                  </Avatar>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
