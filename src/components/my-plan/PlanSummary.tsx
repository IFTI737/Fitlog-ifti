"use client";

import { useFitLog } from "@/context/FitLogContext";

interface PlanSummaryProps {
    activeTab: "plan" | "saved";
}

const PlanSummary = ({ activeTab }: PlanSummaryProps) => {
    const { plan, saved } = useFitLog();

    const currentWorkouts =
        activeTab === "plan"
            ? plan
            : saved;

    const totalMinutes = currentWorkouts.reduce(
        (total, workout) => {
            return total + workout.duration;
        },
        0
    );

    const totalCalories = currentWorkouts.reduce(
        (total, workout) => {
            return total + workout.caloriesBurned;
        },
        0
    );

    return (
        <div className="mt-8 grid overflow-hidden rounded-2xl border border-[#292d34] bg-[#191c22] md:grid-cols-3">
            <div className="border-b border-[#292d34] px-6 py-5 md:border-b-0 md:border-r">
                <p className="text-sm text-[#9da5b2]">
                    Exercises
                </p>

                <p className="mt-1 text-[38px] font-bold text-[#ccff00]">
                    {currentWorkouts.length}
                </p>
            </div>

            <div className="border-b border-[#292d34] px-6 py-5 md:border-b-0 md:border-r">
                <p className="text-sm text-[#9da5b2]">
                    Minutes
                </p>

                <p className="mt-1 text-[38px] font-bold text-[#e5e7eb]">
                    {totalMinutes}
                </p>
            </div>

            <div className="px-6 py-5">
                <p className="text-sm text-[#9da5b2]">
                    Calories
                </p>

                <p className="mt-1 text-[38px] font-bold text-[#e5e7eb]">
                    {totalCalories}
                </p>
            </div>
        </div>
    );
};

export default PlanSummary;