"use client";

import { toast } from "react-toastify";

import { Workout } from "@/types/fitlog";

interface WorkoutActionsProps {
    workout: Workout;
}

const WorkoutActions = ({ workout }: WorkoutActionsProps) => {
    const handleAddToPlan = () => {
        toast.success(`${workout.name} added to today's plan.`);
    };

    const handleSave = () => {
        toast.success(`${workout.name} saved for later.`);
    };

    return (
        <div className="mt-7 flex flex-wrap gap-3">
            <button
                type="button"
                onClick={handleAddToPlan}
                className="rounded-full bg-[#ccff00] px-5 py-3 text-[15px] font-semibold text-black transition hover:bg-[#b9eb00]"
            >
                Add to today&apos;s plan
            </button>

            <button
                type="button"
                onClick={handleSave}
                className="rounded-full border border-[#777b83] px-5 py-3 text-[15px] font-semibold text-[#e5e7eb] transition hover:bg-[#191c22]"
            >
                Save for later
            </button>
        </div>
    );
};

export default WorkoutActions;