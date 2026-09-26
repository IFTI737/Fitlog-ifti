import Image from "next/image";
import Link from "next/link";

import banner from "@/assets/banner.png";

const Hero = () => {
    return (
        <section className="mx-auto w-full max-w-[1200px] px-3 py-5 sm:px-4 md:px-6 lg:px-0 lg:py-6">

            <div className="grid overflow-hidden rounded-2xl border border-[#292d34] bg-[#191c22] lg:min-h-[430px] lg:grid-cols-2">

                {/* Text */}
                <div className="px-7 pb-4 pt-8 sm:px-9 sm:pt-10 lg:flex lg:flex-col lg:justify-center lg:px-10 lg:py-10">

                    <p className="mb-5 text-sm font-semibold uppercase text-[#ccff00]">
                        Workout Library
                    </p>

                    <h1 className="max-w-[560px] text-[40px] font-bold uppercase leading-[1.15] tracking-[-0.5px] text-[#e5e7eb] sm:text-[44px] lg:text-[48px]">
                        Train with intent. Log every set.
                    </h1>

                    <p className="mt-5 max-w-[530px] text-[16px] leading-7 text-[#b7beca] sm:text-[17px]">
                        FitLog is a dark, no-nonsense gym companion: pick a lift,
                        lock it into today&apos;s plan, and watch the week&apos;s
                        work add up.
                    </p>

                    <Link
                        href="#library"
                        className="mt-6 inline-flex w-fit rounded-full bg-[#ccff00] px-5 py-2.5 text-[16px] font-semibold text-black"
                    >
                        Browse Workouts
                    </Link>

                </div>

                {/* Banner */}
                <div className="flex items-end justify-center px-5 pt-2 sm:px-8 lg:items-center lg:px-5 lg:py-6">

                    <Image
                        src={banner}
                        alt="Gym Illustration"
                        priority
                        sizes="(max-width: 1023px) 90vw, 50vw"
                        className="h-auto w-full max-w-[390px] object-contain sm:max-w-[420px] lg:max-w-[460px]"
                    />

                </div>

            </div>
        </section>
    );
};

export default Hero;