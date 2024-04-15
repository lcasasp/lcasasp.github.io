import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'Lockheed Martin',
		company: 'Lockheed Martin',
		description: 'Incoming intern for Lockheed Martin\'s Enterprise Business and Digital Transformation team to develop and optimize software.' +
		'\n Worked in a team of 3 on a site to centralize Lockheed Martin research using Angular, .NET, and Python.',
		contract: ContractType.Internship,
		type: 'Software Engineering',
		location: 'New York, NY',
		period: { from: new Date(2024, 5, 1), to: new Date(2024, 8, 1) },
		skills: getSkills('Python', 'Angular'),
		name: 'Software Engineering Intern',
		color: '#003478',
		links: [{ to: 'https://www.lockheedmartin.com/en-us/index.html', label: 'Lockheed Martin' } ],
		logo: Assets.Lockheed,
		shortDescription: '• Incoming intern for Lockheed Martin\'s Enterprise Business and Digital Transformation team to develop and optimize software.' +
			'\n• Worked in a team of 3 on a site to centralize Lockheed Martin research using Angular, .NET, and Python.'
	},
	{
		slug: 'Palantir Launch',
		company: 'Palantir Technologies',
		description: 'Collaborated with Palantir engineers to work and learn about the Palantir AIP (Artificial Intelligence Platform)',
		contract: ContractType.Apprenticeship,
		type: 'Software Engineering',
		location: 'New York, NY',
		period: { from: new Date(2024, 2, 1), to: new Date(2024, 3, 1) },
		skills: getSkills('ts'),
		name: 'Palantir Launch',
		color: '#000000',
		links: [{ to: 'https://www.palantir.com/', label: 'Palantir Technologies' } ],
		logo: Assets.Palantir,
		shortDescription: 'Collaborated with Palantir engineers to work and learn about the Palantir AIP (Artificial Intelligence Platform)'
	},
	{
		slug: 'Hackathon Runnerup',
		company: 'Cornell Appdev',
		description: 'Runnerup for best backend at the Cornell AppDev annual hackathon out of 30 teams.',
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Ithaca NY',
		period: { from: new Date(2022, 11, 1), to: new Date(2022, 12, 1)},
		skills: getSkills('Python', 'Flask', 'Docker'),
		name: 'Hackathon Runner-up',
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
