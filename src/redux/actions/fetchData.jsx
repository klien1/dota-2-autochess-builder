import _ from 'lodash';

import { FETCH_DATA } from '../../constants/actionTypes';
import heroData from '../../data/heroData';

export const fetchData = () => {
	return {
		type: FETCH_DATA,
		heroData
	};
};

export const filterData = filter => {
	if (!filter || filter.trim().length === 0)
		return {
			type: FETCH_DATA,
			heroData
		};

	const fileredData = _.pickBy(heroData, (value, key) => {
		if (hasString(key, filter) || hasString(value.heroClass, filter))
			return true;

		const raceArray = value.heroRace;
		for (let i = raceArray.length - 1; i >= 0; --i)
			if (hasString(raceArray[i], filter)) return true;

		return false;
	});

	return {
		type: FETCH_DATA,
		heroData: fileredData
	};
};

const hasString = (string, value) => {
	const lowerCaseString = string.toLowerCase();
	const lowerCaseValue = value.toLowerCase();

	const index = lowerCaseString.indexOf(lowerCaseValue);
	return index >= 0;
};
