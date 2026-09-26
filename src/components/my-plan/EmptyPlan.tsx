import Link from "next/link";

interface EmptyPlanProps {
    type: "plan" | "saved";
}

const EmptyPlan = ({ type }: EmptyPlanProps) => {
    const isPlan = type === "plan";

    return (
        <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-[#292d34] bg-[#191c22] px-6 py-12 text-center">
            <h2 className="text-[28px] font-bold uppercase text-[#e5e7eb]">
                Nothing Here Yet
            </h2>

            <p className="mt-3 max-w-[480px] text-[16px] leading-7 text-[#aeb4c0]">
                {isPlan
                    ? "Browse the library and add a lift to get today moving."
                    : "Save a workout for later and it will appear here."}
            </p>

            <Link
                href="/"
                className="mt-6 rounded-full bg-[#ccff00] px-5 py-3 text-[15px] font-semibold text-black transition hover:bg-[#b9eb00]"
            >
                Go to workouts
            </Link>
        </div>
    );
};

export default EmptyPlan;