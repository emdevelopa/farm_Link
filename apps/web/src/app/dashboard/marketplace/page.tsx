export default function MarketplacePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Marketplace</h1>
        <div className="flex gap-2">
          <input className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="Search produce..." />
          <button className="h-10 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium">Filter</button>
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden">
            <div className="aspect-video w-full bg-muted flex items-center justify-center text-muted-foreground">
              [Produce Image]
            </div>
            <div className="p-4 space-y-2">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-lg">Premium Grade Maize</h3>
                <span className="font-bold text-primary">$12.50</span>
              </div>
              <p className="text-sm text-muted-foreground">Farmer: John Doe</p>
              <p className="text-xs text-muted-foreground">Location: Nairobi, Kenya</p>
              <div className="pt-2">
                <button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 px-3 rounded-md text-sm font-medium">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
