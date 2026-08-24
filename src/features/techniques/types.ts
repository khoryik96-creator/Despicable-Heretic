export interface Technique {
  id: string;
  name: string;
  user: string;
  tier: 'Normal' | 'Transcended' | 'Supreme' | 'Ultimate';
  category: 'Offense' | 'Defense' | 'Healing' | 'Passive';
  description: string;
}
