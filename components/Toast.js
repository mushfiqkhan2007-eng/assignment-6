"use client";

import { usePlan } from "@/context/PlanContext";

export default function Toast() {
  const { toastMessage } = usePlan();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-surface2 border border-white/10 text-white text-sm font-body px-5 py-3 rounded-full shadow-lg">
        {toastMessage}
      </div>
    </div>
  );
}
