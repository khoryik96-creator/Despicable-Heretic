import type { Chapter } from './types';
import { chapters as chapters1to5 } from './data';
import { chapters615 } from './data-06-15';
import { chapters16to25 } from './data-16-25';
import { manuscriptChapterManifest } from '../../generated/manuscriptChapterManifest';

const legacyPublished: Chapter[] = [...chapters1to5, ...chapters615, ...chapters16to25].map((chapter) => ({
  ...chapter,
  status: 'Published' as const,
}));

export const allChapters: Chapter[] = [...legacyPublished, ...manuscriptChapterManifest]
  .sort((a, b) => a.season - b.season || a.number - b.number);

export const publishedSeasonCount = Math.max(...allChapters.map((chapter) => chapter.season));
export const publishedChapterCount = allChapters.length;
