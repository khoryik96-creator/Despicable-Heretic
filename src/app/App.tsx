import { useEffect, useMemo, useRef, useState } from 'react';
import type { WikiSectionId } from '../shared/types';
import { navigationItems } from './navigation';
import { siteConfig } from './siteConfig';
import { SearchBox } from '../components/SearchBox';
import { BookmarksPage } from '../features/bookmarks/BookmarksPage';
import { allChapters, publishedChapterCount, publishedSeasonCount } from '../features/chapters/allData';
import { ChaptersPage } from '../features/chapters/ChaptersPage';
import { CharactersPage } from '../features/characters/CharactersPage';
import { FactionsPage } from '../features/factions/FactionsPage';
import { LorePage } from '../features/lore/LorePage';
import { OverviewPage } from '../features/overview/OverviewPage';
import { RankingsPage } from '../features/rankings/RankingsPage';
import { ReaderPage } from '../features/reader/ReaderPage';
import { useReaderState } from '../features/reader/ReaderContext';
import { SearchResults } from '../features/search/SearchResults';
import { TechniquesPage } from '../features/techniques/TechniquesPage';
import { TimelinePage } from '../features/timeline/TimelinePage';
import { VillainsPage } from '../features/villains/VillainsPage';

interface RouteState {
  section: WikiSectionId;
  chapterId: string | null;
}

const sectionIds = new Set<WikiSectionId>(navigationItems.map((item) => item.id));

function readRoute(): RouteState {
  if (typeof window === 'undefined') return { section: 'overview', chapterId: null };
  const raw = decodeURIComponent(window.location.hash.replace(/^#/, ''));
  if (raw.startsWith('chapter/')) {
    const chapterId = raw.slice('chapter/'.length);
    return { section: 'chapters', chapterId: allChapters.some((chapter) => chapter.id === chapterId) ? chapterId : null };
  }
  if (sectionIds.has(raw as WikiSectionId)) return { section: raw as WikiSectionId, chapterId: null };
  return { section: 'overview', chapterId: null };
}

export function App() {
  const initialRoute = useMemo(readRoute, []);
  const [activeSection, setActiveSection] = useState<WikiSectionId>(initialRoute.section);
  const [chapterId, setChapterId] = useState<string | null>(initialRoute.chapterId);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInputHost = useRef<HTMLDivElement>(null);
  const { lastRead } = useReaderState();
  const continueChapter = lastRead ? allChapters.find((chapter) => chapter.id === lastRead) : allChapters[0];

  useEffect(() => {
    function applyRoute() {
      const route = readRoute();
      setActiveSection(route.section);
      setChapterId(route.chapterId);
      setSearchOpen(false);
      setSearchQuery('');
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
    window.addEventListener('hashchange', applyRoute);
    return () => window.removeEventListener('hashchange', applyRoute);
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setSearchOpen(true);
        requestAnimationFrame(() => searchInputHost.current?.querySelector('input')?.focus());
      }
      if (event.key === 'Escape') setSearchOpen(false);
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  function navigateHash(hash: string) {
    const next = `#${hash}`;
    if (window.location.hash === next) {
      const route = readRoute();
      setActiveSection(route.section);
      setChapterId(route.chapterId);
      setSearchOpen(false);
      setSearchQuery('');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    window.location.hash = hash;
  }

  function openSection(section: WikiSectionId) {
    navigateHash(section);
  }

  function openChapter(id: string) {
    navigateHash(`chapter/${id}`);
  }

  const page = useMemo(() => {
    if (chapterId) return <ReaderPage chapterId={chapterId} onOpenChapter={openChapter} onBackToArchive={() => openSection('chapters')} />;
    switch (activeSection) {
      case 'chapters': return <ChaptersPage onOpenChapter={openChapter} />;
      case 'bookmarks': return <BookmarksPage onOpenChapter={openChapter} />;
      case 'rankings': return <RankingsPage />;
      case 'characters': return <CharactersPage />;
      case 'villains': return <VillainsPage />;
      case 'factions': return <FactionsPage />;
      case 'techniques': return <TechniquesPage />;
      case 'timeline': return <TimelinePage />;
      case 'lore': return <LorePage />;
      case 'overview':
      default: return <OverviewPage onNavigate={openSection} onOpenChapter={openChapter} />;
    }
  // Hash navigation functions are stable for a render and route changes already update these dependencies.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSection, chapterId]);

  const navSection = chapterId ? 'chapters' : activeSection;

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <button className="brand brand--button" onClick={() => openSection('overview')} type="button">
          <div className="brand__mark">DH</div>
          <div><p>{siteConfig.eyebrow}</p><h1>{siteConfig.title}</h1></div>
        </button>
        <nav className="primary-nav" aria-label="Wiki sections">
          {navigationItems.map((item, index) => (
            <button className={navSection === item.id ? 'is-active' : undefined} key={item.id} onClick={() => openSection(item.id)} type="button">
              <span>{String(index + 1).padStart(2, '0')}</span><strong>{item.label}</strong>
            </button>
          ))}
        </nav>
        <div className="sidebar__footer"><span className="status-dot" /><div><strong>Canon workspace</strong><p>{publishedSeasonCount} seasons · synchronized</p></div></div>
      </aside>

      <div className="main-column">
        <header className="topbar">
          <button className="mobile-brand mobile-brand--button" onClick={() => openSection('overview')} type="button">
            <div className="brand__mark">DH</div><strong>{siteConfig.title}</strong>
          </button>
          <div ref={searchInputHost} className="topbar__search">
            <SearchBox
              value={searchQuery}
              onChange={(value) => { setSearchQuery(value); setSearchOpen(true); }}
              onFocus={() => setSearchOpen(true)}
            />
          </div>
          {continueChapter ? (
            <button className="topbar__continue" onClick={() => openChapter(continueChapter.id)} type="button">
              {lastRead ? `Continue S${continueChapter.season} Ch ${continueChapter.number}` : 'Start reading'}
            </button>
          ) : null}
          <div className="topbar__meta"><span>{publishedSeasonCount} seasons · {publishedChapterCount} chapters</span></div>
        </header>

        <nav className="mobile-tabs" aria-label="Wiki sections">
          {navigationItems.map((item) => (
            <button className={navSection === item.id ? 'is-active' : undefined} key={item.id} onClick={() => openSection(item.id)} type="button">{item.shortLabel}</button>
          ))}
        </nav>

        <main className="content">
          {searchOpen ? (
            <section>
              <div className="search-page-heading">
                <div><p className="eyebrow">Global index</p><h2>Search</h2></div>
                <button className="text-button" onClick={() => { setSearchOpen(false); setSearchQuery(''); }} type="button">Close</button>
              </div>
              <SearchResults query={searchQuery} onOpenSection={openSection} onOpenChapter={openChapter} />
            </section>
          ) : page}
        </main>
      </div>
    </div>
  );
}
