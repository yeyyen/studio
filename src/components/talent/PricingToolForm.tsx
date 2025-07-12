"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { DollarSign, Loader2, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getPriceSuggestion } from "@/app/actions"
import { useToast } from "@/hooks/use-toast"
import type { SuggestCommissionPriceOutput } from "@/ai/flows/suggest-commission-price"

const formSchema = z.object({
  skills: z.string().min(10, "Please describe your skills in at least 10 characters."),
  experienceYears: z.coerce.number().min(0, "Experience must be a positive number."),
  marketTrends: z.string().min(10, "Please describe market trends in at least 10 characters."),
})

export function PricingToolForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SuggestCommissionPriceOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      skills: "",
      experienceYears: 0,
      marketTrends: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setResult(null);

    const response = await getPriceSuggestion(values);
    
    if (response.success && response.data) {
      setResult(response.data);
      toast({
        title: "Suggestion Ready!",
        description: "We've generated a price suggestion for you.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: response.error || "There was a problem with your request.",
      });
    }
    setLoading(false);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="skills"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Skills</FormLabel>
                <FormControl>
                  <Textarea placeholder="e.g., UI/UX Design with Figma, React Frontend Development, Webflow..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="experienceYears"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Years of Experience</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="e.g., 5" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="marketTrends"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current Market Trends</FormLabel>
                <FormControl>
                  <Textarea placeholder="e.g., High demand for interactive web applications, AI integration is a plus..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={loading}>
            {loading ? (
              <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait</>
            ) : (
              <><Sparkles className="mr-2 h-4 w-4" /> Get Suggestion</>
            )}
          </Button>
        </form>
      </Form>
      {result && (
        <Card className="mt-8 bg-secondary/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="w-6 h-6 text-primary" />
              AI-Powered Price Suggestion
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Suggested Price (per hour)</p>
              <p className="text-4xl font-bold text-primary">${result.suggestedPrice.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Reasoning</p>
              <p className="text-sm text-foreground/80">{result.reasoning}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
