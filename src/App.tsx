import { useReducedMotion, motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Atom,
  Braces,
  Check,
  ChevronDown,
  Cpu,
  Database,
  Globe2,
  Mail,
  Menu,
  Network,
  Radar,
  Send,
  Sparkles,
  Workflow,
  X,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { useState, type FormEvent } from 'react'

const profile = {
  name: 'Mafouzou SANNI ALIDOU',
  email: 'sannimafouz553@gmail.com',
  github: 'https://github.com/Mafouz123',
  linkedin: 'https://www.linkedin.com/in/votre-profil/',
  credly: 'https://www.credly.com/users/sanni-mafouz',
}

const navigation = [
  { label: 'Profil', href: '#profil' },
  { label: 'Expertises', href: '#expertises' },
  { label: 'Projets', href: '#projets' },
  { label: 'Notes', href: '#notes' },
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
    type: 'PROJET · IA GÉNÉRATIVE & MONGODB',
    description: 'Une interface de recherche connectant un LLM à un corpus métier via MongoDB Vector Search.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1100&q=85',
    alt: 'Visualisation abstraite d’un réseau neuronal lumineux',
    tags: ['Python', 'RAG', 'MongoDB'],
    href: profile.github,
  },
  {
    number: '02',
    title: 'Observabilité des pipelines IA',
    type: 'PROJET · SYSTÈMES & MLOPS',
    description: 'Tableau de bord de suivi de la latence, des coûts et de la qualité des modèles avec Docker.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1100&q=85',
    alt: 'Circuit électronique et composants informatiques',
    tags: ['Docker', 'MLOps', 'LLM'],
    href: profile.github,
  },
  {
    number: '03',
    title: 'Assistant de veille technique',
    type: 'PROJET · AUTOMATISATION',
    description: 'Workflow automatisé pour rassembler les sources, synthétiser les nouveautés et structurer la veille.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1100&q=85',
    alt: 'Visualisation abstraite d’un réseau neuronal lumineux',
    tags: ['Agents', 'API', 'Automation'],
    href: profile.github,
  },
]

const articles = [
  {
    number: '01',
    category: 'PERFORMANCE WEB',
    title: 'Lire PageSpeed au-delà du score',
    description: 'Relier les Core Web Vitals aux choix d’architecture et prioriser les optimisations qui comptent.',
    readTime: '6 min',
  },
  {
    number: '02',
    category: 'IA & ACQUISITION',
    title: 'Google Ads : où l’IA aide vraiment',
    description: 'Des usages concrets pour accélérer l’analyse et la création, sans déléguer le jugement stratégique.',
    readTime: '8 min',
  },
  {
    number: '03',
    category: 'SEO TECHNIQUE',
    title: 'Screaming Frog comme outil de diagnostic',
    description: 'Transformer un crawl en pistes d’action grâce aux segments, exports et contrôles ciblés.',
    readTime: '5 min',
  },
]

