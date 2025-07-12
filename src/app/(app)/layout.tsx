"use client"
import { usePathname } from 'next/navigation'
import { SidebarProvider, Sidebar, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebarContent } from '@/components/shared/AppSidebarContent'
import { Button } from '@/components/ui/button'
import { Bell, UserCircle } from 'lucide-react'
import { ConnectWallet } from '@/components/web3/ConnectWallet'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const role = pathname.startsWith('/talent') ? 'talent' : 'client'

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-background">
        <Sidebar>
          <AppSidebarContent role={role} />
        </Sidebar>
        <SidebarInset>
          <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6 lg:px-8">
            <SidebarTrigger className="md:hidden" />
            <div className="flex-1">
              {/* Could add breadcrumbs or page title here */}
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Button>
              <ConnectWallet />
              <Button variant="ghost" size="icon">
                <UserCircle className="h-6 w-6" />
                <span className="sr-only">Profile</span>
              </Button>
            </div>
          </header>
          <main className="p-4 sm:p-6 lg:p-8">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
