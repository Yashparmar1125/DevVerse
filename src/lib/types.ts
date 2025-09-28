export type Developer = {
  id: string;
  name: string;
  avatarUrl: string;
  skills: string[];
  rating: number;
  reviews: number;
  tagline: string;
  hourlyRate?: number;
  completedProjects: number;
  isAvailable: boolean;
  description: string;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  budget: number;
  deadline: string;
  description: string;
  skills: string[];
  imageUrl: string;
  client: {
    name: string;
    avatarUrl: string;
  };
};
