const Loading = () => {
    return (
        <main className="mx-auto w-full max-w-[1200px] px-3 py-8 sm:px-4 md:px-6 lg:px-0">
            <div className="animate-pulse">
                {/* Page Header */}
                <section>
                    <div className="h-12 w-56 rounded-lg bg-[#292d34] sm:h-14" />

                    <div className="mt-3 h-5 w-[360px] max-w-full rounded bg-[#292d34]" />
                </section>

                {/* Summary */}
                <section className="mt-8 grid overflow-hidden rounded-2xl border border-[#292d34] bg-[#191c22] md:grid-cols-3">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div
                            key={index}
                            className="border-b border-[#292d34] px-6 py-7 text-center last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
                        >
                            <div className="mx-auto h-4 w-24 rounded bg-[#292d34]" />

                            <div className="mx-auto mt-3 h-10 w-16 rounded bg-[#292d34]" />
                        </div>
                    ))}
                </section>

                {/* Tabs + Sort */}
                <section className="mt-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                    <div className="h-11 w-64 rounded-2xl bg-[#292d34]" />

                    <div className="w-full md:w-[345px]">
                        <div className="mb-2 h-5 w-20 rounded bg-[#292d34]" />

                        <div className="h-11 w-full rounded-2xl bg-[#292d34]" />
                    </div>
                </section>

                {/* Workout Cards */}
                <section className="mt-6 space-y-4">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <article
                            key={index}
                            className="rounded-2xl border border-[#292d34] bg-[#191c22] p-4 sm:p-5"
                        >
                            <div className="flex flex-col gap-5 md:flex-row md:items-center">
                                {/* Image */}
                                <div className="h-[180px] w-full shrink-0 rounded-xl bg-[#292d34] sm:h-[210px] md:h-[104px] md:w-[155px]" />

                                {/* Workout Info */}
                                <div className="min-w-0 flex-1">
                                    <div className="h-7 w-[70%] rounded bg-[#292d34]" />

                                    <div className="mt-2 h-5 w-[35%] rounded bg-[#292d34]" />

                                    <div className="mt-4 flex flex-wrap gap-4">
                                        <div className="h-5 w-20 rounded bg-[#292d34]" />
                                        <div className="h-5 w-24 rounded bg-[#292d34]" />
                                        <div className="h-5 w-12 rounded bg-[#292d34]" />
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-wrap gap-3 md:justify-end">
                                    <div className="h-10 w-28 rounded-full bg-[#292d34]" />

                                    <div className="h-10 w-32 rounded-full bg-[#292d34]" />

                                    <div className="h-10 w-10 rounded-full bg-[#292d34]" />
                                </div>
                            </div>
                        </article>
                    ))}
                </section>
            </div>
        </main>
    );
};

export default Loading;