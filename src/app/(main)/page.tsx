import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export default function HomePage() {
  const mapImage = PlaceHolderImages.find(p => p.id === 'map-goiania-1');

  return (
    <div className="relative h-[calc(100vh-4rem)] w-full">
      {mapImage && (
        <Image
          src={mapImage.imageUrl}
          alt={mapImage.description}
          fill
          className="object-cover"
          data-ai-hint={mapImage.imageHint}
        />
      )}
      <div className="absolute top-4 left-4 z-10">
        <Card>
          <CardContent className="p-4">
            <h1 className="text-xl font-headline font-bold">
              Explore a Cultura
            </h1>
            <p className="text-muted-foreground">
              Encontre e capture pontos de interesse!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
