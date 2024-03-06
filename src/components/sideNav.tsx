import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { signOut } from 'next-auth/react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { auth } from '@/dbConfig/firebase';

const SideNav = () => {
    const [open, setOpen] = useState(true);
    const { data: session } = useSession();
    const [activeMenu, setActiveMenu] = useState(0); // State to track active menu index

    const handleSignOut = async () => {
        try {
            await signOut(); // Use the correct Firebase auth instance
            // Redirect to the homepage using window.location.href
            window.location.href = '/homepage';
        } catch (error) {
            console.error('Error signing out:');
        }
    };

    const Menus = [
        { title: "Dashboard", src: "Chart_fill", link: "/recommender-system" },
        { title: "Search", src: "Search", link: "" },
        { title: "Account", src: "User", gap: true, link: "/settings/account" },
        { title: "History", src: "Calendar", link: "" },
        { title: "Privacy", src: "Folder", gap: true, link: "" },
        { title: "Feedback", src: "Setting", link: "" },
        { title: "Sign Out", src: "logout", gap: true, onClick: handleSignOut },
    ];

    return (
        <div className="hidden sm:flex bg-Lgrey items-center justify-center">
            <div
                className={`${open ? "w-60" : "w-20"} bg-royalBlue h-screen p-5 pt-8 relative duration-300`}
            >
                <Image
                    width={28}
                    height={28}
                    src="/assets/control.png"
                    className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                    alt={'control'}
                />
                <Link href="/homepage">
                    <div className="flex gap-x-4 items-center">
                        <Image
                            width={28}
                            height={28}
                            src="/logo.png"
                            className={`cursor-pointer duration-500 h-10 w-10 ${open && "rotate-[360deg]"}`}
                            alt={'logo'}
                        />
                        <h1 className={`text-white origin-left font-bold text-xl duration-200 ${!open && "scale-0"}`}>
                            LHydra
                        </h1>
                    </div>
                </Link>
                <ul className="pt-6">
                    {Menus.map((Menu, index) => (
                        <a href={Menu.link} key={index}>
                            <span
                                className={`flex rounded-md p-2 cursor-pointer hover:bg-Lgrey hover:text-darkGray text-gray-300 text-sm items-center gap-x-4 ${Menu.gap ? "mt-9" : "mt-2"} ${activeMenu === index ? "bg-darkGray text-white" : ""}`}
                                onClick={() => { setActiveMenu(index); Menu.onClick && Menu.onClick(); }}
                            >
                                <Image width={28} height={28} src={`/assets/${Menu.src}.png`} alt={'menu'} />
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    {Menu.title}
                                </span>
                            </span>
                        </a>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SideNav;
