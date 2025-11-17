import Assets from './data/assets';
import type { Skill } from './types';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
	s({
		slug: 'Python',
		color: 'blue',
		description: `Python has been my most used language in my journey. I have used it for a variety of projects and experiences, from web development to machine learning.
			I have used it extensively in academic environments such as in CS1110 and CS4700 and CS4701 at Cornell University.
			Additionally, many of my passion projects involve heavy python usage. Click on any project below to find out more, Flare being my most
			elaborate python project thus far.`,
		logo: Assets.Python,
		name: 'Python'
	}),
	s({
		slug: 'Rust',
		color: 'orange',
		description: `Rust has been my most recent endeavor. Appealing to me due to its amazing compiler and memory management, I have decided to pursue a 
			deep understanding of the language. Starting with my bf-Interpreter, I hope to add many more projects to this list and develop my
			backend development skills parallel with the good coding practices and memory efficiency that rust enforces.`,
		logo: Assets.Rust,
		name: 'Rust'
	}),
	s({
		slug: 'C',
		color: 'blue',
		description:
			"I've worked on C extensively in an academic setting, mainly for my CS3410: Computer Organization course to gain a deeper understanding of memory management, bit manipulation, as well as to understand low-level programming on a deeper level.",
		logo: Assets.C,
		name: 'C'
	}),
	s({
		slug: 'js',
		color: 'yellow',
		description: `My introduction to frontend development occurred during my Stanford Summer Session. I learned HTML/CSS and Javascript in CS106B, and have since
			put those practices into use in personal and academic project when needed. Though I have transitioned to typescript for some recent endeavors
			(including this website), I still have a strong grasp of Javascript and its frameworks (React, Node, etc.).`,
		logo: Assets.JavaScript,
		name: 'Javascript'
	}),
	s({
		slug: 'ts',
		color: 'blue',
		description: `Typescript is a superset of Javascript that I have recently started using. I have used it in my personal website and in Flare to develop a good frontend.
			I have used it in conjunction with ts+React using Vite for Flare, as well as ts+Svelte for this project.`,
		logo: Assets.TypeScript,
		name: 'Typescript'
	}),
	s({
		slug: 'reactjs',
		color: 'cyan',
		description: `Since discovering React earlier in 2023, I have fallen in love with the possibilities it offers. I have used it heavily in the production of Flare, 
			developing a good understanding of components and how projects work together using Node and NPM. I am eager to learn more and hope to add more projects
			down below soon.`,
		logo: Assets.ReactJs,
		name: 'React Js'
	}),
	s({
		slug: 'Flask',
		color: 'black',
		description: `I learned Flask taking CS 1998 at Cornell University. Since then, I have used Flask extensively starting with Cornell Hitch and earning second
			place in the annual AppDev hackathon for best backend. I have used it in conjunction with React to develop a good understanding of how to develop 
			a full stack application. Flask served as an amazing gateway to extend my knowledge of SQL as I used SQLAlchemy to interact with my database.`,
		logo: Assets.Flask,
		name: 'Flask'
	}),
	s({
		slug: 'Elasticsearch',
		color: 'Yellow',
		description:
			"I've used Elasticsearch extensively in my application Flare. My experience involved levaraging Lucene for my search engine, coupled with Elastic for my NoSQL database. This has given me a deep understanding of document storage and database systems as well as SEO.",
		logo: Assets.Elasticsearch,
		name: 'Elasticsearch'
	}),
	s({
		slug: 'SQL',
		color: 'blue',
		description: `I have used SQL extensively in Cornell Hitch, academically, and expect to take CS 4320: Databases soon as well to further refine my skills.`,
		logo: Assets.SQL,
		name: 'SQL'
	}),
	s({
		slug: 'Docker',
		color: 'blue',
		description: `Through my work at Cornell University, I have learned how to use Docker to deploy my applications. I have used it to deploy my backend for Cornell Hitch and 
			soon Flare. The containerization aspect of Docker has left me awestruck and I hope to learn more about it in the future.`,
		logo: Assets.Docker,
		name: 'Docker'
	}),
	s({
		slug: 'OCaml',
		color: 'orange',
		description: `I was thrust into the world of functional programming throug CS3110 at Cornell University. Through that course, I have developed an OCaml interpreter, as well
			as a task manager terminal-based application. I heavily enjoy the security that functional programming offers, and since taking the course
			I have been inspired to learn about software outside of my previous imperative experience. OCaml has been a huge reason I have decided to learn Rust,
			as even though it is a general purpose language, it is heavily inspired by functional programming.`,
		logo: Assets.OCaml,
		name: 'OCaml'
	}),
	s({
		slug: 'CSharp',
		color: 'purple',
		description: `I learned C# during my internship at Lockheed Martin. I used it to develop a generative AI service that interacted with Lockheed Martin data and generated insights.
			I collaborated in a team on a large-sized project leveraging git workflows and the AGILE methodology.`,
		logo: Assets.Csharp,
		name: 'C#'
	}),
	s({
		slug: 'Angular',
		color: 'red',
		description: `I learned Angular during my internship at Lockheed Martin. I used it to develop a site that centralized Lockheed Martin research. I collaborated in a team of 3
			using Angular using the .NET framework.`,
		logo: Assets.Angular,
		name: 'Angular'
	}),
	s({
		slug: 'ML',
		color: 'blue',
		description: `Though a very broad skill to list, this year I have dove deep into the realm of machine learning. I have used it in my academic projects such as in 
			CS4700 and CS4701 (Foundations of Artificial Intelligence and Practicum of Artificial Intelligence respectively),as well as in my personal projects
			such as in my climate media validator. I have used it in conjunction with python and tensorflow to develop a good understanding of how to develop a
			machine learning model. Though I have limited project to show for this skill, I plan to concentrate in the Cornell Engineering Artifical Intelligence vector
			and hope to add more projects to this list soon, and potentially pursue a career in the field.`,
		logo: Assets.ML,
		name: 'Machine Learning'
	}),
	s({
		slug: 'Numpy',
		color: 'blue',
		description:
			'Used both in personal projects, as well as extensively in my CS 3780: Machine Learning course.',
		logo: Assets.Numpy,
		name: 'Numpy'
	}),
	s({
		slug: 'AWS',
		color: 'Orange',
		description: `I have used AWS extensively in my personal projects, notably to deploy Flare and Cornell Hitch; as well as my work at Ventures Accelerated where I worked as a software fellow for a startup; transitioning their backend API from a python Flask deployment to an AWS Lambda solution. This increased their API response speed by ~35%. I have also received a certification from AWS Educate for Cloud Computing 101.`,
		logo: Assets.AWS,
		name: 'AWS'
	}),
	s({
		slug: 'Java',
		color: 'blue',
		description: `Java was the very first language I learned back in high school. The object oriented paradigm served as a catalyst to propell me
			into studying CS at Cornell. I have used Java academically in AP CSA and CS2110 at Cornell University. Notably, in CS2110 I ranked
			12th out of ~630 students in our final project; learn more at the project McDiver.`,
		logo: Assets.Java,
		name: 'Java'
	}),
	s({
		slug: 'HTML',
		color: 'orange',
		description: `HTML is the backbone of the web. I have used it extensively in my personal website and in my academic projects`,
		logo: Assets.HTML,
		name: 'HTML'
	}),
	s({
		slug: 'CSS',
		color: 'blue',
		description: `CSS is the styling language of the web. I have used it extensively in my personal website and in my academic projects, and have used frameworks such as Bootstrap and TailwindCSS as well.`,
		logo: Assets.CSS,
		name: 'CSS'
	}),
	s({
		slug: 'C++',
		color: 'blue',
		description: `C++ is a powerful language that I have used in my academic projects and professionally at Roblox`,
		logo: Assets.Cpp,
		name: 'C++'
	})
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
