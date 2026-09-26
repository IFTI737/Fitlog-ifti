const Loading = () => {
    return (
        <main className="mx-auto w-full max-w-[1200px] px-3 py-8 sm:px-4 md:px-6 lg:px-0">
            <div className="animate-pulse">
                {/* Hero */}
                <section className="grid gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <div className="h-4 w-36 rounded bg-[#292d34]" />

                        <div className="mt-5 space-y-3">
                            <div className="h-12 w-full rounded-lg bg-[#292d34]" />
                            <div className="h-12 w-[85%] rounded-lg bg-[#292d34]" />
                        </div>

                        <div className="mt-5 space-y-2">
                            <div className="h-4 w-full rounded bg-[#292d34]" />
                            <div className="h-4 w-[90%] rounded bg-[#292d34]" />
                            <div className="h-4 w-[70%] rounded bg-[#292d34]" />
                        </div>

                        <div className="mt-7 h-12 w-48 rounded-full bg-[#292d34]" />
                    </div>

                    <div className="h-[300px] rounded-2xl bg-[#292d34] sm:h-[380px] lg:h-[420px]" />
                </section>

                {/* Library Header */}
                <section className="mt-16">
                    <div className="h-10 w-64 rounded-lg bg-[#292d34]" />

                    <div className="mt-3 h-5 w-80 max-w-full rounded bg-[#292d34]" />
                </section>

                {/* Workout Cards */}
                <section className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 12 }).map((_, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-2xl border border-[#292d34] bg-[#191c22]"
                        >
                            <div className="h-[220px] bg-[#292d34] sm:h-[230px]" />

                            <div className="p-5">
                                <div className="flex gap-2">
                                    <div className="h-7 w-20 rounded-full bg-[#292d34]" />
                                    <div className="h-7 w-20 rounded-full bg-[#292d34]" />
                                </div>

                                <div className="mt-4 h-7 w-[80%] rounded bg-[#292d34]" />

                                <div className="mt-2 h-5 w-[55%] rounded bg-[#292d34]" />

                                <div className="mt-5 flex gap-4">
                                    <div className="h-5 w-20 rounded bg-[#292d34]" />
                                    <div className="h-5 w-24 rounded bg-[#292d34]" />
                                    <div className="h-5 w-12 rounded bg-[#292d34]" />
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </main>
    );
};

export default Loading;