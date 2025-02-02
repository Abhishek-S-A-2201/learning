import Image from "next/image";
import Link from "next/link";
import { auth, signIn, signOut } from "@/auth";

const Navbar = async () => {
    const session = await auth();

    return (
        <header className="bg-white shadow-sm py-4 px-5 font-work-sans">
            <nav className="flex justify-between items-center">
                <Image
                    src={"/logo.png"}
                    alt="YC Dorectory"
                    width={150}
                    height={50}
                />
                <div className="flex gap-5 text-black">
                    {session && session?.user ? (
                        <>
                            <Link href="/startup/create">
                                <span>Create</span>
                            </Link>
                            <form
                                action={async () => {
                                    "use server";
                                    await signOut();
                                }}
                            >
                                <button type="submit">Sign Out</button>
                            </form>
                            <Link href={`/user/${session?.user?.id}`}>
                                <span>{session?.user?.name}</span>
                            </Link>
                        </>
                    ) : (
                        <form
                            action={async () => {
                                "use server";
                                await signIn("github");
                            }}
                        >
                            <button type="submit">Sign In</button>
                        </form>
                    )}
                </div>
            </nav>
        </header>
    );
};
export default Navbar;
