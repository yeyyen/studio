
"use client";

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { StarRating } from '../shared/StarRating';

const reviewSchema = z.object({
  rating: z.number().min(1, { message: 'Please select a rating.' }),
  comment: z.string().min(10, { message: 'Comment must be at least 10 characters.' }),
});

export type ReviewData = z.infer<typeof reviewSchema>;

interface LeaveReviewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (data: ReviewData) => void;
  service: {
    id: string;
    title: string;
    freelancer: {
        name: string;
        avatar: string;
        aiHint?: string;
    }
  }
}

export function LeaveReviewDialog({ open, onOpenChange, onSave, service }: LeaveReviewDialogProps) {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof reviewSchema>>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      rating: 0,
      comment: "",
    },
  });
  
  useEffect(() => {
      form.reset({ rating: 0, comment: "" });
  }, [open, form]);

  const onSubmit = (values: z.infer<typeof reviewSchema>) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      onSave(values);
      setLoading(false);
      onOpenChange(false);
      toast({
        title: `Review Submitted!`,
        description: `Thank you for your feedback on "${service.title}".`,
      });
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Leave a Review</DialogTitle>
          <DialogDescription>Share your experience working with {service.freelancer.name} on the "{service.title}" project.</DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-3 py-4">
            <Avatar>
                <AvatarImage src={service.freelancer.avatar} alt={service.freelancer.name} data-ai-hint={service.freelancer.aiHint} />
                <AvatarFallback>{service.freelancer.name.substring(0,2)}</AvatarFallback>
            </Avatar>
            <div>
                <p className="font-semibold">{service.freelancer.name}</p>
                <p className="text-sm text-muted-foreground">{service.title}</p>
            </div>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Rating</FormLabel>
                  <FormControl>
                    <StarRating rating={field.value} setRating={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Review</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={`Share details of your experience...`}
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="secondary">Cancel</Button>
              </DialogClose>
              <Button type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
                  </>
                ) : (
                  <>
                    <Star className="mr-2 h-4 w-4" /> Submit Review
                  </>
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
