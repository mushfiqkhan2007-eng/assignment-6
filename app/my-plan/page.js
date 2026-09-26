"use client";

import { useState } from "react";
import Link from "next/link";
import { usePlan } from "@/context/PlanContext";
import PlanItemCard from "@/components/PlanItemCard";
import Loader from "@/components/Loader";

export default function MyPlanPage() {
  const { plan, saved, loaded, markAsDone, removeFromPlan, removeFromSaved } =
    usePlan();
  const [activeTab, setActiveTab] = useState("plan");

  const totalMinutes = plan.reduce((sum, item) => sum + item.duration, 0);
  const totalCalories = plan.reduce(
    (sum, item) => sum + item.caloriesBurned,
    0
  );

  const list = activeTab === "plan" ? plan : saved;

  if (!loaded) return <Loader label="Loading workouts…" />;

  return (
    <div className="max-w-4xl mx-auto px-5 py-12">
      <h1 className="font-display uppercase text-3xl mb-2">My Plan</h1>
      <p className="font-body text-gray-400 text-sm mb-8">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="grid grid-cols-3 gap-4 mb-10">
        <div className="bg-surface border border-white/10 rounded-2xl px-4 py-5 text-center">
          <p className="font-display text-2xl text-accent">{plan.length}</p>
          <p className="font-body text-xs text-gray-400 mt-1">Exercises</p>
        </div>
        <div className="bg-surface border border-white/10 rounded-2xl px-4 py-5 text-center">
          <p className="font-display text-2xl text-accent">{totalMinutes}</p>
          <p className="font-body text-xs text-gray-400 mt-1">Minutes</p>
        </div>
        <div className="bg-surface border border-white/10 rounded-2xl px-4 py-5 text-center">
          <p className="font-display text-2xl text-accent">
            {totalCalories}
          </p>
          <p className="font-body text-xs text-gray-400 mt-1">Calories</p>
        </div>
      </div>

      <div className="flex gap-6 border-b border-white/10 mb-8">
        <button
          onClick={() => setActiveTab("plan")}
          className={
            "font-body text-sm uppercase tracking-wide pb-3 border-b-2 -mb-px " +
            (activeTab === "plan"
              ? "text-accent border-accent"
              : "text-gray-400 border-transparent")
          }
        >
          Today&apos;s Plan
        </button>
        <button
          onClick={() => setActiveTab("saved")}
          className={
            "font-body text-sm uppercase tracking-wide pb-3 border-b-2 -mb-px " +
            (activeTab === "saved"
              ? "text-accent border-accent"
              : "text-gray-400 border-transparent")
          }
        >
          Saved
        </button>
      </div>

      {list.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="font-display uppercase text-2xl mb-3">
            Nothing Here Yet
          </h2>
          <p className="font-body text-gray-400 text-sm mb-6">
            Browse the library and add a lift to get today moving.
          </p>
          <Link
            href="/"
            className="inline-block pill bg-accent text-black font-body font-semibold px-6 py-3 hover:opacity-90 transition-opacity"
          >
            Go to workouts
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {list.map((workout) => (
            <PlanItemCard
              key={workout.id}
              workout={workout}
              showMarkAsDone={activeTab === "plan"}
              onMarkAsDone={() => markAsDone(workout.id)}
              onRemove={() =>
                activeTab === "plan"
                  ? removeFromPlan(workout.id)
                  : removeFromSaved(workout.id)
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}
