<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	import UIcon from '../Icon/UIcon.svelte';

	export let screenshots: Array<{ src: string; label: string }> = [];
	export let initialIndex: number = 0;
	export let open: boolean = false;

	const dispatch = createEventDispatcher();

	let currentIndex = initialIndex;
	let previousOpen = false;

	$: currentScreenshot = screenshots[currentIndex];

	// Reset index when lightbox opens (but not when it's already open)
	$: {
		if (open && !previousOpen) {
			currentIndex = initialIndex;
		}
		previousOpen = open;
	}

	function close() {
		dispatch('close');
	}

	function next() {
		if (currentIndex < screenshots.length - 1) {
			currentIndex++;
		} else {
			currentIndex = 0;
		}
	}

	function previous() {
		if (currentIndex > 0) {
			currentIndex--;
		} else {
			currentIndex = screenshots.length - 1;
		}
	}

	function handleKeydown(event: KeyboardEvent) {
		if (!open) return;

		if (event.key === 'Escape') {
			close();
		} else if (event.key === 'ArrowRight') {
			next();
		} else if (event.key === 'ArrowLeft') {
			previous();
		}
	}

	onMount(() => {
		window.addEventListener('keydown', handleKeydown);
		return () => {
			window.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

{#if open && screenshots.length > 0}
	<div
		class="screenshot-lightbox"
		role="dialog"
		aria-modal="true"
		aria-label="Screenshot gallery"
		tabindex="-1"
		on:click={close}
		on:keydown={handleKeydown}
	>
		<div
			class="lightbox-content"
			on:click|stopPropagation
			on:keydown|stopPropagation
		>
			<button class="close-button" on:click={close} aria-label="Close gallery">
				<UIcon icon="i-carbon-close" classes="text-2em" />
			</button>

			<div class="image-container">
				{#if screenshots.length > 1}
					<button
						class="nav-button nav-button-prev"
						on:click={previous}
						aria-label="Previous screenshot"
					>
						<UIcon icon="i-carbon-chevron-left" classes="text-2em" />
					</button>
					<button
						class="nav-button nav-button-next"
						on:click={next}
						aria-label="Next screenshot"
					>
						<UIcon icon="i-carbon-chevron-right" classes="text-2em" />
					</button>
				{/if}
				<img src={currentScreenshot.src} alt={currentScreenshot.label} />
				{#if currentScreenshot.label}
					<p class="image-label">{currentScreenshot.label}</p>
				{/if}
			</div>

			{#if screenshots.length > 1}
				<div class="thumbnail-indicators">
					{#each screenshots as screenshot, index}
						<button
							class="thumbnail-indicator {index === currentIndex ? 'active' : ''}"
							on:click={() => (currentIndex = index)}
							aria-label={`Go to screenshot ${index + 1}`}
						>
							<img src={screenshot.src} alt={screenshot.label} />
						</button>
					{/each}
				</div>
			{/if}
		</div>
	</div>
{/if}

<style lang="scss">
	.screenshot-lightbox {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.9);
		z-index: 1000;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 20px;
		backdrop-filter: blur(5px);
		animation: fadeIn 0.2s ease-in-out;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.lightbox-content {
		position: relative;
		width: 100%;
		height: 100%;
		max-width: 90vw;
		max-height: 90vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.close-button {
		position: absolute;
		top: 10px;
		right: 10px;
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 50%;
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		color: white;
		transition: all 0.2s ease;
		z-index: 1001;

		&:hover {
			background: rgba(255, 255, 255, 0.2);
			transform: scale(1.1);
		}
	}

	.nav-button {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: rgba(0, 0, 0, 0.6);
		backdrop-filter: blur(10px);
		border: 2px solid rgba(255, 255, 255, 0.3);
		border-radius: 50%;
		width: 50px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		color: white;
		transition: all 0.2s ease;
		z-index: 1002;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5), inset 0 0 10px rgba(255, 255, 255, 0.1);

		&:hover {
			background: rgba(0, 0, 0, 0.8);
			border-color: rgba(255, 255, 255, 0.5);
			transform: translateY(-50%) scale(1.1);
			box-shadow: 0 4px 15px rgba(0, 0, 0, 0.7), inset 0 0 15px rgba(255, 255, 255, 0.2);
		}

		&.nav-button-prev {
			left: 20px;
		}

		&.nav-button-next {
			right: 20px;
		}
	}

	.image-container {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		overflow: hidden;
		position: relative;

		img {
			max-width: 100%;
			max-height: calc(90vh - 100px);
			object-fit: contain;
			border-radius: 10px;
			box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
		}

		.image-label {
			margin-top: 15px;
			color: white;
			font-size: 1em;
			font-weight: 300;
			text-align: center;
		}
	}

	.thumbnail-indicators {
		display: flex;
		gap: 10px;
		margin-top: 20px;
		padding: 10px;
		overflow-x: auto;
		max-width: 100%;

		.thumbnail-indicator {
			width: 60px;
			height: 60px;
			border: 2px solid transparent;
			border-radius: 8px;
			overflow: hidden;
			cursor: pointer;
			opacity: 0.6;
			transition: all 0.2s ease;
			background: none;
			padding: 0;

			&:hover {
				opacity: 0.8;
				transform: scale(1.05);
			}

			&.active {
				opacity: 1;
				border-color: white;
			}

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}

	@media (max-width: 768px) {
		.nav-button {
			width: 40px;
			height: 40px;

			&.nav-button-prev {
				left: 10px;
			}

			&.nav-button-next {
				right: 10px;
			}
		}

		.thumbnail-indicators {
			.thumbnail-indicator {
				width: 50px;
				height: 50px;
			}
		}
	}
</style>

