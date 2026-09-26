"use client";

interface SortDropdownProps {
    sortBy: "duration" | "calories" | "rating";
    onChange: (
        value: "duration" | "calories" | "rating"
    ) => void;
}

const SortDropdown = ({
    sortBy,
    onChange,
}: SortDropdownProps) => {
    return (
        <div className="w-full md:w-[345px]">
            <label
                htmlFor="sort"
                className="mb-2 block text-[16px] font-semibold text-[#e5e7eb]"
            >
                Sort By
            </label>

            <select
                id="sort"
                value={sortBy}
                onChange={(event) =>
                    onChange(
                        event.target.value as
                            | "duration"
                            | "calories"
                            | "rating"
                    )
                }
                className="h-11 w-full rounded-2xl border border-[#3b3f47] bg-[#101216] px-4 text-[16px] text-[#e5e7eb] outline-none"
            >
                <option value="duration">
                    Duration
                </option>

                <option value="calories">
                    Calories
                </option>

                <option value="rating">
                    Rating
                </option>
            </select>
        </div>
    );
};

export default SortDropdown;