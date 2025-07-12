import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

export default function ClientProjectsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline flex items-center gap-2">
          <Briefcase className="w-8 h-8 text-accent" />
          My Projects
        </h1>
        <p className="text-muted-foreground">Manage your ongoing and completed projects.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>My Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is where you can manage your projects. This page is currently under construction.</p>
        </CardContent>
      </Card>
    </div>
  );
}
