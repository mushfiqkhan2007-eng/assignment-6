import Link from "next/link";
import Image from "next/image";
import { Clock, Flame, Star } from "lucide-react";

export default function WorkoutCard({ workout }) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="bg-surface rounded-2xl overflow-hidden border border-white/10 hover:border-accent/60 transition-colors flex flex-col"
    >
      <div className="relative w-full aspect-[4/3] bg-surface2">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 flex flex-col gap-3">
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((tag) => (
            <span
              key={tag}
              className="pill bg-white/10 text-[10px] font-body uppercase tracking-wide px-2 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-display uppercase text-lg leading-tight">
          {workout.name}
        </h3>
        <p className="font-body text-xs text-gray-400">{workout.equipment}</p>
        <div className="flex items-center gap-4 text-xs font-body text-gray-300 pt-1">
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
    </Link>
  );
}
