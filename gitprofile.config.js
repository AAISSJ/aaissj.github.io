// gitprofile.config.js

const config = {
  github: {
    username: 'aaissj', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 4, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {

    twitter: 'saisonaai',
    facebook: '',
    linkedin: 'ariful-alam',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: 'arifszn',
    dev: 'arifszn',
    stackoverflow: '', // format: userid/username
    website: 'https://arifszn.com',
    phone: '',
    email: 'maze0717@g.skku.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'python',
    'PyTorch',
    'C/C++',
    'Java',
  ],
  experiences: [
    {
      company: 'Sungkyunkwan University',
      position: 'Master Student',
      from: 'September 2022',
      to: 'Present',
      companyLink: 'http://dsail.skku.edu/',
    },
    {
      company: 'Korea Institute of Science and Technology (KIST)',
      position: 'Intern',
      from: 'September 2021',
      to: 'January 2022',
      companyLink: 'https://www.kist.re.kr/',
    },
    {
      company: 'Sungkyunkwan University',
      position: 'Intern',
      from: 'June 2021',
      to: 'August 2021',
      companyLink: 'http://dsail.skku.edu/',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Sungkyunkwan University',
      degree: 'Bachelor of Artificial Intelligence',
      from: '2019',
      to: '2022',
    },
  ],

  // To hide the `Other Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'National Research Foundation of Korea (NRF)',
      description:
        '[May 2022 - Apr 2024] Developing Artificial Intelligence Models and Korean Datasets for Detecting Suicide Risk',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://www.nrf.re.kr/eng/main/',
    },
  ],
  publication: [
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
  ],

  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'business',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
