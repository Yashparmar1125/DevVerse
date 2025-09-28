'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sparkles } from 'lucide-react';
import { aiProjectMatching, type AIProjectMatchingOutput } from '@/ai/flows/ai-project-matching';
import { useToast } from '@/hooks/use-toast';
import { developers } from '@/lib/placeholder-data';
import { DeveloperCard } from '@/components/developer-card';
import type { Developer } from '@/lib/types';

const formSchema = z.object({
  projectDescription: z.string().min(50, {
    message: 'Project description must be at least 50 characters.',
  }),
  requiredSkills: z.string().min(3, {
    message: 'Please list at least one skill.',
  }),
  budget: z.coerce.number().min(8000, {
    message: 'Budget must be at least ₹8000.',
  }),
  deadline: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date format."
  }),
});

export function AiMatcherClient() {
  const [isLoading, setIsLoading] = useState(false);
  const [matchResult, setMatchResult] = useState<AIProjectMatchingOutput | null>(null);
  const [matchedDevelopers, setMatchedDevelopers] = useState<Developer[]>([]);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectDescription: '',
      requiredSkills: '',
      budget: 80000,
      deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setMatchResult(null);
    setMatchedDevelopers([]);

    try {
      const result = await aiProjectMatching(values);
      setMatchResult(result);
      
      const foundDevelopers = developers.filter(dev => result.suggestedDevelopers.includes(dev.id));
      setMatchedDevelopers(foundDevelopers);

    } catch (error) {
      console.error('AI Matching failed:', error);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with the AI matching service. Please try again later.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Card className="border-border/40">
        <CardHeader>
          <CardTitle className="font-headline">Project Details</CardTitle>
          <CardDescription>
            Provide as much detail as possible for the best matches.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="projectDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., I need a full-stack developer to build a social media app for pet owners..."
                        rows={6}
                        className="text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="requiredSkills"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Required Skills</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., React, Node.js, Firebase" {...field} />
                    </FormControl>
                    <FormDescription>
                      Comma-separated list of skills.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Budget (INR)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="80000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="deadline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Deadline</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" disabled={isLoading} className="w-full" size="lg">
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Sparkles className="mr-2 h-4 w-4" />
                )}
                {isLoading ? 'Finding Your Match...' : 'Find Match'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {isLoading && (
         <div className="text-center my-12">
            <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
            <p className="mt-4 text-muted-foreground">AI is analyzing your project...</p>
        </div>
      )}

      {matchResult && (
        <div className="mt-12">
          <div className="text-center">
            <h2 className="text-3xl font-headline font-bold">Your AI-Powered Matches</h2>
          </div>
          <Card className="mt-6 bg-primary/5 border-primary/20">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline"><Sparkles className="h-5 w-5 text-primary"/> AI's Reasoning</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-foreground/80">{matchResult.reasoning}</p>
            </CardContent>
          </Card>
           <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {matchedDevelopers.length > 0 ? (
                    matchedDevelopers.map(dev => <DeveloperCard key={dev.id} developer={dev} />)
                ) : (
                    <p className="col-span-full text-center text-muted-foreground">
                        The AI suggested developers that could not be found in our current database.
                    </p>
                )}
           </div>
        </div>
      )}
    </>
  );
}
