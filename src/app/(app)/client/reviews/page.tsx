import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardCheck } from "lucide-react";

export default function ClientReviewsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline flex items-center gap-2">
          <ClipboardCheck className="w-8 h-8 text-accent" />
          Rate Services
        </h1>
        <p className="text-muted-foreground">Provide feedback and rate the services you've received.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Rate Services</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is where you can rate services. This page is currently under construction.</p>
        </CardContent>
      </Card>
    </div>
  );
}