// Intégration exacte de tes 5 badges Credly dans la timeline
const timeline = [
  {
    date: 'Sept 2026',
    title: 'Déploiement et évaluation d’applications GenAI avec MongoDB',
    detail: 'Badge officiel validant l’évaluation de la performance et la mise en production des architectures GenAI.',
  },
  {
    date: 'Sept 2026',
    title: 'Création d’agents d’IA avec MongoDB',
    detail: 'Validation des compétences dans la conception et l’orchestration d’agents autonomes.',
  },
  {
    date: 'Sept 2026',
    title: 'Recherche basée sur l’IA avec MongoDB Vector Search',
    detail: 'Maîtrise de la recherche vectorielle et de l’indexation sémantique sur MongoDB.',
  },
  {
    date: 'Sept 2026',
    title: 'Création d’applications RAG avec MongoDB',
    detail: 'Mise en place de architectures Retrieval-Augmented Generation robustes.',
  },
  {
    date: 'Août 2026',
    title: 'AWS SimuLearn - Architecte IA',
    detail: 'Validation des compétences en architecture Cloud et conception de solutions cloud orientées IA.',
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
  const reducedMotion = useReducedMotion()

  function handleContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Portfolio : ${formData.get('subject')}`)
    const body = encodeURIComponent(
      `Bonjour,\n\n${formData.get('message')}\n\n${formData.get('name')} · ${formData.get('email')}`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#accueil" aria-label="Retour à l'accueil">
          <span className="wordmark-symbol"><span /></span>
          <span>{profile.name}<small>INGÉNIEUR SYSTÈMES · GENAI</small></span>
        </a>
        <button
          className="menu-toggle icon-button"
          type="button"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navigation principale">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>
            Parlons-en <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="accueil" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="availability"><span className="availability-dot" /> PORTFOLIO · 2026</div>
            <p className="hero-kicker">SYSTÈMES INTELLIGENTS, CONÇUS AVEC INTENTION</p>
            <h1 id="hero-title">
              Ingénieur Systèmes <span>·</span><br />
              <em>IA Générative</em>
            </h1>
            <p className="hero-intro">
              Je transforme les possibilités des modèles génératifs en produits fiables, utiles et prêts à changer d’échelle.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projets">
                Voir les projets <ArrowUpRight size={17} />
              </a>
              <a className="text-link" href="#profil">
                Découvrir mon approche <ArrowDown size={15} />
              </a>
            </div>
            <div className="hero-meta">
              <span><Globe2 size={14} /> FR · EN</span>
              <span>DISPONIBLE</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="Illustration d'un système d'intelligence artificielle" role="img">
            <div className="visual-image" />
            <div className="visual-shade" />
            <div className="visual-label visual-label-top"><span className="signal-dot" /> SYSTEM ONLINE <span>05 / 38</span></div>
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="core-node"><Sparkles size={31} strokeWidth={1.2} /><span>GEN<br />AI</span></div>
            <div className="node node-a"><Database size={16} /><span>DATA</span></div>
            <div className="node node-b"><Workflow size={16} /><span>RAG</span></div>
            <div className="node node-c"><Cpu size={16} /><span>LLM</span></div>
            <div className="visual-caption"><span>01 — ARCHITECTURE</span><span>DES IDÉES AU SYSTÈME</span></div>
            <div className="visual-stamp">BUILT<br />TO THINK<span>↗</span></div>
          </div>
          <div className="hero-bottom">
            <span>01 — PROFIL</span><span>FAIRE ÉMERGER LE SIGNAL</span>
            <a href="#profil" aria-label="Défiler vers la section profil"><ArrowDown size={16} /></a>
          </div>
        </section>

        <section className="about section-wrap section-block" id="profil" aria-labelledby="about-title">
          <SectionHeading
            index="01"
            eyebrow="QUI JE SUIS"
            title="L’ingénierie au service d’idées utiles."
            description="Développeur et ingénieur spécialisé dans les architectures Cloud, l'IA générative et les systèmes robustes."
          />
          <div className="about-grid">
            <div className="about-statement">
              <p className="large-copy" id="about-title">
                Je relie <span>l’infrastructure</span>, les modèles et l’expérience produit pour construire une IA qui tient ses promesses.
              </p>
              <p className="body-copy">
                Basé à Cotonou, je conçois des solutions modernes en combinant le développement web avancé, le prompt engineering et les technologies Cloud/MLOps.
              </p>
              <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">
                Retrouver mon profil LinkedIn <ArrowUpRight size={15} />
              </a>
            </div>
            <div className="timeline-wrap">
              <div className="timeline-heading">
                <span>5 BADGES CERTIFIÉS CREDLY</span>
                <span>PARCOURS</span>
              </div>
              <div className="timeline">
                {timeline.map((item) => (
                  <article className="timeline-item" key={item.title}>
                    <span className="timeline-dot" />
                    <div>
                      <span className="timeline-date">{item.date}</span>
                      <h3>{item.title}</h3>
                      <p>{item.detail}</p>
                    </div>
                    <ChevronDown size={15} aria-hidden="true" />
                  </article>
                ))}
              </div>
              <p className="cert-note">
                <Check size={14} /> Certifications officielles : <a href={profile.credly} target="_blank" rel="noreferrer" style={{color: 'inherit', textDecoration: 'underline'}}>Profil Credly (5 badges, 38 compétences)</a>
              </p>
            </div>
          </div>
        </section>

        <section className="expertise section-block" id="expertises" aria-labelledby="expertise-title">
          <div className="section-wrap">
            <SectionHeading
              index="02"
              eyebrow="BOÎTE À OUTILS (38 COMPÉTENCES)"
              title="Du modèle à la mise en production."
              description="L'intégralité de mon portefeuille de compétences validées sur Credly pour livrer des systèmes IA robustes."
            />
            <div className="skills-grid" id="expertise-title">
              {skills.map(({ name, icon: Icon, category }) => (
                <div className="skill-row" key={name}>
                  <span className="skill-icon"><Icon size={19} strokeWidth={1.65} /></span>
                  <span className="skill-name">{name}</span>
                  <span className="skill-category">{category}</span>
                  <ArrowUpRight size={15} className="skill-arrow" />
                </div>
              ))}
            </div>
            <div className="expertise-foot">
              <span><Zap size={15} /> APPROCHE</span>
              <p>Clarté technique, expérimentation mesurée, impact observable.</p>
              <span>02 / 04</span>
            </div>
          </div>
        </section>

        <section className="projects section-wrap section-block" id="projets" aria-labelledby="projects-title">
          <SectionHeading
            index="03"
            eyebrow="TRAVAUX SÉLECTIONNÉS"
            title="Des systèmes, pas des démos jetables."
            description="Aperçu de mes réalisations techniques et de mes intégrations basées sur des cas d'usage réels."
          />
          <div className="project-list" id="projects-title">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <a className="project-image" href={project.href} target="_blank" rel="noreferrer" aria-label={`Voir le dépôt GitHub : ${project.title}`}>
                  <img src={project.image} alt={project.alt} loading="lazy" />
                  <span className="project-image-index">{project.number} / CONCEPT</span>
                  <span className="project-open"><ArrowUpRight size={21} /></span>
                </a>
                <div className="project-info">
                  <div className="project-type">{project.type}</div>
                  <div className="project-title-row">
                    <h3>{project.title}</h3>
                    <span>{project.number}</span>
                  </div>
                  <p>{project.description}</p>
                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
                    Dépôt GitHub <ArrowUpRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <a className="all-projects" href={profile.github} target="_blank" rel="noreferrer">
            <Braces size={17} /> Explorer tous les dépôts <ArrowRight size={16} />
          </a>
        </section>

        <section className="notes section-block" id="notes" aria-labelledby="notes-title">
          <div className="section-wrap">
            <SectionHeading
              index="04"
              eyebrow="CARNET DE BORD"
              title="Notes de terrain."
              description="Des formats courts sur le web, la recherche et les outils qui méritent qu’on les regarde de près."
            />
            <div className="notes-list" id="notes-title">
              {articles.map((article) => (
                <a href="#contact" className="note-row" key={article.number}>
                  <span className="note-number">{article.number}</span>
                  <span className="note-category">{article.category}</span>
                  <span className="note-content">
                    <strong>{article.title}</strong>
                    <span>{article.description}</span>
                  </span>
                  <span className="note-time">{article.readTime}</span>
                  <span className="note-arrow"><ArrowUpRight size={18} /></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="contact section-wrap section-block" id="contact" aria-labelledby="contact-title">
          <SectionHeading
            index="05"
            eyebrow="PRENDRE CONTACT"
            title="Construisons quelque chose de solide."
            description="Une idée, une équipe qui explore l’IA, ou simplement envie d’échanger ? Ma boîte mail est ouverte."
          />
          <div className="contact-grid">
            <div className="contact-direct">
              <span className="contact-overline"><span className="availability-dot" /> OUVERT AUX CONVERSATIONS</span>
              <a className="email-link" href={`mailto:${profile.email}`}>
                {profile.email}<ArrowUpRight size={20} />
              </a>
              <div className="social-links">
                <a href={profile.linkedin} target="_blank" rel="noreferrer"><Network size={16} /> LinkedIn <ArrowUpRight size={13} /></a>
                <a href={profile.github} target="_blank" rel="noreferrer"><Braces size={16} /> GitHub <ArrowUpRight size={13} /></a>
                <a href={profile.credly} target="_blank" rel="noreferrer"><Sparkles size={16} /> Credly <ArrowUpRight size={13} /></a>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleContact}>
              <label>Ton nom<input name="name" autoComplete="name" placeholder="Comment t’appelles-tu ?" required /></label>
              <label>Ton e-mail<input name="email" type="email" autoComplete="email" placeholder="toi@exemple.com" required /></label>
              <label>Sujet<input name="subject" placeholder="Le sujet de ton message" required /></label>
              <label>Ton message<textarea name="message" rows={3} placeholder="Quelques lignes suffisent…" required /></label>
              <button className="button button-dark" type="submit">
                Préparer l’e-mail <Send size={15} />
              </button>
              <span className="form-hint"><Mail size={13} /> Ouvre ton application e-mail, aucun message n’est stocké ici.</span>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="wordmark footer-brand" href="#accueil">
          <span className="wordmark-symbol"><span /></span>
          <span>{profile.name}<small>INGÉNIEUR SYSTÈMES · GENAI</small></span>
        </a>
        <span>FAIT AVEC CURIOSITÉ · 2026</span>
        <a className="back-top" href="#accueil">RETOUR EN HAUT <ArrowUpRight size={14} /></a>
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