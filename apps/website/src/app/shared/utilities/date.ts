export function sortByDate<T extends { date: string | number | Date }>(
  items: T[],
  order: 'asc' | 'desc' = 'asc'
): T[] {
  return items.sort((a, b) => {
    const diff = new Date(a.date).getTime() - new Date(b.date).getTime();
    return order === 'asc' ? diff : -diff;
  });
}

export enum TimeframeType {
  PAST = 'past',
  FUTURE = 'future',
}

export function filterByTimeframe<T extends { date: string | number | Date }>(
  items: T[],
  timeframe: TimeframeType,
  options?: {
    limit?: number;
    sortDirection?: 'asc' | 'desc';
  }
): T[] {
  const today = new Date();
  const sortDir = options?.sortDirection || 'desc';

  const filteredItems = items.filter((item) => {
    const itemDate = new Date(item.date);
    return timeframe === TimeframeType.PAST
      ? itemDate <= today
      : itemDate > today;
  });

  if (filteredItems.length === 0) {
    return [];
  }

  const sortedItems = sortByDate<T>(filteredItems, sortDir);
  return options?.limit ? sortedItems.slice(0, options.limit) : sortedItems;
}
