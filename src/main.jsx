import React, { useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const copy = {
  it: {
    nav: ['Profilo', 'Esperienza', 'Progetti', 'Contatto'],
    lang: 'EN',
    eyebrow: 'Pierluigi Rizzu · Full-stack developer',
    hero: 'Interfacce precise, sistemi solidi.',
    profile: 'Software che funziona. E basta.',
    intro:
      'Costruisco prodotti web con attenzione alla stabilità, alla leggibilità del codice e alla qualità dell’esperienza utente. Poche promesse, molta esecuzione.',
    cta: 'Scrivimi',
    secondary: 'Vedi i progetti',
    profileTitle: 'Profilo',
    profileBody:
      'Lavoro tra prodotto, frontend e backend: definisco interfacce pulite, integro sistemi reali e porto ordine dove il software deve reggere nel tempo.',
    principles: ['Chiarezza prima dell’effetto', 'Codice mantenibile', 'Automazioni utili', 'Consegna verificata'],
    expTitle: 'Esperienza',
    projectsTitle: 'Progetti',
    contactTitle: 'Contatto',
    contactBody:
      'Disponibile per prodotti web, automazioni operative e sistemi interni dove precisione e affidabilità contano più del rumore.',
    mail: 'pierluigi.rizzu@gmail.com',
    footer: 'Portfolio essenziale, bilingue, costruito con React e Vite.',
  },
  en: {
    nav: ['Profile', 'Experience', 'Projects', 'Contact'],
    lang: 'IT',
    eyebrow: 'Pierluigi Rizzu · Full-stack developer',
    hero: 'Precise interfaces, solid systems.',
    profile: 'Software that works. Full stop.',
    intro:
      'I build web products with care for stability, readable code and user experience quality. Few promises, solid execution.',
    cta: 'Email me',
    secondary: 'View projects',
    profileTitle: 'Profile',
    profileBody:
      'I work across product, frontend and backend: clear interfaces, real integrations and structure for software that must last.',
    principles: ['Clarity before effect', 'Maintainable code', 'Useful automation', 'Verified delivery'],
    expTitle: 'Experience',
    projectsTitle: 'Projects',
    contactTitle: 'Contact',
    contactBody:
      'Available for web products, operational automation and internal systems where precision and reliability matter more than noise.',
    mail: 'pierluigi.rizzu@gmail.com',
    footer: 'Essential bilingual portfolio, built with React and Vite.',
  },
}

const experience = [
  { period: '2023—oggi', role: 'Exagon Salon', text: { it: 'Sviluppo prodotto, interfacce operative e integrazioni per workflow salon.', en: 'Product development, operational interfaces and integrations for salon workflows.' } },
  { period: '2022—2023', role: 'Freelance', text: { it: 'Siti, strumenti interni e automazioni per clienti con esigenze concrete.', en: 'Websites, internal tools and automation for clients with practical needs.' } },
  { period: '2019—2022', role: 'Ars Digitalia', text: { it: 'Frontend, backend e manutenzione di piattaforme web su progetti continuativi.', en: 'Frontend, backend and maintenance of web platforms across ongoing projects.' } },
  { period: '2019', role: 'Datbrain', text: { it: 'Prime esperienze su dati, applicazioni web e basi di integrazione.', en: 'Early work on data, web applications and integration foundations.' } },
]

const projects = [
  { name: 'Colorami', stack: ['React', 'Vite', 'CSS', 'UX'], desc: { it: 'Esperienza digitale orientata alla scelta colore, con percorso semplice e contenuto chiaro.', en: 'Digital experience for colour choice, with a simple path and clear content.' } },
  { name: 'ExagonPlus', stack: ['React', 'Node', 'API', 'Automation'], desc: { it: 'Strumenti per processi salon: interfacce pratiche, dati leggibili e operazioni affidabili.', en: 'Tools for salon processes: practical interfaces, readable data and reliable operations.' } },
  { name: 'Ambrosetti Forum', stack: ['Frontend', 'CMS', 'Performance'], desc: { it: 'Supporto web per contenuti ad alta visibilità, con attenzione a stabilità e tempi di caricamento.', en: 'Web support for high-visibility content, focused on stability and loading speed.' } },
  { name: 'RotarApp', stack: ['Mobile-first', 'Backend', 'Auth'], desc: { it: 'Applicazione con flussi ordinati, accessi gestiti e struttura pensata per uso ricorrente.', en: 'Application with ordered flows, managed access and a structure built for repeated use.' } },
  { name: 'Axios RE', stack: ['React', 'Data', 'Integration'], desc: { it: 'Interfacce per consultare informazioni immobiliari e rendere i passaggi operativi più lineari.', en: 'Interfaces for real-estate information and smoother operational steps.' } },
]

function App() {
  const [lang, setLang] = useState('it')
  const t = copy[lang]
  const ids = useMemo(() => ['profile', 'experience', 'projects', 'contact'], [])

  return (
    <>
      <header className="site-header" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Pierluigi Rizzu home">PR</a>
        <nav>
          {t.nav.map((item, index) => <a key={item} href={`#${ids[index]}`}>{item}</a>)}
        </nav>
        <button className="lang" type="button" onClick={() => setLang(lang === 'it' ? 'en' : 'it')} aria-label="Change language">{t.lang}</button>
      </header>

      <main id="top">
        <section className="hero section" aria-labelledby="hero-title">
          <div className="hero-copy reveal">
            <p className="eyebrow">{t.eyebrow}</p>
            <h1 id="hero-title">{t.hero}</h1>
          </div>
          <div className="hero-panel reveal" aria-label="Professional summary">
            <p className="profile-line">{t.profile}</p>
            <p>{t.intro}</p>
            <div className="actions">
              <a className="button primary" href={`mailto:${t.mail}`}>{t.cta}</a>
              <a className="button secondary" href="#projects">{t.secondary}</a>
            </div>
          </div>
        </section>

        <section id="profile" className="section split" aria-labelledby="profile-title">
          <h2 id="profile-title">{t.profileTitle}</h2>
          <div>
            <p className="lead">{t.profileBody}</p>
            <ul className="principles" aria-label="Working principles">
              {t.principles.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>

        <section id="experience" className="section" aria-labelledby="experience-title">
          <div className="section-heading"><h2 id="experience-title">{t.expTitle}</h2></div>
          <div className="timeline">
            {experience.map((job) => (
              <article className="timeline-row" key={job.role}>
                <time>{job.period}</time>
                <div><h3>{job.role}</h3><p>{job.text[lang]}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section" aria-labelledby="projects-title">
          <div className="section-heading"><h2 id="projects-title">{t.projectsTitle}</h2></div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project" key={project.name}>
                <div><h3>{project.name}</h3><p>{project.desc[lang]}</p></div>
                <ul className="stack" aria-label={`${project.name} tech stack`}>
                  {project.stack.map((tech) => <li key={tech}>{tech}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact" aria-labelledby="contact-title">
          <p className="eyebrow">{t.contactTitle}</p>
          <h2 id="contact-title">{t.contactBody}</h2>
          <a className="button primary" href={`mailto:${t.mail}`}>{t.mail}</a>
        </section>
      </main>

      <footer>{t.footer}</footer>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
