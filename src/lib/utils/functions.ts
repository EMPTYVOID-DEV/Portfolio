import { monthsList, type months } from './types';

export const compareDates = (
	dateA: { month: months; day: number; year: number },
	dateB: { month: months; day: number; year: number }
): number => {
	if (dateA.year !== dateB.year) {
		return dateB.year - dateA.year;
	}
	if (monthsList.indexOf(dateA.month) !== monthsList.indexOf(dateB.month)) {
		return monthsList.indexOf(dateB.month) - monthsList.indexOf(dateA.month);
	}
	return dateB.day - dateA.day;
};
