import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="container py-8">
      <div className="flex items-center gap-4 mb-8">
        <User className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold font-headline">My Profile</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Coming Soon!</CardTitle>
          <CardDescription>
            Your user profile is under construction. Soon you'll be able to see your collection, badges, and level up!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center text-center p-8 border-2 border-dashed rounded-lg">
            <User className="h-16 w-16 text-muted-foreground" />
            <p className="mt-4 text-muted-foreground">Your collection and achievements will be displayed here.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
