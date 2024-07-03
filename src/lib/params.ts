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
		'Welcome to my portfolio! I am a backend/fullstack developer interning '+
		 'at Lockheed Martin\'s digital transformation team - as well as a '+
		  'current student at Cornell Engineering hoping to concentrate in AI/ML. \n'+
		  'Feel free to browse and check out '+
		  'some of my projects and please reach out to me if you have any '+
		  'questions!',
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
