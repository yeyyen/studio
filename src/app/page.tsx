import { Briefcase, Users } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SignInButton } from '@/components/web3/SignInButton';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8 text-primary"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
              <path d="M2 17l10 5 10-5"></path>
              <path d="M2 12l10 5 10-5"></path>
            </svg>
            <h1 className="text-2xl font-bold text-primary font-headline">Co-Lance</h1>
          </Link>
          {/* The ConnectWallet button was here and has been removed as requested */}
        </div>
      </header>

      <main className="flex-grow flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-primary mb-4 font-headline tracking-tight">
            The Future of Freelancing is Cooperative.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Co-Lance is a Web3-powered hub where freelancers and clients build, own, and govern together. Your work, your rules, your cooperative.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-left transform hover:scale-105 transition-transform duration-300 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-accent/20 p-3 rounded-full">
                    <Briefcase className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold font-headline">Join as a Talent</CardTitle>
                    <CardDescription>Offer your skills, find projects, and earn in a fair, decentralized ecosystem.</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <SignInButton redirectTo="/talent/dashboard" className="w-full" size="lg">
                  I'm a Freelancer
                </SignInButton>
              </CardContent>
            </Card>

            <Card className="text-left transform hover:scale-105 transition-transform duration-300 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-accent/20 p-3 rounded-full">
                    <Users className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold font-headline">Join as a Client</CardTitle>
                    <CardDescription>Find top-tier talent, manage projects seamlessly, and be part of the community.</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                 <SignInButton redirectTo="/client/dashboard" className="w-full" size="lg">
                  I'm a Client
                </SignInButton>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Co-Lance. All rights reserved.</p>
      </footer>
    </div>
  );
}
