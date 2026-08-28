import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
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

  const value = useMemo<ReaderContextValue>(() => ({
    bookmarks,
    lastRead,
    isBookmarked: (id) => bookmarks.has(id),
    toggleBookmark: (id) => {
      setBookmarks((current) => {
        const next = new Set(current);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        writeBookmarks(next);
        return next;
      });
    },
    clearBookmarks: () => {
      const next = new Set<string>();
      setBookmarks(next);
      writeBookmarks(next);
    },
    markLastRead: (id) => {
      setLastRead(id);
      writeLastRead(id);
    },
  }), [bookmarks, lastRead]);

  return <ReaderContext.Provider value={value}>{children}</ReaderContext.Provider>;
}

export function useReaderState(): ReaderContextValue {
  const value = useContext(ReaderContext);
  if (!value) throw new Error('useReaderState must be used inside ReaderProvider.');
  return value;
}
