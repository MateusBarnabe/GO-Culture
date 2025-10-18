import type { CulturalPoint } from './types';
import { PlaceHolderImages } from './placeholder-images';

const getImageUrl = (id: string, hint: string) => {
    const img = PlaceHolderImages.find(p => p.id === id);
    if (img) {
        return { url: img.imageUrl, hint: img.imageHint };
    }
    // Fallback in case image is not in the json file
    return { url: `https://picsum.photos/seed/${id}/800/600`, hint };
}

export const culturalPoints: CulturalPoint[] = [
  {
    id: 'point-1',
    name: 'Metropolitan Museum of Art',
    description: 'The largest art museum in the Americas, with a collection spanning the globe and all of history.',
    image: getImageUrl('museum-1', 'art museum').url,
    imageHint: getImageUrl('museum-1', 'art museum').hint,
    location: { latitude: 40.7794, longitude: -73.9632 },
    type: 'Museum',
  },
  {
    id: 'point-2',
    name: 'Statue of Liberty',
    description: 'A colossal neoclassical sculpture on Liberty Island in New York Harbor.',
    image: getImageUrl('monument-1', 'statue liberty').url,
    imageHint: getImageUrl('monument-1', 'statue liberty').hint,
    location: { latitude: 40.6892, longitude: -74.0445 },
    type: 'Monument',
  },
  {
    id: 'point-3',
    name: 'The High Line',
    description: 'A 1.45-mile-long elevated linear park, greenway and rail trail created on a former New York Central Railroad spur.',
    image: getImageUrl('historic-site-1', 'city park').url,
    imageHint: getImageUrl('historic-site-1', 'city park').hint,
    location: { latitude: 40.7479, longitude: -74.0048 },
    type: 'Historic Site',
  },
  {
    id: 'point-4',
    name: 'Vessel',
    description: 'An extraordinary centerpiece of Hudson Yards is its spiral staircase, a soaring new landmark meant to be climbed.',
    image: getImageUrl('art-installation-1', 'modern architecture').url,
    imageHint: getImageUrl('art-installation-1', 'modern architecture').hint,
    location: { latitude: 40.7538, longitude: -74.0002 },
    type: 'Art Installation',
  },
];
