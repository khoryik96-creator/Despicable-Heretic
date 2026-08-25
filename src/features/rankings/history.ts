export interface RankEraEntry {
  name: string;
  aliases: string[];
  rank: number;
  fromSeason: number;
  fromChapter?: number;
  toSeason?: number;
  toChapter?: number;
  status?: 'Active' | 'Deceased';
}

/**
 * Canonical rank history used to keep historical references accurate.
 * The first major succession occurs during Season 20 after Kassian Ro's death.
 * Seo Taewon remains Rank #1 throughout all published seasons.
 */
export const rankHistory: RankEraEntry[] = [
  { name: 'Seo Taewon', aliases: ['Seo Taewon', 'Taewon'], rank: 1, fromSeason: 1 },
  { name: 'Veyra Nox', aliases: ['Veyra Nox', 'Veyra'], rank: 2, fromSeason: 1 },
  { name: 'Dae Kiryun', aliases: ['Dae Kiryun', 'Kiryun', 'Dae'], rank: 3, fromSeason: 1 },
  { name: 'Maren Sol', aliases: ['Maren Sol', 'Maren'], rank: 4, fromSeason: 1 },

  { name: 'Kassian Ro', aliases: ['Kassian Ro', 'Kassian'], rank: 5, fromSeason: 1, toSeason: 19, status: 'Deceased' },
  { name: 'Sael Vardon', aliases: ['Sael Vardon', 'Sael'], rank: 6, fromSeason: 1, toSeason: 20, toChapter: 2 },
  { name: 'Orun Bale', aliases: ['Orun Bale', 'Orun'], rank: 7, fromSeason: 1, toSeason: 20, toChapter: 2 },
  { name: 'Lysandra Keir', aliases: ['Lysandra Keir', 'Lysandra'], rank: 8, fromSeason: 1, toSeason: 20, toChapter: 2 },
  { name: 'Toren Vahl', aliases: ['Toren Vahl', 'Toren'], rank: 9, fromSeason: 1, toSeason: 20, toChapter: 2 },
  { name: 'Nyra Sen', aliases: ['Nyra Sen', 'Nyra'], rank: 10, fromSeason: 1, toSeason: 20, toChapter: 2 },
  { name: 'Boran Dusk', aliases: ['Boran Dusk', 'Boran'], rank: 11, fromSeason: 1, toSeason: 20, toChapter: 2 },
  { name: 'Elian Mor', aliases: ['Elian Mor', 'Elian'], rank: 12, fromSeason: 1, toSeason: 20, toChapter: 2 },
  { name: 'Veska Ren', aliases: ['Veska Ren', 'Veska'], rank: 13, fromSeason: 1, toSeason: 20, toChapter: 2 },
  { name: 'Kaio Draven', aliases: ['Kaio Draven', 'Kaio'], rank: 14, fromSeason: 1, toSeason: 20, toChapter: 2 },
  { name: 'Seline Arq', aliases: ['Seline Arq', 'Seline'], rank: 15, fromSeason: 1, toSeason: 20, toChapter: 2 },
  { name: 'Corven Ash', aliases: ['Corven Ash', 'Corven'], rank: 16, fromSeason: 1, toSeason: 20, toChapter: 2 },
  { name: 'Tavia Moss', aliases: ['Tavia Moss', 'Tavia'], rank: 17, fromSeason: 1, toSeason: 20, toChapter: 2 },
  { name: 'Rook Arden', aliases: ['Rook Arden', 'Rook'], rank: 18, fromSeason: 1, toSeason: 20, toChapter: 2 },
  { name: 'Joren Quill', aliases: ['Joren Quill', 'Joren'], rank: 19, fromSeason: 1, toSeason: 20, toChapter: 2 },
  { name: 'Luma Vey', aliases: ['Luma Vey', 'Luma'], rank: 20, fromSeason: 1, toSeason: 20, toChapter: 2 },
  { name: 'Tessan Ri', aliases: ['Tessan Ri', 'Tessan'], rank: 21, fromSeason: 18, toSeason: 20, toChapter: 2 },

  { name: 'Sael Vardon', aliases: ['Sael Vardon', 'Sael'], rank: 5, fromSeason: 20, fromChapter: 3 },
  { name: 'Orun Bale', aliases: ['Orun Bale', 'Orun'], rank: 6, fromSeason: 20, fromChapter: 3 },
  { name: 'Lysandra Keir', aliases: ['Lysandra Keir', 'Lysandra'], rank: 7, fromSeason: 20, fromChapter: 3 },
  { name: 'Toren Vahl', aliases: ['Toren Vahl', 'Toren'], rank: 8, fromSeason: 20, fromChapter: 3 },
  { name: 'Nyra Sen', aliases: ['Nyra Sen', 'Nyra'], rank: 9, fromSeason: 20, fromChapter: 3 },
  { name: 'Boran Dusk', aliases: ['Boran Dusk', 'Boran'], rank: 10, fromSeason: 20, fromChapter: 3 },
  { name: 'Elian Mor', aliases: ['Elian Mor', 'Elian'], rank: 11, fromSeason: 20, fromChapter: 3 },
  { name: 'Veska Ren', aliases: ['Veska Ren', 'Veska'], rank: 12, fromSeason: 20, fromChapter: 3 },
  { name: 'Kaio Draven', aliases: ['Kaio Draven', 'Kaio'], rank: 13, fromSeason: 20, fromChapter: 3 },
  { name: 'Seline Arq', aliases: ['Seline Arq', 'Seline'], rank: 14, fromSeason: 20, fromChapter: 3 },
  { name: 'Corven Ash', aliases: ['Corven Ash', 'Corven'], rank: 15, fromSeason: 20, fromChapter: 3 },
  { name: 'Tavia Moss', aliases: ['Tavia Moss', 'Tavia'], rank: 16, fromSeason: 20, fromChapter: 3 },
  { name: 'Rook Arden', aliases: ['Rook Arden', 'Rook'], rank: 17, fromSeason: 20, fromChapter: 3 },
  { name: 'Joren Quill', aliases: ['Joren Quill', 'Joren'], rank: 18, fromSeason: 20, fromChapter: 3 },
  { name: 'Luma Vey', aliases: ['Luma Vey', 'Luma'], rank: 19, fromSeason: 20, fromChapter: 3 },
  { name: 'Tessan Ri', aliases: ['Tessan Ri', 'Tessan'], rank: 20, fromSeason: 20, fromChapter: 3 },
];

export const successionNotes = [
  'Season 19: Kassian Ro, Rank #5 / Ash-Furnace Sovereign, dies after the Eclipse Court conflict.',
  'Season 20 Chapter 2: the Pavilion formally reopens the Register and names Sael Vardon the new Rank #5.',
  'Season 20 Chapter 3: Tessan Ri moves from Rank #21 to Rank #20; all surviving ranks #6–#20 shift upward one position.',
  'Seo Taewon remains Rank #1 throughout the published story.',
] as const;
