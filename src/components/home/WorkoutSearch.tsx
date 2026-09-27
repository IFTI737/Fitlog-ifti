"use client";

import { useState } from "react";

import { Workout } from "@/types/fitlog";
import WorkoutCard from "./WorkoutCard";

interface WorkoutSearchProps {
    workouts: Workout[];
}

const WorkoutSearch = ({ workouts }: WorkoutSearchProps) => {
    const [search, setSearch] = useState("");

    const filteredWorkouts = workouts.filter((workout) => {
        const searchValue = search.toLowerCase().trim();

        if (!searchValue) {
            return true;
        }

        return (
            workout.name.toLowerCase().includes(searchValue) ||
            workout.equipment.toLowerCase().includes(searchValue) ||
            workout.muscleGroups.some((muscle) =>
                muscle.toLowerCase().includes(searchValue)
            )
        );
    });

    return (
        <>
            <div className="mb-7">
                <input
                    type="text"
                    value={search}
                    onChange={(event) =>
                        setSearch(event.target.value)
                    }
                    placeholder="Search workouts..."
                    className="h-12 w-full rounded-2xl border border-[#3b3f47] bg-[#191c22] px-5 text-[16px] text-[#e5e7eb] outline-none transition placeholder:text-[#777d88] focus:border-[#ccff00]"
                />
            </div>

            {filteredWorkouts.length === 0 ? (
                <div className="flex min-h-[220px] items-center justify-center rounded-2xl border border-[#292d34] bg-[#191c22] px-6 text-center">
                    <div>
                        <h3 className="text-2xl font-bold uppercase text-[#e5e7eb]">
                            No Workouts Found
                        </h3>

                        <p className="mt-2 text-[#aeb4c0]">
                            Try searching for another workout, muscle group, or equipment.
                        </p>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredWorkouts.map((workout) => (
                        <WorkoutCard
                            key={workout.id}
                            workout={workout}
                        />
                    ))}
                </div>
            )}
        </>
    );
};

export default WorkoutSearch;