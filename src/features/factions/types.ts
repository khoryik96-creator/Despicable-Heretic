export interface Faction {
  id: string;
  name: string;
  category: string;
  alignment: 'Allied' | 'Neutral' | 'Hostile' | 'Mixed';
  summary: string;
  members: string[];
}
