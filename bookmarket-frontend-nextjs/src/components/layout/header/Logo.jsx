"use client";

import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      {/* Logo icône */}
      <Image 
        src="/images/Mobile/Logo.png" 
        alt="Logo une main tenant un livre formant un coeur"
        width={50}
        height={50}
        quality={100}
        priority 
        className="object-contain"
      />

      {/* Logo texte */}
      <Image 
        src="/images/Mobile/Brand Logo.png" 
        alt="BookMarket"
        width={150}
        height={50}
        className="object-contain"
      />
    </Link>
  );
}
