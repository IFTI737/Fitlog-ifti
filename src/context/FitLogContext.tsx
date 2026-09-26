"use client";

import {
    createContext,
    useContext,
    useState,
} from "react";

import { Workout } from "@/types/fitlog";

interface FitLogContextType {
    plan: Workout[];
    saved: Workout[];
    completedIds: number[];

    addToPlan: (workout: Workout) => void;
    removeFromPlan: (id: number) => void;

    addToSaved: (workout: Workout) => void;
    removeFromSaved: (id: number) => void;

    markAsDone: (id: number) => void;
}

const FitLogContext = createContext<FitLogContextType | undefined>(
    undefined
);

interface FitLogProviderProps {
    children: React.ReactNode;
}

export const FitLogProvider = ({
    children,
}: FitLogProviderProps) => {
    const [plan, setPlan] = useState<Workout[]>([]);
    const [saved, setSaved] = useState<Workout[]>([]);
    const [completedIds, setCompletedIds] = useState<number[]>([]);

    const addToPlan = (workout: Workout) => {
        if (plan.length >= 5) {
            return;
        }

        const alreadyExists = plan.some(
            (item) => item.id === workout.id
        );

        if (alreadyExists) {
            return;
        }

        setPlan((previousPlan) => [
            ...previousPlan,
            workout,
        ]);
    };

    const removeFromPlan = (id: number) => {
        setPlan((previousPlan) =>
            previousPlan.filter((workout) => workout.id !== id)
        );

        setCompletedIds((previousIds) =>
            previousIds.filter((completedId) => completedId !== id)
        );
    };

    const addToSaved = (workout: Workout) => {
        const alreadyExists = saved.some(
            (item) => item.id === workout.id
        );

        if (alreadyExists) {
            return;
        }

        setSaved((previousSaved) => [
            ...previousSaved,
            workout,
        ]);
    };

    const removeFromSaved = (id: number) => {
        setSaved((previousSaved) =>
            previousSaved.filter((workout) => workout.id !== id)
        );
    };

    const markAsDone = (id: number) => {
        setCompletedIds((previousIds) => {
            if (previousIds.includes(id)) {
                return previousIds;
            }

            return [...previousIds, id];
        });
    };

    return (
        <FitLogContext.Provider
            value={{
                plan,
                saved,
                completedIds,
                addToPlan,
                removeFromPlan,
                addToSaved,
                removeFromSaved,
                markAsDone,
            }}
        >
            {children}
        </FitLogContext.Provider>
    );
};

export const useFitLog = () => {
    const context = useContext(FitLogContext);

    if (!context) {
        throw new Error(
            "useFitLog must be used inside FitLogProvider"
        );
    }

    return context;
};