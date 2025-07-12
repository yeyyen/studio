import { PricingToolForm } from "@/components/talent/PricingToolForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export default function PricingToolPage() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
       <div>
        <h1 className="text-3xl font-bold font-headline flex items-center gap-2">
          <Sparkles className="w-8 h-8 text-accent" />
          AI-Powered Pricing Tool
        </h1>
        <p className="text-muted-foreground">Get data-driven price suggestions for your services to stay competitive.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Suggest Commission Price</CardTitle>
          <CardDescription>
            Fill in the details below to get an AI-generated price suggestion for your freelance services. 
            This tool analyzes your skills, experience, and market trends to provide a fair and competitive price range.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <PricingToolForm />
        </CardContent>
      </Card>
    </div>
  );
}
