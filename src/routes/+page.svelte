<script>
	import Bio from '$lib/components/bio.svelte';
	import profile from '$lib/images/profile.jpg';
	import Section from '$lib/components/section.svelte';
</script>

<svelte:head>
	<title>Grzegorz Patyk's Resume</title>
	<meta name="description" content="Grzegorz Patyk's Resume" />
</svelte:head>

<div class="border rounded p-5 text-zinc-950 dark:text-zinc-300 grid grid-cols-4">
	<div class="border-r border-zinc-800 dark:border-zinc-400 p-6 pr-12">
		<Bio
			{profile}
			picDescription="Grzegorz profile - square composition portrait of a brunette man wearing a choker"
			name="Grzegorz Patyk"
			jobTitle="Frontend Developer"
		/>
	</div>
	<div class="col-span-3 ml-6 p-6">
		<Section
			title="Profile"
			type="description"
			description="Creative Front End Developer with more than two year experience in software development industry. Trained architect, self-taught software developer. Bringing my problem solving and analytical thinking skills from architecture into web development. Passionate about design, architecture, snowboarding and dogs."
		/>
	</div>
</div>

<style>
</style>
