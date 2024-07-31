import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Logo } from "./Navbar";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-pink-50 mt-40 pb-16">
      <div className="container flex flex-col sm:flex-row justify-between">
        <div className="flex flex-col w-full sm:w-96">
          <Logo />
          <p className="text-gray-500 mt-3">
            Leadflow is a reliable international marketing agency dedicated to
            helping businesses grow through innovative strategies and tailored
            solutions.
          </p>

          <p className="text-gray-500 text-sm mt-6">
            Copyright © 2012-2024 Leadflow
          </p>
        </div>

        <div className="mt-7">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Services */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={`bg-transparent ${navigationMenuTriggerStyle()}`}
                >
                  <Link href="#services">Services</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Team */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={`bg-transparent ${navigationMenuTriggerStyle()}`}
                >
                  <Link href="#team">Team</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Reviews */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={`bg-transparent ${navigationMenuTriggerStyle()}`}
                >
                  <Link href="#reviews">Reviews</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* FAQ */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={`bg-transparent ${navigationMenuTriggerStyle()}`}
                >
                  <Link href="#FAQ">FAQ</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </footer>
  );
}
