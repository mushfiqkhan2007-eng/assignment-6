"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePlan } from "@/context/PlanContext";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = usePlan();

  const links = [
    { href: "/", label: "Workout" },
    { href: "/my-plan", label: "My Plan" }
  ];

  return (
    <header className="sticky top-0 z-40 bg-base/95 backdrop-blur border-b border-white/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="FitLog logo" width={28} height={28} />
          <span className="font-display text-lg tracking-wide">FITLOG</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  "font-body text-sm uppercase tracking-wide pb-1 border-b-2 transition-colors " +
                  (active
                    ? "text-accent border-accent"
                    : "text-gray-300 border-transparent hover:text-white")
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/my-plan"
            className="pill bg-accent text-black text-xs font-body font-semibold px-3 py-1"
          >
            Plan {plan.length}
          </Link>
          <Link
            href="/my-plan"
            className="pill border border-white/30 text-white text-xs font-body font-semibold px-3 py-1"
          >
            Saved {saved.length}
          </Link>
        </div>
      </nav>
    </header>
  );
}
