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
//     facebook: '',
//     linkedin: 'ariful-alam',
//     instagram: '',
//     dribbble: '',
//     behance: '',
//     medium: 'arifszn',
//     dev: 'arifszn',
//     stackoverflow: '', // format: userid/username
    website: 'https://asidefine.tistory.com/',
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
  interests: [
    'NLP',
    'GNN',
    'Computational Social Science',
    'Multimodal'
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
      position: 'Intern / 3D Pose Estimation',
      from: 'September 2021',
      to: 'January 2022',
      companyLink: 'https://www.kist.re.kr/',
    },
    {
      company: 'Sungkyunkwan University',
      position: 'Intern / QA system',
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
      degree: 'Bachelor of Applied Artificial Intelligence',
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
      imageUrl: 'https://www.nrf.re.kr/eng/resources/img/page/footer/img-footer-logo-p.png',
      link: 'https://www.nrf.re.kr/eng/main/',
    },
  ],
   awards: [
    {
      title: 'Summa Cum Laude, Honors BA in AAI',
      description:
        'GPA 4.23, Sungkyunkwan University',
      imageUrl: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      link: 'https://example.com',
      
    },
    {
      title: '1st prize in AI applied App/Web Development Hackathon ',
      description:
        '2021, SKKU Institute for Convergence, Sungkyunkwan University',
      imageUrl: 'https://images.unsplash.com/photo-1555983341-918bc5fa8495?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      link: 'https://example.com',
    },
    {
      title: '1st prize in App Development Hackathon ',
      description:
        '2021, SKKU Institute for Convergence, Sungkyunkwan University',
      imageUrl: 'https://images.unsplash.com/photo-1514820720301-4c4790309f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80',
      link: 'https://user-images.githubusercontent.com/50725139/103212324-d03e8600-494d-11eb-9a24-fa8e7081bd10.jpeg',
    },
    {
      title: '1st prize in AI applied App/Web Development Hackathon ',
      description:
        '2020, SKKU Institute for Convergence, Sungkyunkwan University',
      imageUrl: 'https://images.unsplash.com/photo-1578269174936-2709b6aeb913?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
      link: 'https://example.com',
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
  ],
  fellows: [
    {
      title: 'GCO2011: Introduction to Machine Learning (Fall, 2022)',
      description:
        'Sungkyunkwan University',
      imageUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2062&q=80',
      link: 'https://example.com',
    },
    {
      title: '4th SKKU AI X BOOKATHON contest',
      description:
        'Sungkyunkwan University',
      imageUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      link: 'https://bookathon.skku.edu/',
    },
  ],
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
