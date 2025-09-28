import Link from 'next/link';
import { Code2, Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2 mb-2">
              <Code2 className="h-6 w-6 text-primary" />
              <span className="font-bold font-headline text-lg">DevVerse</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Where ideas meet developers. Seamlessly.
            </p>
            <div className="flex gap-4 mt-4">
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="#" aria-label="GitHub">
                <Github className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4 font-headline">For Clients</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary">
                  Browse Projects
                </Link>
              </li>
              <li>
                <Link href="/developers" className="text-sm text-muted-foreground hover:text-primary">
                  Find a Developer
                </Link>
              </li>
              <li>
                <Link href="/ai-matcher" className="text-sm text-muted-foreground hover:text-primary">
                  AI Matcher
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  How it Works
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 font-headline">For Developers</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary">
                  Find Work
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Create Profile
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Student Projects
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 font-headline">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} DevVerse. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
