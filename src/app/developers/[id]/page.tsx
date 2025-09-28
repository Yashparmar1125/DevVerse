import { developers } from '@/lib/placeholder-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, Briefcase, IndianRupee, CheckCircle, MessageSquare, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function DeveloperProfilePage({ params }: { params: { id: string } }) {
  const developer = developers.find((dev) => dev.id === params.id);

  if (!developer) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Sidebar */}
        <aside className="lg:col-span-1 space-y-8">
          <Card className="text-center p-6">
            <Avatar className="h-32 w-32 mx-auto border-4 border-primary/20 shadow-md">
              <AvatarImage src={developer.avatarUrl} alt={developer.name} data-ai-hint="person portrait" />
              <AvatarFallback>{developer.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <h1 className="text-2xl font-headline font-bold mt-4">{developer.name}</h1>
            <p className="text-muted-foreground mt-1">{developer.tagline}</p>
            <div className="flex justify-center items-center gap-2 mt-3 text-amber-500">
                <Star className="w-5 h-5 fill-current" />
                <span className="font-bold text-lg text-foreground">{developer.rating.toFixed(1)}</span>
                <span className="text-sm text-muted-foreground">({developer.reviews} reviews)</span>
            </div>
             <Button size="lg" className="w-full mt-6">
                <MessageSquare className="mr-2 h-4 w-4"/>
                Send Message
            </Button>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-lg">Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground flex items-center gap-2"><IndianRupee className="w-4 h-4"/> Hourly Rate</span>
                <span className="font-semibold text-foreground">₹{developer.hourlyRate?.toLocaleString() ?? 'N/A'}</span>
              </div>
               <div className="flex justify-between items-center">
                <span className="text-muted-foreground flex items-center gap-2"><Briefcase className="w-4 h-4"/> Projects Completed</span>
                <span className="font-semibold text-foreground">{developer.completedProjects}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground flex items-center gap-2"><CheckCircle className="w-4 h-4"/> Availability</span>
                 <div className="flex items-center gap-2">
                    <div className={`w-2.5 h-2.5 rounded-full ${developer.isAvailable ? 'bg-green-500' : 'bg-slate-500'}`}/>
                    <span className="font-semibold text-foreground">{developer.isAvailable ? 'Available' : 'Unavailable'}</span>
                 </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-lg">Skills</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {developer.skills.map(skill => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </CardContent>
          </Card>
        </aside>

        {/* Right Content */}
        <main className="lg:col-span-2">
           <Tabs defaultValue="about">
                <TabsList>
                    <TabsTrigger value="about">About</TabsTrigger>
                    <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                <TabsContent value="about" className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-xl">About {developer.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-p:text-muted-foreground max-w-none">
                            <p>{developer.description}</p>
                            <p>With a robust portfolio of {developer.completedProjects} successfully delivered projects, I have a proven track record of shipping high-quality software on time and within budget. My clients appreciate my clear communication, problem-solving skills, and dedication to their success.</p>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="portfolio" className="mt-6">
                     <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-xl">Portfolio</CardTitle>
                             <CardDescription>A selection of my recent work.</CardDescription>
                        </CardHeader>
                        <CardContent>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {Array.from({ length: 2 }).map((_, index) => (
                                    <div key={index} className="border rounded-lg p-4 group relative">
                                        <h4 className="font-bold font-headline">Project Name {index + 1}</h4>
                                        <p className="text-sm text-muted-foreground mt-1">A brief description of the project and the technologies used.</p>
                                        <Button variant="ghost" size="sm" className="mt-2 text-primary group-hover:underline">
                                            View Project <ExternalLink className="ml-2 h-3 w-3"/>
                                        </Button>
                                    </div>
                                ))}
                           </div>
                           <p className="text-center text-muted-foreground mt-8">Portfolio is currently being updated. Please check back soon.</p>
                        </CardContent>
                    </Card>
                </TabsContent>
                 <TabsContent value="reviews" className="mt-6">
                     <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-xl">Client Reviews</CardTitle>
                            <CardDescription>What my clients are saying.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                             {Array.from({ length: 2 }).map((_, index) => (
                                <div key={index} className="border-b pb-4 last:border-b-0">
                                    <div className="flex items-start gap-4">
                                        <Avatar>
                                            <AvatarImage src={`https://picsum.photos/seed/client${index+1}/100/100`} data-ai-hint="person portrait" />
                                            <AvatarFallback>C</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h4 className="font-semibold">Client Name</h4>
                                                <div className="flex items-center text-amber-500">
                                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current"/>)}
                                                </div>
                                            </div>
                                            <p className="text-sm text-muted-foreground mt-2">"{developer.name} was an absolute pleasure to work with. Professional, timely, and the quality of work was exceptional. Highly recommended!"</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </main>
      </div>
    </div>
  );
}
