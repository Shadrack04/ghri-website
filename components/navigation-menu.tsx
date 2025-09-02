"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { paths } from "@/constants/paths";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const pathName = usePathname();

  const isActive = (href: string) =>
    pathName === href || pathName.startsWith(`${href}/`);
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="text-muted-foreground">
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(
              navigationMenuTriggerStyle(),
              isActive(paths.public.home) && "bg-primary text-background"
            )}
          >
            <Link href={paths.public.home} className=" ">
              Home
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(
              navigationMenuTriggerStyle(),
              isActive(paths.public.about) && "bg-primary text-background"
            )}
          >
            <Link href={paths.public.about}>About Us</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">Projects</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Our Services</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Emergency</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">General Emergency</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Cholera</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Covid 19</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Ebola</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Chicken Pox</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Mpox</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">Get Involved</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">Telemed</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Move</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">Blog</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Podcast</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

// function ListItem({
//   title,
//   children,
//   href,
//   ...props
// }: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
//   return (
//     <li {...props}>
//       <NavigationMenuLink asChild>
//         <Link href={href}>
//           <div className="text-sm leading-none font-medium">{title}</div>
//           <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
//             {children}
//           </p>
//         </Link>
//       </NavigationMenuLink>
//     </li>
//   );
// }
