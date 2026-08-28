import { EmptyState } from '../../components/EmptyState';
import { PageHeader } from '../../components/PageHeader';
import { allChapters } from '../chapters/allData';
import { useReaderState } from '../reader/ReaderContext';

interface BookmarksPageProps {
  onOpenChapter: (id: string) => void;
}

export function BookmarksPage({ onOpenChapter }: BookmarksPageProps) {
  const { bookmarks, toggleBookmark, clearBookmarks } = useReaderState();
  const saved = allChapters.filter((chapter) => bookmarks.has(chapter.id));

  return (
    <section>
      <PageHeader
        eyebrow={`${saved.length} saved chapter${saved.length === 1 ? '' : 's'}`}
        title="Bookmarks"
        description="Saved on this device using the same dhBookmarksV2 key as the current production reader."
      />
      {saved.length ? (
        <>
          <div className="toolbar toolbar--secondary">
            <button
              className="text-button"
              onClick={() => {
                if (window.confirm('Clear all bookmarks on this device?')) clearBookmarks();
              }}
              type="button"
            >
              Clear all bookmarks
            </button>
          </div>
          <div className="bookmark-grid">
            {saved.map((chapter) => (
              <article className="bookmark-card" key={chapter.id}>
                <button className="bookmark-card__open" onClick={() => onOpenChapter(chapter.id)} type="button">
                  <span className="eyebrow">S{chapter.season} · Ch {chapter.number}</span>
                  <h3>{chapter.title}</h3>
                  <p>{chapter.summary}</p>
                  <span className="season-kicker">{chapter.seasonTitle}</span>
                </button>
                <button className="bookmark-card__remove" onClick={() => toggleBookmark(chapter.id)} type="button">Remove</button>
              </article>
            ))}
          </div>
        </>
      ) : <EmptyState title="No bookmarks yet" message="Bookmark a chapter from the archive or while reading and it will appear here." />}
    </section>
  );
}
