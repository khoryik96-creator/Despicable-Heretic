import type { Technique } from './types';

// Ryn's formal arsenal. Casual feats such as the pebble flick, ladle counter,
// teacup-lid block, and single-tap formation erasure are deliberately NOT
// counted as skills: the point is that Ryn often does not need one.
//
// Reveal lock:
// - Ultimate: must remain unreleased until explicit user approval.
// - Supreme: at most ONE Supreme may be revealed in prose before explicit user approval.
// - Named / Transcended: may be revealed naturally when the story earns them.
export const techniques: Technique[] = [
  {
    id: 'returning-breath-of-the-mountain',
    name: 'Returning Breath of the Mountain',
    user: 'Ryn',
    tier: 'Named Skill',
    category: 'Healing',
    reveal: 'Unrevealed',
    description: 'Ryn restores a damaged body by forcing breath, blood, and internal circulation back into agreement. It can stabilize mortal injuries, purge most poisons, close ruptured meridians, and restart collapsed qi circulation, but it cannot resurrect the dead. This is Ryn’s sole formal healing art.'
  },
  {
    id: 'empty-hand-measure',
    name: 'Empty-Hand Measure',
    user: 'Ryn',
    tier: 'Named Skill',
    category: 'Counter',
    reveal: 'Unrevealed',
    description: 'A contact counter that reads the structure, direction, and intention of incoming force through a single touch, then dismantles or redirects it with absurd efficiency. Against weaker arts, it makes overwhelming attacks look embarrassingly simple.'
  },
  {
    id: 'step-between-footfalls',
    name: 'Step Between Footfalls',
    user: 'Ryn',
    tier: 'Named Skill',
    category: 'Movement',
    reveal: 'Unrevealed',
    description: 'Ryn moves through the interval between an opponent deciding to act and the action becoming complete. To observers it resembles teleportation, but the art is really an impossible mastery of timing, intent, and position.'
  },
  {
    id: 'still-sky',
    name: 'Still Sky',
    user: 'Ryn',
    tier: 'Transcended',
    category: 'Control',
    reveal: 'Revealed',
    revealedIn: 'Season 13',
    description: 'Ryn’s first revealed formal art. Still Sky arrests motion across a vast controlled area, freezing hostile qi threads, moving formation structures, projectiles, weather effects, and other nonliving forces without freezing living people. Ryn then decides what is allowed to resume.'
  },
  {
    id: 'horizon-without-distance',
    name: 'Horizon Without Distance',
    user: 'Ryn',
    tier: 'Transcended',
    category: 'Movement',
    reveal: 'Unrevealed',
    description: 'A movement art that treats separated points inside Ryn’s awareness as adjacent steps. Mountains, battle lines, walls, and ordinary pursuit geometry stop functioning as meaningful distance for him.'
  },
  {
    id: 'ten-thousand-roads-return',
    name: 'Ten Thousand Roads Return',
    user: 'Ryn',
    tier: 'Transcended',
    category: 'Counter',
    reveal: 'Unrevealed',
    description: 'Ryn identifies the path by which a technique, formation, or elemental art receives force and sends that force back through its own route. The stronger and more structured the enemy technique is, the more catastrophic its return can become.'
  },
  {
    id: 'unbroken-vessel',
    name: 'Unbroken Vessel',
    user: 'Ryn',
    tier: 'Transcended',
    category: 'Passive',
    reveal: 'Unrevealed',
    description: 'Ryn’s internal world can circulate without depending on normal environmental qi relationships. Suppression, poison, broken terrain flow, and severance can still inconvenience him, but they cannot reduce him to an ordinary cultivator the way they can everyone else.'
  },
  {
    id: 'no-heaven-above-me',
    name: 'No Heaven Above Me',
    user: 'Ryn',
    tier: 'Supreme',
    category: 'Control',
    reveal: 'Sealed',
    description: 'SEALED SUPREME. Within its true domain, external martial phenomena no longer receive automatic authority from the world: wind need not move, fire need not spread, poison need not circulate, pressure need not transfer, and formations need not complete. Ryn decides which rules are permitted to continue. Only one Supreme may be revealed in the novel before explicit approval.'
  },
  {
    id: 'unwritten-law',
    name: 'Unwritten Law',
    user: 'Ryn',
    tier: 'Supreme',
    category: 'Counter',
    reveal: 'Sealed',
    description: 'SEALED SUPREME. Ryn temporarily denies one martial principle inside a chosen conflict. An attack may land without transmitting force; a poison may enter blood without becoming toxic; a binding formation may close without gaining the property of restraint. Its upper limit is intentionally undisclosed. Only one Supreme may be revealed before explicit approval.'
  },
  {
    id: 'the-last-quiet-beneath-heaven',
    name: 'The Last Quiet Beneath Heaven',
    user: 'Ryn',
    tier: 'Ultimate',
    category: 'Offense',
    reveal: 'Sealed',
    description: 'HARD-LOCKED ULTIMATE. The name is recorded on Ryn’s private arsenal, but its effect, activation condition, scale, cost, and visual manifestation remain unreleased. It must not appear in prose until explicit approval.'
  }
];
