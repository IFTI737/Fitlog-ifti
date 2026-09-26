import { notFound } from "next/navigation";

import { getWorkoutById } from "@/lib/fitlog";
import WorkoutDetails from "@/components/workout/WorkoutDetails";
import WorkoutInstructions from "@/components/workout/WorkoutInstructions";
import WorkoutActions from "@/components/workout/WorkoutActions";

interface WorkoutPageProps {
    params: Promise<{
        id: string;
    }>;
}

const WorkoutPage = async ({ params }: WorkoutPageProps) => {
    const { id } = await params;

    const workout = await getWorkoutById(id);

    if (!workout) {
        notFound();
    }

    return (
        <main>
            <WorkoutDetails workout={workout} />

            <div className="mx-auto w-full max-w-[1200px] px-3 pb-10 sm:px-4 md:px-6 lg:px-0">
                <div className="lg:ml-[calc(50%+16px)]">
                    <WorkoutInstructions workout={workout} />

                    <WorkoutActions workout={workout} />
                </div>
            </div>
        </main>
    );
};

export default WorkoutPage;