import Logo from "../../../public/logo.svg"
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetTrigger } from "../ui/sheet";
import { Button} from "../ui/button";

import {
  CircleUser,
  Menu,
  Search,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { getSession, logout } from "@/lib/actions";




const Navbar = async () => {
  const session = await getSession()
  
  return (
    <>
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-[#F2F2F0] px-4 md:px-6">
        <Image
          priority
          src={Logo}
          alt="TaoBin-Logo"
          height={32}
          width={32}
        />
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="/dashboard"
            className="text-foreground text-[#513C2F] transition-colors hover:text-foreground"
          >
            Dashboard
          </Link>

          <Link
            href="/status"
            className="text-foreground transition-colors hover:text-foreground"
          >
            Status
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search"
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          {session.isLoggedIn ?  
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <CircleUser className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>{session.username}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <form action={logout}>
                  <Button  type="submit" variant={"ghost"} className="w-full">
                    logout
                  </Button>
                </form>
              </DropdownMenuContent>
            </DropdownMenu>
                   :
            <Link href="/login">login</Link>
          }
          
        </div>
      </header>
    </>
  );
}

export default Navbar