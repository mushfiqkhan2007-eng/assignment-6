import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Star, Check, X } from "lucide-react";

export default function PlanItemCard({
  workout,
  showMarkAsDone,
  onMarkAsDone,
  onRemove
}) {
  return (
    <div className="bg-surface border border-white/10 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center gap-4">
      <div className="relative w-full sm:w-24 h-24 rounded-xl overflow-hidden bg-surface2 flex-shrink-0">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex-1">
        <h3
          className={
            "font-display uppercase text-lg mb-1 " +
            (workout.done ? "line-through text-gray-500" : "")
          }
        >
          {workout.name}
        </h3>
        <p className="font-body text-xs text-gray-400 mb-2">
          {workout.equipment}
        </p>
        <div className="flex items-center gap-4 text-xs font-body text-gray-300">
          <span className="flex items-center gap-1">
            <Clock size={14} className="text-accent" />
            {workout.duration} min
          </span>
          <span className="flex items-center gap-1">
            <Flame size={14} className="text-accent" />
            {workout.caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1">
            <Star size={14} className="text-accent" />
            {workout.rating}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Link
          href={`/workout/${workout.id}`}
          className="pill border border-white/30 text-white font-body text-sm px-4 py-2 hover:border-accent transition-colors"
        >
          View Details
        </Link>
        {showMarkAsDone && (
          <button
            onClick={onMarkAsDone}
            className="inline-flex items-center gap-1 pill bg-accent text-black font-body text-sm font-semibold px-4 py-2 hover:opacity-90 transition-opacity"
          >
            <Check size={16} />
            Mark as Done
          </button>
        )}
        <button
          onClick={onRemove}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Remove"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}
