<script>
	import './styles.css';
	import '../app.css';
	import Bio from '$lib/components/bio.svelte';
	import profile from '$lib/images/profile.jpg';
	import Section from '$lib/components/section.svelte';
	import Contact from '$lib/components/contact.svelte';
	import Technologies from '$lib/components/technologies.svelte';
</script>

<svelte:head>
	<title>Grzegorz Patyk's Resume</title>
	<meta name="description" content="Grzegorz Patyk's Resume" />
</svelte:head>

<main
	class="min-h-screen h-fit flex flex-col bg-zinc-200 dark:bg-zinc-900 p-2 sm:p-8 md:p-16 lg:p-24 print:p-0 print:m-0 print:pt-12 border-0"
>
	<div
		class="border rounded p-5 text-zinc-950 dark:text-zinc-300 grid grid-cols-4 print:grid-cols-6 print:border-0"
	>
		<div class="border-r border-zinc-800 dark:border-zinc-400 p-6 pr-12 print:col-span-2">
			<Bio
				{profile}
				picDescription="Grzegorz profile - square composition portrait of a brunette man wearing a choker"
				name="Grzegorz Patyk"
				jobTitle="Frontend Developer"
			/>
			<Contact
				location="Cracow, PL"
				email="grzegorzxpatyk@gmail.com"
				githubUsername="grzegorzxpatyk"
				githubLink="https://github.com/grzegorzxpatyk"
				linkedINName="Grzegorz Patyk"
				linkedINLink="https://www.linkedin.com/in/grzegorz-patyk"
			/>
			<Technologies
				technologies={[
					'TypeScript',
					'JavaScript',
					'HTML',
					'CSS',
					'React.js',
					'Next.js',
					'Svelte',
					'SvelteKit',
					'Redux',
					'Cypress',
					'tailwindcss',
					'Bootstrap',
					'material-ui',
					'styled-components',
					'radix-ui',
					'git',
					'GitHub',
					'GitLab',
					'Jira'
				]}
			/>
		</div>
		<div class="col-span-3 print:col-span-4 ml-6 p-6">
			<Section
				title="Profile"
				type="description"
				description="Dedicated and innovative Frontend Developer with a unique blend of skills derived from a background in architecture and passion for programming. I bring a fresh perspective to web development, infusing creativity and functionality into every project. My favorite aspect of web application development lies in crafting beautiful user interfaces, where I relish the opportunity to create aesthetic designs and implement captivating animations that elevate user experience to a new level."
			/>
			<Section
				title="Experience"
				type="list"
				listItems={[
					{
						title: 'Junior Frontend Developer',
						organisation: 'TTMS',
						timePeriod: 'Jun 2022 - Present',
						description:
							'Employ modern frontend technologies such as <strong>TypeScript, React, Redux and material-ui</strong> to create user-centric and accessible websites and webapps, enhancing user engagement and satisfaction. Implementation of <strong>unit and visual tests using Cypress</strong>. Taking part in meetings with clients, discussing their needs and explaining possible solutions.'
					},
					{
						title: 'Junior Frontend Developer',
						organisation: 'ALTEN Polska',
						timePeriod: 'Jan 2022 - May 2022',
						description:
							'Development of the internal applications using <strong>PHP, JavaScript and SASS</strong>. Implementation of client-side form validation, with the use of js and regular expressions. Testing API with <strong>Swagger and Postman</strong>.'
					},
					{
						title: 'Wep development internship',
						organisation: 'beeanco',
						timePeriod: 'Jun 2021 - Dec 2021',
						description:
							'Collaborate with cross-functional teams to transform design concepts into responsive and visually appealing web interfaces using <strong>Svelte and bulma</strong>. Working on the verge of back-end and front-end with <strong>WordPress as headless CMS</strong>. Integrate animations and interactive elements to improve user interaction and elevate website aesthetics.'
					}
				]}
			/>
			<Section
				title="Education"
				type="list"
				listItems={[
					{
						title: 'Architecture and urban planning MSc',
						organisation: 'Cracow University of Technology',
						timePeriod: 'Feb 2019 - Sep 2020'
					},
					{
						title: 'Architecture and urban planning BSc',
						organisation: 'Lublin University of Technology',
						timePeriod: 'Oct 2015 - Jan 2019'
					}
				]}
				isLast={true}
			/>
		</div>
	</div>
</main>

<style>
</style>
