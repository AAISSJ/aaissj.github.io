// gitprofile.config.js

const config = {
  github: {
    username: 'aaissj', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 8, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['aaissj.github.io','AAISSJ','first_web','pyweb'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    twitter: 'saisonaai',
//     facebook: '',
     linkedin: 'sejung-son-39695a244',
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
    'HTML/CSS'
  ],
  interests: [
    'NLP',
    'GNN',
    'Mental Health',
    'Computational Social Science',
    'Multimodal'
  ],
  experiences: [
    {
      company: 'Sungkyunkwan University, Data Science & Artificial Inteligence Laboratory',
      position: 'Research Intern ',
      from: 'February 2022',
      to: 'August 2022',
      companyLink: 'http://dsail.skku.edu/',
    },
    {
      company: 'Korea Institute of Science and Technology (KIST)',
      position: 'Research Intern / 3D Pose Estimation',
      from: 'September 2021',
      to: 'January 2022',
      companyLink: 'https://www.kist.re.kr/',
    },
    {
      company: 'Sungkyunkwan University, Data Science & Artificial Inteligence Laboratory',
      position: 'Research Intern / QA system',
      from: 'June 2021',
      to: 'August 2021',
      companyLink: 'http://dsail.skku.edu/',
    },
  ],
  certifications: [
    {
      name: 'Driver\'\s license',
      body: 'Korea Road Traffic Authority',
      year: 'December, 2016',
      link: 'https://example.com'
    },
  ],
  education: [
     {
      institution: 'Sungkyunkwan University',
      degree: 'Master Student',
      from: 'September 2022',
      to: 'Present',
    },
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
      title: 'Developing Artificial Intelligence Models and Korean Datasets for Detecting Suicide Risk',
      description:
        'May 2022 - Apr 2024, National Research Foundation of Korea (NRF)',
      imageUrl: 'https://www.nrf.re.kr/eng/resources/img/page/footer/img-footer-logo-p.png',
      link: 'https://www.nrf.re.kr/eng/main/',

    },
    {
      title: 'Content Planning and Human-AI Interaction Design for AI-based Digital Therapy Services',
      description:
        'Jun 2022 - Nov 2022, Electronics and Telecommunications Research Institute (ETRI)',
      imageUrl: 'https://www.etri.re.kr/images/kor/sub5/ci_img01.png',
      link: 'https://www.etri.re.kr/kor/main/main.etri',
    },
  ],
  publication: [
    {
      title: 'Towards Suicide Prevention from Bipolar Disorder with Temporal Symptom-Aware Multitask Learning (KDD, 2023)',
      description:
        'Daeun Lee, Sejung Son, Hyolim Jeon, Seungbae Kim, and Jinyoung Han*, In ACM SIGKDD, Aug. 2023.',
      imageUrl: 'https://images.unsplash.com/photo-1620585837584-5e50abfc24c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
      link: 'https://example.com',
    },
  ],
   awards: [
    {
      title: '16th Prize, ADReSS-M SPGC Challenge (Multilingual Alzheimer`s Dementia Recognition through Spontaneous Speech)',
      description:
        'February 2023, ICASSP 2023',
      imageUrl: 'https://images.unsplash.com/photo-1520799275532-15f68640b66b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
      link: 'https://luzs.gitlab.io/madress-2023/',
      
    },
     {
      title: 'Academic Excellence Scholarship (Full Tuition, granted for full semesters)',
      description:
        'August 2022 ~ February 2024 , Sungkyunkwan University',
      imageUrl: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      link: 'https://example.com',
      
    },
    {
      title: 'Summa Cum Laude, Honors BA in AAI',
      description:
        'GPA 4.23, Sungkyunkwan University',
      imageUrl: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      link: 'https://example.com',
      
    },
    {
      title: '🏆 1st prize in AI applied App/Web Development Hackathon ',
      description:
        '2021, SKKU Institute for Convergence, Sungkyunkwan University',
      imageUrl: 'https://images.unsplash.com/photo-1555983341-918bc5fa8495?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80',
      link: 'https://example.com',
    },
    {
      title: '🏆 1st prize in App Development Hackathon ',
      description:
        '2021, SKKU Institute for Convergence, Sungkyunkwan University',
      imageUrl: 'https://images.unsplash.com/photo-1514820720301-4c4790309f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80',
      link: 'https://user-images.githubusercontent.com/50725139/103212324-d03e8600-494d-11eb-9a24-fa8e7081bd10.jpeg',
    },
    {
      title: '🏆 1st prize in AI applied App/Web Development Hackathon ',
      description:
        '2020, SKKU Institute for Convergence, Sungkyunkwan University',
      imageUrl: 'https://images.unsplash.com/photo-1578269174936-2709b6aeb913?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80',
      link: 'https://example.com',
    },
  ],

  fellows: [
    {
      title: 'GCO2003-1: Foundations of Convergence Science (Spring, 2023)',
      description:
        'Sungkyunkwan University',
      imageUrl: 'https://images.unsplash.com/photo-1588702547954-4800ead296ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      link: 'https://example.com',
    },
    {
      title: 'GCO2011: Introduction to Machine Learning (Fall, 2022)',
      description:
        'Sungkyunkwan University',
      imageUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2062&q=80',
      link: 'https://example.com',
    },
    {
      title: '4th AI X BOOKATHON Contest',
      description:
        'Online AI Writing Contest,Sungkyunkwan University / Sponsered by NAVER CLOVA & MINDs Lab',
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
