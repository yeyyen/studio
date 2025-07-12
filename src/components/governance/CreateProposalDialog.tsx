
"use client";

import { useState } from 'react';
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
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PlusCircle, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const proposalSchema = z.object({
  title: z.string().min(10, { message: 'Title must be at least 10 characters.' }),
  description: z.string().min(50, { message: 'Description must be at least 50 characters.' }),
});

const TOKEN_SYMBOL = "CLT";
const PROPOSAL_DEPOSIT = 100;

export function CreateProposalDialog() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof proposalSchema>>({
    resolver: zodResolver(proposalSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit = (values: z.infer<typeof proposalSchema>) => {
    setLoading(true);
    // Simulate API call to submit proposal
    console.log("Submitting proposal:", values);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
      form.reset();
      toast({
        title: 'Proposal Submitted!',
        description: `Your proposal has been submitted for voting. A deposit of ${PROPOSAL_DEPOSIT} ${TOKEN_SYMBOL} has been staked.`,
      });
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Submit Proposal
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Create a New Proposal</DialogTitle>
          <DialogDescription>
            Describe your proposal clearly. A deposit of {PROPOSAL_DEPOSIT} {TOKEN_SYMBOL} is required, which will be returned if the proposal passes.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Proposal Title</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Implement a new fee structure" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Proposal Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Explain the proposal in detail, including the problem, proposed solution, and benefits for the cooperative."
                      className="min-h-[120px]"
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
                 `Submit & Stake ${PROPOSAL_DEPOSIT} ${TOKEN_SYMBOL}`
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
