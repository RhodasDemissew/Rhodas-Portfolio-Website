import React from 'react';
import ReactDOM from 'react-dom/client';
import { certifications, experience, profile, projects, recommendations, services } from './content';
import './styles.css';

const contactAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim();

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span>;
}

function SocialIcon({ kind }: { kind: 'github' | 'linkedin' }) {
  return kind === 'github' ? <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.12.68-3.78-1.33-3.78-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.68.08-.68 1.13.08 1.72 1.16 1.72 1.16 1 .1.59 2.1 2.3 2.4.88.15 1.7-.31 2.1-.6.1-.73.39-1.23.71-1.52-2.49-.28-5.1-1.25-5.1-5.54 0-1.22.44-2.22 1.15-3-.11-.28-.5-1.42.11-2.96 0 0 .94-.3 3.08 1.15a10.8 10.8 0 0 1 5.6 0c2.14-1.45 3.07-1.15 3.07-1.15.61 1.54.23 2.68.12 2.96.72.78 1.14 1.78 1.14 3.01 0 4.3-2.61 5.24-5.11 5.52.4.35.75 1.04.75 2.1v3.1c0 .3.21.65.77.54A11.2 11.2 0 0 0 12 .8Z" /></svg> : <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.45 2H3.55A1.55 1.55 0 0 0 2 3.55v16.9A1.55 1.55 0 0 0 3.55 22h16.9A1.55 1.55 0 0 0 22 20.45V3.55A1.55 1.55 0 0 0 20.45 2ZM8.04 18.7H4.76V9.1h3.28v9.6ZM6.4 7.78a1.9 1.9 0 1 1 0-3.8 1.9 1.9 0 0 1 0 3.8Zm12.3 10.92h-3.27v-4.67c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.75H8.82V9.1h3.14v1.31H12c.44-.83 1.5-1.56 3.1-1.56 3.32 0 3.6 2.18 3.6 5.01v4.84Z" /></svg>;
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [contactStatus, setContactStatus] = React.useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [preview, setPreview] = React.useState<{ src: string; alt: string; title: string } | null>(null);
  const previewDialog = React.useRef<HTMLDialogElement>(null);
  const closeMenu = () => setMenuOpen(false);
  React.useEffect(() => {
    const dialog = previewDialog.current;
    if (!dialog) return;
    if (preview && !dialog.open) dialog.showModal();
    if (!preview && dialog.open) dialog.close();
  }, [preview]);
  const handleContact = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!contactAccessKey) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const fullName = `${data.get('firstName')} ${data.get('lastName')}`.trim();
    setContactStatus('sending');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: contactAccessKey,
          name: fullName,
          email: data.get('email'),
          message: data.get('message'),
          subject: `Portfolio inquiry from ${fullName}`,
          botcheck: data.get('botcheck')
        })
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) throw new Error('Submission failed');
      form.reset();
      setContactStatus('sent');
    } catch {
      setContactStatus('error');
    }
  };

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <div className="container header-inner">
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close' : 'Menu'} <span aria-hidden="true">{menuOpen ? '×' : '+'}</span></button>
        <nav id="primary-nav" className={menuOpen ? 'nav open' : 'nav'} aria-label="Primary navigation">
          <a href="#work" onClick={closeMenu}>Work</a><a href="#services" onClick={closeMenu}>Services</a><a href="#experience" onClick={closeMenu}>Experience</a><a href="#about" onClick={closeMenu}>About</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Get in touch <Arrow diagonal /></a>
        </nav>
      </div>
    </header>

    <main id="main">
      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="hero-identity"><p className="hero-name">{profile.fullName}</p><p className="eyebrow">FULL-STACK DEVELOPER &middot; AI ENTHUSIAST &middot; ADDIS ABABA</p></div>
            <h1 id="hero-title">{profile.headline}</h1>
            <p className="hero-lede">I’m {profile.name}. I turn business and organizational needs into dependable web applications, APIs, and learning platforms.</p>
            <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <Arrow /></a><a className="text-link" href={profile.cv} target="_blank" rel="noopener noreferrer">View my CV <Arrow diagonal /></a></div>
            <div className="hero-bottom"><span className="availability-dot" /> Open to freelance work, ongoing support & collaboration</div>
          </div>
          <div className="hero-visual"><div className="portrait-frame"><img src={profile.portrait} alt="Portrait of Rhodas Demissew Tadesse" fetchPriority="high" /></div></div>
        </div>
      </section>

      <section className="intro section" id="about" aria-labelledby="intro-title"><div className="container intro-grid"><div><p className="section-kicker">ABOUT</p><h2 id="intro-title">Technology should make work feel simpler.</h2></div><div className="intro-body"><p>{profile.introduction}</p><p>I work across the stack, from data and APIs to the interfaces people rely on. I care about understanding the workflow first, then building a solution that fits it.</p><div className="skill-row" aria-label="Core technologies"><span>.NET & C#</span><span>Angular & React</span><span>Moodle</span><span>Node.js</span><span>SQL & MongoDB</span></div></div></div></section>

      <section className="work section" id="work" aria-labelledby="work-title"><div className="container"><div className="section-heading"><div><p className="section-kicker">SELECTED WORK</p><h2 id="work-title">Built for real workflows.</h2></div></div><div className="projects">{projects.map((project) => <article className="project" key={project.number}><button className="project-art" type="button" onClick={() => setPreview({ src: project.image, alt: project.imageAlt, title: project.title })} aria-label={`Preview full image of ${project.title}`}><img src={project.image} alt={project.imageAlt} loading="lazy" /><span className="image-hint">View full image <Arrow diagonal /></span></button><div className="project-copy"><div className="project-overline"><span>{project.number} / {project.category}</span></div><h3>{project.title}</h3><p className="project-role">{project.role}</p><p className="project-description">{project.description}</p><div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>{project.note && <p className="project-note">{project.note}</p>}{project.repository && <a className="project-repo" href={project.repository} target="_blank" rel="noopener noreferrer"><SocialIcon kind="github" /> View code on GitHub <Arrow diagonal /></a>}</div></article>)}</div><div className="work-footer"><p>Find more public work on GitHub.</p><a className="button button-primary github-button" href={`${profile.github}?tab=repositories`} target="_blank" rel="noopener noreferrer"><SocialIcon kind="github" /> Browse my code <Arrow diagonal /></a></div></div></section>

      <section className="services section" id="services" aria-labelledby="services-title"><div className="container"><div className="section-heading light"><div><p className="section-kicker">HOW I CAN HELP</p><h2 id="services-title">The right help, from build to upkeep.</h2></div></div><div className="service-grid">{services.map(service => <article className="service-card" key={service.number}><span>{service.number} /</span><h3>{service.title}</h3><p>{service.description}</p><span className="service-arrow" aria-hidden="true">↗</span></article>)}</div></div></section>

      <section className="experience section" id="experience" aria-labelledby="experience-title"><div className="container experience-grid"><div className="experience-heading"><p className="section-kicker">EXPERIENCE</p><h2 id="experience-title">Work shaped by the people who use it.</h2></div><div className="timeline">{experience.map(job => <article className="timeline-item" key={job.organization}><p className="timeline-period">{job.period}</p><h3>{job.role}</h3><p className="timeline-org">{job.organization}</p><p>{job.description}</p></article>)}</div></div></section>

      <section className="recommendations section" id="recommendations" aria-labelledby="recommendations-title"><div className="container recommendations-grid"><div><p className="section-kicker">RECOMMENDATIONS</p><h2 id="recommendations-title">In the words of people I’ve worked with.</h2><p>Read the full letters in Google Docs.</p></div><div className="recommendation-list">{recommendations.map(item => <a className="recommendation-link" key={item.source} href={item.url} target="_blank" rel="noopener noreferrer"><span><strong>{item.source}</strong><small>{item.context}</small></span><Arrow diagonal /></a>)}</div></div></section>

      <section className="education section" aria-labelledby="education-title"><div className="container education-grid"><div><p className="section-kicker">EDUCATION & CERTIFICATIONS</p><h2 id="education-title">A foundation to keep building on.</h2></div><div className="education-content"><div className="degree"><span className="small-label">EDUCATION</span><h3>BSc in Computer Science</h3><p>HiLCoE School of Computer Science & Technology</p><p>2021–2025 · GPA 3.52</p></div><div className="cert-list"><span className="small-label">CERTIFICATIONS</span><ul>{certifications.map(item => <li key={item.title}><a href={item.url} target="_blank" rel="noopener noreferrer">{item.title} <Arrow diagonal /></a></li>)}</ul></div></div></div></section>

      <section className="contact section" id="contact" aria-labelledby="contact-title"><div className="container contact-grid"><div className="contact-intro"><p className="section-kicker">CONTACT</p><h2 id="contact-title">Have a project in mind?<br /><em>Let’s make it useful.</em></h2><p>Tell me what you’re working on and what you’d like to improve.</p><div className="contact-call"><span>Prefer to talk?</span><span className="contact-phone">{profile.phone}</span></div><div className="contact-socials"><a href={profile.github} target="_blank" rel="noopener noreferrer"><SocialIcon kind="github" /> GitHub <Arrow diagonal /></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><SocialIcon kind="linkedin" /> LinkedIn <Arrow diagonal /></a></div></div><form className="contact-form" onSubmit={handleContact}><h3>Send an inquiry</h3><p>Enter your details and send your message directly from this page.</p><div className="form-row"><div className="form-field"><label htmlFor="first-name">First name</label><input id="first-name" name="firstName" autoComplete="given-name" required maxLength={80} /></div><div className="form-field"><label htmlFor="last-name">Last name</label><input id="last-name" name="lastName" autoComplete="family-name" required maxLength={80} /></div></div><div className="form-field"><label htmlFor="contact-email">Email address</label><input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={160} /></div><div className="form-field"><label htmlFor="contact-message">How can I help?</label><textarea id="contact-message" name="message" rows={5} required minLength={10} maxLength={3000} /></div><div className="form-honeypot" aria-hidden="true"><label htmlFor="contact-website">Leave this field empty</label><input id="contact-website" name="botcheck" tabIndex={-1} autoComplete="off" /></div><button className="button button-primary" type="submit" disabled={!contactAccessKey || contactStatus === 'sending'}>{contactStatus === 'sending' ? 'Sending...' : 'Send email'} <Arrow /></button><p className="form-status" role="status" aria-live="polite">{contactStatus === 'sent' ? 'Message sent. Thanks for reaching out!' : contactStatus === 'error' ? 'The message could not be sent. Please try again or call me.' : !contactAccessKey ? 'The contact form is being set up. Please call me for now.' : ''}</p></form></div></section>
    </main>
    <dialog className="image-dialog" ref={previewDialog} onClose={() => setPreview(null)} onClick={event => { if (event.target === previewDialog.current) previewDialog.current?.close(); }} aria-label={preview ? `Image preview: ${preview.title}` : 'Image preview'}>
      {preview && <div className="image-dialog-inner"><div className="image-dialog-bar"><strong>{preview.title}</strong><button type="button" onClick={() => previewDialog.current?.close()} aria-label="Close image preview">Close ×</button></div><img src={preview.src} alt={preview.alt} /></div>}
    </dialog>
    <footer className="footer"><div className="container footer-inner"><span>© {new Date().getFullYear()} {profile.name}</span><span>Built with care in Addis Ababa.</span><a href="#top">Back to top ↑</a></div></footer>
  </>;
}

ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
