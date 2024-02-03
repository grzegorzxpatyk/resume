<script lang="ts">
	export let title: string;
	export let type: 'list' | 'description';
	export let listItems:
		| Array<listItem>
		| undefined = undefined;
	export let description: string | undefined = undefined;
    export let isLast: boolean = false;
</script>

<section class={(!isLast ? 'pb-8 mb-8 border-b border-b-zinc-700 dark:border-b-zinc-400': '')}>
	<h3 class="text-2xl mb-6 font-bold">{title}</h3>
	{#if type === 'list' && listItems}
		{#each listItems as item}
			<div class="mb-6">
				<h4 class="text-lg block border-b-zinc-500 dark:border-b-zinc-800 font-semibold">{item.title}</h4>
				<div class="flex flex-row justify-between items-center text-sm mb-3">
					<span>
						{#if item.organisationWebsite && new URL(item.organisationWebsite)}
							<a href={item.organisationWebsite} target="_blank">{item.organisation}</a>
						{:else}
							{item.organisation}
						{/if}
					</span>
					<span>{item.timePeriod}</span>
				</div>
				{#if item.description}
					<p class="text-justify">{@html item.description}</p>
				{/if}
			</div>
		{/each}
	{:else if type === 'description' && description}
		<p class="text-justify">{description}</p>
	{/if}
</section>
