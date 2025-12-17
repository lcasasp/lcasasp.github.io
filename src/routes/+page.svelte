<script lang="ts">
	import Carrousel from '$lib/components/Carrousel/Carrousel.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import { TITLE_SUFFIX } from '$lib/params';
	import { HOME, getPlatfromIcon } from '$lib/params';
	import MY_SKILLS from '$lib/skills.params';
	import { useTitle } from '$lib/utils/helpers';
	import { isBlank } from '@riadh-adrani/utils';

	const { description, lastName, links, name, title, skills } = HOME;

	const isEmail = (email: string): boolean => {
		const reg =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		return !isBlank(email) && reg.test(email);
	};
</script>

<svelte:head>
	<title>{useTitle(title, TITLE_SUFFIX)}</title>
</svelte:head>

<div class="hero row self-center flex-1 justify-center items-center p-y-0px p-x-0px">
	<!-- LEFT: headshot + carousel -->
	<div class="left col gap-16px">
		<img
			src="/headshots/headshot.jpg"
			alt="Lucas Casas - Professional Headshot"
			class="headshot"
		/>

		<div class="carouselWrap">
			<Carrousel items={skills ?? MY_SKILLS} />
		</div>
	</div>

	<!-- RIGHT: text -->
	<div class="right col flex-1 gap-10px">
		<MainTitle classes="md:text-left ">{name} {lastName},</MainTitle>

		<p class="text-[var(--tertiary-text)] text-center md:text-left text-[1.2em] font-extralight">
			{description}
		</p>

		<div class="row justify-center md:justify-start p-y-15px p-x-0px gap-2">
			{#each links as link}
				<a
					class="decoration-none"
					href={`${isEmail(link.link) ? 'mailto:' : ''}${link.link}`}
					target="_blank"
					rel="noreferrer"
				>
					<Icon icon={getPlatfromIcon(link.platform)} color={'var(--accent-text)'} size={'20px'} />
				</a>
			{/each}
		</div>
	</div>
</div>

<style>
	/* Center the hero block and keep it from stretching too wide */
	.hero {
		width: 100%;
		max-width: 1100px;
		margin: 0 auto;
		gap: 32px;           /* was too large */
		padding: 0 24px;     /* controlled, consistent */
	}
	
	/* Left column should NOT reserve so much width */
	.left {
		width: 360px;        /* was 420px */
		align-items: center;
	}
	
	/* keep carousel visually attached, but not huge */
	.carouselWrap {
		width: 100%;
		max-width: 360px;
	}
	
	/* Headshot slightly smaller so it doesn’t dominate */
	.headshot {
		width: 200px;        /* was 220px */
		height: 200px;
		border-radius: 50%;
		object-fit: cover;
		border: 2px solid var(--border);
		box-shadow: 0 10px 28px rgba(0, 0, 0, 0.22);
		flex-shrink: 0;
	}
	
	/* Bring the text column closer and prevent overflow weirdness */
	.right {
		min-width: 0;
		margin-left: 0;
	}
	
	/* Optional: slightly reduce perceived “right shift” by aligning title block */
	.right :global(h1) {
		line-height: 0.95;
	}
	
	/* Mobile: stack */
	@media (max-width: 768px) {
		.hero {
			flex-direction: column;
			align-items: center;
			text-align: center;
			gap: 18px;
			padding: 0 18px;
		}
	
		.left {
			width: 100%;
			max-width: 520px;
		}
	
		.carouselWrap {
			max-width: 420px;
		}
	
		.headshot {
			width: 170px;
			height: 170px;
		}
	
		.right {
			align-items: center;
		}
	
		.right :global(h1),
		.right :global(p) {
			text-align: center !important;
		}
	}
</style>
	