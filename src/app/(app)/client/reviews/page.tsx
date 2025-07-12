
"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardCheck, CheckCircle } from "lucide-react";
import { LeaveReviewDialog, type ReviewData } from "@/components/client/LeaveReviewDialog";
import { Button } from "@/components/ui/button";

const initialCompletedServices = [
  {
    id: 'proj-01',
    title: "Full-Stack Web Application",
    freelancer: {
      name: "John Doe",
      avatar: "https://placehold.co/40x40.png",
      aiHint: "professional man",
    },
    endDate: "2024-07-25",
    status: "Awaiting Review",
    review: null,
  },
  {
    id: 'proj-02',
    title: "Brand Identity & Logo Design",
    freelancer: {
      name: "Maria Garcia",
      avatar: "https://placehold.co/40x40.png",
      aiHint: "creative woman",
    },
    endDate: "2024-07-18",
    status: "Reviewed",
    review: {
      rating: 5,
      comment: "Maria was fantastic! She perfectly captured our vision and delivered a stunning brand package. Highly recommended.",
    },
  },
   {
    id: 'proj-03',
    title: "Cloud Infrastructure Setup",
    freelancer: {
      name: "Sam Wilson",
      avatar: "https://placehold.co/40x40.png",
      aiHint: "tech professional",
    },
    endDate: "2024-07-12",
    status: "Awaiting Review",
    review: null,
  },
  {
    id: 'proj-04',
    title: "SEO & Content Strategy",
    freelancer: {
        name: "Emily Carter",
        avatar: "https://placehold.co/40x40.png",
        aiHint: "woman writer"
    },
    endDate: "2024-06-30",
    status: "Reviewed",
    review: {
        rating: 4,
        comment: "Good work on the content strategy. Saw a noticeable improvement in our rankings. Some deadlines were slightly missed but communication was good."
    }
  }
];

export default function ClientReviewsPage() {
  const [services, setServices] = useState(initialCompletedServices);
  const [selectedService, setSelectedService] = useState<typeof initialCompletedServices[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = (service: typeof initialCompletedServices[0]) => {
    setSelectedService(service);
    setIsDialogOpen(true);
  };
  
  const handleSaveReview = (reviewData: ReviewData) => {
    if(!selectedService) return;

    setServices(services.map(s => 
      s.id === selectedService.id 
      ? { ...s, status: 'Reviewed', review: reviewData } 
      : s
    ));
    setSelectedService(null);
  }

  const awaitingReviewServices = services.filter(s => s.status === 'Awaiting Review');
  const reviewedServices = services.filter(s => s.status === 'Reviewed');

  return (
    <>
      {selectedService && (
        <LeaveReviewDialog
          open={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          service={selectedService}
          onSave={handleSaveReview}
        />
      )}
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold font-headline flex items-center gap-2">
            <ClipboardCheck className="w-8 h-8 text-accent" />
            Rate Services
          </h1>
          <p className="text-muted-foreground">Provide feedback on your completed projects.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Awaiting Your Review</CardTitle>
            <CardDescription>These services are completed. Please share your experience.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {awaitingReviewServices.length > 0 ? (
              awaitingReviewServices.map(service => (
                <div key={service.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                     <Avatar>
                      <AvatarImage src={service.freelancer.avatar} alt={service.freelancer.name} data-ai-hint={service.freelancer.aiHint} />
                      <AvatarFallback>{service.freelancer.name.substring(0,2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{service.title}</p>
                      <p className="text-sm text-muted-foreground">With {service.freelancer.name} &middot; Completed on {service.endDate}</p>
                    </div>
                  </div>
                  <Button onClick={() => handleOpenDialog(service)}>Leave Review</Button>
                </div>
              ))
            ) : (
              <p className="text-muted-foreground text-sm text-center py-4">No services are currently awaiting your review.</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Past Reviews</CardTitle>
            <CardDescription>A history of the feedback you've provided.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {reviewedServices.map(service => (
              <div key={service.id} className="p-4 border rounded-lg bg-secondary/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-4">
                     <Avatar>
                      <AvatarImage src={service.freelancer.avatar} alt={service.freelancer.name} data-ai-hint={service.freelancer.aiHint}/>
                      <AvatarFallback>{service.freelancer.name.substring(0,2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{service.title}</p>
                      <p className="text-sm text-muted-foreground">With {service.freelancer.name}</p>
                    </div>
                  </div>
                   <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <CheckCircle key={i} className={`w-5 h-5 ${i < (service.review?.rating || 0) ? 'text-accent fill-accent/20' : 'text-muted-foreground/30'}`} />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-foreground/80 pl-14">{service.review?.comment}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
