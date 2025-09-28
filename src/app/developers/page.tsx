import { DeveloperCard } from "@/components/developer-card";
import { developers } from "@/lib/placeholder-data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { Search, ListFilter, X } from "lucide-react";

const allSkills = [...new Set(developers.flatMap(dev => dev.skills))].slice(0, 8);

export default function DevelopersPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">
          Find Your Expert
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Browse our community of talented developers, vetted for quality and expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        <aside className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-headline font-semibold">Filters</h3>
              <Button variant="ghost" size="sm" className="hidden lg:inline-flex">
                Clear all
              </Button>
               <Button variant="ghost" size="icon" className="lg:hidden">
                <ListFilter className="h-5 w-5"/>
              </Button>
            </div>
            <Separator className="mb-6"/>
            <div className="space-y-8">
              <div>
                <p className="font-semibold mb-4">Skills</p>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"/>
                    <Input placeholder="Search skills..." className="pl-9"/>
                </div>
                <div className="space-y-3 mt-4">
                  {allSkills.map(skill => (
                    <div key={skill} className="flex items-center space-x-2">
                      <Checkbox id={`skill-${skill}`} />
                      <Label htmlFor={`skill-${skill}`} className="font-normal text-sm">{skill}</Label>
                    </div>
                  ))}
                </div>
                 <Button variant="link" size="sm" className="p-0 mt-2">Show more</Button>
              </div>
              
              <div>
                <p className="font-semibold mb-4">Hourly Rate (₹)</p>
                <Slider
                  defaultValue={[800, 12000]}
                  max={20000}
                  step={100}
                  className="my-6"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                    <span>₹800</span>
                    <span>₹20,000+</span>
                </div>
              </div>

               <div>
                <p className="font-semibold mb-4">Availability</p>
                <div className="flex items-center space-x-2">
                    <Checkbox id="available" />
                    <Label htmlFor="available" className="font-normal text-sm">Available for new projects</Label>
                </div>
              </div>

            </div>
          </div>
        </aside>

        <main className="lg:col-span-3">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-6">
            <div className="relative w-full sm:max-w-xs">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground"/>
                <Input placeholder="Search by name or tagline..." className="pl-10"/>
            </div>
            <div className="text-sm text-muted-foreground">
                Showing <span className="font-medium text-foreground">{developers.length}</span> results
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {developers.map((dev) => (
              <DeveloperCard key={dev.id} developer={dev} />
            ))}
          </div>
           <div className="flex justify-center mt-12">
            <Button variant="outline">Load More Developers</Button>
          </div>
        </main>
      </div>
    </div>
  );
}
