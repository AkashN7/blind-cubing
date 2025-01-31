"use client";

import { SIDE_LINKS } from "@/constants"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import NavSidebar from "@/components/sidebar/nav-sidebar";
import CustomSidebarTrigger from "@/components/sidebar/custom-sidebar-trigger";
import Link from "next/link";
import Image from "next/image";

export default function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <Image src="/blind-cubing-logo.svg" alt="Blind Cubing" width={25} height={25} />
                <span className="font-semibold">Blind Cubing</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavSidebar items={SIDE_LINKS} />
      </SidebarContent>
      <SidebarFooter>
        <CustomSidebarTrigger />
      </SidebarFooter>
    </Sidebar>
  )
}