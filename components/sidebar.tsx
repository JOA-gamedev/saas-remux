"use client";

import { LayoutDashboard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500"
    },
];

const Sidebar = () => {
    return ( 
        <div className="space-y-4 py-4 flex flex-col h-full bg-slate-800 text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="relative w-8 h-8 mr-4">
                        <Image
                          fill
                          alt="logo"
                          src="/logo.png" 
                          />
                          {/* 
                          @todo add image
                          @body add an image in the public folder
                           */}
                    </div>
                    <h1 className="text-2xl font-bold">
                        REMUX
                    </h1>

                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link href="/">
                        </Link>

                        // @todo here i left
                        // @body here i left
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default Sidebar;