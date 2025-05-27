import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'Roblox',
		company: 'Roblox',
		description: `
			• Software Engineering Intern for Summer 2025 for the Creator > Data team.
			• Will leverage skills in TypeScript, C++, and cloud technologies to contribute to Roblox's mission of connecting millions of users through immersive experiences.
		`,
		contract: ContractType.Internship,
		type: 'Software Engineering',
		location: 'San Mateo, CA',
		period: { from: new Date(2025, 4, 1), to: new Date(2025, 7, 1) },
		skills: getSkills('ts', 'C++', 'reactjs'),
		name: 'Software Engineering Intern',
		color: '#1d1d1d',
		links: [{ to: 'https://www.roblox.com/', label: 'Roblox' }],
		logo: Assets.Roblox,
		shortDescription: `
			• SWE Intern at Roblox for Summer 2025.
			• Working on the Creator > Data team.
		`
	},
	{
		slug: 'Amazon',
		company: 'Amazon',
		description: `
			• Led end-to-end design and launch of an event-driven service that proactively validates ~200 million daily abandoned-cart & browse-again email/push/SMS templates, safeguarding >$3 B in annual marketing revenue.
			• Architected a scalable AWS-native pipeline (Step Functions, Lambda, CloudWatch) running thousands of parallel validations in < 12 seconds - slashing mean time-to-detect issues with auto-remediation alarms.
			• Built a custom SigV4-signed HTTP client with advanced cookie/header logic to access secure internal endpoints.
			• Delivered ~23,000 lines of production Java/TypeScript code boasting test coverage over 94%.
			• Authored design docs reviewed by staff engineers and management and engaged in sprint planning and SCRUM.
		`,
		contract: ContractType.Internship,
		type: 'Software Engineering',
		location: 'New York, NY',
		period: { from: new Date(2024, 12, 1), to: new Date(2025, 3, 11) },
		skills: getSkills('ts', 'Java', 'AWS'),
		name: 'Software Engineering Intern',
		color: '#ff9900',
		links: [{ to: 'https://www.amazon.com/', label: 'Amazon' }],
		logo: Assets.Amazon,
		shortDescription: `
			• Led end-to-end design and launch of an event-driven service that proactively validates ~200 million daily abandoned-cart & browse-again email/push/SMS templates, safeguarding >$3 B in annual marketing revenue.
			• Architected a scalable AWS-native pipeline (Step Functions, Lambda, CloudWatch) running thousands of parallel validations in < 12 seconds - slashing mean time-to-detect issues with auto-remediation alarms.
			• Built a custom SigV4-signed HTTP client with advanced cookie/header logic to access secure internal endpoints.
			• Delivered ~23,000 lines of production Java/TypeScript code boasting test coverage over 94%.
			• Authored design docs reviewed by staff engineers and management and engaged in sprint planning and SCRUM.
		`
	},
	{
		slug: 'Lockheed Martin',
		company: 'Lockheed Martin',
		description: `
			• Shipped ~1800 lines of code for a large web app using Angular, .NET, and C# as a full stack developer.
			• Hyper tuned LLM's and RAG as a service to interact with proprietary data and generate insights.
			• Collaborated in a team on a large-sized project leveraging git workflows, AGILE methodology and SCRUM.
			• Earned an extended part-time remote position for Fall 2024 based on exceptional performance within team.
		`,
		contract: ContractType.Internship,
		type: 'Software Engineering',
		location: 'New York, NY',
		period: { from: new Date(2024, 5, 1) },
		skills: getSkills('CSharp', 'Angular', 'HTML', 'CSS', 'ML'),
		name: 'Software Engineering Intern',
		color: '#003478',
		links: [{ to: 'https://www.lockheedmartin.com/en-us/index.html', label: 'Lockheed Martin' }],
		logo: Assets.Lockheed,
		shortDescription: `
			• Intern for Lockheed Martin's Enterprise Business and Digital Transformation team to develop and optimize software.
			• Worked in a team of 3 on a large web app using Angular, .NET, and C#.
			• Earned a part time position for the Fall 2024 position.
		`
	},
	{
		slug: 'Palantir Launch',
		company: 'Palantir Technologies',
		description:
			'Collaborated with Palantir engineers to work and learn about the Palantir AIP (Artificial Intelligence Platform)',
		contract: ContractType.Apprenticeship,
		type: 'Software Engineering',
		location: 'New York, NY',
		period: { from: new Date(2024, 2, 1), to: new Date(2024, 3, 1) },
		skills: getSkills('ts'),
		name: 'Palantir Launch',
		color: '#000000',
		links: [{ to: 'https://www.palantir.com/', label: 'Palantir Technologies' }],
		logo: Assets.Palantir,
		shortDescription:
			'Collaborated with Palantir engineers to work and learn about the Palantir AIP (Artificial Intelligence Platform)'
	},
	{
		slug: 'Hackathon Runnerup',
		company: 'Cornell Appdev',
		description:
			'Runnerup for best backend at the Cornell AppDev annual hackathon out of 30 teams.',
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Ithaca NY',
		period: { from: new Date(2022, 11, 1), to: new Date(2022, 12, 1) },
		skills: getSkills('Python', 'Flask', 'Docker'),
		name: 'Hackathon Runner-up',
		color: '#FF7F7F',
		links: [{ to: 'https://github.com/lcasasp/Cornell-Hitch', label: 'GitHub' }],
		logo: Assets.Appdev,
		shortDescription:
			'Runnerup for best backend at the Cornell AppDev annual hackathon out of 30 teams.'
	},
	{
		slug: 'Ventures Accelerated',
		company: 'Ventures Accelerated',
		description:
			'Worked with the Cornell Entrepreneurship community to guide and mentor startups in their software development.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Ithaca NY',
		period: { from: new Date(2023, 8, 1), to: new Date() },
		skills: getSkills('Rust', 'Python', 'ts', 'reactjs', 'css', 'html', 'js', 'Numpy'),
		name: 'Ventures Accelerated SWE Fellow',
		color: '#ffffff',
		links: [{ to: 'https://www.venturesaccelerated.org/', label: 'Ventures Accelerated' }],
		logo: Assets.VenturesAccelerated,
		shortDescription: ''
	}
];

export default MY_EXPERIENCES;
