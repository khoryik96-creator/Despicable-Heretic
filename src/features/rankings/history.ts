export interface RankEraEntry {
  name: string;
  aliases: string[];
  rank: number;
  fromSeason: number;
  fromChapter?: number;
  toSeason?: number;
  toChapter?: number;
  status?: 'Active' | 'Deceased' | 'Retired';
}

const aliases: Record<string, string[]> = {
  'Seo Taewon': ['Seo Taewon', 'Taewon'],
  'Veyra Nox': ['Veyra Nox', 'Veyra'],
  'Dae Kiryun': ['Dae Kiryun', 'Kiryun'],
  'Maren Sol': ['Maren Sol', 'Maren'],
  'Kassian Ro': ['Kassian Ro', 'Kassian'],
  'Sael Vardon': ['Sael Vardon', 'Sael'],
  'Orun Bale': ['Orun Bale', 'Orun'],
  'Lysandra Keir': ['Lysandra Keir', 'Lysandra'],
  'Toren Vahl': ['Toren Vahl', 'Toren'],
  'Nyra Sen': ['Nyra Sen', 'Nyra'],
  'Boran Dusk': ['Boran Dusk', 'Boran'],
  'Elian Mor': ['Elian Mor', 'Elian'],
  'Veska Ren': ['Veska Ren', 'Veska'],
  'Kaio Draven': ['Kaio Draven', 'Kaio'],
  'Seline Arq': ['Seline Arq', 'Seline'],
  'Corven Ash': ['Corven Ash', 'Corven'],
  'Tavia Moss': ['Tavia Moss', 'Tavia'],
  'Rook Arden': ['Rook Arden', 'Rook'],
  'Joren Quill': ['Joren Quill', 'Joren'],
  'Luma Vey': ['Luma Vey', 'Luma'],
  'Tessan Ri': ['Tessan Ri', 'Tessan'],
  'Dalen Korr': ['Dalen Korr', 'Dalen'],
  'Iseul Venn': ['Iseul Venn', 'Iseul'],
  'Sorin Vale': ['Sorin Vale', 'Sorin'],
  'Kesh Ardan': ['Kesh Ardan', 'Kesh'],
  'Asha Mire': ['Asha Mire', 'Asha'],
  'Lucy': ['Princess Lucy', 'Lucy'],
  'Meira Sun': ['Meira Sun', 'Meira'],
};

const out: RankEraEntry[] = [];
function addRoster(roster: string[], fromSeason: number, fromChapter: number, toSeason: number, toChapter: number) {
  roster.forEach((name, i) => out.push({ name, aliases: aliases[name] || [name], rank: i + 1, fromSeason, fromChapter, toSeason, toChapter }));
}
function addPairs(pairs: Array<[number, string]>, fromSeason: number, fromChapter: number, toSeason: number, toChapter: number) {
  pairs.forEach(([rank, name]) => out.push({ name, aliases: aliases[name] || [name], rank, fromSeason, fromChapter, toSeason, toChapter }));
}
function addStatus(name: string, rank: number, status: 'Deceased' | 'Retired', fromSeason: number, fromChapter: number) {
  out.push({ name, aliases: aliases[name] || [name], rank, status, fromSeason, fromChapter });
}

// S1 -> S20C2: original public roster, except Kassian's active era ends with his death in S19C10.
// Separating Kassian prevents an active/deceased overlap in S20C1-C2.
addPairs([
  [1,'Seo Taewon'],[2,'Veyra Nox'],[3,'Dae Kiryun'],[4,'Maren Sol'],
  [6,'Sael Vardon'],[7,'Orun Bale'],[8,'Lysandra Keir'],[9,'Toren Vahl'],[10,'Nyra Sen'],
  [11,'Boran Dusk'],[12,'Elian Mor'],[13,'Veska Ren'],[14,'Kaio Draven'],[15,'Seline Arq'],
  [16,'Corven Ash'],[17,'Tavia Moss'],[18,'Rook Arden'],[19,'Joren Quill'],[20,'Luma Vey']
], 1, 1, 20, 2);
out.push({ name: 'Kassian Ro', aliases: aliases['Kassian Ro'], rank: 5, fromSeason: 1, fromChapter: 1, toSeason: 19, toChapter: 10 });
addStatus('Kassian Ro', 5, 'Deceased', 20, 1);
out.push({ name: 'Tessan Ri', aliases: aliases['Tessan Ri'], rank: 21, fromSeason: 18, fromChapter: 10, toSeason: 20, toChapter: 2 });

