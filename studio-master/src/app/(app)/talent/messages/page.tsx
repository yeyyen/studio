import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessagesSquare } from "lucide-react";

export default function TalentMessagesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline flex items-center gap-2">
          <MessagesSquare className="w-8 h-8 text-accent" />
          Messages
        </h1>
        <p className="text-muted-foreground">Communicate with your clients.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>My Messages</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is where you can see your messages. This page is currently under construction.</p>
        </CardContent>
      </Card>
    </div>
  );
}
