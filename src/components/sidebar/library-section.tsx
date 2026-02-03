"use client";

import { Clock , ThumbsUp , ListVideo } from "lucide-react";
import Link from "next/link";
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";

const items = [
    { title: "History", href: "/history", icon: Clock },
    { title: "Liked Videos", href: "/liked", icon: ThumbsUp },
    { title: "Playlists", href: "/playlists", icon: ListVideo },
];

export function LibrarySection() {
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
    )
}