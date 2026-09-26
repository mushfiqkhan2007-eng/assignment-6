"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import WorkoutCard from "@/components/WorkoutCard";
import SortDropdown from "@/components/SortDropdown";
import Loader from "@/components/Loader";

export default function HomePage() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("duration");

  useEffect(() => {
    fetch("https://api.api-store.workers.dev/api/fitlog")
      .then((res) => res.json())
      .then((data) => {
        setWorkouts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const sortedWorkouts = [...workouts].sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "caloriesBurned") return a.caloriesBurned - b.caloriesBurned;
    return a.duration - b.duration;
  });

  return (
    <div>
      <Hero />
      <section id="library" className="max-w-6xl mx-auto px-5 py-14">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
          <div>
            <h2 className="font-display uppercase text-3xl mb-2">
              The Library
            </h2>
            <p className="font-body text-gray-400 text-sm">
              Twelve lifts covering every major muscle group.
            </p>
          </div>
          <SortDropdown value={sortBy} onChange={setSortBy} />
        </div>

        {loading ? (
          <Loader label="Loading workouts…" />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedWorkouts.map((workout) => (
              <WorkoutCard key={workout.id} workout={workout} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
