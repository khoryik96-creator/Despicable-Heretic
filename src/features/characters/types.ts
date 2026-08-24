import type { Importance } from '../../shared/types';

export interface Character {
  id: string;
  name: string;
  aliases: string[];
  role: string;
  affiliation: string;
  status: 'Active' | 'Retired' | 'Unknown' | 'Deceased';
  importance: Importance;
  description: string;
  traits: string[];
  accent: string;
}
