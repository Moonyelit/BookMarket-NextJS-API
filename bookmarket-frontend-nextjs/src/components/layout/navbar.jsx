"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./header/Logo";
import BurgerMenu from "./header/BurgerMenu";
import LoginModal from "./header/LoginModal";

import { Button } from "@/components/ui/button";
// import { ModeToggle } from "@/components/theme/mode-toggle";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
<header className="bg-[var(--color-brown)] px-2 py-2 w-full fixed top-0 z-50 drop-shadow-header">
<div className="container mx-auto flex justify-between w-full">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Logo />
        </div>

        {/* ICONES */}
        <div className="flex space-x-3 items-center">
          {/* Recherche */}
          <span className="p-1 bg-[var(--color-yellow)] rounded-full inline-flex items-center justify-center w-6 h-6 shadow-3xl cursor-pointer">
            <i className="bx bx-search text-[var(--color-brown)] text-xl"></i>
          </span>

          {/* Compte */}
          <LoginModal />

          {/* Panier */}
          <span className="inline-flex items-center justify-center cursor-pointer">
            <i className="bx bxs-basket text-[var(--color-yellow)] text-2xl"></i>
          </span>

          {/* Mode dark/light */}
          {/* <ModeToggle /> */}

          {/* Menu burger */}
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
}
