<script>
	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import { RESUME } from '$lib/params';

	const { item, title } = RESUME;
</script>

<CommonPage {title}>
    <div class="resume">
        {#if item}
			<div class="pdf-viewer">
                <embed src={item} type="application/pdf" width="100%" height="600px" />
            </div>
        {:else}
            <Chip>Ooops! no CV at the moment.</Chip>
        {/if}
    </div>
</CommonPage>

<style lang="scss">
    .resume {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;

        & > a {
            color: inherit;
            margin-top: 20px;
        }

        .pdf-viewer {
            width: 100%; // Adjust width as needed
            max-width: 800px; // Adjust maximum width as needed
            border: 1px solid #ddd; // Optional border for the PDF viewer
        }
    }
</style>