import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";

export default function TalentInvitesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline flex items-center gap-2">
          <Users className="w-8 h-8 text-accent" />
          Job Invites
        </h1>
        <p className="text-muted-foreground">Review and respond to job invitations from clients.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Job Invites</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is where you can view your job invites. This page is currently under construction.</p>
        </CardContent>
      </Card>
    </div>
  );
}
