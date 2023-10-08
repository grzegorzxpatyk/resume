<script lang="ts">
	export let profile: string;
	export let picDescription: string;
	export let name: string;
	export let jobTitle: string;
</script>

<section class="flex flex-col justify-start items-start pb-6 border-b border-b-zinc-800 dark:border-b-zinc-400">
	<img src={profile} alt={picDescription} class="rounded-full mb-8 min-w-[120px] w-5/6 self-center sm:self-auto sm:w-full" />
	<h1 class="text-zinc-950 dark:text-zinc-100 text-3xl mb-4 text-left font-extrabold">{name}</h1>
	<h2 class="dark:text-zinc-300 text-xl font-medium">{jobTitle}</h2>
</section>
