
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, PlusCircle, Tag, Edit, Trash2 } from "lucide-react";
import { AddEditServiceDialog, type ServiceData } from "@/components/talent/AddEditServiceDialog";
import { Badge } from "@/components/ui/badge";

const initialServices: ServiceData[] = [
  {
    id: 'srv-1',
    title: "Full-Stack Web Application",
    category: "Web Development",
    description: "End-to-end development of a responsive and scalable web application using Next.js, React, and Node.js.",
    price: 1500,
  },
  {
    id: 'srv-2',
    title: "Brand Identity & Logo Design",
    category: "Design",
    description: "Complete branding package including logo design, color palette, typography, and brand guidelines.",
    price: 800,
  },
  {
    id: 'srv-3',
    title: "SEO & Content Strategy",
    category: "Marketing",
    description: "Comprehensive SEO audit, keyword research, and a 3-month content strategy to boost organic traffic.",
    price: 1200,
  },
];

const TOKEN_SYMBOL = "CLT";

export default function TalentServicesPage() {
  const [services, setServices] = useState<ServiceData[]>(initialServices);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingService, setEditingService] = useState<ServiceData | null>(null);

  const handleSaveService = (serviceData: ServiceData) => {
    if (editingService) {
      // Update existing service
      setServices(services.map(s => s.id === editingService.id ? { ...s, ...serviceData } : s));
    } else {
      // Add new service
      setServices([...services, { ...serviceData, id: `srv-${Date.now()}` }]);
    }
    setEditingService(null);
  };

  const handleAddNew = () => {
    setEditingService(null);
    setIsDialogOpen(true);
  };

  const handleEdit = (service: ServiceData) => {
    setEditingService(service);
    setIsDialogOpen(true);
  };
  
  const handleDelete = (serviceId: string) => {
    // In a real app, you'd show a confirmation dialog first
    setServices(services.filter(s => s.id !== serviceId));
  };


  return (
    <>
      <AddEditServiceDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onSave={handleSaveService}
        service={editingService}
      />
      <div className="space-y-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold font-headline flex items-center gap-2">
              <Briefcase className="w-8 h-8 text-accent" />
              My Services
            </h1>
            <p className="text-muted-foreground">Manage your service offerings and gigs.</p>
          </div>
          <Button onClick={handleAddNew}>
            <PlusCircle className="mr-2 h-4 w-4" /> Add New Service
          </Button>
        </div>

        {services.length === 0 ? (
           <Card className="text-center py-12">
             <CardContent>
              <Briefcase className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-medium">No Services Yet</h3>
              <p className="mt-1 text-sm text-muted-foreground">Click "Add New Service" to create your first gig.</p>
             </CardContent>
           </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground pt-1">
                      <Tag className="w-4 h-4" />
                      <span>{service.category}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                   <Badge variant="outline" className="text-lg py-1 px-3">
                    {service.price} <span className="font-light ml-1.5">{TOKEN_SYMBOL}</span>
                  </Badge>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" onClick={() => handleEdit(service)}>
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Edit Service</span>
                    </Button>
                     <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive" onClick={() => handleDelete(service.id!)}>
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete Service</span>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
