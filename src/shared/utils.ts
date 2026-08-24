export function normalise(value: string): string { return value.trim().toLocaleLowerCase(); }
export function includesQuery(values: string[], query: string): boolean {
  const needle = normalise(query);
  if (!needle) return true;
  return values.some((value) => normalise(value).includes(needle));
}
