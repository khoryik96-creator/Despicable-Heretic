import { rankHistory } from '../rankings/history';

interface ProseProps {
  body: string;
  season: number;
  chapter: number;
}

type SkillTier = 'Named' | 'Transcended' | 'Supreme' | 'Ultimate';
type TierResolver = SkillTier | ((position: number) => SkillTier);
type SkillMention = [name: string, tier: TierResolver, sealed?: boolean];

const tierMeta: Record<SkillTier, { symbol: string; label: string; className: string }> = {
  Named: { symbol: '◆', label: 'Named', className: 'named' },
  Transcended: { symbol: '✦', label: 'Transcended', className: 'transcended' },
  Supreme: { symbol: '✧', label: 'Supreme', className: 'supreme' },
  Ultimate: { symbol: '★', label: 'Ultimate', className: 'ultimate' },
};

const rawSkillMentions: SkillMention[] = [
  ['Returning Breath of the Mountain — Myriad Spring Reforging', 'Transcended'],
  ['Returning Breath of the Mountain — Hundred Living Breaths', 'Transcended'],
  ['Falling Blossom Breaks the Horizon — Ten Thousand Blossoms, One Funeral', 'Transcended'],
  ['Empty-Hand Measure — Measure Before Contact', 'Transcended'],
  ['Horizon Without Distance — Shared Passage', 'Transcended'],
  ['Ten Thousand Roads Return — One Road Home', 'Transcended'],
  ['Unbroken Vessel — Inner World', 'Transcended'],
  ['Still Sky — Living Exemption', 'Transcended'],
  ['Ten Thousand Blossoms, One Funeral', 'Transcended'],
  ['Returning Breath of the Mountain', (point: number) => point >= 4204 ? 'Transcended' : 'Named'],
  ['Hundred Living Breaths', 'Transcended'],
  ['Myriad Spring Reforging', 'Transcended'],
  ['Measure Before Contact', 'Transcended'],
  ['Empty-Hand Measure', (point: number) => point >= 3903 ? 'Transcended' : 'Named'],
  ['Step Between Footfalls', 'Named'],
  ['Living Exemption', 'Transcended'],
  ['Still Sky', 'Transcended'],
  ['Shared Passage', 'Transcended'],
  ['Horizon Without Distance', 'Transcended'],
  ['One Road Home', 'Transcended'],
  ['Ten Thousand Roads Return', 'Transcended'],
  ['Inner World', 'Transcended'],
  ['Unbroken Vessel', 'Transcended'],
  ['Spring of the Open Gate', 'Transcended'],
  ['Falling Blossom Breaks the Horizon', 'Transcended'],
  ['No Heaven Above Me', 'Supreme'],
  ['The World Beneath Falling Blossoms', 'Supreme'],
  ['One Blossom Buries Heaven', 'Supreme'],
  ['Unwritten Law', 'Supreme', true],
  ['The Last Quiet Beneath Heaven', 'Ultimate', true],
];

const skillMentions = rawSkillMentions.sort((a, b) => b[0].length - a[0].length);

