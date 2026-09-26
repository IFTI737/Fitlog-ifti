const Loading = () => {
    return (
        <main>
            <section className="mx-auto w-full max-w-[1200px] px-3 py-8 sm:px-4 md:px-6 lg:px-0">
                <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
                    {/* Image Skeleton */}
                    <div className="aspect-[0.82] animate-pulse rounded-2xl bg-[#191c22]" />

                    {/* Content Skeleton */}
                    <div className="flex flex-col">
                        {/* Title */}
                        <div className="h-12 w-2/3 animate-pulse rounded bg-[#191c22]" />

                        {/* Description */}
                        <div className="mt-5 space-y-3">
                            <div className="h-5 w-full animate-pulse rounded bg-[#191c22]" />
                            <div className="h-5 w-5/6 animate-pulse rounded bg-[#191c22]" />
                        </div>

                        {/* Tags */}
                        <div className="mt-5 flex gap-2">
                            <div className="h-8 w-20 animate-pulse rounded-full bg-[#191c22]" />
                            <div className="h-8 w-20 animate-pulse rounded-full bg-[#191c22]" />
                        </div>

                        {/* Stats */}
                        <div className="mt-6 overflow-hidden rounded-2xl border border-[#292d34] bg-[#191c22]">
                            <div className="h-[58px] animate-pulse border-b border-[#292d34]" />
                            <div className="h-[58px] animate-pulse border-b border-[#292d34]" />
                            <div className="h-[58px] animate-pulse border-b border-[#292d34]" />
                            <div className="h-[58px] animate-pulse border-b border-[#292d34]" />
                            <div className="h-[58px] animate-pulse border-b border-[#292d34]" />
                            <div className="h-[58px] animate-pulse border-b border-[#292d34]" />
                            <div className="h-[58px] animate-pulse" />
                        </div>

                        {/* Instructions Skeleton */}
                        <div className="mt-8 space-y-4">
                            <div className="h-8 w-40 animate-pulse rounded bg-[#191c22]" />
                            <div className="h-5 w-full animate-pulse rounded bg-[#191c22]" />
                            <div className="h-5 w-full animate-pulse rounded bg-[#191c22]" />
                            <div className="h-5 w-5/6 animate-pulse rounded bg-[#191c22]" />
                            <div className="h-5 w-full animate-pulse rounded bg-[#191c22]" />
                        </div>

                        {/* Buttons Skeleton */}
                        <div className="mt-7 flex gap-3">
                            <div className="h-12 w-48 animate-pulse rounded-full bg-[#191c22]" />
                            <div className="h-12 w-36 animate-pulse rounded-full bg-[#191c22]" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Loading;