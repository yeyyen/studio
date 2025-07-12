import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

export default function TalentEarningsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline flex items-center gap-2">
          <DollarSign className="w-8 h-8 text-accent" />
          Earnings
        </h1>
        <p className="text-muted-foreground">Track your earnings and payouts.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Earnings Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is where you can see your earnings. This page is currently under construction.</p>
        </CardContent>
      </Card>
    </div>
  );
}
