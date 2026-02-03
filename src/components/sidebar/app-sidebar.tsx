"use client";

import {
  Sidebar,
  SidebarContent,

} from "@/components/ui/sidebar";

import { MainSection } from "./main-section";
import { LibrarySection } from "./library-section";


export const AppSidebar = () => {
  return (
    <Sidebar>
          <SidebarContent>
            <MainSection />
            <LibrarySection />
          </SidebarContent>
    </Sidebar>
  );
};
