import { MY_EDUCATIONS } from './educations.params';
import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import MY_SKILLS from './skills.params';
import {
	Platform,
	type HomePageParams,
	type ProjectPageParams,
	type ExperiencePageParams,
	type SkillsPageParams,
	type ResumePageParams,
	type SearchPageParams,
	type EducationPageParams
} from './types';
import { Icons } from './utils';

export const TITLE_SUFFIX = 'Lucas Casas';

export const NavBar = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experiences',
	resume: 'Resume',
	skills: 'Skills',
	Education: 'Education'
};

export const getPlatfromIcon = (platform: Platform): Icons => {
	switch (platform) {
		case Platform.GitHub:
			return Icons.GitHub;
		case Platform.Linkedin:
			return Icons.LinkedIn;
		case Platform.Email:
			return Icons.Email;
	}
};

export const HOME: HomePageParams = {
	title: 'Home',
	name: 'Lucas',
	lastName: 'Casas',
	description:
		'Hi! I’m Lucas - a recent graduate from Cornell University where I studied Computer Science with a minor in Business. I’m a dual citizen from Spain and the United States, which has caused me to move around my entire life. These experiences have given me the skills to quickly adapt and learn, which I’ve brought into my professional experiences. Upon my graduation, I will be joining Palantir as a forward deployed engineer, where I am excited to grow my skills not only as an engineer but as a technical consultant to meet clients needs.',
	links: [
		{ 
			platform: Platform.GitHub,
			link: 'https://github.com/lcasasp' },
		{
			platform: Platform.Linkedin,
			link: 'https://www.linkedin.com/in/lcasasp'
		},
		{
			platform: Platform.Email,
			link: 'lcc79@cornell.edu'
		}
	]
};

export const PROJECTS: ProjectPageParams = {
	title: 'Projects',
	items: MY_PROJECTS
};

export const EXPERIENCES: ExperiencePageParams = {
	title: 'Experiences',
	items: MY_EXPERIENCES
};

export const SKILLS: SkillsPageParams = {
	title: 'Skills',
	items: MY_SKILLS
};

export const RESUME: ResumePageParams = {
	title: 'Resume',
	item: '/resume.pdf'
};

export const SEARCH: SearchPageParams = {
	title: 'Search'
};

export const EDUCATION: EducationPageParams = {
	items: MY_EDUCATIONS,
	title: 'Education'
};
