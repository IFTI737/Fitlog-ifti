"use client";

interface PlanTabsProps {
    activeTab: "plan" | "saved";
    onChange: (tab: "plan" | "saved") => void;
}

const PlanTabs = ({
    activeTab,
    onChange,
}: PlanTabsProps) => {
    return (
        <div className="flex w-fit rounded-2xl bg-[#191c22] p-1">
            <button
                type="button"
                onClick={() => onChange("plan")}
                className={`rounded-xl px-4 py-2 text-[15px] font-semibold ${
                    activeTab === "plan"
                        ? "bg-[#101216] text-[#ccff00]"
                        : "text-[#9da5b2]"
                }`}
            >
                Today&apos;s Plan
            </button>

            <button
                type="button"
                onClick={() => onChange("saved")}
                className={`rounded-xl px-4 py-2 text-[15px] font-semibold ${
                    activeTab === "saved"
                        ? "bg-[#101216] text-[#ccff00]"
                        : "text-[#9da5b2]"
                }`}
            >
                Saved
            </button>
        </div>
    );
};

export default PlanTabs;