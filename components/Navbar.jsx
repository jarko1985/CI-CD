import Image from "next/image";
import LOGO from "@/public/images/logo1.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
Button
import Link from "next/link";
import { Button } from "./ui/button";
import ThemeSwitcher from "./ThemeSwitcher";
import LangSwitcher from "./LangSwitcher";

const components = {
  group1: [
    {
      title: "Crypto Trading",
      link: "#",
    },
    {
      title: "Crypto Advice",
      link: "#",
    },
    {
      title: "Open Live Account",
      link: "#",
    },
    {
      title: "Open Demo Account",
      link: "#",
    },
    {
      title: "Tabs",
      link: "#",
    },
    {
      title: "Tooltip",
      link: "#",
    },
  ],
  group2: [
    {
      title: "Crypto",
      link: "#",
    },
    {
      title: "Forex",
      link: "#",
    },
    {
      title: "Indices",
      link: "#",
    },
    {
      title: "Commodoties",
      link: "#",
    },
    {
      title: "Stocks",
      link: "#",
    },
    {
      title: "Shares",
      link: "#",
    },
  ],
};

const Navbar = () => {
  return (
    <nav className="py-6 bg-primary dark:bg-primary">
      <div className="flex justify-around">
        <div>
          <Image src={LOGO} alt="Logo Image" />
        </div>
        <div className="md:block hidden">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            shadcn/ui
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Beautifully designed components built with Radix UI
                            and Tailwind CSS.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <Link href="/">
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </Link>

                    <Link href="#">
                      How to install dependencies and structure your app.
                    </Link>
                    <Link href="#">
                      Styles for headings, paragraphs, lists...etc
                    </Link>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Trading</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[500px]">
                    {components.group1.map((component) => (
                      <Link key={component.title} href={component.link}>
                        {component.title}
                      </Link>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[500px]">
                    {components.group2.map((component) => (
                      <Link key={component.title} href={component.link}>
                        {component.title}
                      </Link>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-2">
        <Sheet>
      <SheetTrigger asChild >
        <Button className='md:hidden' variant="outline">
                    opn
        </Button>
      </SheetTrigger>
      <SheetContent className='md:hidden'>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
        </Sheet>  
        <ThemeSwitcher/>   
        <LangSwitcher/>     
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
