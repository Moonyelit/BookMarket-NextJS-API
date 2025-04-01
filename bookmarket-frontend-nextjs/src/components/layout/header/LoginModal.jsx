"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function LoginModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Bouton pour ouvrir */}
      <span
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center cursor-pointer"
      >
        <i className="bx bx-user-circle text-[var(--color-yellow)] text-2xl"></i>
      </span>

      {/* Overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Formulaire qui slide du haut */}
            <motion.div
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -200, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed top-16 right-0 w-full max-w-sm bg-[var(--color-brown)] text-[var(--color-yellow)] p-4 rounded shadow-2xl z-50"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl">Connexion</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen(false)}
                  className="text-[var(--color-yellow)] hover:text-[var(--color-yellow)]"
                >
                  <i className="bx bx-x text-2xl"></i>
                </Button>
              </div>

              <form className="space-y-4">
                <div>
                  <label htmlFor="username" className="block text-sm mb-1">Nom d'utilisateur</label>
                  <input
                    type="text"
                    id="username"
                    className="w-full p-2 rounded bg-[var(--color-yellow)] text-[var(--color-brown)]"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm mb-1">Mot de passe</label>
                  <input
                    type="password"
                    id="password"
                    className="w-full p-2 rounded bg-[var(--color-yellow)] text-[var(--color-brown)]"
                  />
                </div>

                <Button type="submit" className="w-full bg-[var(--color-yellow)] text-[var(--color-brown)]">
                  Se connecter
                </Button>
              </form>

              <p className="mt-2 text-center text-xs underline cursor-pointer">
                Pas encore inscrit ? Inscrivez-vous
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
