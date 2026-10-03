import { useReducedMotion, motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Atom,
  Braces,
  Check,
  Cpu,
  Database,
  Globe2,
  GraduationCap,
  Menu,
  MessageCircle,
  Network,
  Radar,
  Send,
  Sparkles,
  Workflow,
  UsersRound,
  X,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { useEffect, useState, type FormEvent } from 'react'

const profile = {
  name: 'Mafouzou SANNI ALIDOU',
  github: 'https://github.com/Mafouz123',
  linkedin: 'https://www.linkedin.com/in/mafouz-sanni-98704b393/',
  credly: 'https://www.credly.com/users/sanni-mafouz',
  whatsapp: '22991177723',
  blog: 'https://mafouz123.github.io/DigitalDecoder/',
}

type Language = 'fr' | 'en'

const translations = {
  fr: {
    language: 'Langue',
    brandRole: 'INGÉNIEUR SOLUTION · IA GÉNÉRATIVE',
    home: "Retour à l'accueil",
    menuOpen: 'Ouvrir le menu',
    menuClose: 'Fermer le menu',
    nav: { profile: 'Profil', expertise: 'Expertises', projects: 'Projets', journey: 'Mon parcours', contact: 'Parlons-en' },
    portfolio: 'PORTFOLIO · 2026',
    heroKicker: 'SOLUTIONS IA, CONÇUES AVEC INTENTION',
    heroTitle: 'Ingénieur Solution',
    heroSubtitle: 'IA Générative',
    heroIntro: 'Ingénieur solution en IA générative, je conçois des applications RAG et des systèmes intelligents en reliant modèles, données et Cloud.',
    vibeAria: 'Le vibe coding représente plus de 90 pour cent de ma méthode de travail',
    vibeLabel: 'VIBE CODING AU QUOTIDIEN',
    vibeDescription: 'Je co-construis avec l’IA, puis je garde la maîtrise de l’architecture, des tests et de la qualité.',
    viewProjects: 'Voir les projets',
    discoverApproach: 'Découvrir mon approche',
    available: 'DISPONIBLE',
    heroImage: 'Illustration d’un système d’intelligence artificielle',
    visualCaption: 'DES IDÉES AU SYSTÈME',
    profileIndex: '01 — PROFIL',
    heroBottom: 'FAIRE ÉMERGER LE SIGNAL',
    aboutEyebrow: 'QUI JE SUIS',
    aboutTitle: 'Ingénieur solution en IA générative.',
    aboutDescription: 'Je transforme les besoins en solutions IA concrètes, des applications RAG à leur intégration dans des architectures Cloud fiables.',
    portraitAlt: 'Portrait professionnel de Mafouzou Sanni Alidou',
    aboutLeadStart: 'Je relie ',
    aboutLeadAccent: 'les modèles, les données et l’infrastructure',
    aboutLeadEnd: ' pour livrer des solutions IA utiles et fiables.',
    aboutBody: 'Basé à Cotonou, je travaille sur les architectures RAG, MongoDB, AWS et le développement de produits numériques. Le vibe coding est ma force distinctive : l’IA accélère ma production, tandis que je pilote les choix techniques et la validation.',
    linkedin: 'Retrouver mon profil LinkedIn',
    certificates: 'CERTIFICATS',
    byInstitution: 'PAR INSTITUTION',
    verifyCertificate: 'Vérifier le certificat',
    education: 'FORMATION',
    educationPeriod: '2018–2021',
    educationDegree: 'Licence — Sciences Politiques & Relations Internationales',
    educationSchool: 'Université de Parakou, Bénin',
    educationDescription: 'Cursus de trois ans complété. Développement de fortes capacités d’analyse et de rédaction administrative.',
    educationStatus: 'Finalisation en cours',
    leadership: 'LEADERSHIP',
    presidentRole: 'Président — AIESEC Parakou',
    teamLeadRole: 'Team Lead — UNFPA',
    expertiseEyebrow: 'COMPÉTENCES & OUTILS',
    expertiseTitle: 'Du modèle à la mise en production.',
    expertiseDescription: 'Les domaines et outils que je mobilise pour concevoir, intégrer et faire évoluer des solutions d’IA générative.',
    approach: 'APPROCHE',
    expertiseFoot: 'Clarté technique, expérimentation mesurée, impact observable.',
    projectEyebrow: 'TRAVAUX SÉLECTIONNÉS',
    projectTitle: 'Des systèmes, pas des démos jetables.',
    projectDescription: 'Aperçu de mes réalisations techniques et de mes intégrations basées sur des cas d’usage réels.',
    concept: 'CONCEPT',
    viewRepository: 'Voir le dépôt GitHub :',
    githubRepository: 'Dépôt GitHub',
    allRepositories: 'Explorer tous les dépôts',
    journeyEyebrow: 'MON PARCOURS',
    journeyTitle: 'Comprendre, construire, faire avancer.',
    journeyDescription: 'Un parcours guidé par la curiosité technique et l’envie de transformer des idées en systèmes utiles.',
    storyLead: 'Le vibe coding représente plus de 90 % de ma pratique au quotidien. C’est ma signature : je travaille avec l’IA pour passer rapidement de l’idée au produit, sans déléguer mon jugement d’ingénieur.',
    storyBodyOne: 'Je définis le besoin, guide la génération de code, puis j’examine, teste et améliore chaque résultat. Cette boucle de co-création me permet d’explorer plus vite tout en gardant la responsabilité de l’architecture, de la fiabilité et de l’expérience utilisateur.',
    storyBodyTwo: 'Ingénieur solution en IA générative basé à Cotonou, je m’intéresse aux applications RAG, à MongoDB et aux architectures Cloud. Avec Digital Decoder, je rends aussi les sujets techniques plus accessibles à travers des tutoriels et des contenus de vulgarisation.',
    readBlog: 'Lire Digital Decoder',
    storyAria: 'Les étapes de mon approche professionnelle',
    steps: [
      { title: 'Co-créer avec l’IA', body: 'Utiliser le vibe coding pour explorer, prototyper et produire plus de 90 % de mon travail au quotidien.', mark: 'VIBE CODING' },
      { title: 'Relier les briques', body: 'Faire dialoguer données, modèles et infrastructure dans une architecture cohérente.', mark: 'INGÉNIERIE' },
      { title: 'Apprendre en livrant', body: 'Tester, mesurer et améliorer pour que l’innovation garde une valeur concrète.', mark: 'IMPACT' },
    ],
    contactEyebrow: 'PRENDRE CONTACT',
    contactTitle: 'Construisons quelque chose de solide.',
    contactDescription: 'Une idée, une équipe qui explore l’IA, ou simplement envie d’échanger ? Écris-moi directement sur WhatsApp.',
    openConversations: 'OUVERT AUX CONVERSATIONS',
    whatsapp: 'Me contacter sur WhatsApp',
    nameLabel: 'Ton nom',
    namePlaceholder: 'Comment t’appelles-tu ?',
    messageLabel: 'Ton message',
    messagePlaceholder: 'Quelques lignes suffisent…',
    continueWhatsapp: 'Continuer sur WhatsApp',
    whatsappHint: 'WhatsApp s’ouvrira avec ton message prêt à envoyer.',
    footer: 'FAIT AVEC CURIOSITÉ · 2026',
    backToTop: 'RETOUR EN HAUT',
    greeting: 'Bonjour, je suis',
  },
  en: {
    language: 'Language',
    brandRole: 'AI SOLUTIONS ENGINEER · GENERATIVE AI',
    home: 'Back to home',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    nav: { profile: 'Profile', expertise: 'Expertise', projects: 'Projects', journey: 'Journey', contact: 'Let’s talk' },
    portfolio: 'PORTFOLIO · 2026',
    heroKicker: 'AI SOLUTIONS, BUILT WITH INTENTION',
    heroTitle: 'AI Solutions Engineer',
    heroSubtitle: 'Generative AI',
    heroIntro: 'I design generative AI solutions, RAG applications and intelligent systems by connecting models, data and cloud infrastructure.',
    vibeAria: 'Vibe coding makes up more than 90 percent of my work',
    vibeLabel: 'VIBE CODING, EVERY DAY',
    vibeDescription: 'I build alongside AI while staying accountable for architecture, testing and quality.',
    viewProjects: 'View projects',
    discoverApproach: 'Discover my approach',
    available: 'AVAILABLE',
    heroImage: 'Illustration of an artificial intelligence system',
    visualCaption: 'FROM IDEAS TO SYSTEMS',
    profileIndex: '01 — PROFILE',
    heroBottom: 'BRING THE SIGNAL FORWARD',
    aboutEyebrow: 'ABOUT ME',
    aboutTitle: 'Generative AI solutions engineer.',
    aboutDescription: 'I turn requirements into practical AI solutions, from RAG applications to reliable cloud architectures.',
    portraitAlt: 'Professional portrait of Mafouzou Sanni Alidou',
    aboutLeadStart: 'I connect ',
    aboutLeadAccent: 'models, data and infrastructure',
    aboutLeadEnd: ' to deliver useful, reliable AI solutions.',
    aboutBody: 'Based in Cotonou, I work with RAG architectures, MongoDB, AWS and digital product development. Vibe coding is my distinctive strength: AI accelerates my work while I lead the technical decisions and validation.',
    linkedin: 'View my LinkedIn profile',
    certificates: 'CERTIFICATES',
    byInstitution: 'BY ISSUING INSTITUTION',
    verifyCertificate: 'Verify certificate',
    education: 'EDUCATION',
    educationPeriod: '2018–2021',
    educationDegree: 'Bachelor’s degree — Political Science & International Relations',
    educationSchool: 'University of Parakou, Benin',
    educationDescription: 'Completed a three-year programme, developing strong analytical and administrative writing skills.',
    educationStatus: 'Final administrative steps in progress',
    leadership: 'LEADERSHIP',
    presidentRole: 'President — AIESEC Parakou',
    teamLeadRole: 'Team Lead — UNFPA',
    expertiseEyebrow: 'SKILLS & TOOLS',
    expertiseTitle: 'From model to production.',
    expertiseDescription: 'The domains and tools I use to design, integrate and evolve generative AI solutions.',
    approach: 'APPROACH',
    expertiseFoot: 'Technical clarity, measured experimentation, observable impact.',
    projectEyebrow: 'SELECTED WORK',
    projectTitle: 'Systems, not throwaway demos.',
    projectDescription: 'A selection of technical work and integrations built around real-world use cases.',
    concept: 'CONCEPT',
    viewRepository: 'View GitHub repository:',
    githubRepository: 'GitHub repository',
    allRepositories: 'Explore all repositories',
    journeyEyebrow: 'MY JOURNEY',
    journeyTitle: 'Understand, build, move forward.',
    journeyDescription: 'A path shaped by technical curiosity and the drive to turn ideas into useful systems.',
    storyLead: 'Vibe coding accounts for 90+% of my day-to-day work. It is my signature: I work with AI to move quickly from idea to product without handing over my engineering judgment.',
    storyBodyOne: 'I define the need, guide code generation, then review, test and improve every result. This co-creation loop lets me explore faster while remaining responsible for architecture, reliability and user experience.',
    storyBodyTwo: 'Based in Cotonou, I focus on generative AI solutions, RAG applications, MongoDB and cloud architectures. Through Digital Decoder, I also make technical topics more accessible with tutorials and educational content.',
    readBlog: 'Read Digital Decoder',
    storyAria: 'The steps in my professional approach',
    steps: [
      { title: 'Build with AI', body: 'Use vibe coding to explore, prototype and produce 90+% of my day-to-day work.', mark: 'VIBE CODING' },
      { title: 'Connect the building blocks', body: 'Bring data, models and infrastructure together in a coherent architecture.', mark: 'ENGINEERING' },
      { title: 'Learn by shipping', body: 'Test, measure and improve so innovation delivers practical value.', mark: 'IMPACT' },
    ],
    contactEyebrow: 'GET IN TOUCH',
    contactTitle: 'Let’s build something solid.',
    contactDescription: 'Have an idea, a team exploring AI, or simply want to connect? Message me directly on WhatsApp.',
    openConversations: 'OPEN TO CONVERSATIONS',
    whatsapp: 'Message me on WhatsApp',
    nameLabel: 'Your name',
    namePlaceholder: 'What should I call you?',
    messageLabel: 'Your message',
    messagePlaceholder: 'A few lines are enough…',
    continueWhatsapp: 'Continue on WhatsApp',
    whatsappHint: 'WhatsApp will open with your message ready to send.',
    footer: 'MADE WITH CURIOSITY · 2026',
    backToTop: 'BACK TO TOP',
    greeting: 'Hello, I’m',
  },
} as const

const englishCertificateMonths: Record<string, string> = {
  janvier: 'January', février: 'February', mars: 'March', avril: 'April', mai: 'May', juin: 'June',
  juillet: 'July', août: 'August', septembre: 'September', octobre: 'October', novembre: 'November', décembre: 'December',
}

function certificateDate(date: string, language: Language) {
  if (language === 'fr') return date
  return date
    .replace('Année à confirmer', 'Year to be confirmed')
    .replace('Session juin', 'June session')
    .replace('délivré le', 'issued on')
    .replace(/janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre/g, (month) => englishCertificateMonths[month])
}

type Certificate = {
  title: string
  date: string
  identifier?: string
  href?: string
}

const certificateGroups: { institution: string; certificates: Certificate[] }[] = [
  {
    institution: 'Alison',
    certificates: [
      { title: 'Alison Publishing Tool Training Course v2 (CPD)', date: '13 mars 2023', identifier: '1431-22592804', href: 'https://alison.com/certification/check/92abdca7b2' },
      { title: 'E-Learning Theory and Practice for Publishers (CPD)', date: '11 mars 2023', identifier: '1541-22592804', href: 'https://alison.com/certification/check/9f16a0c754' },
    ],
  },
  {
    institution: 'AWS Training & Certification',
    certificates: [
      { title: 'AWS SimuLearn: Generative AI Architect', date: '29 août 2026' },
    ],
  },
  {
    institution: 'Ministère de l’Enseignement supérieur (Bénin)',
    certificates: [
      { title: 'Diplôme de Bachelier de l’Enseignement du Second Degré · Série A1', date: 'Session juin 2017 · délivré le 11 juin 2025' },
    ],
  },
  {
    institution: 'MongoDB',
    certificates: [
      { title: 'Building RAG Apps Using MongoDB', date: '16 septembre 2026', href: 'https://www.credly.com/badges/af36764e-1305-41e3-80cd-bb139292a6b7' },
      { title: 'MongoDB GenAI Developer', date: '22 septembre 2026', identifier: 'MDBvr6bqd5524' },
      { title: 'Vector Search Fundamentals', date: '20 septembre 2026', identifier: 'MDBg69ws8g3w3' },
      { title: 'AI Agents with MongoDB', date: '22 septembre 2026', identifier: 'MDB445zq092fc' },
      { title: 'Deploying and Evaluating GenAI Apps Learning Badge Path', date: '26 septembre 2026', identifier: 'MDB7t53u1mq5b' },
    ],
  },
  {
    institution: 'SoloLearn',
    certificates: [
      { title: 'Pensée critique à l’ère de l’IA', date: '2 avril 2026', identifier: 'CC-ZEZY6NOV' },
      { title: 'AI-Powered Product & UX', date: '9 janvier 2026', identifier: 'CC-EBQMJKNA' },
      { title: 'Ingénierie de prompts', date: '8 octobre 2025', identifier: 'CC-OZBNHKCG' },
      { title: 'Flux de travail agentiques', date: '17 décembre 2025', identifier: 'CC-3UR1FAGK' },
      { title: 'Fondements de l’apprentissage automatique', date: '7 octobre 2025', identifier: 'CC-FKLAIMXD' },
      { title: 'Planification de projet avec IA', date: '10 octobre 2025', identifier: 'CC-3BLISKPV' },
      { title: 'Angular', date: '12 octobre 2025', identifier: 'CC-17LDTMDF' },
      { title: 'Développeur Python', date: '14 octobre 2025', identifier: 'CC-14ZVECAM' },
      { title: 'Introduction à SQL', date: '14 octobre 2025', identifier: 'CC-8PGVUTTQ' },
      { title: 'Analyse de données avec l’IA', date: '15 octobre 2025', identifier: 'CC-XPBOYSGL' },
      { title: 'Développement web', date: '12 novembre 2025', identifier: 'CC-VZ2UYVD9' },
      { title: 'Programmation d’ambiance (Vibe Coding)', date: '13 novembre 2025', identifier: 'CC-RM8ZTCGO' },
      { title: 'Marketing des médias sociaux avec l’IA', date: '14 novembre 2025', identifier: 'CC-IAXHJXZL' },
      { title: 'SEO avec IA', date: 'Année à confirmer', identifier: 'CC-85IWBKBB' },
      { title: 'IA générative en pratique', date: '16 novembre 2025', identifier: 'CC-JQ21KFAV' },
      { title: 'Tests A/B alimentés par l’IA', date: '7 janvier 2026', identifier: 'CC-BWSC6RAG' },
      { title: 'Growth Mindset in the Age of AI', date: '6 février 2026', identifier: 'CC-UFGHBPNR' },
    ],
  },
  {
    institution: 'Udacity',
    certificates: [
      { title: 'AWS AI Practitioner Challenge', date: '17 avril 2026' },
    ],
  },
]

// Intégration de tes 38 compétences validées sur Credly et ton parcours
const skills: { name: string; icon: LucideIcon; category: string }[] = [
  // IA & Data (MongoDB / GenAI)
  { name: 'AI & Innovation', icon: Sparkles, category: 'IA & MongoDB' },
  { name: 'MongoDB Basics', icon: Database, category: 'IA & MongoDB' },
  { name: 'CRUD Operations', icon: Database, category: 'IA & MongoDB' },
  { name: 'Schema Design Patterns', icon: Database, category: 'IA & MongoDB' },
  { name: 'SQL to MongoDB Model', icon: Database, category: 'IA & MongoDB' },
  { name: 'Schema Optimization', icon: Database, category: 'IA & MongoDB' },
  { name: 'Aggregation Fundamentals', icon: Database, category: 'IA & MongoDB' },
  { name: 'Advanced Schema Design', icon: Database, category: 'IA & MongoDB' },
  { name: 'Indexing Design', icon: Database, category: 'IA & MongoDB' },
  { name: 'Securing MongoDB Atlas', icon: Network, category: 'IA & MongoDB' },
  { name: 'RAG Applications', icon: Sparkles, category: 'IA & MongoDB' },
  { name: 'Vector Search', icon: Database, category: 'IA & MongoDB' },
  { name: 'AI Agents Creation', icon: Workflow, category: 'IA & MongoDB' },
  { name: 'GenAI Evaluation', icon: Cpu, category: 'IA & MongoDB' },
  // Cloud, Systèmes & MLOps
  { name: 'AWS Cloud Architecture', icon: Network, category: 'Cloud & DevOps' },
  { name: 'Docker & MLOps', icon: Cpu, category: 'Cloud & DevOps' },
  { name: 'Python & APIs', icon: Workflow, category: 'Ingénierie' },
  { name: 'Prompt Engineering', icon: Braces, category: 'Ingénierie' },
  // Développement Web & Produit
  { name: 'React & Vite', icon: Atom, category: 'Produit Web' },
  { name: 'TypeScript', icon: Braces, category: 'Produit Web' },
  { name: 'Tailwind CSS', icon: Globe2, category: 'Produit Web' },
  { name: 'Agile & Scrum', icon: Radar, category: 'Management' },
  { name: 'UI/UX Design', icon: Sparkles, category: 'Design' },
  // Compétences complémentaires de ton portefeuille global
  { name: 'Git & GitHub Actions', icon: Network, category: 'Outils' },
  { name: 'REST APIs', icon: Workflow, category: 'Ingénierie' },
  { name: 'Data Structures', icon: Database, category: 'Ingénierie' },
  { name: 'Software Architecture', icon: Cpu, category: 'Ingénierie' },
  { name: 'Performance Optimization', icon: Zap, category: 'Produit Web' },
  { name: 'Debugging & Testing', icon: Check, category: 'Ingénierie' },
  { name: 'Cloud Security', icon: Network, category: 'Cloud & DevOps' },
  { name: 'Containerization', icon: Cpu, category: 'Cloud & DevOps' },
  { name: 'NoSQL Databases', icon: Database, category: 'IA & MongoDB' },
  { name: 'Workflow Automation', icon: Workflow, category: 'Ingénierie' },
  { name: 'Technical Writing', icon: Braces, category: 'Communication' },
  { name: 'Problem Solving', icon: Sparkles, category: 'Management' },
  { name: 'Continuous Integration', icon: Network, category: 'Cloud & DevOps' },
  { name: 'Responsive Design', icon: Globe2, category: 'Produit Web' },
  { name: 'Collaboration', icon: Radar, category: 'Management' },
]

const projects = [
  {
    number: '01',
    title: 'Copilote documentaire RAG',
    titleEn: 'RAG document copilot',
    type: 'PROJET · IA GÉNÉRATIVE & MONGODB',
    typeEn: 'PROJECT · GENERATIVE AI & MONGODB',
    description: 'Une interface de recherche connectant un LLM à un corpus métier via MongoDB Vector Search.',
    descriptionEn: 'A search interface connecting an LLM to a business knowledge base through MongoDB Vector Search.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1100&q=85',
    alt: 'Visualisation abstraite d’un réseau neuronal lumineux',
    altEn: 'Abstract visualization of a glowing neural network',
    tags: ['Python', 'RAG', 'MongoDB'],
    href: profile.github,
  },
  {
    number: '02',
    title: 'Observabilité des pipelines IA',
    titleEn: 'AI pipeline observability',
    type: 'PROJET · SYSTÈMES & MLOPS',
    typeEn: 'PROJECT · SYSTEMS & MLOPS',
    description: 'Tableau de bord de suivi de la latence, des coûts et de la qualité des modèles avec Docker.',
    descriptionEn: 'A dashboard tracking model latency, costs and quality with Docker.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1100&q=85',
    alt: 'Circuit électronique et composants informatiques',
    altEn: 'Electronic circuit board and computer components',
    tags: ['Docker', 'MLOps', 'LLM'],
    href: profile.github,
  },
  {
    number: '03',
    title: 'Assistant de veille technique',
    titleEn: 'Technical research assistant',
    type: 'PROJET · AUTOMATISATION',
    typeEn: 'PROJECT · AUTOMATION',
    description: 'Workflow automatisé pour rassembler les sources, synthétiser les nouveautés et structurer la veille.',
    descriptionEn: 'An automated workflow that gathers sources, summarizes updates and organizes technical research.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1100&q=85',
    alt: 'Visualisation abstraite d’un réseau neuronal lumineux',
    altEn: 'Abstract visualization of a glowing neural network',
    tags: ['Agents', 'API', 'Automation'],
    href: profile.github,
  },
]

function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="section-heading">
      <div className="section-index">
        <span>{index}</span>
        <span>{eyebrow}</span>
      </div>
      <div className="section-heading-copy">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      <ArrowDownRight className="heading-arrow" aria-hidden="true" />
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [language, setLanguage] = useState<Language>(() =>
    typeof window !== 'undefined' && window.localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'fr',
  )
  const reducedMotion = useReducedMotion()
  const text = translations[language]

  useEffect(() => {
    document.documentElement.lang = language
    document.title = language === 'fr'
      ? 'Mafouzou Sanni Alidou | Ingénieur solution IA générative'
      : 'Mafouzou Sanni Alidou | Generative AI Solutions Engineer'
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      language === 'fr'
        ? 'Mafouzou Sanni Alidou, ingénieur solution en IA générative à Cotonou. Applications RAG, MongoDB, AWS et vibe coding à plus de 90 % de son travail.'
        : 'Mafouzou Sanni Alidou, generative AI solutions engineer in Cotonou. RAG applications, MongoDB, AWS and 90+% vibe coding in his daily work.',
    )
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute(
      'content',
      language === 'fr'
        ? 'Ingénieur solution en IA générative, spécialisé en RAG, MongoDB et Cloud. Plus de 90 % de vibe coding dans ma pratique quotidienne.'
        : 'Generative AI solutions engineer focused on RAG, MongoDB and cloud. Vibe coding accounts for more than 90% of my daily practice.',
    )
    window.localStorage.setItem('portfolio-language', language)
  }, [language])

  const navigation = [
    { label: text.nav.profile, href: '#profil' },
    { label: text.nav.expertise, href: '#expertises' },
    { label: text.nav.projects, href: '#projets' },
    { label: text.nav.journey, href: '#parcours' },
  ]

  const skillCategoryLabels = language === 'fr'
    ? { 'IA & MongoDB': 'IA & MongoDB', 'Cloud & DevOps': 'Cloud & DevOps', Ingénierie: 'Ingénierie', 'Produit Web': 'Produit Web', Management: 'Management', Design: 'Design', Outils: 'Outils', Communication: 'Communication' }
    : { 'IA & MongoDB': 'AI & MongoDB', 'Cloud & DevOps': 'Cloud & DevOps', Ingénierie: 'Engineering', 'Produit Web': 'Web Product', Management: 'Management', Design: 'Design', Outils: 'Tools', Communication: 'Communication' }

  function handleContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const body = encodeURIComponent(
      `${text.greeting} ${formData.get('name')}.\n\n${formData.get('message')}`,
    )
    window.open(`https://wa.me/${profile.whatsapp}?text=${body}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#accueil" aria-label={text.home}>
          <span className="wordmark-symbol"><span /></span>
          <span>{profile.name}<small>{text.brandRole}</small></span>
        </a>
        <button
          className="menu-toggle icon-button"
          type="button"
          aria-label={menuOpen ? text.menuClose : text.menuOpen}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label={language === 'fr' ? 'Navigation principale' : 'Main navigation'}>
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>
            {text.nav.contact} <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </nav>
        <div className="language-switch" role="group" aria-label={text.language}>
          <button type="button" className={language === 'fr' ? 'is-active' : ''} aria-pressed={language === 'fr'} onClick={() => setLanguage('fr')}>FR</button>
          <button type="button" className={language === 'en' ? 'is-active' : ''} aria-pressed={language === 'en'} onClick={() => setLanguage('en')}>EN</button>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="accueil" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="availability"><span className="availability-dot" /> {text.portfolio}</div>
            <p className="hero-kicker">{text.heroKicker}</p>
            <h1 id="hero-title">
              {text.heroTitle}<br />
              <em>{text.heroSubtitle}</em>
            </h1>
            <p className="hero-intro">{text.heroIntro}</p>
            <div className="vibe-proof" aria-label={text.vibeAria}>
              <strong>90+ %</strong>
              <div><span>{text.vibeLabel}</span><p>{text.vibeDescription}</p></div>
            </div>
            <div className="hero-actions">
              <a className="button button-dark" href="#projets">
                {text.viewProjects} <ArrowUpRight size={17} />
              </a>
              <a className="text-link" href="#profil">
                {text.discoverApproach} <ArrowDown size={15} />
              </a>
            </div>
            <div className="hero-meta">
              <span><Globe2 size={14} /> FR · EN</span>
              <span>{text.available}</span>
            </div>
          </div>
          <div className="hero-visual" aria-label={text.heroImage} role="img">
            <div className="visual-image" />
            <div className="visual-shade" />
            <div className="visual-label visual-label-top"><span className="signal-dot" /> SYSTEM ONLINE <span>RAG · CLOUD</span></div>
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="core-node"><Sparkles size={31} strokeWidth={1.2} /><span>GEN<br />AI</span></div>
            <div className="node node-a"><Database size={16} /><span>DATA</span></div>
            <div className="node node-b"><Workflow size={16} /><span>RAG</span></div>
            <div className="node node-c"><Cpu size={16} /><span>LLM</span></div>
            <div className="visual-caption"><span>01 — ARCHITECTURE</span><span>{text.visualCaption}</span></div>
            <div className="visual-stamp">BUILT<br />TO THINK<span>↗</span></div>
          </div>
          <div className="hero-bottom">
            <span>{text.profileIndex}</span><span>{text.heroBottom}</span>
            <a href="#profil" aria-label={language === 'fr' ? 'Défiler vers la section profil' : 'Scroll to the profile section'}><ArrowDown size={16} /></a>
          </div>
        </section>

        <section className="about section-wrap section-block" id="profil" aria-labelledby="about-title">
          <SectionHeading
            index="01"
            eyebrow={text.aboutEyebrow}
            title={text.aboutTitle}
            description={text.aboutDescription}
          />
          <div className="about-grid">
            <div className="about-statement">
              <img className="profile-portrait" src={`${import.meta.env.BASE_URL}profile_img.PNG`} alt={text.portraitAlt} loading="lazy" decoding="async" />
              <p className="large-copy" id="about-title">
                {text.aboutLeadStart}<span>{text.aboutLeadAccent}</span>{text.aboutLeadEnd}
              </p>
              <p className="body-copy">{text.aboutBody}</p>
              <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">
                {text.linkedin} <ArrowUpRight size={15} />
              </a>
            </div>
            <div className="timeline-wrap">
              <div className="timeline-heading">
                <span>{text.certificates}</span>
                <span>{certificateGroups.reduce((count, group) => count + group.certificates.length, 0)} · {text.byInstitution}</span>
              </div>
              <div className="certificate-grid">
                {certificateGroups.flatMap((group) => group.certificates.map((certificate) => (
                  <article className="certificate-card" key={certificate.identifier ?? certificate.title}>
                    <div className="certificate-meta">
                      <span className="certificate-issuer">
                        {language === 'en' && group.institution === 'Ministère de l’Enseignement supérieur (Bénin)' ? 'Ministry of Higher Education (Benin)' : group.institution}
                      </span>
                      <span className="timeline-date">{certificateDate(certificate.date, language)}</span>
                    </div>
                    <h4>{certificate.title}</h4>
                    {certificate.href && (
                      <a className="certificate-link" href={certificate.href} target="_blank" rel="noreferrer">
                        {text.verifyCertificate} <ArrowUpRight size={13} />
                      </a>
                    )}
                  </article>
                )))}
              </div>
            </div>
          </div>
        </section>

        <section className="expertise section-block" id="expertises" aria-labelledby="expertise-title">
          <div className="section-wrap">
            <SectionHeading
              index="02"
              eyebrow={text.expertiseEyebrow}
              title={text.expertiseTitle}
              description={text.expertiseDescription}
            />
            <div className="skills-grid" id="expertise-title">
              {skills.map(({ name, icon: Icon, category }) => (
                <div className="skill-row" key={name}>
                  <span className="skill-icon"><Icon size={19} strokeWidth={1.65} /></span>
                  <span className="skill-name">{name}</span>
                  <span className="skill-category">{skillCategoryLabels[category as keyof typeof skillCategoryLabels]}</span>
                  <ArrowUpRight size={15} className="skill-arrow" />
                </div>
              ))}
            </div>
            <div className="expertise-foot">
              <span><Zap size={15} /> {text.approach}</span>
              <p>{text.expertiseFoot}</p>
              <span>02 / 04</span>
            </div>
          </div>
        </section>

        <section className="projects section-wrap section-block" id="projets" aria-labelledby="projects-title">
          <SectionHeading
            index="03"
            eyebrow={text.projectEyebrow}
            title={text.projectTitle}
            description={text.projectDescription}
          />
          <div className="project-list" id="projects-title">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <a className="project-image" href={project.href} target="_blank" rel="noreferrer" aria-label={`${text.viewRepository} ${language === 'fr' ? project.title : project.titleEn}`}>
                  <img src={project.image} alt={language === 'fr' ? project.alt : project.altEn} loading="lazy" />
                  <span className="project-image-index">{project.number} / {text.concept}</span>
                  <span className="project-open"><ArrowUpRight size={21} /></span>
                </a>
                <div className="project-info">
                  <div className="project-type">{language === 'fr' ? project.type : project.typeEn}</div>
                  <div className="project-title-row">
                    <h3>{language === 'fr' ? project.title : project.titleEn}</h3>
                    <span>{project.number}</span>
                  </div>
                  <p>{language === 'fr' ? project.description : project.descriptionEn}</p>
                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
                    {text.githubRepository} <ArrowUpRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <a className="all-projects" href={profile.github} target="_blank" rel="noreferrer">
            <Braces size={17} /> {text.allRepositories} <ArrowRight size={16} />
          </a>
        </section>

        <section className="story-section section-block" id="parcours" aria-labelledby="story-title">
          <div className="section-wrap">
            <SectionHeading
              index="04"
              eyebrow={text.journeyEyebrow}
              title={text.journeyTitle}
              description={text.journeyDescription}
            />
            <div className="story-grid" id="story-title">
              <div className="story-copy">
                <p className="story-lead">{text.storyLead}</p>
                <p className="story-body">{text.storyBodyOne}</p>
                <p className="story-body">{text.storyBodyTwo}</p>
                <a className="text-link" href={profile.blog} target="_blank" rel="noreferrer">{text.readBlog} <ArrowUpRight size={15} /></a>
              </div>
              <div className="story-path" aria-label={text.storyAria}>
                {text.steps.map((step, index) => (
                  <article className="story-step" key={step.title}>
                    <span className="story-step-number">{String(index + 1).padStart(2, '0')}</span>
                    <div><h3>{step.title}</h3><p>{step.body}</p></div>
                    <span className="story-step-mark">{step.mark}</span>
                  </article>
                ))}
              </div>
            </div>
            <div className="journey-details">
              <article className="journey-detail">
                <div className="journey-detail-heading"><GraduationCap size={19} /><h3>{text.education}</h3></div>
                <div className="journey-detail-meta"><span>{text.educationPeriod}</span><span>{text.educationStatus}</span></div>
                <h4>{text.educationDegree}</h4>
                <p className="journey-school">{text.educationSchool}</p>
                <p className="journey-detail-description">{text.educationDescription}</p>
              </article>
              <article className="journey-detail">
                <div className="journey-detail-heading"><UsersRound size={19} /><h3>{text.leadership}</h3></div>
                <div className="leadership-row"><strong>{text.presidentRole}</strong><span>2019–2021</span></div>
                <div className="leadership-row"><strong>{text.teamLeadRole}</strong><span>2019–2020</span></div>
              </article>
            </div>
          </div>
        </section>

        <section className="contact section-wrap section-block" id="contact" aria-labelledby="contact-title">
          <SectionHeading
            index="05"
            eyebrow={text.contactEyebrow}
            title={text.contactTitle}
            description={text.contactDescription}
          />
          <div className="contact-grid">
            <div className="contact-direct">
              <span className="contact-overline"><span className="availability-dot" /> {text.openConversations}</span>
              <a className="whatsapp-link" href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer">
                <MessageCircle size={19} /> {text.whatsapp} <ArrowUpRight size={20} />
              </a>
              <div className="social-links">
                <a href={profile.linkedin} target="_blank" rel="noreferrer"><Network size={16} /> LinkedIn <ArrowUpRight size={13} /></a>
                <a href={profile.github} target="_blank" rel="noreferrer"><Braces size={16} /> GitHub <ArrowUpRight size={13} /></a>
                <a href={profile.credly} target="_blank" rel="noreferrer"><Sparkles size={16} /> Credly <ArrowUpRight size={13} /></a>
                <a href={profile.blog} target="_blank" rel="noreferrer"><Globe2 size={16} /> Digital Decoder <ArrowUpRight size={13} /></a>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleContact}>
              <label>{text.nameLabel}<input name="name" autoComplete="name" placeholder={text.namePlaceholder} required /></label>
              <label>{text.messageLabel}<textarea name="message" rows={4} placeholder={text.messagePlaceholder} required /></label>
              <button className="button button-dark" type="submit">
                {text.continueWhatsapp} <Send size={15} />
              </button>
              <span className="form-hint"><MessageCircle size={13} /> {text.whatsappHint}</span>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="wordmark footer-brand" href="#accueil">
          <span className="wordmark-symbol"><span /></span>
          <span>{profile.name}<small>{text.brandRole}</small></span>
        </a>
        <span>{text.footer}</span>
        <a className="back-top" href="#accueil">{text.backToTop} <ArrowUpRight size={14} /></a>
      </footer>

      {!reducedMotion && (
        <motion.div
          className="scroll-progress"
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      )}
    </div>
  )
}

export default App