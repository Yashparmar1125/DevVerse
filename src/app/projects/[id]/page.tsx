import { projects } from '@/lib/placeholder-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Tag, Briefcase, IndianRupee, User } from 'lucide-react';
import Link from 'next/link';

export default function ProjectDetailsPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 py-12">
        {/* Header Section */}
        <div className="md:flex items-center justify-between">
            <div>
                <Badge variant="secondary" className="mb-2">{project.category}</Badge>
                <h1 className="text-3xl md:text-4xl font-headline font-bold tracking-tighter">
                {project.title}
                </h1>
                <div className="flex items-center mt-3 gap-2 text-muted-foreground">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src={project.client.avatarUrl} alt={project.client.name} data-ai-hint="person portrait" />
                        <AvatarFallback>{project.client.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span>Posted by <span className="font-medium text-foreground">{project.client.name}</span></span>
                </div>
            </div>
            <div className="mt-6 md:mt-0 flex-shrink-0">
                <Button size="lg" className="w-full md:w-auto">Apply Now (₹{project.budget.toLocaleString()})</Button>
            </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg mb-12">
                <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                    data-ai-hint="abstract tech"
                />
            </div>
            <div className="prose prose-p:text-muted-foreground max-w-none">
                <h2 className="text-2xl font-headline font-bold mb-4">Project Description</h2>
                <p>{project.description}</p>
                <p>We are looking for a talented developer to join our team and help bring this vision to life. The ideal candidate will have strong experience in the required skills and a passion for creating high-quality user experiences. This is a great opportunity to work on an exciting project with a dynamic team.</p>
            </div>
        </div>

        <aside className="lg:col-span-1 space-y-8">
            <Card>
                 <CardHeader>
                    <CardTitle className="font-headline text-lg">Project Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                    <div className="flex justify-between items-center">
                        <span className="text-muted-foreground flex items-center gap-2"><IndianRupee className="w-4 h-4"/> Budget</span>
                        <span className="font-bold text-primary text-base">₹{project.budget.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-muted-foreground flex items-center gap-2"><Calendar className="w-4 h-4"/> Deadline</span>
                        <span className="font-semibold text-foreground">{new Date(project.deadline).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-muted-foreground flex items-center gap-2"><Tag className="w-4 h-4"/> Category</span>
                        <Badge variant="outline">{project.category}</Badge>
                    </div>
                </CardContent>
            </Card>

             <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-lg">Required Skills</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                    {project.skills.map(skill => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                </CardContent>
             </Card>

             <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-lg">About the Client</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center gap-4">
                     <Avatar className="h-14 w-14">
                        <AvatarImage src={project.client.avatarUrl} alt={project.client.name} data-ai-hint="person portrait" />
                        <AvatarFallback>{project.client.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <h4 className="font-semibold">{project.client.name}</h4>
                        <p className="text-xs text-muted-foreground">2 projects posted</p>
                        <Link href="#" className="text-xs text-primary hover:underline mt-1 inline-block">View Profile</Link>
                    </div>
                </CardContent>
             </Card>
        </aside>
      </div>
    </div>
  );
}
