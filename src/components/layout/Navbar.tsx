"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "../ui/Logo";
import { navigationLinks } from "@/data/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative bg-[#F5F7FA]">
      <div className="mx-auto flex max-w-360 items-center justify-between px-6 py-5.5 lg:px-10">
        {/* Logo */}
        <Link href="/" onClick={() => setIsMenuOpen(false)}>
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex xl:gap-12.5">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#18191F]!"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Auth */}
        <div className="hidden items-center gap-3.5 text-[14px] lg:flex">
          <Link href="/login" className="text-[#4CAF4F]">
            Login
          </Link>

          <Link
            href="/signup"
            className="rounded-md bg-[#4CAF4F] px-5 py-2.5 text-white"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-[#4D4D4D] lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="text-2xl">
            {isMenuOpen ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-[#F5F7FA] px-6 pb-6 lg:hidden">
          <div className="flex flex-col gap-5 pt-5">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#18191F]!"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="flex items-center gap-5 pt-2">
              <Link
                href="/login"
                className="text-[#4CAF4F]"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>

              <Link
                href="/signup"
                className="rounded-md bg-[#4CAF4F] px-5 py-2.5 text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;