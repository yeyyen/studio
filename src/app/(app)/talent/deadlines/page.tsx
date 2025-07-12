import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarClock } from "lucide-react";

export default function TalentDeadlinesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline flex items-center gap-2">
          <CalendarClock className="w-8 h-8 text-accent" />
          Deadlines
        </h1>
        <p className="text-muted-foreground">Keep track of your project deadlines.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Deadlines</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is where you can view your deadlines. This page is currently under construction.</p>
        </CardContent>
      </Card>
    </div>
  );
}
