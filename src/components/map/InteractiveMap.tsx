"use client";

import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from "@vis.gl/react-google-maps";
import { useState } from "react";
import type { CulturalPoint } from "@/lib/types";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Terminal } from "lucide-react";

export default function InteractiveMap({ points }: { points: CulturalPoint[] }) {
  const [selectedPoint, setSelectedPoint] = useState<CulturalPoint | null>(null);

  const mapCenter = { lat: 40.75, lng: -73.98 };
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
        <div className="flex h-full w-full items-center justify-center bg-muted">
            <Alert variant="destructive" className="w-auto">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Google Maps API Key Missing</AlertTitle>
                <AlertDescription>
                    Please add your Google Maps API Key to the .env.local file.
                </AlertDescription>
            </Alert>
        </div>
    )
  }

  return (
    <APIProvider apiKey={apiKey}>
      <Map
        defaultCenter={mapCenter}
        defaultZoom={12}
        mapId="goculture-map"
        disableDefaultUI={true}
        gestureHandling={'greedy'}
        style={{ width: '100%', height: '100%' }}
        styles={[
          {
            "featureType": "poi",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi.business",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }
        ]}
      >
        {points.map((point) => (
          <AdvancedMarker
            key={point.id}
            position={{ lat: point.location.latitude, lng: point.location.longitude }}
            onClick={() => setSelectedPoint(point)}
          >
            <Pin
              background={'hsl(var(--primary))'}
              borderColor={'hsl(var(--primary))'}
              glyphColor={'hsl(var(--primary-foreground))'}
            />
          </AdvancedMarker>
        ))}

        {selectedPoint && (
          <InfoWindow
            position={{ lat: selectedPoint.location.latitude, lng: selectedPoint.location.longitude }}
            onCloseClick={() => setSelectedPoint(null)}
            pixelOffset={[0,-40]}
          >
            <Card className="w-80 border-none shadow-none rounded-lg">
                <CardHeader className="p-0">
                    <div className="relative h-40 w-full">
                        <Image
                            src={selectedPoint.image}
                            alt={selectedPoint.name}
                            fill
                            className="object-cover rounded-t-lg"
                            data-ai-hint={selectedPoint.imageHint}
                        />
                    </div>
                </CardHeader>
                <CardContent className="p-4">
                    <Badge variant="secondary" className="mb-2">{selectedPoint.type}</Badge>
                    <h3 className="font-headline font-semibold text-lg">{selectedPoint.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-3">{selectedPoint.description}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                    <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href={`/point/${selectedPoint.id}`}>
                            View Details
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
          </InfoWindow>
        )}
      </Map>
    </APIProvider>
  );
}
