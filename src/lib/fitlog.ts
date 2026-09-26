import { Workout } from "@/types/fitlog";

const baseUrl = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

export const getWorkouts = async (): Promise<Workout[]> => {
    try {
        const response = await fetch(`${baseUrl}`);

        if (!response.ok) {
            throw new Error("Failed to fetch workouts");
        }

        const data: Workout[] = await response.json();

        return data;
    } catch (error) {
        console.error("Error fetching workouts:", error);

        return [];
    }
};

export const getWorkoutById = async (id: string): Promise<Workout | null> => {
    try {
        const response = await fetch(`${baseUrl}/${id}`);

        if (!response.ok) {
            throw new Error("Failed to fetch workout");
        }

        const data: Workout = await response.json();

        return data;
    } catch (error) {
        console.error("Error fetching workout:", error);

        return null;
    }
};