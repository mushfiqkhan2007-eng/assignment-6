import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-5 pt-14 pb-10 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <p className="font-body text-accent text-xs tracking-[0.2em] mb-3">
          WORKOUT LIBRARY
        </p>
        <h1 className="font-display uppercase text-4xl sm:text-5xl leading-tight mb-5">
          Train With Intent. Log Every Set.
        </h1>
        <p className="font-body text-gray-400 mb-8 max-w-md">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
          into today&apos;s plan, and watch the week&apos;s work add up.
        </p>
        <a
          href="#library"
          className="inline-flex items-center gap-2 pill bg-accent text-black font-body font-semibold px-6 py-3 hover:opacity-90 transition-opacity"
        >
          Browse Workouts
          <ArrowRight size={18} />
        </a>
      </div>
      <div className="flex justify-center">
        <Image
          src="/banner.png"
          alt="FitLog hero"
          width={420}
          height={420}
          priority
          className="w-full max-w-sm h-auto"
        />
      </div>
    </section>
  );
}
