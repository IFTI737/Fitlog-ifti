const Loading = () => {
    return (
        <main className="mx-auto w-full max-w-[1200px] px-3 py-8 sm:px-4 md:px-6 lg:px-0">
            {/* Header */}
            <div className="animate-pulse">
                <div className="h-10 w-48 rounded-lg bg-[#292d34]" />

                <div className="mt-3 h-5 w-[360px] max-w-full rounded bg-[#292d34]" />
            </div>

            {/* Summary */}
            <div className="mt-8 grid overflow-hidden rounded-2xl border border-[#292d34] bg-[#191c22] md:grid-cols-3">
                <div className="animate-pulse border-b border-[#292d34] px-6 py-5 md:border-b-0 md:border-r">
                    <div className="h-4 w-20 rounded bg-[#292d34]" />
                    <div className="mt-3 h-10 w-12 rounded bg-[#292d34]" />
                </div>

                <div className="animate-pulse border-b border-[#292d34] px-6 py-5 md:border-b-0 md:border-r">
                    <div className="h-4 w-16 rounded bg-[#292d34]" />
                    <div className="mt-3 h-10 w-16 rounded bg-[#292d34]" />
                </div>

                <div className="animate-pulse px-6 py-5">
                    <div className="h-4 w-20 rounded bg-[#292d34]" />
                    <div className="mt-3 h-10 w-16 rounded bg-[#292d34]" />
                </div>
            </div>

            {/* Tabs + Sort */}
            <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div className="animate-pulse h-11 w-[250px] rounded-2xl bg-[#292d34]" />

                <div className="animate-pulse w-full md:w-[345px]">
                    <div className="mb-2 h-4 w-16 rounded bg-[#292d34]" />
                    <div className="h-11 w-full rounded-2xl bg-[#292d34]" />
                </div>
            </div>

            {/* Workout Cards */}
            <div className="mt-6 space-y-4">
                <div className="animate-pulse rounded-2xl border border-[#292d34] bg-[#191c22] p-4 sm:p-5">
                    <div className="flex flex-col gap-5 md:flex-row md:items-center">
                        <div className="h-[180px] w-full rounded-xl bg-[#292d34] sm:h-[210px] md:h-[104px] md:w-[155px]" />

                        <div className="flex-1">
                            <div className="h-6 w-64 max-w-full rounded bg-[#292d34]" />
                            <div className="mt-3 h-4 w-32 rounded bg-[#292d34]" />

                            <div className="mt-4 flex gap-4">
                                <div className="h-4 w-20 rounded bg-[#292d34]" />
                                <div className="h-4 w-24 rounded bg-[#292d34]" />
                                <div className="h-4 w-12 rounded bg-[#292d34]" />
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <div className="h-10 w-28 rounded-full bg-[#292d34]" />
                            <div className="h-10 w-28 rounded-full bg-[#292d34]" />
                            <div className="h-10 w-10 rounded-full bg-[#292d34]" />
                        </div>
                    </div>
                </div>

                <div className="animate-pulse rounded-2xl border border-[#292d34] bg-[#191c22] p-4 sm:p-5">
                    <div className="flex flex-col gap-5 md:flex-row md:items-center">
                        <div className="h-[180px] w-full rounded-xl bg-[#292d34] sm:h-[210px] md:h-[104px] md:w-[155px]" />

                        <div className="flex-1">
                            <div className="h-6 w-64 max-w-full rounded bg-[#292d34]" />
                            <div className="mt-3 h-4 w-32 rounded bg-[#292d34]" />

                            <div className="mt-4 flex gap-4">
                                <div className="h-4 w-20 rounded bg-[#292d34]" />
                                <div className="h-4 w-24 rounded bg-[#292d34]" />
                                <div className="h-4 w-12 rounded bg-[#292d34]" />
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <div className="h-10 w-28 rounded-full bg-[#292d34]" />
                            <div className="h-10 w-28 rounded-full bg-[#292d34]" />
                            <div className="h-10 w-10 rounded-full bg-[#292d34]" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Loading;