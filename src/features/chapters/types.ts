export interface Chapter {
  id: string;
  number: number;
  season: number;
  seasonTitle: string;
  title: string;
  summary: string;
  status: 'Published' | 'Draft' | 'Planned';
  pov: string;
  tags: string[];
}
