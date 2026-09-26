"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import logo from "@/assets/logo.png";

const Navbar = () => {
    const pathname = usePathname();

    const [menuOpen, setMenuOpen] = useState(false);

    const workoutActive = pathname === "/";
    const planActive = pathname === "/my-plan";

    return (
        <header className="relative z-50 border-b border-[#24272d] bg-[#0c0e11]">
            <nav className="mx-auto flex h-[70px] w-full max-w-[1200px] items-center justify-between px-4 md:px-6 lg:px-0">

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
                    aria-label="Toggle navigation menu"
                >
                    <span className="h-[2px] w-5 bg-[#dfe1e6]" />
                    <span className="h-[2px] w-5 bg-[#dfe1e6]" />
                    <span className="h-[2px] w-5 bg-[#dfe1e6]" />
                </button>

                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => setMenuOpen(false)}
                >
                    <Image
                        src={logo}
                        alt="FitLog"
                        width={24}
                        height={24}
                        priority
                        className="h-6 w-6 object-contain"
                    />

                    <span className="text-[20px] font-bold tracking-tight text-[#dfe1e6]">
                        FITLOG
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-1 md:flex">
                    <Link
                        href="/"
                        className={`rounded-full px-4 py-2 text-[16px] font-semibold ${
                            workoutActive
                                ? "bg-[#191d23] text-[#ccff00]"
                                : "text-[#dfe1e6] hover:bg-[#191d23]"
                        }`}
                    >
                        Workouts
                    </Link>

                    <Link
                        href="/my-plan"
                        className={`rounded-full px-4 py-2 text-[16px] font-semibold ${
                            planActive
                                ? "bg-[#191d23] text-[#ccff00]"
                                : "text-[#dfe1e6] hover:bg-[#191d23]"
                        }`}
                    >
                        My Plan
                    </Link>
                </div>

                {/* Counters */}
                <div className="flex items-center gap-5 md:gap-8">

                    <Link
                        href="/my-plan"
                        className="flex items-center gap-2 text-[15px] font-semibold text-[#dfe1e6] md:text-[16px]"
                    >
                        Plan

                        <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-[#ccff00] px-2 text-[14px] font-bold text-black">
                            0
                        </span>
                    </Link>

                    <Link
                        href="/my-plan"
                        className="flex items-center gap-2 text-[15px] font-semibold text-[#dfe1e6] md:text-[16px]"
                    >
                        Saved

                        <span className="flex h-7 min-w-7 items-center justify-center rounded-full border border-[#777b83] px-2 text-[14px] font-bold text-white">
                            0
                        </span>
                    </Link>

                </div>
            </nav>

            {/* Mobile Navigation */}
            {menuOpen && (
                <div className="absolute left-0 top-[70px] w-[260px] overflow-hidden rounded-b-2xl border border-[#292d34] bg-[#191c22] md:hidden">

                    <div className="flex flex-col p-2">

                        <Link
                            href="/"
                            onClick={() => setMenuOpen(false)}
                            className={`rounded-xl px-5 py-3 text-[16px] font-semibold ${
                                workoutActive
                                    ? "text-[#ccff00]"
                                    : "text-[#dfe1e6]"
                            }`}
                        >
                            Workouts
                        </Link>

                        <Link
                            href="/my-plan"
                            onClick={() => setMenuOpen(false)}
                            className={`rounded-xl px-5 py-3 text-[16px] font-semibold ${
                                planActive
                                    ? "text-[#ccff00]"
                                    : "text-[#dfe1e6]"
                            }`}
                        >
                            My Plan
                        </Link>

                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;