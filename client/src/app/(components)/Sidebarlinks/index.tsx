import React from 'react';
import {LucideIcon} from "lucide-react";
import {usePathname} from "next/navigation";
import Link from "next/link";

interface SideBarLinksProps {
    href: string;
    icon:LucideIcon;
    label:string;
    isCollapsed:boolean;
}
const SideBarLinks = ({href, icon:Icon, label, isCollapsed}:SideBarLinksProps) => {

    const pathName = usePathname();
    const isActive = pathName === href || (pathName === "/" && href === "/dashboard");

    return (
        <Link href={href}>
            <div
                className={`cursor-pointer flex items-center
                ${isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"} hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors 
                ${isActive ? "bg-blue-200 text-white" : ""}`}>
                <Icon className="w-6 h-6 !text-gray-700" />
                <span className={`${isCollapsed ? "hidden" : "block"} font-medium text-gray-700`}>
                    {label}
                </span>
            </div>
        </Link>
    );
};


export default SideBarLinks;