import Image from "next/image";

export default function LandingPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-gray-50/50 flex items-center justify-center">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right, #e5e5e5_1px, transparent 1px), linear-gradient(to bottom, #e5e5e5_1px, transparent 1px)] bg-[size(6rem_4rem)]">
                <section className="w-full px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col items-center space-y-10 text-center">
                    <header className="space-y-6">
                        <h1>Laurel</h1>
                        <p>
                            Meet your AI Companion that goes beyond just
                            conversation - Laurel now can get things done.
                        </p>
                    </header>
                </section>
            </div>
        </main>
    );
}
