import InteractiveMap from '@/components/map/InteractiveMap';
import { culturalPoints } from '@/lib/placeholder-data';
import { Suspense } from 'react';
import { Card, CardContent } from '@/components/ui/card';

export default function HomePage() {
  return (
    <div className="relative h-[calc(100vh-4rem)] w-full">
        <Suspense fallback={<div className="w-full h-full bg-muted animate-pulse" />}>
          <InteractiveMap points={culturalPoints} />
        </Suspense>
        <div className="absolute top-4 left-4 z-10">
          <Card>
            <CardContent className="p-4">
              <h1 className="text-xl font-headline font-bold">Explore the Culture</h1>
              <p className="text-muted-foreground">Find and capture points of interest!</p>
            </CardContent>
          </Card>
        </div>
    </div>
  );
}
