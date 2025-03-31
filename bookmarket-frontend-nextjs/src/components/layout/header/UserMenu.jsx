"use client";

import Link from "next/link";
import { useAuth } from "@/context/auth-context";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function UserMenu() {
  const { user, isAuthenticated, logout } = useAuth();

  // Génère les initiales à afficher dans l'avatar
  const getUserInitials = () => {
    if (!user) return "UT";
    if (user.firstName && user.lastName) return `${user.firstName[0]}${user.lastName[0]}`;
    if (user.email) return user.email.substring(0, 2).toUpperCase();
    return "UT";
  };

  // Version NON connectée
  if (!isAuthenticated) {
    return (
      <>
        <Button variant="ghost" asChild>
          <Link href="/login">Connexion</Link>
        </Button>
        <Button asChild>
          <Link href="/register">Inscription</Link>
        </Button>
      </>
    );
  }

  // Version connectée
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar>
            <AvatarImage src={user?.avatar} alt={user?.name || "Utilisateur"} />
            <AvatarFallback>{getUserInitials()}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="bg-background border shadow-md">
        <DropdownMenuItem asChild>
          <Link href="/profile">Mon profil</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/orders">Mes commandes</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/cart">Mon panier</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={logout} className="text-destructive">
          Se déconnecter
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
