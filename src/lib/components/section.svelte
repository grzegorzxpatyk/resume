<script lang="ts">
	export let title: string;
	export let type: 'list' | 'description';
	export let listItems:
		| Array<{ title: string; organisation: string; timePeriod: string; description?: string }>
		| undefined = undefined;
	export let description: string | undefined = undefined;
</script>

<section>
	<h3 class="text-xl border-b border-b-zinc-700 dark:border-b-zinc-400 mb-2">{title}</h3>
	{#if type === 'list' && listItems}
		{#each listItems as item}
			<h4 class="text-lg block border-b-zinc-500 dark:border-b-zinc-800">{item.title}</h4>
			<div class="flex flex-row justify-between items-center" />
		{/each}
	{:else if type === 'description' && description}
		<p>{description}</p>
	{/if}
</section>
