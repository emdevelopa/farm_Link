import Link from "next/link";
import { LayoutDashboard, Store, ShoppingBag, MessageSquare, Truck, Wallet, Settings } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-muted/20">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-card flex flex-col">
        <div className="h-16 flex items-center px-6 border-b">
          <span className="font-bold text-lg text-primary">FarmLink Africa</span>
        </div>
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-md bg-primary/10 text-primary font-medium">
            <LayoutDashboard className="h-5 w-5" /> Overview
          </Link>
          <Link href="/dashboard/marketplace" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground font-medium transition-colors">
            <Store className="h-5 w-5" /> Marketplace
          </Link>
          <Link href="/dashboard/orders" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground font-medium transition-colors">
            <ShoppingBag className="h-5 w-5" /> Orders
          </Link>
          <Link href="/dashboard/messages" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground font-medium transition-colors">
            <MessageSquare className="h-5 w-5" /> Messages
          </Link>
          <Link href="/dashboard/logistics" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground font-medium transition-colors">
            <Truck className="h-5 w-5" /> Logistics
          </Link>
          <Link href="/dashboard/wallet" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground font-medium transition-colors">
            <Wallet className="h-5 w-5" /> Wallet
          </Link>
        </nav>
        <div className="p-4 border-t">
          <Link href="/dashboard/settings" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground font-medium transition-colors">
            <Settings className="h-5 w-5" /> Settings
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 border-b bg-card flex items-center justify-end px-6">
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
              JD
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
