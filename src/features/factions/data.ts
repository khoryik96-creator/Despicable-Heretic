import type { Faction } from './types';

export const factions: Faction[] = [
  { id: 'five-great-orthodox-sects', name: 'Five Great Orthodox Sects', category: 'Orthodox hegemony', alignment: 'Hostile', summary: 'The five institutions that define accepted martial law and jointly condemn Ryn as the Despicable Heretic.', members: ['Heavenly Sword Palace', 'Nine Suns Monastery', 'Jade Moon Sect', 'Azure Dragon Hall', 'Supreme Dao Sanctuary'] },
  { id: 'celestial-record-pavilion', name: 'Celestial Record Pavilion', category: 'Neutral ranking authority', alignment: 'Neutral', summary: 'The ancient neutral organization responsible for the Heavenly Register and the secret Black Register used for entities normal rankings cannot categorize.', members: ['Pavilion Master', 'Register observers', 'Black Register custodians'] },
  { id: 'imperial-house', name: 'Imperial House', category: 'Royal dynasty', alignment: 'Mixed', summary: 'Lucy’s royal family and the political center of the empire. Its court becomes a major battlefield during the third season.', members: ['Princess Lucy', 'The Emperor', 'Imperial Martial Guard'] },
  { id: 'black-mountain', name: 'Black Mountain', category: 'Independent territory', alignment: 'Allied', summary: 'Ryn’s remote home: a farm, cabin, vegetables, dangerous wildlife, and eventually the place Lucy casually starts calling home.', members: ['Ryn', 'Lucy', 'One troublesome chicken'] },
];
