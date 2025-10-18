export type CulturalPoint = {
  id: string;
  name: string;
  description: string;
  image: string;
  imageHint: string;
  location: {
    latitude: number;
    longitude: number;
  };
  type: 'Museum' | 'Monument' | 'Historic Site' | 'Art Installation';
};

export type UserProfile = {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  level: number;
  experience: number;
  collectedPoints: string[]; // array of cultural point IDs
};

export type Capture = {
  id: string;
  userId: string;
  pointId: string;
  photoUrl: string;
  comment: string;
  timestamp: Date;
};
