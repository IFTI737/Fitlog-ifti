"use client";

import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";

import { useFitLog } from "@/context/FitLogContext";
import { Workout } from "@/types/fitlog";

interface PlanWorkoutCardProps {
    workout: Workout;
    type: "plan" | "saved";
}

const PlanWorkoutCard = ({
    workout,
    type,
}: PlanWorkoutCardProps) => {
    const {
        removeFromPlan,
        removeFromSaved,
        markAsDone,
    } = useFitLog();

    const handleRemove = () => {
        if (type === "plan") {
            removeFromPlan(workout.id);

            toast.info(
                `${workout.name} removed from today's plan.`
            );

            return;
        }

        removeFromSaved(workout.id);

        toast.info(
            `${workout.name} removed from saved workouts.`
        );
    };

    const handleMarkAsDone = () => {
        markAsDone(workout.id);

        toast.success(
            `${workout.name} marked as done.`
        );
    };

    return (
        <article className="rounded-2xl border border-[#292d34] bg-[#191c22] p-4 sm:p-5">
            <div className="flex flex-col gap-5 md:flex-row md:items-center">
                {/* Image */}
                <div className="relative h-[180px] w-full shrink-0 overflow-hidden rounded-xl sm:h-[210px] md:h-[104px] md:w-[155px]">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        sizes="(max-width: 767px) 100vw, 155px"
                        className="object-cover"
                    />
                </div>

                {/* Workout Information */}
                <div className="min-w-0 flex-1">
                    <h2 className="text-[22px] font-bold uppercase leading-tight text-[#e5e7eb]">
                        {workout.name}
                    </h2>

                    <p className="mt-1 text-[16px] text-[#aeb4c0]">
                        {workout.equipment}
                    </p>

                    <div className="mt-3 flex flex-wrap items-center gap-4 text-[15px] text-[#e5e7eb]">
                        <span>
                            <span className="text-[#ccff00]">
                                ◷
                            </span>{" "}
                            {workout.duration} min
                        </span>

                        <span>
                            <span className="text-[#ccff00]">
                                ♨
                            </span>{" "}
                            {workout.caloriesBurned} kcal
                        </span>

                        <span>
                            <span className="text-[#ccff00]">
                                ☆
                            </span>{" "}
                            {workout.rating}
                        </span>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex shrink-0 flex-wrap items-center gap-3 md:justify-end">
                    <Link
                        href={`/exercise/${workout.id}`}
                        className="rounded-full border border-[#777b83] px-4 py-2.5 text-[14px] font-semibold text-[#e5e7eb] transition hover:bg-[#101216]"
                    >
                        View Details
                    </Link>

                    {type === "plan" && (
                        <button
                            type="button"
                            onClick={handleMarkAsDone}
                            className="rounded-full bg-[#ccff00] px-4 py-2.5 text-[14px] font-semibold text-black transition hover:bg-[#b9eb00]"
                        >
                            ✓ Mark as Done
                        </button>
                    )}

                    <button
                        type="button"
                        onClick={handleRemove}
                        className="flex h-10 w-10 items-center justify-center rounded-full text-[22px] text-[#dfe1e6] transition hover:bg-[#292d34]"
                        aria-label={`Remove ${workout.name}`}
                    >
                        ×
                    </button>
                </div>
            </div>
        </article>
    );
};

export default PlanWorkoutCard;