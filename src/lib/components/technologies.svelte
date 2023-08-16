<script lang="ts">
	export let technologies: Array<string> = [];
</script>

<section class="mt-6">
	<h4 class="text-lg mb-2">Technologies</h4>
	{#each technologies as technology, i}
		{technology}{#if i < technologies.length - 1},{' '}{/if}
	{/each}
</section>
