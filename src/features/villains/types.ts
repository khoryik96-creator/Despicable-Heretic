export interface Villain {
  id: string;
  name: string;
  group: string;
  threat: 1 | 2 | 3 | 4 | 5;
  status: 'Active' | 'Defeated' | 'Unknown' | 'Deceased' | 'Reformed' | 'Dissolved';
  objective: string;
  description: string;
  tags: string[];
}
