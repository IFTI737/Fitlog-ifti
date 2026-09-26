import Hero from "@/components/home/Hero";

const Home = () => {
    return (
        <main>
            <Hero />

            <section
                id="library"
                className="mx-auto w-full max-w-[1200px] px-6 py-20"
            >
                <h2 className="text-3xl font-bold text-white">
                    The Library
                </h2>
            </section>
        </main>
    );
};

export default Home;