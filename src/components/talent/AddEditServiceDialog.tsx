
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
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, Save } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const serviceSchema = z.object({
  title: z.string().min(5, { message: 'Title must be at least 5 characters.' }),
  category: z.string({ required_error: 'Please select a category.' }),
  description: z.string().min(20, { message: 'Description must be at least 20 characters.' }),
  price: z.coerce.number().min(1, { message: 'Price must be at least 1.' }),
});

export type ServiceData = z.infer<typeof serviceSchema> & { id?: string };

interface AddEditServiceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (data: ServiceData) => void;
  service: ServiceData | null;
}

const serviceCategories = [
    "Web Development",
    "Mobile Development",
    "Design",
    "Writing",
    "Marketing",
    "Consulting",
    "Video & Animation"
];

const TOKEN_SYMBOL = "CLT";

export function AddEditServiceDialog({ open, onOpenChange, onSave, service }: AddEditServiceDialogProps) {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof serviceSchema>>({
    resolver: zodResolver(serviceSchema),
    defaultValues: service || {
      title: "",
      category: undefined,
      description: "",
      price: 0,
    },
  });

  useEffect(() => {
    if (open) {
      form.reset(service || {
        title: "",
        category: undefined,
        description: "",
        price: 0,
      });
    }
  }, [service, open, form]);

  const onSubmit = (values: z.infer<typeof serviceSchema>) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      onSave(values);
      setLoading(false);
      onOpenChange(false);
      toast({
        title: `Service ${service ? 'Updated' : 'Created'}`,
        description: `Your service "${values.title}" has been saved.`,
      });
    }, 1000);
  };

  const dialogTitle = service ? "Edit Service" : "Add a New Service";
  const dialogDescription = service ? "Update the details of your service." : "Fill out the form to list a new service offering.";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>{dialogDescription}</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Title</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Modern Logo Design" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {serviceCategories.map(cat => (
                        <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your service in detail..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price ({TOKEN_SYMBOL})</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g., 500" {...field} />
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
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" /> Save Service
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
