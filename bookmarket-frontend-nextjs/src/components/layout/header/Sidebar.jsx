"use client";

import Link from "next/link";

export default function Sidebar({ navigation, closeMenu }) {
  return (
    <div className="mt-6 flow-root">
      <div className="divide-y divide-muted">

        {/* Liens principaux */}
        <div className="space-y-2 py-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              className="block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Authentification */}
        <div className="py-6 space-y-2">
          <Link
            href="/login"
            onClick={closeMenu}
            className="block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
          >
            Se connecter
          </Link>
          <Link
            href="/register"
            onClick={closeMenu}
            className="block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
          >
            S'inscrire
          </Link>
        </div>

      </div>
    </div>
  );
}
