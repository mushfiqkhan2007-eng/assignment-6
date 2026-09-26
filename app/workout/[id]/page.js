"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Plus, Bookmark } from "lucide-react";
import { usePlan } from "@/context/PlanContext";
import Loader from "@/components/Loader";

const specRows = [
  { label: "EQUIPMENT", key: "equipment" },
  { label: "DIFFICULTY", key: "difficulty" },
  { label: "SETS", key: "sets" },
  { label: "REPS", key: "reps" },
  { label: "DURATION", key: "duration", suffix: " min" },
  { label: "CALORIES", key: "caloriesBurned", suffix: " kcal" },
  { label: "RATING", key: "rating" }
];

export default function WorkoutDetailPage() {
  const { id } = useParams();
  const { plan, planLimit, addToPlan, addToSaved } = usePlan();
  const [workout, setWorkout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.api-store.workers.dev/api/fitlog/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setWorkout(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <Loader label="Loading workout…" />;

  if (!workout) {
    return (
      <div className="max-w-xl mx-auto px-5 py-24 text-center">
        <h1 className="font-display uppercase text-2xl mb-4">
          Workout not found
        </h1>
        <Link href="/" className="text-accent font-body underline">
          Go back to workouts
        </Link>
      </div>
    );
  }

  const planIsFull = plan.length >= planLimit;

  return (
    <div className="max-w-6xl mx-auto px-5 py-12 grid md:grid-cols-2 gap-10">
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-surface2">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />
      </div>

      <div>
        <h1 className="font-display uppercase text-3xl mb-3">
          {workout.name}
        </h1>
        <p className="font-body text-gray-400 mb-4">{workout.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {workout.muscleGroups.map((tag) => (
            <span
              key={tag}
              className="pill bg-white/10 text-xs font-body uppercase tracking-wide px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="bg-surface border border-white/10 rounded-2xl divide-y divide-white/10 mb-6">
          {specRows.map((row) => (
            <div
              key={row.label}
              className="flex items-center justify-between px-4 py-3 font-body text-sm"
            >
              <span className="text-gray-400">{row.label}</span>
              <span className="text-white">
                {workout[row.key]}
                {row.suffix || ""}
              </span>
            </div>
          ))}
        </div>

        <h2 className="font-display uppercase text-lg mb-3">Instructions</h2>
        <ol className="list-decimal list-inside font-body text-sm text-gray-300 space-y-2 mb-8">
          {workout.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => addToPlan(workout)}
            disabled={planIsFull}
            className="inline-flex items-center gap-2 pill bg-accent text-black font-body font-semibold px-6 py-3 disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
          >
            <Plus size={18} />
            Add to today&apos;s plan
          </button>
          <button
            onClick={() => addToSaved(workout)}
            className="inline-flex items-center gap-2 pill border border-white/30 text-white font-body font-semibold px-6 py-3 hover:border-accent transition-colors"
          >
            <Bookmark size={18} />
            Save for later
          </button>
        </div>
      </div>
    </div>
  );
}
