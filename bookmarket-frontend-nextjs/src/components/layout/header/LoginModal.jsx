"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function LoginModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Icône déclencheuse */}
      <span
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center cursor-pointer"
      >
        <i className="bx bx-user-circle text-yellow text-2xl"></i>
      </span>

      {/* La modale */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-[var(--color-brown)] text-[var(--color-yellow)] border-none max-w-sm rounded shadow-2xl transition-transform duration-500">
          <DialogHeader className="flex justify-between items-center mb-4">
            <DialogTitle className="text-xl">Connexion</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(false)}
              className="text-[var(--color-yellow)] hover:text-[var(--color-yellow)]"
            >
              <i className="bx bx-x text-2xl"></i>
            </Button>
          </DialogHeader>

          <form className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm mb-1">Nom d'utilisateur</label>
              <input
                type="text"
                id="username"
                className="w-full p-2 rounded bg-[var(--color-yellow)] text-[var(--color-brown)]"
                placeholder="JeanDupont"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm mb-1">Mot de passe</label>
              <input
                type="password"
                id="password"
                className="w-full p-2 rounded bg-[var(--color-yellow)] text-[var(--color-brown)]"
                placeholder="••••••••"
              />
            </div>

            <Button type="submit" className="w-full bg-[var(--color-yellow)] text-[var(--color-brown)]">
              Se connecter
            </Button>
          </form>

          <p className="mt-2 text-center text-xs underline cursor-pointer">
            Pas encore inscrit ? Inscrivez-vous
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
}
