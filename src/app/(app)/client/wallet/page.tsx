import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet } from "lucide-react";

export default function ClientWalletPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline flex items-center gap-2">
          <Wallet className="w-8 h-8 text-accent" />
          E-Wallet
        </h1>
        <p className="text-muted-foreground">Manage your funds and transactions.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>E-Wallet</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is where you can manage your wallet. This page is currently under construction.</p>
        </CardContent>
      </Card>
    </div>
  );
}
