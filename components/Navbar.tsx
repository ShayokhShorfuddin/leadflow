"use client";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import { Mail, Phone, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const services: { title: string; description: string }[] = [
  {
    title: "Social Ads",
    description:
      "Elevate Your Online Presence: Targeted Social Ad Campaigns to Boost Engagement.",
  },

  {
    title: "SaaS Marketing",
    description:
      "Accelerate SaaS Success: Tailored Marketing Strategies to Boost User Acquisition, Retention, and Revenue Growth.",
  },

  {
    title: "Content Marketing",
    description:
      "Craft Compelling Narratives: Strategic Content Marketing to Engage Audiences, Build Authority, and Drive Conversions.",
  },

  {
    title: "Seo",
    description:
      "Dominate the Digital Landscape: Innovative Strategies to Amplify Your Brand's Reach and Drive Measurable Growth.",
  },
];

function NavMenu() {
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        {/* Services */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-4 p-4 md:grid-cols-2 w-[300px] md:w-[500px] lg:w-[600px] ">
              {services.map((service, index) => (
                <ListItem
                  key={index}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </ul>
          </NavigationMenuContent>
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
  );
}

export function Logo() {
  return (
    <h2 className="text-2xl md:text-3xl font-normal italic font-ubuntu">
      Leadflow
    </h2>
  );
}

export function DialogButton({ className }: { className: string }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild className={className}>
        <Button size={"sm"}>Contact Us</Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Contact Us</AlertDialogTitle>
          <AlertDialogDescription>
            Get in touch with our professional team.
          </AlertDialogDescription>
        </AlertDialogHeader>

        {/* Email */}
        <div className="flex mt-1">
          <Mail className="mr-2" />
          <a href="mailto:contact@leadflow.us">contact@leadflow.us</a>
        </div>

        {/* Phone */}
        <div className="flex mt-1">
          <Phone className="mr-2" />
          <p>+88012345678</p>
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between pt-4 px-5">
      <Logo />
      <NavMenu />
      <DialogButton className={"hidden md:block"} />

      <Button
        variant={"ghost"}
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md p-4 md:hidden [&_li]:py-1">
          <ul className="space-y-2">
            <li>
              <Link href="#services">Services</Link>
            </li>
            <li>
              <Link href="#team">Team</Link>
            </li>
            <li>
              <Link href="#reviews">Reviews</Link>
            </li>
            <li>
              <Link href="#FAQ">FAQ</Link>
            </li>
            <li>
              <DialogButton className={"md:hidden"} />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

function ListItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <li className="hover:bg-accent hover:text-accent-foreground p-2">
      <div className="text-sm font-medium leading-none">{title}</div>
      <p className="line-clamp-2 text-sm pt-1 leading-snug text-muted-foreground">
        {description}
      </p>
    </li>
  );
}
