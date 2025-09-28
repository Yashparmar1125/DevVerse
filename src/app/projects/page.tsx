import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/placeholder-data";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">
          Discover Your Next Opportunity
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Explore a wide range of projects posted by clients from students to startups.
        </p>
        <div className="mt-8 max-w-lg mx-auto">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground"/>
                <Input placeholder="Search by category or keyword..." className="pl-10"/>
            </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
