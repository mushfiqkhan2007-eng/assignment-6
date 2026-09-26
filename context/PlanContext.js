"use client";

import { createContext, useContext, useEffect, useState } from "react";

const PlanContext = createContext(null);

const PLAN_KEY = "fitlog-plan";
const SAVED_KEY = "fitlog-saved";
const PLAN_LIMIT = 5;

export function PlanProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    const storedPlan = localStorage.getItem(PLAN_KEY);
    const storedSaved = localStorage.getItem(SAVED_KEY);
    if (storedPlan) setPlan(JSON.parse(storedPlan));
    if (storedSaved) setSaved(JSON.parse(storedSaved));
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) localStorage.setItem(PLAN_KEY, JSON.stringify(plan));
  }, [plan, loaded]);

  useEffect(() => {
    if (loaded) localStorage.setItem(SAVED_KEY, JSON.stringify(saved));
  }, [saved, loaded]);

  function showToast(message) {
    setToastMessage(message);
    setTimeout(() => setToastMessage(""), 2500);
  }

  function addToPlan(workout) {
    if (plan.some((item) => item.id === workout.id)) {
      showToast("Already in today's plan");
      return;
    }
    if (plan.length >= PLAN_LIMIT) {
      showToast("Today's plan is full");
      return;
    }
    setPlan([...plan, { ...workout, done: false }]);
    showToast("Added to today's plan");
  }

  function removeFromPlan(id) {
    setPlan(plan.filter((item) => item.id !== id));
    showToast("Removed from today's plan");
  }

  function markAsDone(id) {
    setPlan(
      plan.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
    showToast("Marked as done");
  }

  function addToSaved(workout) {
    if (saved.some((item) => item.id === workout.id)) {
      showToast("Already saved");
      return;
    }
    setSaved([...saved, workout]);
    showToast("Saved for later");
  }

  function removeFromSaved(id) {
    setSaved(saved.filter((item) => item.id !== id));
    showToast("Removed from saved");
  }

  const value = {
    plan,
    saved,
    loaded,
    planLimit: PLAN_LIMIT,
    addToPlan,
    removeFromPlan,
    markAsDone,
    addToSaved,
    removeFromSaved,
    toastMessage,
    showToast
  };

  return (
    <PlanContext.Provider value={value}>{children}</PlanContext.Provider>
  );
}

export function usePlan() {
  return useContext(PlanContext);
}
