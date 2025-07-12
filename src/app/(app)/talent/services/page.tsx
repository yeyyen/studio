import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

export default function TalentServicesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline flex items-center gap-2">
          <Briefcase className="w-8 h-8 text-accent" />
          My Services
        </h1>
        <p className="text-muted-foreground">Manage your service offerings and gigs.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>My Services</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is where you can manage your services. This page is currently under construction.</p>
        </CardContent>
      </Card>
    </div>
  );
}
