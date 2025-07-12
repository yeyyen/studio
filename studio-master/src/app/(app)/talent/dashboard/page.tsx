
"use client";

import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, CalendarClock, Mail, MessageSquare, Star, UserPlus } from "lucide-react";
import Image from 'next/image';
import { EditProfileDialog, type ProfileData } from '@/components/talent/EditProfileDialog';

const initialProfileData: ProfileData = {
  name: 'Jane Doe',
  title: 'UX/UI Designer & Web Developer',
  skills: ['UI Design', 'UX Research', 'React', 'Next.js', 'Figma'],
  avatar: 'https://placehold.co/128x128.png',
  banner: 'https://placehold.co/1200x300.png',
};

export default function TalentDashboardPage() {
  const [profile, setProfile] = useState<ProfileData>(initialProfileData);

  const handleProfileSave = (newProfileData: ProfileData) => {
    setProfile(newProfileData);
  };

  return (
    <div className="space-y-8">
      <Card className="overflow-hidden">
        <Image
          src={profile.banner}
          alt="Profile Banner"
          width={1200}
          height={300}
          className="w-full h-48 object-cover"
          data-ai-hint="abstract background"
        />
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-6 -mt-20">
            <Avatar className="h-32 w-32 border-4 border-background">
              <AvatarImage src={profile.avatar} alt={profile.name} data-ai-hint="professional woman"/>
              <AvatarFallback>{profile.name.substring(0,2)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 pt-20 sm:pt-0">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold font-headline">{profile.name}</h1>
                  <p className="text-muted-foreground">{profile.title}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-4 h-4 text-accent fill-accent"/>
                    <Star className="w-4 h-4 text-accent fill-accent"/>
                    <Star className="w-4 h-4 text-accent fill-accent"/>
                    <Star className="w-4 h-4 text-accent fill-accent"/>
                    <Star className="w-4 h-4 text-muted-foreground/50 fill-muted-foreground/20"/>
                    <span className="text-sm text-muted-foreground ml-1">(12 Reviews)</span>
                  </div>
                </div>
                <EditProfileDialog profile={profile} onSave={handleProfileSave} />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {profile.skills.map(skill => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Gigs</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">2 completed this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending Invites</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">+2 since yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Deadlines</CardTitle>
            <CalendarClock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Next one in 3 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">New Reviews</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">From "Project Phoenix"</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>An overview of your latest interactions and updates.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-secondary rounded-full"><UserPlus className="w-5 h-5 text-secondary-foreground" /></div>
              <p className="flex-1 text-sm">You received a new job invite from <span className="font-semibold">Innovate Inc.</span></p>
              <p className="text-sm text-muted-foreground">1 hour ago</p>
            </div>
            <div className="flex items-center gap-4">
               <div className="p-2 bg-secondary rounded-full"><Star className="w-5 h-5 text-secondary-foreground" /></div>
              <p className="flex-1 text-sm">Client <span className="font-semibold">Alex Johnson</span> left a 5-star review for "E-commerce Website".</p>
              <p className="text-sm text-muted-foreground">3 hours ago</p>
            </div>
             <div className="flex items-center gap-4">
               <div className="p-2 bg-secondary rounded-full"><CalendarClock className="w-5 h-5 text-secondary-foreground" /></div>
              <p className="flex-1 text-sm">Deadline for <span className="font-semibold">"Mobile App Redesign"</span> is approaching.</p>
              <p className="text-sm text-muted-foreground">1 day ago</p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
