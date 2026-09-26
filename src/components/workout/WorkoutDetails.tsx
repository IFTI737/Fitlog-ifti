import Image from "next/image";

import { Workout } from "@/types/fitlog";

import WorkoutStats from "./WorkoutStats";

interface WorkoutDetailsProps {
    workout: Workout;
}

const WorkoutDetails = ({ workout }: WorkoutDetailsProps) => {
    return (
        <section className="mx-auto w-full max-w-[1200px] px-3 py-8 sm:px-4 md:px-6 lg:px-0">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
                <div className="relative aspect-[0.82] overflow-hidden rounded-2xl">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        sizes="(max-width: 1023px) 100vw, 50vw"
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="flex flex-col">
                    <h1 className="text-[40px] font-bold uppercase leading-none text-[#e5e7eb] sm:text-[44px] lg:text-[48px]">
                        {workout.name}
                    </h1>

                    <p className="mt-5 text-[17px] leading-7 text-[#c1c6cf]">
                        {workout.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                        {workout.muscleGroups.map((muscleGroup) => (
                            <span
                                key={muscleGroup}
                                className="rounded-full bg-[#ccff00] px-4 py-1.5 text-[14px] font-semibold text-black"
                            >
                                {muscleGroup}
                            </span>
                        ))}
                    </div>

                    <WorkoutStats workout={workout} />
                </div>
            </div>
        </section>
    );
};

export default WorkoutDetails;