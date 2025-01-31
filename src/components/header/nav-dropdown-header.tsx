"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeaderBuilder from "./header-builder";

type NavDropdownHeaderProps = {
  title: string;
  href: string;
};

const HOME_BUTTON = () => (
  <Button asChild variant={"ghost"}>
    <Link href="/">
      <Image src="/blind-cubing-logo.svg" alt="Blind Cubing" width={25} height={25} />
      <span className="font-semibold">Blind Cubing</span>
    </Link>
  </Button>
);

const DROPDOWN_MENU_LINKS = ({links}: {links: NavDropdownHeaderProps[]}) => (
  <NavigationMenu>
    <NavigationMenuList>
      {links.map((link) => (
        <NavigationMenuItem key={link.title}>
            <Link href={link.href} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {link.title}
              </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  </NavigationMenu>
);

export default function NavDropdownHeader({links}: {links: NavDropdownHeaderProps[]}) {
  return (
    <HeaderBuilder components={[<HOME_BUTTON key="home-button"/>, <DROPDOWN_MENU_LINKS key="dropdown-menu-links" links={links}/>]}/>
  );
}