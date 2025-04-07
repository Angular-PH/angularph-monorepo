export function sortByDate<T extends { date: string | number | Date }>(
  items: T[],
  order: 'asc' | 'desc' = 'asc'
): T[] {
  return items.sort((a, b) => {
    const diff = new Date(a.date).getTime() - new Date(b.date).getTime();
    return order === 'asc' ? diff : -diff;
  });
}
