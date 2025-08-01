import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function TalentReviewsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline flex items-center gap-2">
          <Star className="w-8 h-8 text-accent" />
          My Reviews
        </h1>
        <p className="text-muted-foreground">See what clients are saying about your work.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>My Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is where you can see your reviews. This page is currently under construction.</p>
        </CardContent>
      </Card>
    </div>
  );
}
