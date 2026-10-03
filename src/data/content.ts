export type Lang = 'en' | 'pl';

export interface Job {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface SkillGroup {
  title: string;
  icon: string;
  items: { name: string; level?: string }[];
}

export interface Content {
  nav: { about: string; experience: string; skills: string; terminal: string; contact: string };
  boot: string[];
  skip: string;
  hero: {
    greeting: string;
    roles: string[];
    summary: string;
    ctaCv: string;
    ctaContact: string;
    ctaTerminal: string;
    stats: { value: string; label: string }[];
  };
  about: {
    title: string;
    paragraphs: string[];
    strengthsTitle: string;
    strengths: string[];
    interestsTitle: string;
    interests: string[];
    facts: { k: string; v: string }[];
  };
  experience: { title: string; jobs: Job[] };
  skills: { title: string; groups: SkillGroup[] };
  education: {
    label: string;
    title: string;
    items: { name: string; place: string; period: string; note: string }[];
    certsTitle: string;
    certs: { code: string; name: string }[];
    langTitle: string;
    langs: { name: string; level: string }[];
  };
  terminal: {
    title: string;
    hint: string;
    welcome: string;
    unknown: string;
    prompt: string;
    help: string[];
    hire: string[];
    cvOpened: string;
    langSet: string;
    commands: Record<string, string[]>;
  };
  contact: { title: string; lead: string; email: string; linkedin: string; github: string; location: string; note: string };
  footer: string;
}

export const PROFILE = {
  name: 'Bartosz Szwugier',
  email: 'b.szwugier@outlook.com',
  linkedin: 'https://www.linkedin.com/in/bartoszszwugier',
  github: 'https://github.com/Bartosz-Szwugier',
  cv: { en: './Bartosz-Szwugier-CV.pdf', pl: './Bartosz-Szwugier-CV-PL.pdf' },
};

interface Levels {
  advanced: string;
  improving: string;
  basic: string;
}

const skillGroups = (labels: [string, string, string, string, string, string], lv: Levels): SkillGroup[] => [
  {
    title: labels[0],
    icon: 'PY',
    items: [
      { name: 'Python', level: lv.advanced },
      { name: 'JavaScript', level: lv.advanced },
      { name: 'TypeScript', level: lv.advanced },
      { name: 'SQL' },
      { name: 'PHP' },
      { name: 'C / C++', level: lv.improving },
      { name: 'Kotlin', level: lv.basic },
    ],
  },
  {
    title: labels[1],
    icon: 'AI',
    items: [{ name: 'Data pipelines' }, { name: 'Data engineering' }, { name: 'Grafana' }, { name: 'PostgreSQL' }, { name: 'GenAI & AI skills' }],
  },
  {
    title: labels[2],
    icon: '{ }',
    items: [{ name: 'Node.js' }, { name: 'Express.js' }, { name: 'Django' }, { name: 'FastAPI' }, { name: 'Celery' }],
  },
  {
    title: labels[3],
    icon: '</>',
    items: [{ name: 'Vue' }, { name: 'Vuex' }, { name: 'React' }, { name: 'React Native' }, { name: 'HTML5' }, { name: 'CSS3' }],
  },
  {
    title: labels[4],
    icon: '☁',
    items: [{ name: 'AWS' }, { name: 'Docker' }, { name: 'NGINX' }, { name: 'GitHub' }, { name: 'CI/CD' }, { name: 'Linux' }],
  },
  { title: labels[5], icon: '+', items: [{ name: 'PyCharm' }, { name: 'Qt' }] },
];

export const content: Record<Lang, Content> = {
  en: {
    nav: { about: 'About', experience: 'Experience', skills: 'Skills', terminal: 'Terminal', contact: 'Contact' },
    boot: [
      'BIOS v2.0.7 .......................... OK',
      'mounting /dev/career ................. OK',
      'loading modules: vue react node python  OK',
      'linking GenAI pipeline ............... OK',
      'identity verified: B. SZWUGIER ....... OK',
      'ACCESS GRANTED',
    ],
    skip: 'Press any key to skip',
    hero: {
      greeting: '> hello, world. I am',
      roles: ['Software Engineer', 'Fullstack Developer', 'Data Engineering', 'GenAI Developer'],
      summary:
        'Software Engineer with 2+ years of experience in fullstack web development, data engineering and GenAI. Focus areas: data pipelines on AWS, Grafana dashboards, AI skills, and clean, maintainable Python, JavaScript and TypeScript code.',
      ctaCv: 'Download CV',
      ctaContact: 'Get in touch',
      ctaTerminal: 'Open terminal',
      stats: [
        { value: '2+', label: 'years in production' },
        { value: 'AWS', label: 'pipelines & data engineering' },
        { value: '20+', label: 'technologies in the toolbox' },
        { value: 'C1', label: 'English' },
      ],
    },
    about: {
      title: 'About',
      paragraphs: [
        'Software Engineer working across the stack: Vue, Vuex, React, Express.js, Django and FastAPI on the application side; data pipelines, Grafana dashboards and AI skills on the data side, largely on AWS.',
        'Advanced in Python, JavaScript and TypeScript. Improving in C and C++. Also experienced with React Native (mobile) and Kotlin (basic).',
      ],
      strengthsTitle: 'Strengths',
      strengths: [
        'Fullstack & GenAI architecture',
        'Automation and process improvement',
        'Clean, maintainable code',
        'Data visualization',
      ],
      interestsTitle: 'Interests',
      interests: ['GenAI', 'Software development', 'Web technologies', '3D graphics', 'Emerging technologies', 'Automotive technology'],
      facts: [
        { k: 'role', v: 'Associate Software Engineer' },
        { k: 'company', v: 'Sii Poland' },
        { k: 'location', v: 'Kraków, Poland' },
        { k: 'studying', v: 'B.Sc. Computer Science, PK' },
      ],
    },
    experience: {
      title: 'Experience',
      jobs: [
        {
          role: 'Associate Software Engineer',
          company: 'Sii Poland',
          period: 'Jul 2024 — Present',
          location: 'Kraków, Poland',
          bullets: [
            'Data engineering: design and implementation of pipelines that collect, clean, transform and aggregate data from multiple sources.',
            'Metrics & dashboards: Grafana dashboards presenting processed data for analysis and decision-making.',
            'GenAI: development of AI skills and GenAI-enabled capabilities integrated into existing workflows.',
            'Fullstack: web applications built with Vue, Vuex, React, Express.js, Django and FastAPI.',
            'Cloud & DevOps: AWS, Docker, NGINX, GitHub, CI/CD; Python, Node.js, PostgreSQL, Celery.',
          ],
        },
        {
          role: 'IT Intern',
          company: 'Aptiv',
          period: 'Oct 2023 — Nov 2023',
          location: 'Kraków, Poland',
          bullets: [
            'One-month internship in a professional engineering environment: corporate IT workflows and software-related tasks.',
            'Support of assigned technical activities; teamwork, communication and problem-solving.',
          ],
        },
      ],
    },
    skills: {
      title: 'Core skills',
      groups: skillGroups(['Languages', 'Data & AI', 'Backend', 'Frontend & Mobile', 'Cloud & DevOps', 'Tools & Other'], { advanced: 'advanced', improving: 'improving', basic: 'basic' }),
    },
    education: {
      label: 'Education',
      title: 'Education & credentials',
      items: [
        { name: 'B.Sc. in Computer Science', place: 'Cracow University of Technology', period: '2025 — Present', note: 'Kraków, Poland' },
        { name: 'IT Technician', place: 'Zespół Szkół Łączności, Kraków', period: '2020 — 2025', note: 'Technical secondary education' },
      ],
      certsTitle: 'Certificates',
      certs: [
        { code: 'INF.02', name: 'IT administration and local network systems' },
        { code: 'INF.03', name: 'Web application and database development' },
      ],
      langTitle: 'Languages',
      langs: [
        { name: 'English', level: 'C1' },
        { name: 'Polish', level: 'Native' },
      ],
    },
    terminal: {
      title: 'Interactive terminal',
      hint: 'Click the window and type "help". Try "sudo hire-me".',
      welcome: 'Welcome to bs-shell 1.0. Type "help" to list commands.',
      unknown: 'command not found: ',
      prompt: 'guest@bartosz',
      help: [
        'Available commands:',
        '  about        who I am',
        '  experience   where I have worked',
        '  skills       tech stack',
        '  education    studies & certificates',
        '  contact      how to reach me',
        '  cv           open the PDF version',
        '  lang <en|pl> switch site language',
        '  clear        clear the screen',
        '  sudo hire-me  :)',
      ],
      hire: ['[sudo] password for guest: ********', 'Permission granted. Excellent decision.', 'Drafting offer... just email me: ' + PROFILE.email],
      cvOpened: 'Opening Bartosz-Szwugier-CV.pdf ...',
      langSet: 'Language set to: ',
      commands: {
        about: [
          'Bartosz Szwugier — Associate Software Engineer @ Sii Poland',
          'Fullstack, data engineering, GenAI. 2+ years of experience.',
          'Data pipelines, Grafana dashboards, AI skills, AWS.',
        ],
        experience: [
          '2024-07 → now   Associate Software Engineer, Sii Poland',
          '2023-10 → 11    IT Intern, Aptiv',
        ],
        skills: [
          'languages : Python*, JavaScript*, TypeScript*, SQL, PHP, C/C++ (improving), Kotlin (basic)',
          'data & ai : data pipelines, Grafana, PostgreSQL, GenAI & AI skills',
          'backend   : Node.js, Express.js, Django, FastAPI, Celery',
          'frontend  : Vue, Vuex, React, React Native, HTML5, CSS3',
          'cloud     : AWS, Docker, NGINX, GitHub, CI/CD, Linux',
          '(* advanced)',
        ],
        education: ['B.Sc. Computer Science — Cracow University of Technology (2025 → now)', 'IT Technician — Zespół Szkół Łączności (2020 → 2025)', 'INF.02, INF.03 certified · English C1'],
        contact: ['email    : ' + PROFILE.email, 'linkedin : ' + PROFILE.linkedin.replace('https://www.', ''), 'github   : ' + PROFILE.github.replace('https://', '')],
      },
    },
    contact: {
      title: 'Contact',
      lead: 'Looking for a fullstack / data / GenAI engineer? Let’s talk.',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      location: 'Location',
      note: 'Open to new opportunities.',
    },
    footer: 'Built with React, TypeScript & Vite.',
  },

  pl: {
    nav: { about: 'O mnie', experience: 'Doświadczenie', skills: 'Umiejętności', terminal: 'Terminal', contact: 'Kontakt' },
    boot: [
      'BIOS v2.0.7 .......................... OK',
      'montowanie /dev/career ............... OK',
      'ładowanie: vue react node python ..... OK',
      'łączenie potoku GenAI ................ OK',
      'tożsamość: B. SZWUGIER ............... OK',
      'DOSTĘP PRZYZNANY',
    ],
    skip: 'Naciśnij dowolny klawisz, aby pominąć',
    hero: {
      greeting: '> hello, world. I am',
      roles: ['Software Engineer', 'Fullstack Developer', 'Data Engineering', 'GenAI Developer'],
      summary:
        'Software Engineer z 2+ latami doświadczenia w tworzeniu aplikacji fullstack, data engineeringu i GenAI. Obszary specjalizacji: pipeline’y danych w AWS, dashboardy Grafana, skille AI oraz czysty, utrzymywalny kod w Pythonie, JavaScripcie i TypeScripcie.',
      ctaCv: 'Pobierz CV',
      ctaContact: 'Skontaktuj się',
      ctaTerminal: 'Otwórz terminal',
      stats: [
        { value: '2+', label: 'lata w produkcji' },
        { value: 'AWS', label: 'pipeline’y i data engineering' },
        { value: '20+', label: 'technologii w repertuarze' },
        { value: 'C1', label: 'angielski' },
      ],
    },
    about: {
      title: 'O mnie',
      paragraphs: [
        'Software Engineer pracujący w całym stosie: Vue, Vuex, React, Express.js, Django i FastAPI po stronie aplikacji; pipeline’y danych, dashboardy Grafana i skille AI po stronie danych, głównie w AWS.',
        'Zaawansowany w Pythonie, JavaScripcie i TypeScripcie. W rozwoju: C i C++. Doświadczenie z React Native (mobile) i Kotlinem (podstawy).',
      ],
      strengthsTitle: 'Mocne strony',
      strengths: [
        'Architektura fullstack i GenAI',
        'Automatyzacja i usprawnianie procesów',
        'Czysty, utrzymywalny kod',
        'Wizualizacja danych',
      ],
      interestsTitle: 'Zainteresowania',
      interests: ['GenAI', 'Programowanie', 'Technologie webowe', 'Grafika 3D', 'Nowe technologie', 'Motoryzacja'],
      facts: [
        { k: 'rola', v: 'Associate Software Engineer' },
        { k: 'firma', v: 'Sii Poland' },
        { k: 'lokalizacja', v: 'Kraków, Polska' },
        { k: 'studia', v: 'Informatyka (inż.), PK' },
      ],
    },
    experience: {
      title: 'Doświadczenie',
      jobs: [
        {
          role: 'Associate Software Engineer',
          company: 'Sii Poland',
          period: 'lip 2024 — obecnie',
          location: 'Kraków, Polska',
          bullets: [
            'Data engineering: projektowanie i implementacja pipeline’ów zbierających, czyszczących, przekształcających i agregujących dane z wielu źródeł.',
            'Metryki i dashboardy: dashboardy Grafana prezentujące przetworzone dane na potrzeby analiz i podejmowania decyzji.',
            'GenAI: rozwój skilli AI i rozwiązań opartych na GenAI, zintegrowanych z istniejącymi procesami.',
            'Fullstack: aplikacje webowe w Vue, Vuex, React, Express.js, Django i FastAPI.',
            'Cloud i DevOps: AWS, Docker, NGINX, GitHub, CI/CD; Python, Node.js, PostgreSQL, Celery.',
          ],
        },
        {
          role: 'Praktykant IT',
          company: 'Aptiv',
          period: 'paź 2023 — lis 2023',
          location: 'Kraków, Polska',
          bullets: [
            'Miesięczna praktyka w profesjonalnym środowisku inżynierskim: korporacyjne procesy IT i zadania programistyczne.',
            'Wsparcie przydzielonych zadań technicznych; praca zespołowa, komunikacja i rozwiązywanie problemów.',
          ],
        },
      ],
    },
    skills: {
      title: 'Kluczowe umiejętności',
      groups: skillGroups(['Języki', 'Dane i AI', 'Backend', 'Frontend i mobile', 'Cloud i DevOps', 'Narzędzia i inne'], { advanced: 'zaawansowany', improving: 'w rozwoju', basic: 'podstawy' }),
    },
    education: {
      label: 'Edukacja',
      title: 'Edukacja i certyfikaty',
      items: [
        { name: 'Informatyka (studia inżynierskie)', place: 'Politechnika Krakowska', period: '2025 — obecnie', note: 'Kraków, Polska' },
        { name: 'Technik informatyk', place: 'Zespół Szkół Łączności, Kraków', period: '2020 — 2025', note: 'Średnie wykształcenie techniczne' },
      ],
      certsTitle: 'Certyfikaty',
      certs: [
        { code: 'INF.02', name: 'Administracja i eksploatacja systemów komputerowych i lokalnych sieci' },
        { code: 'INF.03', name: 'Tworzenie i administrowanie aplikacjami internetowymi oraz bazami danych' },
      ],
      langTitle: 'Języki',
      langs: [
        { name: 'Angielski', level: 'C1' },
        { name: 'Polski', level: 'Ojczysty' },
      ],
    },
    terminal: {
      title: 'Interaktywny terminal',
      hint: 'Kliknij okno i wpisz „help”. Spróbuj „sudo hire-me”.',
      welcome: 'Witaj w bs-shell 1.0. Wpisz „help”, aby zobaczyć polecenia.',
      unknown: 'nie znaleziono polecenia: ',
      prompt: 'gosc@bartosz',
      help: [
        'Dostępne polecenia:',
        '  about        kim jestem',
        '  experience   gdzie pracowałem',
        '  skills       stos technologiczny',
        '  education    studia i certyfikaty',
        '  contact      jak się ze mną skontaktować',
        '  cv           otwórz wersję PDF',
        '  lang <en|pl> zmień język strony',
        '  clear        wyczyść ekran',
        '  sudo hire-me  :)',
      ],
      hire: ['[sudo] hasło dla gosc: ********', 'Dostęp przyznany. Świetna decyzja.', 'Przygotowuję ofertę... po prostu napisz: ' + PROFILE.email],
      cvOpened: 'Otwieram Bartosz-Szwugier-CV.pdf ...',
      langSet: 'Ustawiono język: ',
      commands: {
        about: [
          'Bartosz Szwugier — Associate Software Engineer @ Sii Poland',
          'Fullstack, data engineering, GenAI. 2+ lata doświadczenia.',
          'Pipeline’y danych, dashboardy Grafana, skille AI, AWS.',
        ],
        experience: ['2024-07 → teraz   Associate Software Engineer, Sii Poland', '2023-10 → 11      Praktykant IT, Aptiv'],
        skills: [
          'języki   : Python*, JavaScript*, TypeScript*, SQL, PHP, C/C++ (w rozwoju), Kotlin (podstawy)',
          'dane i ai: pipeline’y danych, Grafana, PostgreSQL, GenAI i skille AI',
          'backend  : Node.js, Express.js, Django, FastAPI, Celery',
          'frontend : Vue, Vuex, React, React Native, HTML5, CSS3',
          'cloud    : AWS, Docker, NGINX, GitHub, CI/CD, Linux',
          '(* zaawansowany)',
        ],
        education: ['Informatyka — Politechnika Krakowska (2025 → teraz)', 'Technik informatyk — Zespół Szkół Łączności (2020 → 2025)', 'INF.02, INF.03 · angielski C1'],
        contact: ['email    : ' + PROFILE.email, 'linkedin : ' + PROFILE.linkedin.replace('https://www.', ''), 'github   : ' + PROFILE.github.replace('https://', '')],
      },
    },
    contact: {
      title: 'Kontakt',
      lead: 'Szukasz inżyniera fullstack / data / GenAI? Porozmawiajmy.',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      location: 'Lokalizacja',
      note: 'Otwarty na nowe propozycje.',
    },
    footer: 'Zbudowano w React, TypeScript i Vite.',
  },
};
