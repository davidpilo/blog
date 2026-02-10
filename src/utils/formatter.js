export function formatDate(dateStr) {
	const date = new Date(dateStr);

	return new Intl.DateTimeFormat('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	}).format(date);
}
