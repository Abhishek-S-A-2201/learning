import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../constants";

const NavBar = () => {
    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center max-container">
                <Link href="/">
                    <Image
                        src="/images/header-logo.svg"
                        alt="logo"
                        width={130}
                        height={29}
                    />
                </Link>
                <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <Link
                                href={item.href}
                                className="font-monserrate leading-normal text-lg text-slate-gray"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};
export default NavBar;
