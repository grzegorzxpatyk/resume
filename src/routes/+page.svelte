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
	<div class="border rounded p-5 text-zinc-950 dark:text-zinc-300 grid grid-cols-4 print:grid-cols-6 print:border-0">
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
					'Redux'
				]}
			/>
		</div>
		<div class="col-span-3 print:col-span-4 ml-6 p-6">
			<Section
				title="Profile"
				type="description"
				description="Creative Front End Developer with more than two year experience in software development industry. Trained architect, self-taught software developer. Bringing my problem solving and analytical thinking skills from architecture into web development. Passionate about design, architecture, snowboarding and dogs."
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
							'Working on multiple projects, using JavaScript / TypeScript, React, Redux, & CSS / SASS. Effective implementation of User Interfaces using react-bootstrap, material-ui and styled-components. Taking part in meetings with clients, discussing their needs and explaining possible solutions.'
					},
					{
						title: 'Junior Frontend Developer',
						organisation: 'ALTEN Polska',
						timePeriod: 'Jan 2022 - May 2022',
						description:
							'Development of the internal applications using PHP, jQuery, JavaScript and SASS. Implementation of client-side form validation, with the use of js and regular expressions. Testing API with Swagger and Postman.'
					},
					{
						title: 'Wep development internship',
						organisation: 'beeanco',
						timePeriod: 'Jun 2021 - Dec 2021',
						description:
							'Implementation of new Svelte components of the web application, improvement of existing components. Standardization of the output to a responsive, mobile-first approach using SASS. Working on the verge of back-end and front-end with WordPress as headless CMS. Effective translation of UI designs to code implementations.'
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
