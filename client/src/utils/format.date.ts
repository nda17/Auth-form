export const formatDate = (data: string) => {
	const date = new Date(data);
	const day = String(date.getDate()).padStart(2, '0');
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const year = date.getFullYear();
	const formatDateString = `${day}.${month}.${year}`;

	return formatDateString;
};
