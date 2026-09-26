"use client";

import { toast } from "react-toastify";

import { Workout } from "@/types/fitlog";
import { useFitLog } from "@/context/FitLogContext";

interface WorkoutActionsProps {
    workout: Workout;
}

const WorkoutActions = ({ workout }: WorkoutActionsProps) => {
    const {
        plan,
        saved,
        addToPlan,
        addToSaved,
    } = useFitLog();

    const handleAddToPlan = () => {
        if (plan.length >= 5) {
            toast.error("Today's plan can have a maximum of 5 exercises.");
            return;
        }

        const alreadyExists = plan.some(
            (item) => item.id === workout.id
        );

        if (alreadyExists) {
            toast.info(`${workout.name} is already in today's plan.`);
            return;
        }

        addToPlan(workout);

        toast.success(`${workout.name} added to today's plan.`);
    };

    const handleSave = () => {
        const alreadySaved = saved.some(
            (item) => item.id === workout.id
        );

        if (alreadySaved) {
            toast.info(`${workout.name} is already saved.`);
            return;
        }

        addToSaved(workout);

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