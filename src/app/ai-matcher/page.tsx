import { AiMatcherClient } from "./ai-matcher-client";

export default function AiMatcherPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">
          Find Your Perfect Developer with AI
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Describe your project, and our AI will suggest the best-suited developers from our talented community based on their skills, experience, and availability.
        </p>
      </div>
      <div className="max-w-3xl mx-auto mt-12">
        <AiMatcherClient />
      </div>
    </div>
  );
}
