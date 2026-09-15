import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import { CarsContent } from "./_components/content";
import { getCars } from "./_data-access/get-cars";

export default function CarrosPage() {
  const cars = getCars();

  return (
    <div className="flex flex-1 flex-col bg-background">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <CarsContent cars={cars} />
      </main>
      <SiteFooter />
    </div>
  );
}
