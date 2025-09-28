import Image from 'next/image';
import Link from 'next/link';
import { Star, MapPin, Briefcase, CheckCircle2 } from 'lucide-react';
import type { Developer } from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface DeveloperCardProps {
  developer: Developer;
}

export function DeveloperCard({ developer }: DeveloperCardProps) {
  return (
    <Card className="flex flex-col h-full transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden group">
        <CardHeader className="p-0 relative">
            <div className="absolute top-3 right-3 z-10">
                 <div className={cn("flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-medium text-primary-foreground", developer.isAvailable ? "bg-green-600" : "bg-slate-500")}>
                    {developer.isAvailable ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Briefcase className="h-3.5 w-3.5" />}
                    <span>{developer.isAvailable ? 'Available' : 'Unavailable'}</span>
                </div>
            </div>
            <div className="flex justify-center items-center h-32 bg-muted/30">
                <Avatar className="h-28 w-28 border-4 border-background -mb-14 z-10 shadow-md">
                    <AvatarImage src={developer.avatarUrl} alt={developer.name} data-ai-hint="person portrait" />
                    <AvatarFallback>{developer.name.charAt(0)}</AvatarFallback>
                </Avatar>
            </div>
        </CardHeader>
      
      <CardContent className="flex-grow text-center pt-16">
          <Link href={`/developers/${developer.id}`} className="group-hover:text-primary transition-colors">
            <h3 className="text-lg font-headline font-bold">{developer.name}</h3>
          </Link>
          <p className="text-sm text-muted-foreground mt-1 h-10">{developer.tagline}</p>
        
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {developer.skills.slice(0, 3).map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
          {developer.skills.length > 3 && (
            <Badge key="more" variant="outline">
              +{developer.skills.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>

      <div className="p-4 border-t flex justify-around text-sm text-muted-foreground bg-muted/30">
            <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="font-semibold text-foreground">{developer.rating.toFixed(1)}</span>
                ({developer.reviews})
            </div>
            {developer.hourlyRate && (
                 <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">₹{developer.hourlyRate.toLocaleString()}/hr</span>
                </div>
            )}
      </div>

       <div className="p-4">
        <Button asChild className="w-full">
          <Link href={`/developers/${developer.id}`}>View Profile</Link>
        </Button>
       </div>
    </Card>
  );
}
