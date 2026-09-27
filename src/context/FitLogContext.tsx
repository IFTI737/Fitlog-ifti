"use client";

import {
    createContext,
    useContext,
    useSyncExternalStore,
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

const PLAN_KEY = "fitlog-plan";
const SAVED_KEY = "fitlog-saved";
const COMPLETED_KEY = "fitlog-completed";

const listeners = new Map<string, Set<() => void>>();

const subscribe = (
    key: string,
    callback: () => void
) => {
    if (!listeners.has(key)) {
        listeners.set(key, new Set());
    }

    listeners.get(key)?.add(callback);

    const handleStorage = (event: StorageEvent) => {
        if (event.key === key) {
            callback();
        }
    };

    window.addEventListener("storage", handleStorage);

    return () => {
        listeners.get(key)?.delete(callback);
        window.removeEventListener(
            "storage",
            handleStorage
        );
    };
};

const notify = (key: string) => {
    listeners.get(key)?.forEach((callback) => {
        callback();
    });
};

const getStoredData = <T,>(
    key: string,
    defaultValue: T
): T => {
    if (typeof window === "undefined") {
        return defaultValue;
    }

    try {
        const storedValue = localStorage.getItem(key);

        if (!storedValue) {
            return defaultValue;
        }

        return JSON.parse(storedValue);
    } catch (error) {
        console.error(
            `Error reading ${key} from localStorage:`,
            error
        );

        return defaultValue;
    }
};

const setStoredData = <T,>(
    key: string,
    value: T
) => {
    try {
        localStorage.setItem(
            key,
            JSON.stringify(value)
        );

        notify(key);
    } catch (error) {
        console.error(
            `Error saving ${key} to localStorage:`,
            error
        );
    }
};

const useLocalStorage = <T,>(
    key: string,
    defaultValue: T
) => {
    const getSnapshot = () => {
        return JSON.stringify(
            getStoredData(key, defaultValue)
        );
    };

    const getServerSnapshot = () => {
        return JSON.stringify(defaultValue);
    };

    const storedValue = useSyncExternalStore(
        (callback) => subscribe(key, callback),
        getSnapshot,
        getServerSnapshot
    );

    const value = JSON.parse(storedValue) as T;

    const setValue = (
        newValue: T | ((previousValue: T) => T)
    ) => {
        const previousValue = getStoredData(
            key,
            defaultValue
        );

        const valueToStore =
            typeof newValue === "function"
                ? (
                      newValue as (
                          previousValue: T
                      ) => T
                  )(previousValue)
                : newValue;

        setStoredData(key, valueToStore);
    };

    return [value, setValue] as const;
};

export const FitLogProvider = ({
    children,
}: FitLogProviderProps) => {
    const [plan, setPlan] = useLocalStorage<Workout[]>(
        PLAN_KEY,
        []
    );

    const [saved, setSaved] = useLocalStorage<Workout[]>(
        SAVED_KEY,
        []
    );

    const [completedIds, setCompletedIds] =
        useLocalStorage<number[]>(
            COMPLETED_KEY,
            []
        );

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
            previousPlan.filter(
                (workout) => workout.id !== id
            )
        );

        setCompletedIds((previousIds) =>
            previousIds.filter(
                (completedId) => completedId !== id
            )
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
            previousSaved.filter(
                (workout) => workout.id !== id
            )
        );
    };

    const markAsDone = (id: number) => {
        setPlan((previousPlan) =>
            previousPlan.filter(
                (workout) => workout.id !== id
            )
        );

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