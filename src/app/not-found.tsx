import Link from "next/link"

const NotFound = () => {
    return (
        <main className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
            <h1 className="text-5xl font-bold text-[#ccff00]">
                404
            </h1>

            <h2 className="text-2xl font-semibold text-white">
                Page Not Found
            </h2>

            <p className="text-[#aeb4c0]">
                The page you are looking for does not exist.
            </p>

            <Link
                href="/"
                className="rounded-full bg-[#ccff00] px-5 py-2 font-semibold text-black"
            >
                Go to workouts
            </Link>
        </main>
    )
}

export default NotFound