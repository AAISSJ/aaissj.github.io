// gitprofile.config.js

const config = {
  github: {
    username: 'aaissj', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 8, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['aaissj.github.io','AAISSJ','first_web','pyweb', 'Topinut', 'AlgorithmStudy'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
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
      'https://drive.google.com/file/d/13p1YJDRazLAFVylLRJpmFRQdEN4b7Xei/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
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
      company: 'Samsung SDS',
      position: '2024 Samsung SDS Algorithm Lecture Course Participant',
      from: 'February 2024',
      to: 'February 2024',
      companyLink: '',
    },
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
      title: '[SKT AI Fellowship] Realizing personalized marketing through the introduction of AI copywriters',
      description:
        'May 2023 - October 2023, SK Telecom, Generation Controllable Hyper-Personalization Marketing ',
      imageUrl: 'https://devocean.sk.com/CKFinderJava/userfiles/images/AI%20Fellowship%20Logo.png',
      link: 'https://www.sktuniv.com/d39a1e85-822f-4ab7-baf9-f45b80b30a50',

    },
    {
      title: 'Development of AI-based Voice of Customer (VoC) Analysis Solution for Improving Customer Experience (CX)',
      description:
        'April 2023 - December 2024, Kyungnam Energy',
      imageUrl: 'https://jpassets.jobplanet.co.kr/production/uploads/company_story/thumbnail/1114/w750_3a70fa4c-4612-4d0e-a991-dfa545728325.jpg',
      link: 'https://www.knenergy.co.kr/index.do',
    },
    {
      title: 'Developing Artificial Intelligence Models and Korean Datasets for Detecting Suicide Risk',
      description:
        'May 2022 - April 2024, National Research Foundation of Korea (NRF)',
      imageUrl: 'https://www.nrf.re.kr/eng/resources/img/page/footer/img-footer-logo-p.png',
      link: 'https://www.nrf.re.kr/eng/main/',
    },
    {
      title: 'Content Planning and Human-AI Interaction Design for AI-based Digital Therapy Services',
      description:
        'June 2022 - November 2022, Electronics and Telecommunications Research Institute (ETRI)',
      imageUrl: 'https://www.etri.re.kr/images/kor/sub5/ci_img01.png',
      link: 'https://www.etri.re.kr/kor/main/main.etri',
    },
    {
      title: 'Study on Self-Driving B5G Networks towards Federared Private-5G',
      description:
        'June 2021 - February 2024, National Research Foundation (NRF) of Korea Grant funded by the Korean Government (MSIT) ',
      imageUrl: 'https://www.nrf.re.kr/eng/resources/img/page/footer/img-footer-logo-p.png',
      link: 'https://www.nrf.re.kr/eng/main/',
    },
  ],
  publication: [
    {
      title: '[EMNLP 2023] Learning Co-Speech Gesture for Multimodal Aphasia Type Detection',
      description:
        'Daeun Lee**, Sejung Son**, Hyolim Jeon, Seungbae Kim, and Jinyoung Han*, In EMNLP, Dec. 2023.',
      imageUrl: 'https://images.unsplash.com/photo-1575707751065-42256084fbb7?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://arxiv.org/abs/2310.11710/',
    },
    {
      title: '[KDD 2023] Towards Suicide Prevention from Bipolar Disorder with Temporal Symptom-Aware Multitask Learning',
      description:
        'Daeun Lee, Sejung Son, Hyolim Jeon, Seungbae Kim, and Jinyoung Han*, In ACM SIGKDD, Aug. 2023.',
      imageUrl: 'https://images.unsplash.com/photo-1620585837584-5e50abfc24c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
      link: 'https://arxiv.org/abs/2307.00995',
    },
  {
      title: '[NAACL 2024] Detecting Bipolar Disorder from Misdiagnosed Major Depressive Disorder with Mood-Aware Multi-Task Learning',
      description:
        'Daeun Lee**, Hyolim Jeon**, Sejung Son, Chaewon Park, Jihyun An, Seungbae Kim, and Jinyoung Han*, The North American Chapter of the Association for Computational Linguistics 2024',
      imageUrl: 'https://images.unsplash.com/photo-1592806088932-05058af0ad8d?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '',
    },
    {
      title: '[EACL workshop CLPsych 2024] A Dual-Prompting for Interpretable Mental Health Language Models',
      description:
        ' Jeon, H.**, You, D.**, Lee, D., Son, S., Kim, S., & Han, J.*, In The 9th Workshop on Computational Linguistics & Clinical Psychology',
      imageUrl: 'https://images.unsplash.com/photo-1608493830924-ec843d9c98c6?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '',
    },
    {
      title: '[KCC 2023] A Multilingual Multimodal Model for Diagnosing Dementia',
      description:
        'Sejung Son, Daeun Lee, and Jinyoung Han*, In Korea Computer Congress, Jun. 2023.',
      imageUrl: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80',
      link: 'https://www.kiise.or.kr/conference/kcc/2023/',
    },
  ],
   awards: [
    {
      title: '[CLPsych 2024] 5th Prize, The CLPsych 2024 Shared Task',
      description:
        'Utilising LLMs for finding supporting evidence about an individual’s suicide risk level',
      imageUrl: 'https://images.unsplash.com/photo-1608493830924-ec843d9c98c6?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://clpsych.org/shared-task-2024/',
    },
     {
      title: '🏆 Best Researcher Awards',
      description:
        'January 2024, Department of Applied Artificial Intelligence, Sungkyunkwan University(SKKU)',
      imageUrl: 'https://images.unsplash.com/photo-1578269174936-2709b6aeb913?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://xai.skku.edu/skkuaai/notice.do?mode=view&articleNo=167174&article.offset=0&articleLimit=10',
      
    },
    {
      title: '[ICASSP 2023] 16th Prize, ADReSS-M SPGC Challenge (Multilingual Alzheimer`s Dementia Recognition through Spontaneous Speech)',
      description:
        'February 2023, ICASSP 2023',
      imageUrl: 'https://images.unsplash.com/photo-1520799275532-15f68640b66b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
      link: 'https://luzs.gitlab.io/madress-2023/',
      
    },
     {
      title: '✍️ Academic Excellence Scholarship (Full Tuition, granted for full semesters)',
      description:
        'August 2022 - February 2024 , Sungkyunkwan University',
      imageUrl: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      link: 'https://example.com',
      
    },
    {
      title: '🎓 Summa Cum Laude, Honors BA in AAI',
      description:
        '2022, GPA 4.23, Sungkyunkwan University',
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
      title: 'GCO2011: Introduction to Machine Learning (Fall, 2023)',
      description:
        'Sungkyunkwan University',
      imageUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2062&q=80',
      link: 'https://example.com',
    },

    {
      title: 'Undergraduate Research Program (Summer, 2023) : Sign Language Translation',
      description:
        'June 2023 - July 2023, Sungkyunkwan University',
      imageUrl: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      link: 'https://www.skku.edu/skku/campus/skk_comm/notice01.do?mode=view&articleNo=106186&article.offset=0&articleLimit=10',
    },
    {
      title: 'GCO2003-1: Foundations of Convergence Science (Spring, 2023)',
      description:
        'Sungkyunkwan University',
      imageUrl: 'https://images.unsplash.com/photo-1588702547954-4800ead296ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      link: 'https://example.com',
    },
    {
      title: '4th AI X BOOKATHON Contest',
      description:
        'January 2022, Online AI Writing Contest,Sungkyunkwan University / Sponsered by NAVER CLOVA & MINDs Lab',
      imageUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      link: 'https://bookathon.skku.edu/',
    },
    {
      title: 'SKKU Co-Deep Learning (Fall, 2022) : AI-assisted taxi service for people with disabilities',
      description:
        'September 2022 - December 2022, Sungkyunkwan University',
      imageUrl: 'https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80',
      link: 'https://www.skku.edu/skku/campus/skk_comm/notice01.do?mode=view&articleNo=106186&article.offset=0&articleLimit=10',
    },
    {
      title: 'GCO2011: Introduction to Machine Learning (Fall, 2022)',
      description:
        'Sungkyunkwan University',
      imageUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2062&q=80',
      link: 'https://example.com',
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
      // 'dark',
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
