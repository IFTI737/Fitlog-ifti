import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo.png";

const Footer = () => {
    return (
        <footer className="border-t border-[#24272d] bg-[#191c22]">

            <div className="mx-auto flex min-h-[100px] w-full max-w-[1200px] flex-col items-center justify-center gap-5 px-4 py-6 md:flex-row md:justify-between md:gap-0 md:px-6 lg:px-0">

                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-2"
                >
                    <Image
                        src={logo}
                        alt="FitLog"
                        width={24}
                        height={24}
                        className="h-6 w-6 object-contain"
                    />

                    <span className="text-[20px] font-bold tracking-tight text-[#dfe1e6]">
                        FITLOG
                    </span>
                </Link>

                {/* Copyright */}
                <p className="text-center text-[15px] text-[#aeb4c0] md:text-[16px]">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>

        </footer>
    );
};

export default Footer;