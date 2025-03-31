"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Logo from "@/components/layout/header/Logo";

export default function BurgerMenu() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <>
      {/* Bouton Burger */}
      <Button
        variant="ghost"
        size="icon"
        aria-label="Ouvrir le menu"
        onClick={toggleMenu}
        className={`transition-transform duration-300 ${
          open ? "rotate-90" : ""
        }`}
      >
        <i
          className={`bx ${
            open ? "bx-x" : "bx-menu"
          } text-yellow text-2xl transition-all`}
        />
      </Button>

      {/* Overlay */}
      {open && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black/50 z-40"
          ></div>
      )}

      {/* Sidebar */}
      <motion.nav
        initial={{ x: "-100%" }}
        animate={{ x: open ? "0%" : "-100%" }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 w-64 h-full bg-[var(--color-brown)] text-[var(--color-yellow)]
 font-bold p-4 z-50 shadow"
      >
        <div className="flex items-center justify-between">
          <Logo />
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            <i className="bx bx-x text-yellow text-2xl" />
          </Button>
        </div>

        <hr className="border-t-2 border-yellow my-4" />

        <ul className="space-y-4">
          <li>
            <a href="/" onClick={toggleMenu}>
              Accueil
            </a>
          </li>
          <li>
            <a href="/login" onClick={toggleMenu}>
              Login
            </a>
          </li>
          <li>
            <a href="/register" onClick={toggleMenu}>
              Register
            </a>
          </li>
          <li>
            <a href="/profil" onClick={toggleMenu}>
              Profil
            </a>
          </li>
          <li>
            <a href="/detailsLivres" onClick={toggleMenu}>
              Détails Livres
            </a>
          </li>
        </ul>
      </motion.nav>
    </>
  );
}
