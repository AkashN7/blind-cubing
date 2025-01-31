"use client";

import {
  useSidebar,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { FaAngleDoubleLeft } from "react-icons/fa";

export default function CustomSidebarTrigger() {
  const { open, toggleSidebar } = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton onClick={toggleSidebar} data-state={open ? "open" : "closed"}>
          <FaAngleDoubleLeft className={`transition-transform duration-200 ${open ? '' : 'rotate-180'}`}/>
          <span>Collapse</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}