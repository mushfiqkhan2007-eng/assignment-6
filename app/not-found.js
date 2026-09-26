import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-5 py-32 text-center">
      <p className="font-display text-accent text-5xl mb-4">404</p>
      <h1 className="font-display uppercase text-2xl mb-3">Page not found</h1>
      <p className="font-body text-gray-400 text-sm mb-8">
        The page you&apos;re looking for doesn&apos;t exist or was moved.
      </p>
      <Link
        href="/"
        className="inline-block pill bg-accent text-black font-body font-semibold px-6 py-3 hover:opacity-90 transition-opacity"
      >
        Go to workouts
      </Link>
    </div>
  );
}
