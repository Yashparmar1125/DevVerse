import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import type { Project } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-48 w-full">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover"
          data-ai-hint="abstract tech"
        />
      </div>
      <CardHeader>
        <Badge variant="secondary" className="w-fit mb-2">{project.category}</Badge>
        <CardTitle className="text-lg font-headline leading-tight">{project.title}</CardTitle>
        <div className="flex items-center pt-2 gap-2 text-sm text-muted-foreground">
            <Avatar className="h-6 w-6">
                <AvatarImage src={project.client.avatarUrl} alt={project.client.name} data-ai-hint="person portrait" />
                <AvatarFallback>{project.client.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span>{project.client.name}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
            {project.skills.slice(0,3).map(skill => (
                <Badge key={skill} variant="outline">{skill}</Badge>
            ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center bg-muted/50 p-4">
        <div className="font-bold text-primary text-lg">
          ₹{project.budget.toLocaleString()}
        </div>
        <Button asChild variant="ghost" size="sm">
          <Link href={`/projects/${project.id}`}>
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
