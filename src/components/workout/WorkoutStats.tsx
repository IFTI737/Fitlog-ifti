import { Workout } from "@/types/fitlog";

interface WorkoutStatsProps {
    workout: Workout;
}

const WorkoutStats = ({ workout }: WorkoutStatsProps) => {
    return (
        <div className="mt-6 overflow-hidden rounded-2xl border border-[#292d34] bg-[#191c22]">
            {/* Equipment */}
            <div className="grid grid-cols-2 border-b border-[#292d34]">
                <p className="px-4 py-4 text-sm font-semibold uppercase text-[#e5e7eb]">
                    Equipment
                </p>

                <p className="px-4 py-4 text-[16px] text-[#e5e7eb]">
                    {workout.equipment}
                </p>
            </div>

            {/* Difficulty */}
            <div className="grid grid-cols-2 border-b border-[#292d34]">
                <p className="px-4 py-4 text-sm font-semibold uppercase text-[#e5e7eb]">
                    Difficulty
                </p>

                <p className="px-4 py-4 text-[16px] text-[#e5e7eb]">
                    {workout.difficulty}
                </p>
            </div>

            {/* Sets */}
            <div className="grid grid-cols-2 border-b border-[#292d34]">
                <p className="px-4 py-4 text-sm font-semibold uppercase text-[#e5e7eb]">
                    Sets
                </p>

                <p className="px-4 py-4 text-[16px] text-[#e5e7eb]">
                    {workout.sets}
                </p>
            </div>

            {/* Reps */}
            <div className="grid grid-cols-2 border-b border-[#292d34]">
                <p className="px-4 py-4 text-sm font-semibold uppercase text-[#e5e7eb]">
                    Reps
                </p>

                <p className="px-4 py-4 text-[16px] text-[#e5e7eb]">
                    {workout.reps}
                </p>
            </div>

            {/* Duration */}
            <div className="grid grid-cols-2 border-b border-[#292d34]">
                <p className="px-4 py-4 text-sm font-semibold uppercase text-[#e5e7eb]">
                    Duration
                </p>

                <p className="px-4 py-4 text-[16px] text-[#e5e7eb]">
                    {workout.duration} min
                </p>
            </div>

            {/* Calories */}
            <div className="grid grid-cols-2 border-b border-[#292d34]">
                <p className="px-4 py-4 text-sm font-semibold uppercase text-[#e5e7eb]">
                    Calories
                </p>

                <p className="px-4 py-4 text-[16px] text-[#e5e7eb]">
                    {workout.caloriesBurned} kcal
                </p>
            </div>

            {/* Rating */}
            <div className="grid grid-cols-2">
                <p className="px-4 py-4 text-sm font-semibold uppercase text-[#e5e7eb]">
                    Rating
                </p>

                <p className="px-4 py-4 text-[16px] text-[#e5e7eb]">
                    {workout.rating}
                </p>
            </div>
        </div>
    );
};

export default WorkoutStats;