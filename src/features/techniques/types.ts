export interface Technique {
  id: string;
  name: string;
  user: string;
  tier: 'Named Skill' | 'Transcended' | 'Supreme' | 'Ultimate';
  category: 'Offense' | 'Defense' | 'Healing' | 'Passive' | 'Movement' | 'Counter' | 'Control';
  description: string;
  reveal?: 'Revealed' | 'Unrevealed' | 'Sealed';
  revealedIn?: string;
}
