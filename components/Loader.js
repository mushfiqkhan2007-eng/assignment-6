export default function Loader({ label }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-24">
      <div className="w-10 h-10 rounded-full border-4 border-white/10 border-t-accent animate-spin" />
      <p className="font-body text-sm text-gray-400">{label}</p>
    </div>
  );
}
