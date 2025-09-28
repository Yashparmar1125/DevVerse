import Link from 'next/link';
import {
  Activity,
  ArrowRight,
  Code2,
  Rocket,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { DeveloperCard } from '@/components/developer-card';
import { ProjectCard } from '@/components/project-card';
import { developers, projects } from '@/lib/placeholder-data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const features = [
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: 'AI-Powered Matching',
    description:
      'Our intelligent system analyzes your project needs to connect you with the perfect developer, saving you time and effort.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Secure Escrow Payments',
    description:
      'Pay with confidence. Funds are held securely in escrow and released only when project milestones are met to your satisfaction.',
  },
  {
    icon: <Activity className="h-8 w-8 text-primary" />,
    title: 'Real-time Progress Tracking',
    description:
      'Stay in the loop with a transparent dashboard. Monitor tasks, milestones, and communication all in one place.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Student Project Assistance',
    description:
      'A dedicated space for students to find project help, with templates, documentation services, and more.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-primary/5 to-background animated-gradient -z-10" />
        <div className="container mx-auto px-4 md:px-6 text-center fade-in-up">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Where Ideas Meet Developers.
            </h1>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              DevVerse is the ultimate platform to seamlessly connect clients
              with skilled developers for projects of any scale.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg" className="animate-pulse">
                <Link href="/ai-matcher">
                  Find a Developer <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/projects">Browse Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
              Why Choose DevVerse?
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg mt-2">
              Everything you need to launch and manage your software projects.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => (
              <div key={feature.title} className="text-center fade-in-up" style={{ animationDelay: `${i * 150}ms`}}>
                <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-full">
                        {feature.icon}
                    </div>
                </div>
                <h3 className="text-xl font-headline font-bold">
                  {feature.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="w-full py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
              Get Started in 3 Easy Steps
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="fade-in-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                    1
                  </span>
                  Post Your Project
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Describe your project needs, budget, and timeline. Our intuitive
                  form makes it easy to provide all the necessary details.
                </p>
              </CardContent>
            </Card>
            <Card className="fade-in-up" style={{ animationDelay: '200ms' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                    2
                  </span>
                  Find Your Match
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Use our AI Matcher to get instant developer recommendations, or
                  browse profiles and receive bids from our talented community.
                </p>
              </CardContent>
            </Card>
            <Card className="fade-in-up" style={{ animationDelay: '400ms' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                    3
                  </span>
                  Build & Collaborate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Work with your chosen developer, track progress through
                  milestones, and bring your idea to life with our powerful toolset.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="projects" className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 fade-in-up">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
              Featured Projects
            </h2>
            <Button asChild variant="link">
              <Link href="/projects">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <Carousel
            opts={{
              align: 'start',
            }}
            className="w-full"
          >
            <CarouselContent>
              {projects.slice(0, 5).map((project) => (
                <CarouselItem
                  key={project.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <ProjectCard project={project} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section id="developers" className="w-full py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6 fade-in-up">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
              Top Developers
            </h2>
            <Button asChild variant="link">
              <Link href="/developers">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <Carousel
            opts={{
              align: 'start',
            }}
            className="w-full"
          >
            <CarouselContent>
              {developers.slice(0, 5).map((dev) => (
                <CarouselItem
                  key={dev.id}
                  className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <div className="p-1">
                    <DeveloperCard developer={dev} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </div>
  );
}
