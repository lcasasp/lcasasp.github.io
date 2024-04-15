import Assets from './data/assets';
import type { Education } from './types';

export const MY_EDUCATIONS: Array<Education> = [
	{
		degree: 'BS in Computer Science',
		description: '',
		location: 'Ithaca - NY',
		logo: Assets.Cornell,
		name: '',
		organization: 'Cornell University',
		period: { from: new Date(2021, 11, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['OOP', 'Python', 'Java', 'OCaml', 'Discrete Math', 'Algorithm Analysis', 'Machine Learning']
	},
	{
		degree: 'Undergraduate Summer Session',
		description: '',
		location: 'Palo Alto - CA',
		logo: Assets.Stanford,
		name: '',
		organization: 'Stanford University',
		period: { from: new Date(2020, 6, 1), to: new Date(2020, 8, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['HTML/CSS', 'Javascript', 'C++', 'Algorithms and Data structures']
	}
];
