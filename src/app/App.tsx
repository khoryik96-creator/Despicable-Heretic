import { useEffect, useMemo, useRef, useState } from 'react';
import type { WikiSectionId } from '../shared/types';
import { navigationItems } from './navigation';
import { siteConfig } from './siteConfig';
import { SearchBox } from '../components/SearchBox';
import { ChaptersPage } from '../features/chapters/ChaptersPage';
import { CharactersPage } from '../features/characters/CharactersPage';
import { FactionsPage } from '../features/factions/FactionsPage';
import { LorePage } from '../features/lore/LorePage';
import { OverviewPage } from '../features/overview/OverviewPage';
import { SearchResults } from '../features/search/SearchResults';
import { TechniquesPage } from '../features/techniques/TechniquesPage';
import { TimelinePage } from '../features/timeline/TimelinePage';
import { VillainsPage } from '../features/villains/VillainsPage';

export function App() {
  const [activeSection, setActiveSection] = useState<WikiSectionId>('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInputHost = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setSearchOpen(true);
        requestAnimationFrame(() => {
          searchInputHost.current?.querySelector('input')?.focus();
        });
      }

      if (event.key === 'Escape') {
        setSearchOpen(false);
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const page = useMemo(() => {
    switch (activeSection) {
      case 'chapters':
        return <ChaptersPage />;
      case 'characters':
        return <CharactersPage />;
      case 'villains':
        return <VillainsPage />;
      case 'factions':
        return <FactionsPage />;
      case 'techniques':
        return <TechniquesPage />;
      case 'timeline':
        return <TimelinePage />;
      case 'lore':
        return <LorePage />;
      case 'overview':
      default:
        return <OverviewPage onNavigate={setActiveSection} />;
    }
  }, [activeSection]);

  function openSection(section: WikiSectionId) {
    setActiveSection(section);
    setSearchOpen(false);
    setSearchQuery('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand__mark">DH</div>
          <div>
            <p>{siteConfig.eyebrow}</p>
            <h1>{siteConfig.title}</h1>
          </div>
        </div>

        <nav className="primary-nav" aria-label="Wiki sections">
          {navigationItems.map((item, index) => (
            <button
              className={activeSection === item.id ? 'is-active' : undefined}
              key={item.id}
              onClick={() => openSection(item.id)}
              type="button"
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{item.label}</strong>
            </button>
          ))}
        </nav>

        <div className="sidebar__footer">
          <span className="status-dot" />
          <div>
            <strong>Canon workspace</strong>
            <p>Typed · modular · searchable</p>
          </div>
        </div>
      </aside>

      <div className="main-column">
        <header className="topbar">
          <div className="mobile-brand">
            <div className="brand__mark">DH</div>
            <strong>{siteConfig.title}</strong>
          </div>
          <div ref={searchInputHost} className="topbar__search">
            <SearchBox
              value={searchQuery}
              onChange={(value) => {
                setSearchQuery(value);
                setSearchOpen(true);
              }}
              onFocus={() => setSearchOpen(true)}
            />
          </div>
          <div className="topbar__meta">
            <span>Wiki v0.1</span>
          </div>
        </header>

        <nav className="mobile-tabs" aria-label="Wiki sections">
          {navigationItems.map((item) => (
            <button
              className={activeSection === item.id ? 'is-active' : undefined}
              key={item.id}
              onClick={() => openSection(item.id)}
              type="button"
            >
              {item.shortLabel}
            </button>
          ))}
        </nav>

        <main className="content">
          {searchOpen ? (
            <section>
              <div className="search-page-heading">
                <div>
                  <p className="eyebrow">Global index</p>
                  <h2>Search</h2>
                </div>
                <button
                  className="text-button"
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchQuery('');
                  }}
                  type="button"
                >
                  Close
                </button>
              </div>
              <SearchResults query={searchQuery} onOpenSection={openSection} />
            </section>
          ) : (
            page
          )}
        </main>
      </div>
    </div>
  );
}
