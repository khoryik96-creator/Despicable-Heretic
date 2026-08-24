interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
  onFocus: () => void;
}

export function SearchBox({ value, onChange, onFocus }: SearchBoxProps) {
  return (
    <label className="search-box">
      <span className="search-box__icon" aria-hidden="true">
        ⌕
      </span>
      <span className="sr-only">Search the wiki</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onFocus={onFocus}
        placeholder="Search chapters, characters, villains, lore..."
        type="search"
      />
      <kbd>Ctrl K</kbd>
    </label>
  );
}