const aliasRows = (() => {
  const seen = new Set<string>();
  return rankHistory.flatMap((entry) => entry.aliases.map((alias) => ({ name: entry.name, alias })))
    .filter((row) => {
      const key = `${row.name}|${row.alias}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((a, b) => b.alias.length - a.alias.length);
})();

function position(season: number, chapter: number): number {
  return season * 100 + chapter;
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[char] ?? char));
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function rankAt(name: string, season: number, chapter: number) {
  const point = position(season, chapter);
  return rankHistory.find((entry) => {
    if (entry.name !== name) return false;
    const from = position(entry.fromSeason, entry.fromChapter ?? 1);
    const to = entry.toSeason ? position(entry.toSeason, entry.toChapter ?? 99) : Number.POSITIVE_INFINITY;
    return point >= from && point <= to;
  });
}

function injectRanks(html: string, season: number, chapter: number): string {
  let output = html;
  const tokens: { key: string; alias: string; rank: number; status?: string }[] = [];

  for (const row of aliasRows) {
    const ranked = rankAt(row.name, season, chapter);
    if (!ranked) continue;
    const regex = new RegExp(`\\b${escapeRegExp(row.alias)}\\b`, 'g');
    output = output.replace(regex, () => {
      const key = `@@RANK_${tokens.length}@@`;
      tokens.push({ key, alias: row.alias, rank: ranked.rank, status: ranked.status });
      return key;
    });
  }

  for (const token of tokens) {
    const statusClass = token.status === 'Deceased' ? ' dead' : token.status === 'Retired' ? ' retired' : '';
    const suffix = token.status === 'Deceased' ? ' †' : token.status === 'Retired' ? ' RET' : '';
    output = output.split(token.key).join(
      `<span class="ranked-name">${token.alias}<span class="rank-badge${statusClass}">#${token.rank}${suffix}</span></span>`,
    );
  }
  return output;
}

function injectSkills(html: string, season: number, chapter: number): string {
  let output = html;
  const tokens: { key: string; name: string; tier: SkillTier; sealed: boolean }[] = [];
  const point = position(season, chapter);

  for (const [name, resolver, sealed = false] of skillMentions) {
    const regex = new RegExp(`\\b${escapeRegExp(name)}\\b`, 'g');
    output = output.replace(regex, () => {
      const key = `@@SKILL_${tokens.length}@@`;
      tokens.push({ key, name, tier: typeof resolver === 'function' ? resolver(point) : resolver, sealed });
      return key;
    });
  }

  for (const token of tokens) {
    const meta = tierMeta[token.tier];
    const sealedClass = token.sealed ? ' sealed' : '';
    output = output.split(token.key).join(
      `<span class="technique-name">${token.name}</span><span class="skill-badge ${meta.className}${sealedClass}">${meta.symbol} ${meta.label}${token.sealed ? ' · sealed' : ''}</span>`,
    );
  }
  return output;
}

function decorateInline(text: string, season: number, chapter: number): string {
  let html = escapeHtml(text);
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = injectRanks(html, season, chapter);
  html = html.replace(/\bRyn\b/g, '<span class="ryn-name">Ryn</span>');
  html = html.replace(/\bLucy\b/g, '<span class="lucy-name">Lucy</span>');
  html = injectSkills(html, season, chapter);
  return html;
}

export function Prose({ body, season, chapter }: ProseProps) {
  const blocks = body.split(/\n{2,}/).map((block) => block.trim()).filter(Boolean);

  return (
    <div className="reader-prose">
      {blocks.map((original, index) => {
        if (original === '***') return <div className="scene-break" key={index}>✦ ✦ ✦</div>;

        let block = original;
        let speaker: 'ryn' | 'lucy' | null = null;
        if (block.startsWith('[[Ryn]]')) {
          speaker = 'ryn';
          block = block.slice(7).trim();
        } else if (block.startsWith('[[Lucy]]')) {
          speaker = 'lucy';
          block = block.slice(8).trim();
        }

        if (block.startsWith('### ')) {
          return <h3 key={index} dangerouslySetInnerHTML={{ __html: decorateInline(block.slice(4), season, chapter) }} />;
        }
        if (block.startsWith('## ')) {
          return <h2 key={index} dangerouslySetInnerHTML={{ __html: decorateInline(block.slice(3), season, chapter) }} />;
        }

        const content = <span dangerouslySetInnerHTML={{ __html: decorateInline(block, season, chapter) }} />;
        if (speaker) {
          return (
            <div className={`reader-dialogue reader-dialogue--${speaker}`} key={index}>
              <span className="reader-dialogue__speaker">{speaker === 'ryn' ? 'Ryn' : 'Lucy'}</span>
              {content}
            </div>
          );
        }
        return <p key={index}>{content}</p>;
      })}
    </div>
  );
}
