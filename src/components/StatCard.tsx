interface StatCardProps {
  label: string;
  value: number | string;
  hint: string;
}

export function StatCard({ label, value, hint }: StatCardProps) {
  return (
    <article className="stat-card">
      <p>{label}</p>
      <strong>{value}</strong>
      <span>{hint}</span>
    </article>
  );
}
