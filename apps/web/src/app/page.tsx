import Link from "next/link";
import { ArrowRight, Leaf, TrendingUp, Truck } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-6 lg:px-14 h-16 flex items-center border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <Link className="flex items-center justify-center gap-2" href="#">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl tracking-tight">FarmLink Africa</span>
        </Link>
        <nav className="ml-auto flex gap-6 sm:gap-8 items-center">
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#">
            Marketplace
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#">
            Logistics
          </Link>
          <div className="flex items-center gap-4 ml-4">
            <Link className="text-sm font-medium text-muted-foreground hover:text-foreground" href="/login">
              Log in
            </Link>
            <Link className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors" href="/signup">
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <section className="w-full py-24 md:py-32 lg:py-48 xl:py-56 bg-dot-pattern">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <div className="flex flex-col items-center space-y-8 text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                Open Agricultural Infrastructure
              </div>
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl/none">
                The Future of <span className="text-primary">Agri-Trade</span> in Africa
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-xl/relaxed">
                Connect directly with farmers, buyers, and transporters. Secure payments, track supply chains, and access agricultural analytics—all in one platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-8">
                <Link
                  className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                  href="/dashboard"
                >
                  Explore Marketplace <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                  href="#how-it-works"
                >
                  How it Works
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-20 bg-muted/30" id="features">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Built for Scale and Transparency</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Everything you need to trade agricultural produce efficiently across the continent.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-start p-6 bg-card rounded-xl border shadow-sm">
                <div className="p-3 bg-primary/10 rounded-lg mb-4">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Direct Farmer Access</h3>
                <p className="text-muted-foreground">Bypass middlemen and source directly from vetted farmers. Ensure fair pricing and quality produce.</p>
              </div>
              <div className="flex flex-col items-start p-6 bg-card rounded-xl border shadow-sm">
                <div className="p-3 bg-primary/10 rounded-lg mb-4">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Integrated Logistics</h3>
                <p className="text-muted-foreground">Seamlessly book and track transporters. Real-time updates from farm gate to your warehouse.</p>
              </div>
              <div className="flex flex-col items-start p-6 bg-card rounded-xl border shadow-sm">
                <div className="p-3 bg-primary/10 rounded-lg mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Smart Analytics</h3>
                <p className="text-muted-foreground">Make data-driven decisions with real-time market pricing, yield predictions, and supply chain insights.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 md:py-12 border-t border-border/40 bg-background">
        <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-primary" />
            <span className="font-bold">FarmLink Africa</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 FarmLink Africa. All rights reserved. Open Source under MIT.
          </p>
          <div className="flex gap-4">
            <Link className="text-sm text-muted-foreground hover:text-foreground" href="#">Terms</Link>
            <Link className="text-sm text-muted-foreground hover:text-foreground" href="#">Privacy</Link>
            <Link className="text-sm text-muted-foreground hover:text-foreground" href="#">GitHub</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
