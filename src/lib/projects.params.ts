import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'Flare',
		color: '#5e95e3',
		description: `
				Flare is a cutting-edge search engine powered by Lucene, designed to provide users with unbiased and comprehensive 
			insights into the global climate and energy crisis. It aggregates current events and news media from diverse 
			sources, eliminating bias and delivering tailored results to inform and empower users.
			`,
		shortDescription: `
				Flare is a cutting-edge search engine powered by Lucene, designed to provide users with unbiased and comprehensive 
			insights into the global climate and energy crisis. It aggregates current events and news media from diverse 
			sources, eliminating bias and delivering tailored results to inform and empower users.
			`,
		links: [{ to: 'https://github.com/lcasasp/Flare', label: 'GitHub' }],
		logo: Assets.Flare,
		name: 'Flare',
		period: {
			from: new Date(2023, 6, 1),
			to: new Date(2023, 8, 1)
		},
		skills: getSkills('reactjs', 'Python', 'Flask'),
		type: 'Search Engine'
	},
	{
		slug: 'bf-interpreter',
		color: '#ff3e00',
		description:
			'A Bf language interpreter written in Rust, meant to challenge me in learning Rust and handling memory management',
		shortDescription:
			'A Bf language interpreter written in Rust, meant to challenge me in learning Rust and handling memory management',
		links: [{ to: 'https://github.com/lcasasp/bf-Interpreter', label: 'GitHub' }],
		logo: Assets.Bf,
		name: 'Brainf*** Interpreter',
		period: {
			from: new Date()
		},
		skills: getSkills('Rust'),
		type: 'Interpreter',
		screenshots: [
			{
				label: 'mandelbrot.bf',
				src: '/screenshots/mandelbrot.png'
			},
			{
				label: 'Public API',
				src: '/screenshots/bf-interpreter.png'
			}
		]
	},
	{
		slug: 'Cornell-Hitch',
		color: '#ff3e00',
		description: `Cornell hitch is an app that uses google to authenticate 
			cornell users (through cornell.edu email) and has a posting board 
			for users to post and find rides going to cities. All rides 
			originate in ithaca and the app has a direct messaging system to 
			promote privacy. The idea of this app is to have Cornell students 
			post their rides given destination and date, and that allows others
			to view and message the ride host to form a deal and navigate 
			together. This saves costs for both parties involved. Using 
			Distance Matrix API, the distance was calculated for each ride, 
			and that can be used to calculate costs on front-end for each ride.
			\n
			Backend requirements: Using Flask, I have made a db file with 
			classes User, Ride, and Message in order to form an API that 
			uses many to many relationships to best gather all the data for 
			front-end. Additionally, googlemaps API's are used to calculate 
			distance among the destinations selected and thus giving front end
			space to handle cost estimates. I have fully deployed the server, 
			but there is one thing to note. Login routes will not work with 
			OAuth because the server does not use a top level domain. However,
			if testing on a local url, the Oauth works perfectly and uses 
			organization only specifications to only allow cornell students 
			to add to database. In order to fix OAuth for the deployment stage,
			a top level domain would be needed for deployment to host the 
			server there instead, but for the scope of this project I felt 
			that was not necessary.`,
		shortDescription: 'A ride sharing app for Cornell Students, best backend runnerup at the Cornell Appdev annual hackathon out of 30 teams',
		links: [{ to: 'https://github.com/lcasasp/Cornell-Hitch', label: 'GitHub' }],
		logo: Assets.Appdev,
		name: 'Cornell Hitch',
		period: {
			from: new Date(2022, 11, 1),
			to: new Date(2022, 12, 1)
		},
		skills: getSkills('Python', 'Flask', 'Docker'),
		type: 'Hackathon',
		screenshots: [
			{
				label: 'Deployment',
				src: '/screenshots/gcp.png'
			},
			{
				label: 'Public API',
				src: '/screenshots/cornell-hitch-api.png'
			}
		]
	},
	{
		slug: 'media-validator',
		color: '#ff3e00',
		description:
			`Learn more at: https://docs.google.com/document/d/1kBd0HbxXhroNaY7ho4WQk9w2MjD0sZcuksCGMA3iJ60/edit?usp=sharing
			\n See the notebook here: https://colab.research.google.com/drive/1qvIJVg0DtFLzR_o6Mo93AGm_GdWsv7Mr?usp=sharing`,
		shortDescription:
			'A Climate news media validator that uses machine learning to validate news articles based on their content, cross referencing their data with the IPCC climate report.',
		links: [{ to: 'https://www.github.com/lcasasp/media-validator', label: 'GitHub' }],
		logo: Assets.MLModels,
		name: 'Climate Media Validator',
		period: {
			from: new Date(2022, 8, 1),
			to: new Date(2022, 12, 1)
		},
		skills: getSkills('Python', 'ML'),
		type: 'Machine Learning',
		screenshots: [
			{
				label: 'Model Results',
				src: '/screenshots/model-results.png'
			}
		]
	},
	{
		slug: 'McDiver',
		color: '#ff3e00',
		description:
			`Data structures and algorithms in Java course project. This project involves a two-stage game. The first stage, the seek stage, McDiver (the character) only knows the neighboring tiles and the manhattan distance to the ring (goal). Thus, by using a DFS algorithm, we can attempt to minimize the path to the ring in the varying mazes, which will increase the bonus multiplier for the next stage.
			The second stage, the scram stage, is one where the cave is collapsing and McDiver needs to reach the exit in x amount of steps. this stage is full of coins with varying values and the goal is to collect as many coins with the highest value total and reach the exit with the given amount of steps.`,
		shortDescription:
			`Data structures and algorithms in Java course project. This project tested me in GUI applications, Dijkstras algorithm, DFS and BFS, and gamestates. \n Developed the 12th best algorithm in the class out of 630 students`,
		links: [{ to: 'https://www.github.com/lcasasp/McDiver', label: 'GitHub' }],
		logo: Assets.Java,
		name: 'McDiver',
		period: {
			from: new Date(2023, 4, 1),
			to: new Date(2023, 5, 1)
		},
		skills: getSkills('Java'),
		type: 'Game',
		screenshots: [
			{
				label: 'Gameplay seek state',
				src: '/screenshots/mcdiver1.png'
			},
			{
				label: 'Gameplay scram state',
				src: '/screenshots/mcdiver2.png'
			}
		]

	}
];

export default MY_PROJECTS;
