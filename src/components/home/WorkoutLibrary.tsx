import { getWorkouts } from "@/lib/fitlog";
import WorkoutCard from "./WorkoutCard";

const WorkoutLibrary = async () => {
    const workouts = await getWorkouts();

    return (
        <section
            id="library"
            className="mx-auto w-full max-w-[1200px] px-3 py-8 sm:px-4 md:px-6 lg:px-0"
        >
            {/* Heading */}
            <div className="mb-7">
                <p className="text-sm font-semibold uppercase text-[#ccff00]">
                    Workout Library
                </p>

                <h2 className="mt-2 text-[40px] font-bold uppercase leading-none text-[#e5e7eb]">
                    The Library
                </h2>

                <p className="mt-3 text-[17px] text-[#aeb4c0]">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>

            {/* Workout Cards */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {workouts.map((workout) => (
                    <WorkoutCard
                        key={workout.id}
                        workout={workout}
                    />
                ))}
            </div>
        </section>
    );
};

export default WorkoutLibrary;