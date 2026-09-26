"use client";

import { useMemo, useState } from "react";

import EmptyPlan from "@/components/my-plan/EmptyPlan";
import PlanSummary from "@/components/my-plan/PlanSummary";
import PlanTabs from "@/components/my-plan/PlanTabs";
import PlanWorkoutCard from "@/components/my-plan/PlanWorkoutCard";
import SortDropdown from "@/components/my-plan/SortDropdown";
import { useFitLog } from "@/context/FitLogContext";

type Tab = "plan" | "saved";
type SortBy = "duration" | "calories" | "rating";

const MyPlan = () => {
  const { plan, saved } = useFitLog();

  const [activeTab, setActiveTab] = useState<Tab>("plan");

  const [sortBy, setSortBy] = useState<SortBy>("duration");

  const currentWorkouts = activeTab === "plan" ? plan : saved;

  const sortedWorkouts = useMemo(() => {
    return [...currentWorkouts].sort((a, b) => {
      if (sortBy === "duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "calories") {
        return a.caloriesBurned - b.caloriesBurned;
      }

      return b.rating - a.rating;
    });
  }, [currentWorkouts, sortBy]);

  return (
    <main className="mx-auto w-full max-w-[1200px] px-3 py-8 sm:px-4 md:px-6 lg:px-0">
      {/* Page Header */}
      <section>
        <h1 className="text-[40px] font-bold uppercase leading-none text-[#e5e7eb] sm:text-[48px]">
          My Plan
        </h1>

        <p className="mt-3 text-[16px] leading-7 text-[#aeb4c0] sm:text-[17px]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </section>

      {/* Summary */}
      <PlanSummary activeTab={activeTab} />

      {/* Tabs + Sort */}
      <section className="mt-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <PlanTabs activeTab={activeTab} onChange={setActiveTab} />

        <SortDropdown sortBy={sortBy} onChange={setSortBy} />
      </section>

      {/* Workout List */}
      <section className="mt-6">
        {sortedWorkouts.length === 0 ? (
          <EmptyPlan type={activeTab} />
        ) : (
          <div className="space-y-4">
            {sortedWorkouts.map((workout) => (
              <PlanWorkoutCard
                key={workout.id}
                workout={workout}
                type={activeTab}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default MyPlan;
