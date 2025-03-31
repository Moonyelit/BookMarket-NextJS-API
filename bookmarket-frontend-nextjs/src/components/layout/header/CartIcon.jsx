"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

// Composant icône du panier avec badge compteur (à brancher plus tard)

export default function CartIcon() {
  const cartItemCount = 0; // Remplace plus tard par ton vrai state (context / redux)

  return (
    <Button variant="ghost" size="icon" asChild>
      <Link href="/cart" className="relative text-[var(--color-yellow)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>

        {cartItemCount > 0 && (
          <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
            {cartItemCount}
          </span>
        )}

        <span className="sr-only">Voir le panier</span>
      </Link>
    </Button>
  );
}
