import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import { readBookmarks, readLastRead, writeBookmarks, writeLastRead } from '../../shared/storage/readerStorage';

interface ReaderContextValue {
  bookmarks: ReadonlySet<string>;
  lastRead: string | null;
  isBookmarked: (id: string) => boolean;
  toggleBookmark: (id: string) => void;
  clearBookmarks: () => void;
  markLastRead: (id: string) => void;
}

const ReaderContext = createContext<ReaderContextValue | null>(null);

export function ReaderProvider({ children }: { children: ReactNode }) {
  const [bookmarks, setBookmarks] = useState<Set<string>>(() => new Set(readBookmarks()));
  const [lastRead, setLastRead] = useState<string | null>(() => readLastRead());

  const isBookmarked = useCallback((id: string) => bookmarks.has(id), [bookmarks]);
  const toggleBookmark = useCallback((id: string) => {
    setBookmarks((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      writeBookmarks(next);
      return next;
    });
  }, []);
  const clearBookmarks = useCallback(() => {
    const next = new Set<string>();
    setBookmarks(next);
    writeBookmarks(next);
  }, []);
  const markLastRead = useCallback((id: string) => {
    setLastRead((current) => current === id ? current : id);
    writeLastRead(id);
  }, []);

  const value = useMemo<ReaderContextValue>(() => ({
    bookmarks,
    lastRead,
    isBookmarked,
    toggleBookmark,
    clearBookmarks,
    markLastRead,
  }), [bookmarks, clearBookmarks, isBookmarked, lastRead, markLastRead, toggleBookmark]);

  return <ReaderContext.Provider value={value}>{children}</ReaderContext.Provider>;
}

export function useReaderState(): ReaderContextValue {
  const value = useContext(ReaderContext);
  if (!value) throw new Error('useReaderState must be used inside ReaderProvider.');
  return value;
}
