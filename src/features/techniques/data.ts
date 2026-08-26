import type { Technique } from './types';

// Ryn's formal arsenal through Season 55.
// S46–55 deliberately evolves existing arts and adds only a small number of
// genuinely new formal techniques. Casual pebble/ladle/broom/teacup feats
// remain outside the formal list.
//
// Supreme state after S55:
// - No Heaven Above Me — revealed S34.
// - The World Beneath Falling Blossoms — revealed S54, Supreme Domain.
// - One Blossom Buries Heaven — revealed S55, Supreme offense.
// - Unwritten Law — still SEALED.
// - The Last Quiet Beneath Heaven — Ultimate, still HARD LOCKED.
export const techniques: Technique[] = [
  {
    id: 'returning-breath-of-the-mountain',
    name: 'Returning Breath of the Mountain',
    user: 'Ryn',
    tier: 'Transcended',
    category: 'Healing',
    reveal: 'Revealed',
    revealedIn: 'Season 29; evolved S42/S47–48',
    description: 'Ryn’s sole formal healing lineage. It evolves through Hundred Living Breaths into Myriad Spring Reforging: hundreds can be stabilized simultaneously; ancient meridian injuries, shattered foundations, poison scarring, and destroyed cultivation routes can be reconstructed if living structure remains. Every living person Ryn actively heals automatically receives Open Gate Sanctuary, an absolute sakura barrier that cannot be penetrated while the healing state remains active. The art cannot resurrect the truly dead.'
  },
  {
    id: 'empty-hand-measure',
    name: 'Empty-Hand Measure',
    user: 'Ryn',
    tier: 'Transcended',
    category: 'Counter',
    reveal: 'Revealed',
    revealedIn: 'Season 35; evolved S39',
    description: 'Originally a contact counter. Measure Before Contact lets Ryn understand structure, force distribution, circulation, and intention as a technique is being formed, allowing him to dismantle martial architecture before physical contact.'
  },
  {
    id: 'step-between-footfalls',
    name: 'Step Between Footfalls',
    user: 'Ryn',
    tier: 'Named Skill',
    category: 'Movement',
    reveal: 'Revealed',
    revealedIn: 'Season 27',
    description: 'Ryn moves through the interval between intention and completed action. The evolved shared-interval application can briefly bring a person in contact with him into the same impossible timing window.'
  },
  {
    id: 'still-sky',
    name: 'Still Sky',
    user: 'Ryn',
    tier: 'Transcended',
    category: 'Control',
    reveal: 'Revealed',
    revealedIn: 'Season 13',
    description: 'Ryn arrests selected motion and martial behavior across a vast controlled area. Living Exemption later allows him to define what may continue according to purpose: civilians, stretchers, ropes, medical tools, or chosen allies can move while hostile qi, debris, weather effects, and collapsing structures remain stopped.'
  },
  {
    id: 'horizon-without-distance',
    name: 'Horizon Without Distance',
    user: 'Ryn',
    tier: 'Transcended',
    category: 'Movement',
    reveal: 'Revealed',
    revealedIn: 'Season 43',
    description: 'Treats separated locations as adjacent. Shared Passage allows Ryn to create the impossible road for other people, making it one of Open Gate’s greatest evacuation and emergency-response tools.'
  },
  {
    id: 'ten-thousand-roads-return',
    name: 'Ten Thousand Roads Return',
    user: 'Ryn',
    tier: 'Transcended',
    category: 'Counter',
    reveal: 'Revealed',
    revealedIn: 'Season 33',
    description: 'Reads the route by which a structured technique receives force and returns that force through a chosen path. One Road Home evolves the art from simple reversal into safe destination control, allowing catastrophic energy to be sent into empty sky, sea, terrain, or its own reservoir instead of back through living opponents.'
  },
  {
    id: 'unbroken-vessel',
    name: 'Unbroken Vessel',
    user: 'Ryn',
    tier: 'Transcended',
    category: 'Passive',
    reveal: 'Revealed',
    revealedIn: 'Season 34; Inner World evolved S45',
    description: 'Ryn’s circulation becomes an internally complete qi ecosystem. Inner World removes dependence on ambient qi and gives the stable internal foundation from which Spring of the Open Gate later blooms.'
  },
  {
    id: 'spring-of-the-open-gate',
    name: 'Spring of the Open Gate',
    user: 'Ryn',
    tier: 'Transcended',
    category: 'Passive',
    reveal: 'Revealed',
    revealedIn: 'Season 46',
    description: 'Ryn’s permanent sakura aura and the mature expression of Inner World, healing, and teaching. Ryn is absolutely immune to poison of every kind and his body instantly refuses to remain injured. Allies within the aura recover continuously, correct qi deviation and accumulated micro-damage, improve cultivation efficiency, and gradually become stronger. Successful adaptations made by students feed insight back into Ryn’s Inner World, so their growth continuously refines and strengthens him as well. The aura eventually extends far beyond his body and can propagate through prepared Shared Passage anchors.'
  },
  {
    id: 'falling-blossom-breaks-the-horizon',
    name: 'Falling Blossom Breaks the Horizon',
    user: 'Ryn',
    tier: 'Transcended',
    category: 'Offense',
    reveal: 'Revealed',
    revealedIn: 'Season 49',
    description: 'Ryn compresses overwhelming offensive consequence into a deliberately selected trajectory while excluding everything else from the strike. Ten Thousand Blossoms, One Funeral evolves the art so any visible sakura petal can become a possible attack route, with one or many targets chosen at the final instant and essentially no collateral damage.'
  },
  {
    id: 'no-heaven-above-me',
    name: 'No Heaven Above Me',
    user: 'Ryn',
    tier: 'Supreme',
    category: 'Control',
    reveal: 'Revealed',
    revealedIn: 'Season 34',
    description: 'Ryn temporarily denies automatic authority to external martial phenomena. Wind need not move, fire need not spread, poison need not circulate, pressure need not transfer, and formations need not complete unless Ryn permits them.'
  },
  {
    id: 'the-world-beneath-falling-blossoms',
    name: 'The World Beneath Falling Blossoms',
    user: 'Ryn',
    tier: 'Supreme',
    category: 'Control',
    reveal: 'Revealed',
    revealedIn: 'Season 54',
    description: 'Ryn’s Supreme Domain. The battlefield becomes a coherent sakura ecosystem in which every petal extends his perception and his Transcended arts operate as one integrated system: distance, healing, protection, control, counter-routing, hostile-technique analysis, ally strengthening, and Inner World stability all reinforce one another. Chosen allies become dramatically harder to injure and more efficient without losing their own identities.'
  },
  {
    id: 'one-blossom-buries-heaven',
    name: 'One Blossom Buries Heaven',
    user: 'Ryn',
    tier: 'Supreme',
    category: 'Offense',
    reveal: 'Revealed',
    revealedIn: 'Season 55',
    description: 'A Supreme offensive art that compresses catastrophic destructive consequence into one precisely defined target rather than one location. Ryn can designate a person, formation, technique architecture, or other martial definition and destroy only that chosen target while excluding surrounding people and structures. In S55 he targets Hundred Graves Scripture itself, erasing the martial construct from Kaiven and the World Meridian while leaving Kaiven alive.'
  },
  {
    id: 'unwritten-law',
    name: 'Unwritten Law',
    user: 'Ryn',
    tier: 'Supreme',
    category: 'Counter',
    reveal: 'Sealed',
    description: 'SEALED SUPREME. Ryn temporarily denies one martial principle inside a chosen conflict. Its true ceiling and full application remain undisclosed and it must not appear in prose without explicit user approval.'
  },
  {
    id: 'the-last-quiet-beneath-heaven',
    name: 'The Last Quiet Beneath Heaven',
    user: 'Ryn',
    tier: 'Ultimate',
    category: 'Offense',
    reveal: 'Sealed',
    description: 'HARD-LOCKED ULTIMATE. The name is recorded, but its effect, activation condition, scale, cost, and visual manifestation remain unreleased. It must not appear in prose until explicit user approval.'
  }
];
