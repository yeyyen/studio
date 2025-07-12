
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import {
  Briefcase,
  ClipboardCheck,
  DollarSign,
  LayoutDashboard,
  Search,
  Settings,
  Sparkles,
  Star,
  Users,
  Wallet,
  CalendarClock
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const talentLinks = [
  { href: "/talent/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/talent/services", label: "My Services", icon: Briefcase },
  { href: "/talent/invites", label: "Job Invites", icon: Users },
  { href: "/talent/deadlines", label: "Deadlines", icon: CalendarClock },
  { href: "/talent/reviews", label: "Reviews", icon: Star },
  { href: "/talent/pricing-tool", label: "Pricing Tool", icon: Sparkles },
];

const clientLinks = [
  { href: "/client/dashboard", label: "Find Talent", icon: Search },
  { href: "/client/projects", label: "My Projects", icon: Briefcase },
  { href: "/client/wallet", label: "E-Wallet", icon: Wallet },
  { href: "/client/reviews", label: "Rate Services", icon: ClipboardCheck },
];

export function AppSidebarContent({ role }: { role: 'talent' | 'client' }) {
  const pathname = usePathname();
  const links = role === 'talent' ? talentLinks : clientLinks;

  return (
    <>
      <SidebarHeader>
        <Link href="/" className="flex items-center gap-2">
           <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8 text-sidebar-primary"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
              <path d="M2 17l10 5 10-5"></path>
              <path d="M2 12l10 5 10-5"></path>
            </svg>
          <h1 className="text-xl font-semibold text-sidebar-foreground font-headline">
            Co-Lance
          </h1>
        </Link>
      </SidebarHeader>

      <SidebarMenu className="flex-1 px-2">
        {links.map((link) => (
          <SidebarMenuItem key={link.href}>
            <Link href={link.href} passHref>
              <SidebarMenuButton
                asChild
                isActive={pathname === link.href}
                className="w-full justify-start"
              >
                <>
                  <link.icon className="mr-3 h-5 w-5" />
                  <span>{link.label}</span>
                </>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>

      <SidebarSeparator />

      <SidebarFooter>
        <div className="flex items-center gap-3 p-2">
          <Avatar>
            <AvatarImage src="https://placehold.co/40x40.png" alt="@username" data-ai-hint="profile avatar" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-semibold text-sidebar-foreground truncate">
              User Name
            </p>
            <p className="text-xs text-sidebar-foreground/70 truncate">
              user@email.com
            </p>
          </div>
          <Link href="#">
             <SidebarMenuButton size="icon" className="h-8 w-8 shrink-0">
                <Settings className="h-4 w-4"/>
             </SidebarMenuButton>
          </Link>
        </div>
      </SidebarFooter>
    </>
  );
}
