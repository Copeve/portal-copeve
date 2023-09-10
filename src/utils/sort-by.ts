export function sortByDate(a: Date, b: Date, order: 'asc' | 'desc' = 'desc') {
	if (order === 'asc') {
		return a.getTime() - b.getTime();
	}

	return b.getTime() - a.getTime();
}
