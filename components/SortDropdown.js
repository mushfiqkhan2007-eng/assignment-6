"use client";

import { ChevronDown } from "lucide-react";

export default function SortDropdown({ value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-body text-sm text-gray-300">Sort By</span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="appearance-none bg-transparent border border-white/30 rounded-full pl-4 pr-9 py-2 font-body text-sm text-white focus:outline-none focus:border-accent"
        >
          <option className="bg-surface" value="duration">
            Duration
          </option>
          <option className="bg-surface" value="caloriesBurned">
            Calories
          </option>
          <option className="bg-surface" value="rating">
            Rating
          </option>
        </select>
        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-300"
        />
      </div>
    </div>
  );
}
