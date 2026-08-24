export interface TimelineEntry {
  id: string;
  era: string;
  title: string;
  summary: string;
  importance: 'World' | 'Arc' | 'Character';
}
