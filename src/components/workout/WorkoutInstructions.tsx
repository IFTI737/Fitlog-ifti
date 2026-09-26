import { Workout } from "@/types/fitlog";

interface WorkoutInstructionsProps {
    workout: Workout;
}

const WorkoutInstructions = ({
    workout,
}: WorkoutInstructionsProps) => {
    return (
        <section className="mt-8">
            <h2 className="text-[28px] font-bold uppercase text-[#e5e7eb]">
                Instructions
            </h2>

            <ol className="mt-5 space-y-4">
                {workout.instructions.map((instruction, index) => (
                    <li
                        key={index}
                        className="text-[16px] leading-6 text-[#e5e7eb]"
                    >
                        <span className="mr-2 font-semibold">
                            {index + 1}.
                        </span>
                        {instruction}
                    </li>
                ))}
            </ol>
        </section>
    );
};

export default WorkoutInstructions;