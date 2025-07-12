import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Star, MessageSquare, Briefcase } from "lucide-react";

const freelancers = [
  {
    name: "John Doe",
    title: "Senior Frontend Developer",
    rating: 5,
    reviews: 42,
    skills: ["React", "TypeScript", "Next.js", "GraphQL"],
    image: "https://placehold.co/80x80.png",
    aiHint: "professional man",
    price: 75,
  },
  {
    name: "Maria Garcia",
    title: "Brand & Logo Designer",
    rating: 5,
    reviews: 31,
    skills: ["Branding", "Illustrator", "Photoshop", "Figma"],
    image: "https://placehold.co/80x80.png",
    aiHint: "creative woman",
    price: 60,
  },
  {
    name: "Sam Wilson",
    title: "Cloud Infrastructure Expert",
    rating: 4.9,
    reviews: 55,
    skills: ["AWS", "Docker", "Kubernetes", "Terraform"],
    image: "https://placehold.co/80x80.png",
    aiHint: "tech professional",
    price: 90,
  },
    {
    name: "Emily Carter",
    title: "Content Writer & SEO Specialist",
    rating: 4.8,
    reviews: 68,
    skills: ["SEO", "Copywriting", "Content Strategy"],
    image: "https://placehold.co/80x80.png",
    aiHint: "woman writer",
    price: 50,
  },
   {
    name: "David Lee",
    title: "Mobile App Developer (iOS & Android)",
    rating: 4.9,
    reviews: 45,
    skills: ["Swift", "Kotlin", "React Native", "Firebase"],
    image: "https://placehold.co/80x80.png",
    aiHint: "male developer",
    price: 85,
  },
    {
    name: "Chloe Chen",
    title: "Data Scientist & ML Engineer",
    rating: 5,
    reviews: 28,
    skills: ["Python", "TensorFlow", "Scikit-learn", "Pandas"],
    image: "https://placehold.co/80x80.png",
    aiHint: "asian woman scientist",
    price: 110,
  },
];

export default function ClientDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Find Top-Tier Freelancers</h1>
        <p className="text-muted-foreground">Discover the perfect talent for your next project.</p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input placeholder="Search by skill, name, or service (e.g., 'React developer')" className="pl-10 h-12" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {freelancers.map((freelancer) => (
          <Card key={freelancer.name} className="flex flex-col transform hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-start gap-4">
                <Avatar className="h-20 w-20 border">
                  <AvatarImage src={freelancer.image} alt={freelancer.name} data-ai-hint={freelancer.aiHint} />
                  <AvatarFallback>{freelancer.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-xl font-headline">{freelancer.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{freelancer.title}</p>
                   <div className="flex items-center gap-1 mt-1">
                    <Star className="w-4 h-4 text-accent fill-accent"/>
                    <span className="font-semibold">{freelancer.rating}</span>
                    <span className="text-sm text-muted-foreground">({freelancer.reviews} reviews)</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="flex flex-wrap gap-2 mb-4">
                {freelancer.skills.map(skill => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
              <p className="text-lg font-semibold text-right">${freelancer.price}<span className="text-sm font-normal text-muted-foreground">/hr</span></p>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button variant="outline" className="w-full"><MessageSquare className="mr-2 h-4 w-4" /> Message</Button>
              <Button className="w-full"><Briefcase className="mr-2 h-4 w-4" /> Hire</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
       <div className="flex justify-center">
        <Button variant="outline">Load More Freelancers</Button>
      </div>
    </div>
  )
}
