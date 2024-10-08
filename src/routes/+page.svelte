<script>
	import './styles.css';
	import '../app.css';
	import profile from '$lib/images/profile.jpg';
	import { Bio, Section, Contact, Technologies, ThemeSwitch } from '$lib';
</script>

<svelte:head>
	<title>Grzegorz Patyk's Resume</title>
	<meta name="description" content="Grzegorz Patyk's Resume" />
</svelte:head>

<main
	class="min-h-screen h-fit flex flex-col bg-100% m-0 bg-fixed bg-no-repeat bg-zinc-100 bg-opacity-70 dark:bg-zinc-900 dark:bg-opacity-90 p-0 sm:p-6 md:p-12 lg:p-24 print:p-0 print:lg:p-0 print:md:p-0 print:sm:p-0 print:m-0 print:pt-12"
>
	<div
		class="sm:p-5 print:p-0 text-zinc-950 dark:text-zinc-300 flex flex-col justify-center items-start md:grid md:grid-cols-4 print:grid print:grid-cols-6 print:md:grid-cols-6"
	>
		<div class="min-h-screen h-full print:min-h-full md:border-r print:border-r border-zinc-800 dark:border-zinc-400 p-6 md:pr-12 print:pr-12 print:col-span-2 print:md:col-span-2">
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
				website="https://gpatyk.dev"
			/>
			<Technologies
				technologies={[
					'TypeScript',
					'JavaScript',
					'HTML',
					'CSS',
					'React.js',
					'Next.js',
					'tailwindcss',
					'Svelte',
					'SvelteKit',
					'Redux',
					'Jest',
					'Playwright',
					'Cypress',
					'Bootstrap',
					'radix-ui',
					'styled-components',
					'material-ui',
					'REST API',
					'GraphQL',
					'Strapi',
					'git',
					'GitHub',
					'GitLab',
					'Vercel',
					'Jira'
				]}
			/>
		</div>
		<div class="md:col-span-3 print:col-span-4 print:md:col-span-4 md:ml-6 print:ml-6 p-6">
			<Section
				title="Profile"
				type="description"
				description="Dedicated and innovative Frontend Developer with a unique blend of skills derived from a background in architecture and passion for programming. Divergent thinker, infusing creativity and functionality into every project. My favorite aspect of web application development lies in crafting beautiful user interfaces, where I relish the opportunity to create aesthetic designs and implement captivating animations that elevate user experience to a new level."
			/>
			<Section
				title="Experience"
				type="list"
				listItems={[
					{
						title: 'Frontend Developer',
						organisation: 'BMO',
						organisationWebsite: 'https://www.bmo.com/en-ca/main/personal/',
						timePeriod: 'Jul 2024 - Present',
						description: 
							'Development of landing pages and applications using <strong>Next.js, React, TypeScript, styled-components & Jest</strong>. <em>NDA</em>'
					},
					{
						title: 'Junior Frontend Developer',
						organisation: 'TTMS',
						organisationWebsite: 'https://ttms.com/',
						timePeriod: 'Jun 2022 - Mar 2024',
						description:
							'Utilize contemporary frontend technologies such as <strong>React, Redux toolkit and TailwindCSS</strong> to create user-centric and accessible web interfaces, enhancing user engagement and satisfaction. Usage of <strong>TypeScript</strong> to build type-safe and scalable applications. Implementation of <strong>E2E visual tests using Cypress</strong>. Taking part in meetings with clients, discussing their needs, business logic and possible solutions.'
					},
					{
						title: 'Junior Frontend Developer',
						organisation: 'ALTEN Polska',
						organisationWebsite: 'https://www.altenpolska.pl/',
						timePeriod: 'Jan 2022 - May 2022',
						description:
							'Development of the internal applications using <strong>JavaScript, Sass, PHP and SQL</strong>. Implementation of client-side form validation, with the use of js and regular expressions. Testing <strong>RESTful APIs</strong> with <strong>Swagger and Postman</strong>.'
					},
					{
						title: 'Web development intern',
						organisation: 'beeanco',
						organisationWebsite: 'https://www.beeanco.com/',
						timePeriod: 'Jun 2021 - Dec 2021',
						description:
							'Collaborate with cross-functional teams to transform design concepts into responsive and visually appealing web interfaces using <strong>Svelte and bulma</strong>. Working on the verge of back-end and front-end with <strong>WordPress as headless CMS</strong> and <strong>GraphQL</strong>. Integrate animations and interactive elements to improve user interaction and elevate website aesthetics.'
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

<ThemeSwitch />