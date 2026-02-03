"use client";

import { Home , Compass , Flame } from "lucide-react"; 
import Link from "next/link";
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";

const items = [
    { title: "Home", href: "/", icon: Home },
    { title: "Explore", href: "/explore", icon: Compass },
    { title: "Trending", href: "/trending", icon: Flame },
];

export function MainSection() {
    return (
        <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>

            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild/>
                            <Link href={item.href} className="flex items-center gap-4">
                                <item.icon className="h-4 w-4" />
                                <span className="text-sm">{item.title}</span>
                            </Link>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    );
}