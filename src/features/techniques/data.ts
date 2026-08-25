import type { Technique } from './types';

// Ryn's ten formal arts through Season 45.
// Casual feats remain deliberately outside this list.
// Reveal lock remains absolute:
// - No Heaven Above Me is the ONE revealed Supreme.
// - Unwritten Law remains sealed unless explicitly approved.
// - The Last Quiet Beneath Heaven remains hard-locked and unreleased.
export const techniques: Technique[] = [
  {
    id: 'returning-breath-of-the-mountain',
    name: 'Returning Breath of the Mountain',
    user: 'Ryn',
    tier: 'Transcended',
    category: 'Healing',
    reveal: 'Revealed',
    revealedIn: 'Named form revealed by S29; evolved to Transcended in S42',
    description: 'Ryn’s sole formal healing art. It began as a Named Skill that restores breath, blood, poisoned circulation, and ruptured meridians. Mercy Hall pressure taught Ryn to stabilize many patients at once. In Season 42 it evolves into Returning Breath of the Mountain — Hundred Living Breaths, a Transcended healing field that can keep hundreds of injured bodies from worsening while physicians work. It still cannot resurrect the dead, a limit made painfully explicit by Maren Sol’s death.'
  },
  {
    id: 'empty-hand-measure',
    name: 'Empty-Hand Measure',
    user: 'Ryn',
    tier: 'Transcended',
    category: 'Counter',
    reveal: 'Revealed',
    revealedIn: 'Named form revealed S35; evolved to Transcended in S39',
    description: 'Originally a contact counter that reads and dismantles force through touch. Sparring with Darr Vesk pushes the art beyond contact in Season 39. Empty-Hand Measure — Measure Before Contact reads breath, loading, qi preparation, attention, and structural intention before an attack is completed, allowing Ryn to identify failure points before the technique fully exists.'
  },
  {
    id: 'step-between-footfalls',
    name: 'Step Between Footfalls',
    user: 'Ryn',
    tier: 'Named Skill',
    category: 'Movement',
    reveal: 'Revealed',
    revealedIn: 'Season 27',
    description: 'Ryn moves through the interval between intent and completed action. In Season 37 the art accidentally carries Lucy with him for less than a heartbeat, proving the interval can be shared under contact even though the technique has not yet formally promoted to Transcended tier.'
  },
  {
    id: 'still-sky',
    name: 'Still Sky',
    user: 'Ryn',
    tier: 'Transcended',
    category: 'Control',
    reveal: 'Revealed',
    revealedIn: 'Season 13',
    description: 'Ryn’s first revealed formal art. Still Sky arrests motion across a controlled area and later develops additional movements against predictive formations and world-scale qi failures. In Season 45 it evolves into Still Sky — Living Exemption: Ryn no longer merely distinguishes living from nonliving; he decides what is permitted to continue based on purpose, allowing evacuation carts, medical equipment, bridge ropes, and civilians to move while collapse, hostile qi, and debris remain frozen.'
  },
  {
    id: 'horizon-without-distance',
    name: 'Horizon Without Distance',
    user: 'Ryn',
    tier: 'Transcended',
    category: 'Movement',
    reveal: 'Revealed',
    revealedIn: 'Season 43',
    description: 'Treats separated points inside Ryn’s awareness as adjacent rather than distant. Its Season 43 evolution, Horizon Without Distance — Shared Passage, lets Ryn temporarily give that adjacency to others, creating evacuation paths through otherwise impossible geography. During the World Meridian crisis he learns to navigate relationships between locations rather than ordinary distance.'
  },
  {
    id: 'ten-thousand-roads-return',
    name: 'Ten Thousand Roads Return',
    user: 'Ryn',
    tier: 'Transcended',
    category: 'Counter',
    reveal: 'Revealed',
    revealedIn: 'Season 33',
    description: 'Originally returns structured force through the path that generated it. In Season 45 it evolves into Ten Thousand Roads Return — One Road Home, allowing Ryn to choose a safe destination for returning force rather than simply throwing power back at its source. He uses it to route pressure, heat, and qi density into stable World Meridian branches without sacrificing soldiers or civilians.'
  },
  {
    id: 'unbroken-vessel',
    name: 'Unbroken Vessel',
    user: 'Ryn',
    tier: 'Transcended',
    category: 'Passive',
    reveal: 'Revealed',
    revealedIn: 'Season 34',
    description: 'Ryn’s internal circulation remains functional when ambient qi relationships are suppressed, poisoned, or severed. In Season 45 it evolves into Unbroken Vessel — Inner World: his internal circulation becomes a complete closed system that no longer needs to draw from ambient qi, allowing him to stand inside the World Meridian without being rewritten by it.'
  },
  {
    id: 'no-heaven-above-me',
    name: 'No Heaven Above Me',
    user: 'Ryn',
    tier: 'Supreme',
    category: 'Control',
    reveal: 'Revealed',
    revealedIn: 'Season 34',
    description: 'The only Supreme Ryn has revealed. Within its domain, external martial phenomena lose automatic authority from the world: wind need not move, fire need not spread, poison need not circulate, pressure need not transfer, and formations need not complete. This remains an exceptional once-in-a-saga revelation rather than a routine technique.'
  },
  {
    id: 'unwritten-law',
    name: 'Unwritten Law',
    user: 'Ryn',
    tier: 'Supreme',
    category: 'Counter',
    reveal: 'Sealed',
    description: 'SEALED SUPREME. Ryn temporarily denies one martial principle inside a chosen conflict. Its true upper limit remains unreleased. No prose reveal is permitted until explicit approval because No Heaven Above Me already occupies the single approved Supreme reveal slot.'
  },
  {
    id: 'the-last-quiet-beneath-heaven',
    name: 'The Last Quiet Beneath Heaven',
    user: 'Ryn',
    tier: 'Ultimate',
    category: 'Offense',
    reveal: 'Sealed',
    description: 'HARD-LOCKED ULTIMATE. Only the name is recorded. Effect, activation condition, scale, cost, and visual manifestation remain completely unreleased. It must not appear in prose without explicit approval.'
  }
];
