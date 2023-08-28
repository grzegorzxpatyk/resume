<script lang="ts">
	import { EnvelopeClosed, Home, GithubLogo, LinkedinLogo } from 'radix-icons-svelte';

	export let email: string;
	export let location: string;
	export let githubUsername: string;
	export let githubLink: string;
    export let linkedINName: string;
    export let linkedINLink: string;
</script>

<div
	class="flex flex-col justify-start items-start pb-6 border-b border-b-zinc-800 dark:border-b-zinc-400 text-sm mt-6"
>
	<ul class="space-y-2.5">
        <li class="flex flex-row justify-start items-center">
            <Home class="mr-2" />{location}
        </li>
		<li class="flex flex-row justify-start items-center">
			<EnvelopeClosed class="mr-2" /> <a href="mailto:{email}">{email}</a>
		</li>
		<li class="flex flex-row justify-start items-center">
			<GithubLogo class="mr-2" /><a href={githubLink} target="_blank">{githubUsername}</a>
		</li>
        <li class="flex flex-row justify-start items-center print:hidden">
            <LinkedinLogo class="mr-2" /><a href={linkedINLink} target="_blank">{linkedINName}</a>
        </li>
	</ul>
</div>
