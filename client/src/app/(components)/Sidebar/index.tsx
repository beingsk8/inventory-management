'use client'
import {Archive, CircleDollarSign, ClipboardIcon, Layout, Menu, SlidersHorizontal, User} from "lucide-react";
import {useAppDispatch, useAppSelector} from "@/app/redux";
import {setIsSideBarCollapsed} from "@/state";
import SideBarLinks from "@/app/(components)/Sidebarlinks";

const Sidebar = () => {
    const sidebarLinks = [
        { href: "/dashboard", icon: Layout, label: "Dashboard" },
        { href: "/inventory", icon: Archive, label: "Inventory" },
        { href: "/products", icon: ClipboardIcon, label: "Products" },
        { href: "/users", icon: User, label: "Users" },
        { href: "/settings", icon: SlidersHorizontal, label: "Settings" },
        { href: "/expenses", icon: CircleDollarSign, label: "Expenses" },
    ];

    const dispatch = useAppDispatch();

    const isSideBarCollapsed = useAppSelector((state) => state.global.isSideBarCollapsed);
    const toggleSideBar = () => dispatch(setIsSideBarCollapsed(!isSideBarCollapsed));

    const sideBareClassNames = `fixed flex flex-col ${isSideBarCollapsed ? 'w-0 md:w-16' : 'w-72 md:w-64'} bg-white 
    transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

    return (
        <div className={sideBareClassNames}>
            <div className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${isSideBarCollapsed ? 'px-5' : 'px-8'}`}>
                <div>logo</div>
                <h1 className={`font-extra bold text-2xl ${isSideBarCollapsed ? 'hidden' : 'block'}`}>Binge Stock</h1>
            <button
                className={`md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100`}
                onClick={toggleSideBar}>
                <Menu className={`w-4 h-4`}/>
            </button>
            </div>

            {/*Menus items*/}
            <div className={`flex-grow mt-8`}>
                {sidebarLinks.map(({ href, icon, label }) => (
                    <SideBarLinks
                        key={href} // Use href as a unique key
                        href={href}
                        icon={icon}
                        label={label}
                        isCollapsed={isSideBarCollapsed}
                    />
                ))}
            </div>

            {/*FOOTER*/}
            <div className={`${isSideBarCollapsed ? 'hidden' : 'block'} mb-10`}>
                <p className={`text-center text-xs text-gray-500`}>&copy; 2024 Binge Stock</p>
            </div>
        </div>
    );
};

export default Sidebar;