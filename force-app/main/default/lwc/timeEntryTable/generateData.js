export default function generateData({ amountOfRecords }) {
	return [...Array(amountOfRecords)].map((_, index) => {
		return {
			name: '',
		};
	});
}
