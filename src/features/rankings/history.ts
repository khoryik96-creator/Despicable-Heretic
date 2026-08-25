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
 * Canonical Heavenly Register history through Season 45.
 * A rank badge must reflect the rank held in that chapter, not the final roster.
 * Seo Taewon remains Rank #1 throughout all published seasons.
 */
export const rankHistory: RankEraEntry[] = [
  { name: 'Seo Taewon', aliases: ['Seo Taewon', 'Taewon'], rank: 1, fromSeason: 1 },
  { name: 'Veyra Nox', aliases: ['Veyra Nox', 'Veyra'], rank: 2, fromSeason: 1 },
  { name: 'Dae Kiryun', aliases: ['Dae Kiryun', 'Kiryun'], rank: 3, fromSeason: 1 },

  { name: 'Maren Sol', aliases: ['Maren Sol', 'Maren'], rank: 4, fromSeason: 1, toSeason: 42, toChapter: 9 },
  { name: 'Maren Sol', aliases: ['Maren Sol', 'Maren'], rank: 4, fromSeason: 42, fromChapter: 10, status: 'Deceased' },
  { name: 'Kassian Ro', aliases: ['Kassian Ro', 'Kassian'], rank: 5, fromSeason: 1, toSeason: 19, status: 'Deceased' },

  // Original pre-Kassian succession ranks.
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

  // S20C3 -> S29C9: post-Kassian roster.
  { name: 'Sael Vardon', aliases: ['Sael Vardon', 'Sael'], rank: 5, fromSeason: 20, fromChapter: 3, toSeason: 43, toChapter: 4 },
  { name: 'Orun Bale', aliases: ['Orun Bale', 'Orun'], rank: 6, fromSeason: 20, fromChapter: 3, toSeason: 29, toChapter: 9 },
  { name: 'Orun Bale', aliases: ['Orun Bale', 'Orun'], rank: 6, fromSeason: 29, fromChapter: 10, status: 'Deceased' },
  { name: 'Lysandra Keir', aliases: ['Lysandra Keir', 'Lysandra'], rank: 7, fromSeason: 20, fromChapter: 3, toSeason: 29, toChapter: 10 },
  { name: 'Toren Vahl', aliases: ['Toren Vahl', 'Toren'], rank: 8, fromSeason: 20, fromChapter: 3, toSeason: 29, toChapter: 10 },
  { name: 'Nyra Sen', aliases: ['Nyra Sen', 'Nyra'], rank: 9, fromSeason: 20, fromChapter: 3, toSeason: 29, toChapter: 10 },
  { name: 'Boran Dusk', aliases: ['Boran Dusk', 'Boran'], rank: 10, fromSeason: 20, fromChapter: 3, toSeason: 29, toChapter: 10 },
  { name: 'Elian Mor', aliases: ['Elian Mor', 'Elian'], rank: 11, fromSeason: 20, fromChapter: 3, toSeason: 29, toChapter: 10 },
  { name: 'Veska Ren', aliases: ['Veska Ren', 'Veska'], rank: 12, fromSeason: 20, fromChapter: 3, toSeason: 29, toChapter: 10 },
  { name: 'Kaio Draven', aliases: ['Kaio Draven', 'Kaio'], rank: 13, fromSeason: 20, fromChapter: 3, toSeason: 29, toChapter: 10 },
  { name: 'Seline Arq', aliases: ['Seline Arq', 'Seline'], rank: 14, fromSeason: 20, fromChapter: 3, toSeason: 29, toChapter: 10 },
  { name: 'Corven Ash', aliases: ['Corven Ash', 'Corven'], rank: 15, fromSeason: 20, fromChapter: 3, toSeason: 29, toChapter: 10 },
  { name: 'Tavia Moss', aliases: ['Tavia Moss', 'Tavia'], rank: 16, fromSeason: 20, fromChapter: 3, toSeason: 29, toChapter: 10 },
  { name: 'Rook Arden', aliases: ['Rook Arden', 'Rook'], rank: 17, fromSeason: 20, fromChapter: 3, toSeason: 29, toChapter: 10 },
  { name: 'Joren Quill', aliases: ['Joren Quill', 'Joren'], rank: 18, fromSeason: 20, fromChapter: 3, toSeason: 29, toChapter: 10 },
  { name: 'Luma Vey', aliases: ['Luma Vey', 'Luma'], rank: 19, fromSeason: 20, fromChapter: 3, toSeason: 29, toChapter: 10 },
  { name: 'Tessan Ri', aliases: ['Tessan Ri', 'Tessan'], rank: 20, fromSeason: 20, fromChapter: 3, toSeason: 29, toChapter: 10 },

  // S30C1 -> S33C9: post-Orun roster.
  { name: 'Lysandra Keir', aliases: ['Lysandra Keir', 'Lysandra'], rank: 6, fromSeason: 30, toSeason: 43, toChapter: 4 },
  { name: 'Toren Vahl', aliases: ['Toren Vahl', 'Toren'], rank: 7, fromSeason: 30, toSeason: 33, toChapter: 9 },
  { name: 'Toren Vahl', aliases: ['Toren Vahl', 'Toren'], rank: 7, fromSeason: 33, fromChapter: 10, status: 'Deceased' },
  { name: 'Nyra Sen', aliases: ['Nyra Sen', 'Nyra'], rank: 8, fromSeason: 30, toSeason: 33, toChapter: 9 },
  { name: 'Boran Dusk', aliases: ['Boran Dusk', 'Boran'], rank: 9, fromSeason: 30, toSeason: 33, toChapter: 9 },
  { name: 'Elian Mor', aliases: ['Elian Mor', 'Elian'], rank: 10, fromSeason: 30, toSeason: 33, toChapter: 9 },
  { name: 'Veska Ren', aliases: ['Veska Ren', 'Veska'], rank: 11, fromSeason: 30, toSeason: 33, toChapter: 9 },
  { name: 'Kaio Draven', aliases: ['Kaio Draven', 'Kaio'], rank: 12, fromSeason: 30, toSeason: 33, toChapter: 9 },
  { name: 'Seline Arq', aliases: ['Seline Arq', 'Seline'], rank: 13, fromSeason: 30, toSeason: 33, toChapter: 9 },
  { name: 'Corven Ash', aliases: ['Corven Ash', 'Corven'], rank: 14, fromSeason: 30, toSeason: 33, toChapter: 9 },
  { name: 'Tavia Moss', aliases: ['Tavia Moss', 'Tavia'], rank: 15, fromSeason: 30, toSeason: 33, toChapter: 9 },
  { name: 'Rook Arden', aliases: ['Rook Arden', 'Rook'], rank: 16, fromSeason: 30, toSeason: 33, toChapter: 9 },
  { name: 'Joren Quill', aliases: ['Joren Quill', 'Joren'], rank: 17, fromSeason: 30, toSeason: 33, toChapter: 9 },
  { name: 'Luma Vey', aliases: ['Luma Vey', 'Luma'], rank: 18, fromSeason: 30, toSeason: 33, toChapter: 9 },
  { name: 'Tessan Ri', aliases: ['Tessan Ri', 'Tessan'], rank: 19, fromSeason: 30, toSeason: 33, toChapter: 9 },
  { name: 'Dalen Korr', aliases: ['Dalen Korr', 'Dalen'], rank: 20, fromSeason: 30, toSeason: 33, toChapter: 9 },
  { name: 'Iseul Venn', aliases: ['Iseul Venn', 'Iseul'], rank: 21, fromSeason: 30, toSeason: 33, toChapter: 9 },

  // S33C10 -> S43C4: post-Toren roster. Maren dies in S42C9 but #4 remains vacant rather than immediately shifting.
  { name: 'Nyra Sen', aliases: ['Nyra Sen', 'Nyra'], rank: 7, fromSeason: 33, fromChapter: 10, toSeason: 43, toChapter: 4 },
  { name: 'Boran Dusk', aliases: ['Boran Dusk', 'Boran'], rank: 8, fromSeason: 33, fromChapter: 10, toSeason: 43, toChapter: 4 },
  { name: 'Elian Mor', aliases: ['Elian Mor', 'Elian'], rank: 9, fromSeason: 33, fromChapter: 10, toSeason: 43, toChapter: 4 },
  { name: 'Veska Ren', aliases: ['Veska Ren', 'Veska'], rank: 10, fromSeason: 33, fromChapter: 10, toSeason: 43, toChapter: 4 },
  { name: 'Kaio Draven', aliases: ['Kaio Draven', 'Kaio'], rank: 11, fromSeason: 33, fromChapter: 10, toSeason: 43, toChapter: 4 },
  { name: 'Seline Arq', aliases: ['Seline Arq', 'Seline'], rank: 12, fromSeason: 33, fromChapter: 10, toSeason: 43, toChapter: 4 },
  { name: 'Corven Ash', aliases: ['Corven Ash', 'Corven'], rank: 13, fromSeason: 33, fromChapter: 10, toSeason: 43, toChapter: 4 },
  { name: 'Tavia Moss', aliases: ['Tavia Moss', 'Tavia'], rank: 14, fromSeason: 33, fromChapter: 10, toSeason: 43, toChapter: 4 },
  { name: 'Rook Arden', aliases: ['Rook Arden', 'Rook'], rank: 15, fromSeason: 33, fromChapter: 10, toSeason: 43, toChapter: 4 },
  { name: 'Joren Quill', aliases: ['Joren Quill', 'Joren'], rank: 16, fromSeason: 33, fromChapter: 10, toSeason: 43, toChapter: 4 },
  { name: 'Luma Vey', aliases: ['Luma Vey', 'Luma'], rank: 17, fromSeason: 33, fromChapter: 10, toSeason: 43, toChapter: 4 },
  { name: 'Tessan Ri', aliases: ['Tessan Ri', 'Tessan'], rank: 18, fromSeason: 33, fromChapter: 10, toSeason: 43, toChapter: 4 },
  { name: 'Dalen Korr', aliases: ['Dalen Korr', 'Dalen'], rank: 19, fromSeason: 33, fromChapter: 10, toSeason: 43, toChapter: 4 },
  { name: 'Iseul Venn', aliases: ['Iseul Venn', 'Iseul'], rank: 20, fromSeason: 33, fromChapter: 10, toSeason: 43, toChapter: 4 },
  { name: 'Sorin Vale', aliases: ['Sorin Vale', 'Sorin'], rank: 21, fromSeason: 43, fromChapter: 3, toSeason: 43, toChapter: 4 },

  // S43C5 onward: post-Maren succession.
  { name: 'Sael Vardon', aliases: ['Sael Vardon', 'Sael'], rank: 4, fromSeason: 43, fromChapter: 5 },
  { name: 'Lysandra Keir', aliases: ['Lysandra Keir', 'Lysandra'], rank: 5, fromSeason: 43, fromChapter: 5 },
  { name: 'Nyra Sen', aliases: ['Nyra Sen', 'Nyra'], rank: 6, fromSeason: 43, fromChapter: 5 },
  { name: 'Boran Dusk', aliases: ['Boran Dusk', 'Boran'], rank: 7, fromSeason: 43, fromChapter: 5 },
  { name: 'Elian Mor', aliases: ['Elian Mor', 'Elian'], rank: 8, fromSeason: 43, fromChapter: 5 },
  { name: 'Veska Ren', aliases: ['Veska Ren', 'Veska'], rank: 9, fromSeason: 43, fromChapter: 5 },
  { name: 'Kaio Draven', aliases: ['Kaio Draven', 'Kaio'], rank: 10, fromSeason: 43, fromChapter: 5 },
  { name: 'Seline Arq', aliases: ['Seline Arq', 'Seline'], rank: 11, fromSeason: 43, fromChapter: 5 },
  { name: 'Corven Ash', aliases: ['Corven Ash', 'Corven'], rank: 12, fromSeason: 43, fromChapter: 5 },
  { name: 'Tavia Moss', aliases: ['Tavia Moss', 'Tavia'], rank: 13, fromSeason: 43, fromChapter: 5 },
  { name: 'Rook Arden', aliases: ['Rook Arden', 'Rook'], rank: 14, fromSeason: 43, fromChapter: 5 },
  { name: 'Joren Quill', aliases: ['Joren Quill', 'Joren'], rank: 15, fromSeason: 43, fromChapter: 5 },
  { name: 'Luma Vey', aliases: ['Luma Vey', 'Luma'], rank: 16, fromSeason: 43, fromChapter: 5 },
  { name: 'Tessan Ri', aliases: ['Tessan Ri', 'Tessan'], rank: 17, fromSeason: 43, fromChapter: 5 },
  { name: 'Dalen Korr', aliases: ['Dalen Korr', 'Dalen'], rank: 18, fromSeason: 43, fromChapter: 5 },
  { name: 'Iseul Venn', aliases: ['Iseul Venn', 'Iseul'], rank: 19, fromSeason: 43, fromChapter: 5 },
  { name: 'Sorin Vale', aliases: ['Sorin Vale', 'Sorin'], rank: 20, fromSeason: 43, fromChapter: 5 },
];

export const successionNotes = [
  'Season 19: Kassian Ro, Rank #5 / Ash-Furnace Sovereign, dies; S20 moves Sael to #5 and Tessan into the Top 20.',
  'Season 29: Orun Bale dies at Rank #6 protecting Azure Dragon evacuation routes; S30 moves Lysandra to #6 and Dalen into the Top 20.',
  'Season 33: Toren Vahl dies at Rank #7 containing the Concord relay catastrophe; S33C10 moves Nyra to #7 and Iseul into the Top 20.',
  'Season 42 Chapter 9: Maren Sol dies at Rank #4 holding the World Meridian pressure rupture. Rank #4 remains visibly vacant through S43C4.',
  'Season 43 Chapter 5: Sael becomes #4, every surviving fighter below shifts upward, and long-seeded Open Gate strategist Sorin Vale enters at #20.',
  'Seo Taewon remains Rank #1 throughout all published seasons.',
] as const;