// S20C3 -> S29C9: Kassian succession.
addRoster(['Seo Taewon','Veyra Nox','Dae Kiryun','Maren Sol','Sael Vardon','Orun Bale','Lysandra Keir','Toren Vahl','Nyra Sen','Boran Dusk','Elian Mor','Veska Ren','Kaio Draven','Seline Arq','Corven Ash','Tavia Moss','Rook Arden','Joren Quill','Luma Vey','Tessan Ri'], 20, 3, 29, 9);

// S29C10 records Orun dead; other numbers do not shift until S30.
addPairs([[1,'Seo Taewon'],[2,'Veyra Nox'],[3,'Dae Kiryun'],[4,'Maren Sol'],[5,'Sael Vardon'],[7,'Lysandra Keir'],[8,'Toren Vahl'],[9,'Nyra Sen'],[10,'Boran Dusk'],[11,'Elian Mor'],[12,'Veska Ren'],[13,'Kaio Draven'],[14,'Seline Arq'],[15,'Corven Ash'],[16,'Tavia Moss'],[17,'Rook Arden'],[18,'Joren Quill'],[19,'Luma Vey'],[20,'Tessan Ri']], 29, 10, 29, 10);
addStatus('Orun Bale', 6, 'Deceased', 29, 10);

// S30 -> S33C9: post-Orun succession.
addRoster(['Seo Taewon','Veyra Nox','Dae Kiryun','Maren Sol','Sael Vardon','Lysandra Keir','Toren Vahl','Nyra Sen','Boran Dusk','Elian Mor','Veska Ren','Kaio Draven','Seline Arq','Corven Ash','Tavia Moss','Rook Arden','Joren Quill','Luma Vey','Tessan Ri','Dalen Korr'], 30, 1, 33, 9);
out.push({ name: 'Iseul Venn', aliases: aliases['Iseul Venn'], rank: 21, fromSeason: 30, fromChapter: 1, toSeason: 33, toChapter: 9 });

// S33C10 -> S42C9: post-Toren succession.
addRoster(['Seo Taewon','Veyra Nox','Dae Kiryun','Maren Sol','Sael Vardon','Lysandra Keir','Nyra Sen','Boran Dusk','Elian Mor','Veska Ren','Kaio Draven','Seline Arq','Corven Ash','Tavia Moss','Rook Arden','Joren Quill','Luma Vey','Tessan Ri','Dalen Korr','Iseul Venn'], 33, 10, 42, 9);
addStatus('Toren Vahl', 7, 'Deceased', 33, 10);

// S42C10 -> S43C4: Maren is dead and #4 deliberately remains vacant.
addPairs([[1,'Seo Taewon'],[2,'Veyra Nox'],[3,'Dae Kiryun'],[5,'Sael Vardon'],[6,'Lysandra Keir'],[7,'Nyra Sen'],[8,'Boran Dusk'],[9,'Elian Mor'],[10,'Veska Ren'],[11,'Kaio Draven'],[12,'Seline Arq'],[13,'Corven Ash'],[14,'Tavia Moss'],[15,'Rook Arden'],[16,'Joren Quill'],[17,'Luma Vey'],[18,'Tessan Ri'],[19,'Dalen Korr'],[20,'Iseul Venn'],[21,'Sorin Vale']], 42, 10, 43, 4);
addStatus('Maren Sol', 4, 'Deceased', 42, 10);

// S43C5 -> S48C4: post-Maren succession.
addRoster(['Seo Taewon','Veyra Nox','Dae Kiryun','Sael Vardon','Lysandra Keir','Nyra Sen','Boran Dusk','Elian Mor','Veska Ren','Kaio Draven','Seline Arq','Corven Ash','Tavia Moss','Rook Arden','Joren Quill','Luma Vey','Tessan Ri','Dalen Korr','Iseul Venn','Sorin Vale'], 43, 5, 48, 4);

// S48C5-C6: Dalen retires; #20 remains deliberately vacant.
addRoster(['Seo Taewon','Veyra Nox','Dae Kiryun','Sael Vardon','Lysandra Keir','Nyra Sen','Boran Dusk','Elian Mor','Veska Ren','Kaio Draven','Seline Arq','Corven Ash','Tavia Moss','Rook Arden','Joren Quill','Luma Vey','Tessan Ri','Iseul Venn','Sorin Vale'], 48, 5, 48, 6);
addStatus('Dalen Korr', 18, 'Retired', 48, 5);

