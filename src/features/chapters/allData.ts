import type { Chapter } from './types';
import { chapters as chapters1to5 } from './data';
import { chapters615 } from './data-06-15';
import { chapters16to25 } from './data-16-25';
import { chapterBodies as s26 } from '../../content/season-26/chapters';
import { chapterBodies as s27 } from '../../content/season-27/chapters';
import { chapterBodies as s28 } from '../../content/season-28/chapters';
import { chapterBodies as s29 } from '../../content/season-29/chapters';
import { chapterBodies as s30 } from '../../content/season-30/chapters';
import { chapterBodies as s31 } from '../../content/season-31/chapters';
import { chapterBodies as s32 } from '../../content/season-32/chapters';
import { chapterBodies as s33 } from '../../content/season-33/chapters';
import { chapterBodies as s34 } from '../../content/season-34/chapters';
import { chapterBodies as s35 } from '../../content/season-35/chapters';
import { chapterBodies as s36 } from '../../content/season-36/chapters';
import { chapterBodies as s37 } from '../../content/season-37/chapters';
import { chapterBodies as s38 } from '../../content/season-38/chapters';
import { chapterBodies as s39 } from '../../content/season-39/chapters';
import { chapterBodies as s40 } from '../../content/season-40/chapters';
import { chapterBodies as s41 } from '../../content/season-41/chapters';
import { chapterBodies as s42 } from '../../content/season-42/chapters';
import { chapterBodies as s43 } from '../../content/season-43/chapters';
import { chapterBodies as s44 } from '../../content/season-44/chapters';
import { chapterBodies as s45 } from '../../content/season-45/chapters';
import { chapterBodies as s46 } from '../../content/season-46/chapters';
import { chapterBodies as s47 } from '../../content/season-47/chapters';
import { chapterBodies as s48 } from '../../content/season-48/chapters';
import { chapterBodies as s49 } from '../../content/season-49/chapters';
import { chapterBodies as s50 } from '../../content/season-50/chapters';
import { chapterBodies as s51 } from '../../content/season-51/chapters';
import { chapterBodies as s52 } from '../../content/season-52/chapters';
import { chapterBodies as s53 } from '../../content/season-53/chapters';
import { chapterBodies as s54 } from '../../content/season-54/chapters';
import { chapterBodies as s55 } from '../../content/season-55/chapters';

export const seasonTitles: Record<number, string> = {
  26: 'Across the Sea',
  27: 'The Hollow Reed Betrayal',
  28: 'The Pavilion’s Debt',
  29: 'The Fall of Azure Dragon Hall',
  30: 'When Five Became Three',
  31: 'The Sect Ryn Refused to Found',
  32: 'First Gate',
  33: 'The Guild War',
  34: 'No Heaven Above Me',
  35: 'The War Beyond the Register',
  36: 'The Mountain with Forty Thousand Applicants',
  37: 'The North Does Not Rank Its Monsters',
  38: 'Seven Thrones',
  39: 'The Empty Throne',
  40: 'The Summit of Monsters',
  41: 'The Restoration Mandate',
  42: 'When Rank Four Fell',
  43: 'The Number Nobody Wanted',
  44: 'Open Gate Against the Thrones',
  45: 'The World Meridian War',
  46: 'The Rankless Bloom',
  47: 'The Broken Names',
  48: 'The Hunter Climbs the Register',
  49: 'Nine Wardens Ascendant',
  50: 'The Thousand Lanterns',
  51: 'The Hundred Graves Scripture',
  52: 'Rank One’s Last Sky',
  53: 'The Fifth Seat',
  54: 'The World Beneath Falling Blossoms',
  55: 'One Blossom Buries Heaven',
};

const manuscriptSeasons: Array<[number, Record<number, string>]> = [
  [26, s26], [27, s27], [28, s28], [29, s29], [30, s30],
  [31, s31], [32, s32], [33, s33], [34, s34], [35, s35],
  [36, s36], [37, s37], [38, s38], [39, s39], [40, s40],
  [41, s41], [42, s42], [43, s43], [44, s44], [45, s45],
  [46, s46], [47, s47], [48, s48], [49, s49], [50, s50],
  [51, s51], [52, s52], [53, s53], [54, s54], [55, s55],
];

function clean(text: string): string {
  return text
    .replace(/\[\[(?:Ryn|Lucy)\]\]\s*/g, '')
    .replace(/\*\*/g, '')
    .replace(/^#+\s*/gm, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function shorten(text: string, max: number): string {
  if (text.length <= max) return text;
  const clipped = text.slice(0, max - 1).replace(/\s+\S*$/, '');
  return `${clipped || text.slice(0, max - 1)}…`;
}

function deriveTitle(body: string, chapter: number): string {
  const firstParagraph = clean(body.split(/\n{2,}/)[0] ?? '');
  return firstParagraph ? shorten(firstParagraph, 82) : `Chapter ${chapter}`;
}

function deriveSummary(body: string): string {
  const summary = body
    .split(/\n{2,}/)
    .map(clean)
    .filter(Boolean)
    .slice(0, 3)
    .join(' ');
  return shorten(summary, 235);
}

function chaptersFromManuscript(season: number, bodies: Record<number, string>): Chapter[] {
  return Object.keys(bodies)
    .map(Number)
    .sort((a, b) => a - b)
    .map((number) => ({
      id: `s${season}-e${number}`,
      number,
      season,
      seasonTitle: seasonTitles[season] ?? `Season ${season}`,
      title: deriveTitle(bodies[number], number),
      summary: deriveSummary(bodies[number]),
      status: 'Published' as const,
      pov: 'Ensemble',
      tags: ['full prose', `Season ${season}`],
    }));
}

const legacyPublished: Chapter[] = [...chapters1to5, ...chapters615, ...chapters16to25].map((chapter) => ({
  ...chapter,
  status: 'Published' as const,
}));

const manuscriptPublished = manuscriptSeasons.flatMap(([season, bodies]) => chaptersFromManuscript(season, bodies));

export const allChapters: Chapter[] = [...legacyPublished, ...manuscriptPublished]
  .sort((a, b) => a.season - b.season || a.number - b.number);

export const publishedSeasonCount = 55;
export const publishedChapterCount = allChapters.length;
