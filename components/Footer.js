import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-6">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="FitLog logo" width={22} height={22} />
          <span className="font-display text-base tracking-wide">FITLOG</span>
        </div>
        <p className="font-body text-xs text-gray-400 text-center">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}
