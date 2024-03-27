import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'Hackathon Runnerup',
		company: 'Cornell Appdev',
		description: 'Runnerup for best backend at the Cornell AppDev annual hackathon out of 30 teams.',
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Ithaca NY',
		period: { from: new Date(2022, 11, 1), to: new Date(2022, 12, 1)},
		skills: getSkills('Python', 'Flask', 'Docker'),
		name: 'Backend Developer',
		color: '#FF7F7F',
		links: [{ to: 'https://github.com/lcasasp/Cornell-Hitch', label: 'GitHub' }],
		logo: Assets.Appdev,
		shortDescription: 'Runnerup for best backend at the Cornell AppDev annual hackathon out of 30 teams.'
	},
	{
		slug: 'Ventures Accelerated',
		company: 'Ventures Accelerated',
		description: 'Worked with the Cornell Entrepreneurship community to guide and mentor startups in their software development.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Ithaca NY',
		period: { from: new Date(2023, 8, 1), to: new Date() },
		skills: getSkills('Rust', 'Python', 'ts', 'reactjs', 'css', 'html', 'js'),
		name: 'Ventures Accelerated SWE Fellow',
		color: '#ffffff',
		links: [{ to: 'https://www.venturesaccelerated.org/', label: 'Ventures Accelerated'}],
		logo: Assets.VenturesAccelerated,
		shortDescription: ''
	},
];

export default MY_EXPERIENCES;
