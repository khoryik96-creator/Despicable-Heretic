import type { Villain } from './types';

export const villains: Villain[] = [
  { id: 'palace-conspirators', name: 'The Palace Conspirators', group: 'Imperial Coup Arc', threat: 3, status: 'Defeated', objective: 'Remove Lucy and seize control of the imperial succession.', description: 'A network of nobles and martial operatives behind repeated attempts on Lucy’s life. Their greatest mistake is forcing Ryn to care about palace politics.', tags: ['Lucy', 'assassins', 'imperial court'] },
  { id: 'war-instigator', name: 'The Hidden Instigator', group: 'Orthodox Conflict', threat: 4, status: 'Unknown', objective: 'Manufacture open war between Ryn and the Orthodox world.', description: 'An unrevealed force that poisons ranked masters and manipulates incidents to make both Ryn and the Five Great Orthodox Sects appear responsible.', tags: ['conspiracy', 'Orthodox', 'mystery'] },
  { id: 'formation-mastermind', name: 'Heaven-Locking Mastermind', group: 'Supreme Dao Trial', threat: 5, status: 'Defeated', objective: 'Trap the Orthodox leadership and exploit the trial of the Despicable Heretic.', description: 'The faction behind the ancient Heaven-Locking Formation capable of suppressing thousands of martial artists and even hindering a Sovereign.', tags: ['Heaven-Locking Formation', 'trial', 'Sovereign'] },
];
