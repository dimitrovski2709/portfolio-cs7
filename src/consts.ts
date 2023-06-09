export const SITE = {
	title: "Lazar Dimitrovski's Portfolio",
	description: '',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		Portfolio: [
			{ text: 'Introduction', link: 'introduction' },
			{ text: 'LO1 The security specialist', link: 'security-specialist' },
			{
				text: 'LO2 The researcher and developer',
				link: 'researcher-developer',
			},
			{
				text: 'LO3 The security professional',
				link: 'security-professional',
			},
		],
		Specialization: [
			{ text: 'test123', link: 'specialization/introduction' },
		],
		'Group Project': [
			{ text: 'Introduction', link: 'group/introduction' },
			{ text: 'Project Plan (v1)', link: '../project-plan.pdf' },
		],
		'Personal Project': [
			{ text: 'Malware Process Injection', link: 'personal/malware-process-injection' },
		],
	},
};