// S48C7 -> S49C3: Kesh enters at #20.
addRoster(['Seo Taewon','Veyra Nox','Dae Kiryun','Sael Vardon','Lysandra Keir','Nyra Sen','Boran Dusk','Elian Mor','Veska Ren','Kaio Draven','Seline Arq','Corven Ash','Tavia Moss','Rook Arden','Joren Quill','Luma Vey','Tessan Ri','Iseul Venn','Sorin Vale','Kesh Ardan'], 48, 7, 49, 3);

// S49C4 -> S52C9: Rook retires and Asha Mire enters #20.
addRoster(['Seo Taewon','Veyra Nox','Dae Kiryun','Sael Vardon','Lysandra Keir','Nyra Sen','Boran Dusk','Elian Mor','Veska Ren','Kaio Draven','Seline Arq','Corven Ash','Tavia Moss','Joren Quill','Luma Vey','Tessan Ri','Iseul Venn','Sorin Vale','Kesh Ardan','Asha Mire'], 49, 4, 52, 9);
addStatus('Rook Arden', 14, 'Retired', 49, 4);

// S52C10 -> S53C2: Taewon is dead; #1 remains vacant and all other numbers stay unchanged until formal succession.
addPairs([[2,'Veyra Nox'],[3,'Dae Kiryun'],[4,'Sael Vardon'],[5,'Lysandra Keir'],[6,'Nyra Sen'],[7,'Boran Dusk'],[8,'Elian Mor'],[9,'Veska Ren'],[10,'Kaio Draven'],[11,'Seline Arq'],[12,'Corven Ash'],[13,'Tavia Moss'],[14,'Joren Quill'],[15,'Luma Vey'],[16,'Tessan Ri'],[17,'Iseul Venn'],[18,'Sorin Vale'],[19,'Kesh Ardan'],[20,'Asha Mire']], 52, 10, 53, 2);
addStatus('Seo Taewon', 1, 'Deceased', 52, 10);

// S53C3-C6: post-Taewon succession, #20 temporarily vacant.
addRoster(['Veyra Nox','Dae Kiryun','Sael Vardon','Lysandra Keir','Nyra Sen','Boran Dusk','Elian Mor','Veska Ren','Kaio Draven','Seline Arq','Corven Ash','Tavia Moss','Joren Quill','Luma Vey','Tessan Ri','Iseul Venn','Sorin Vale','Kesh Ardan','Asha Mire'], 53, 3, 53, 6);

// S53C7: Lucy is formally placed at #5.
addRoster(['Veyra Nox','Dae Kiryun','Sael Vardon','Lysandra Keir','Lucy','Nyra Sen','Boran Dusk','Elian Mor','Veska Ren','Kaio Draven','Seline Arq','Corven Ash','Tavia Moss','Joren Quill','Luma Vey','Tessan Ri','Iseul Venn','Sorin Vale','Kesh Ardan','Asha Mire'], 53, 7, 53, 7);

// S53C8 onward: Meira Sun returns at #8; Asha moves to #21.
addRoster(['Veyra Nox','Dae Kiryun','Sael Vardon','Lysandra Keir','Lucy','Nyra Sen','Boran Dusk','Meira Sun','Elian Mor','Veska Ren','Kaio Draven','Seline Arq','Corven Ash','Tavia Moss','Joren Quill','Luma Vey','Tessan Ri','Iseul Venn','Sorin Vale','Kesh Ardan'], 53, 8, 9999, 99);
out.push({ name: 'Asha Mire', aliases: aliases['Asha Mire'], rank: 21, fromSeason: 53, fromChapter: 8 });

export const rankHistory = out;

export const successionNotes = [
  'S19C10: Kassian Ro dies as #5; he is posthumous #5† from S20C1. S20C3 begins the Sael/Tessan succession.',
  'S29C10: Orun Bale dies; the post-Orun roster begins in S30.',
  'S33C10: Toren Vahl dies; Iseul Venn enters the Top 20.',
  'S42C10: Maren Sol is dead and #4 remains deliberately vacant until S43C5.',
  'S48C5: Dalen Korr survives but retires from ranked combat; Kesh Ardan enters #20 in S48C7.',
  'S49C4: Rook Arden survives but retires; Asha Mire enters #20.',
  'S52C10: Seo Taewon is dead and #1 remains vacant until S53C3.',
  'S53C3: Veyra Nox becomes #1; S53C7 places Lucy at #5; S53C8 returns Meira Sun at #8.',
] as const;
