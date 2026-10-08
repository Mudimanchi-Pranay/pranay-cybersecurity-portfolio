import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Activity, ArrowDownRight, ArrowUpRight, Award, BrainCircuit, CheckCircle2, ChevronDown,
  CircleDot, Cloud, Code2, Cpu, Download, ExternalLink, FileText, Github, GraduationCap,
  Linkedin, LockKeyhole, Mail, MapPin, Network, Phone, Radar, Search, Server, Shield,
  ShieldAlert, ShieldCheck, Siren, Terminal, UserRound, Wifi, X, Menu
} from "lucide-react";
import "./styles.css";

gsap.registerPlugin(ScrollTrigger);

const profile = {
  name: "Pranay Kumar",
  shortName: "M. PRANAY",
  title: "Cybersecurity Analyst",
  focus: "SOC Operations • SIEM • Incident Response • Threat Detection",
  location: "Hyderabad, India",
  phone: "+91 7893345457",
  email: "pranaymudimanchi@gmail.com",
  linkedin: "https://www.linkedin.com/in/pranay4638/",
  github: "https://github.com/Mudimanchi-Pranay",
  summary:
    "CompTIA Security+ certified cybersecurity graduate with hands-on internship experience across SOC operations, alert investigation, phishing analysis, network traffic, Windows Event Logs, IOC validation and incident response.",
};

const experiences = [
  {
    period: "AUG 2025 — JAN 2026", role: "Cyber Security Analyst Intern", company: "Veltrixis Technologies Private Limited", location: "Hyderabad",
    metric: "30+", metricLabel: "alerts / week",
    bullets: [
      "Investigated 30+ security alerts per week using SIEM tools, Windows Event Logs and network traffic.",
      "Investigated phishing, brute-force, malware, DoS/DDoS, XSS and policy-violation incidents.",
      "Refined alert triage, incident workflows and documentation/playbooks to improve SOC efficiency."
    ]
  },
  {
    period: "DEC 2024 — MAY 2025", role: "Cyber Security Analyst Intern", company: "Ramana Soft", location: "Hyderabad",
    metric: "50+", metricLabel: "alerts investigated",
    bullets: [
      "Investigated 50+ security alerts and performed phishing email analysis.",
      "Analyzed Windows Event Logs and network traffic to support incident investigations.",
      "Assisted with incident response, threat intelligence validation, IOC analysis and remediation."
    ]
  },
  {
    period: "DEC 2023 — FEB 2024", role: "Cybersecurity Intern", company: "Palo Alto Networks — AICTE", location: "Remote",
    metric: "LAB", metricLabel: "security foundations",
    bullets: [
      "Performed structured vulnerability scans and basic penetration-testing labs.",
      "Identified common web and network security weaknesses and suggested remediation steps.",
      "Completed guided labs covering firewall fundamentals, network security and access control."
    ]
  }
];

const projects = [
  {
    number: "01", type: "THREAT DETECTION ENVIRONMENT", title: "SOC Home Lab", icon: Radar,
    text: "Built a practical SOC simulation using pfSense, Sysmon and CrowdSec. Simulated brute-force and malicious-traffic scenarios and analyzed telemetry for suspicious activity.",
    tags: ["pfSense", "Sysmon", "CrowdSec", "Threat Hunting", "MITRE ATT&CK"],
    status: "OPERATIONAL"
  },
  {
    number: "02", type: "SIEM INVESTIGATION", title: "Splunk Security Log Analysis", icon: Search,
    text: "Ingested SSH, DNS and HTTP logs into Splunk, developed SPL queries for suspicious login attempts and abnormal network activity, and created dashboards for investigations.",
    tags: ["Splunk", "SPL", "SSH", "DNS", "HTTP"], status: "ANALYSIS READY"
  },
  {
    number: "03", type: "IOT INTRUSION DETECTION", title: "Hybrid CNN + LSTM IDS", icon: BrainCircuit,
    text: "Developed a deep-learning intrusion detection model combining CNN and LSTM architectures for IoT attack classification, supported by preprocessing and feature engineering.",
    tags: ["CNN", "LSTM", "IoT", "IDS", "Feature Engineering"], status: "MODEL PIPELINE"
  },
  {
    number: "04", type: "AI SOC INVESTIGATION ENGINE", title: "MemorySOC — Hindsight", icon: BrainCircuit,
    text: "Developed an AI-powered SOC investigation engine using FastAPI, Hindsight, PostgreSQL and CICIDS2017 to analyze security events and retain investigation knowledge as persistent organizational memory.",
    tags: ["FastAPI", "Hindsight", "PostgreSQL", "CICIDS2017", "AI SOC"], status: "MEMORY ENABLED",
    link: "https://github.com/Mudimanchi-Pranay/MemorySOC-Hindsight"
  }
];

const skillGroups = [
  ["SIEM & SECURITY", ["Splunk / SPL", "IBM QRadar", "Wazuh", "TheHive", "Wireshark", "Kali Linux", "Sysmon"]],
  ["SOC OPERATIONS", ["Security Monitoring", "Alert Triage", "Incident Investigation", "Phishing Analysis", "Malware Investigation", "IOC Extraction", "Threat Hunting"]],
  ["NETWORKING", ["TCP/IP", "DNS", "DHCP", "Firewalls", "Network Troubleshooting"]],
  ["SECURITY FRAMEWORKS", ["MITRE ATT&CK", "Vulnerability Assessment", "Endpoint Security", "Cloud Security Fundamentals"]],
  ["PROGRAMMING & QUERY", ["Python", "SQL", "SPL"]],
  ["CORE SECURITY", ["Incident Response", "Threat Intelligence", "Log Analysis", "Security Documentation"]]
];

const certifications = [
  ["CompTIA Security+", "SY0-701", "PRIMARY CERTIFICATION"],
  ["Certified Cybersecurity Educator Professional", "CCEP", "CERTIFICATION"],
  ["LetsDefend SOC Analyst Path", "SOC", "PRACTICAL PATH"],
  ["LetsDefend SIEM Engineering Path", "SIEM", "PRACTICAL PATH"],
  ["Foundations of Cybersecurity", "Google", "COURSE"],
  ["Networking Fundamentals", "Cisco Networking Academy", "COURSE"],
  ["Fundamentals of Cybersecurity", "EDU-102 • Zscaler Academy", "COURSE"]
];

const investigations = [
  ["01", "PHISHING", "Email analysis, suspicious indicators and IOC validation."],
  ["02", "BRUTE FORCE", "Authentication telemetry and suspicious login investigation."],
  ["03", "MALWARE", "Alert triage, evidence review and response support."],
  ["04", "NETWORK", "Traffic analysis across DNS, HTTP and other network telemetry."],
  ["05", "DOS / DDOS", "Detection scenarios and suspicious traffic analysis."],
  ["06", "WEB SECURITY", "XSS and policy-violation investigation scenarios."]
];

function App() {
  const page = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [portraitVerified, setPortraitVerified] = useState(false);
  const [portraitScanComplete, setPortraitScanComplete] = useState(false);
  const [portraitNameVisible, setPortraitNameVisible] = useState(false);
  const [portraitStatusVisible, setPortraitStatusVisible] = useState(false);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // The scan completes at ~3.05s; reveal the caption area immediately after it.
    // One-time identity sequence: scan → PRANAY → IDENTITY VERIFIED → ambient glow.
    const scanTimer = window.setTimeout(() => setPortraitScanComplete(true), 2850);
    const nameTimer = window.setTimeout(() => setPortraitNameVisible(true), 3000);
    const statusTimer = window.setTimeout(() => {
      setPortraitStatusVisible(true);
      setPortraitVerified(true);
    }, 3650);
    return () => {
      window.clearTimeout(scanTimer);
      window.clearTimeout(nameTimer);
      window.clearTimeout(statusTimer);
    };
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nav", { y: -25, opacity: 0, duration: .8, ease: "power3.out" });
      gsap.from(".hero-console", { y: 30, opacity: 0, duration: 1, delay: .15, ease: "power3.out" });
      gsap.from(".hero-title .line", { yPercent: 110, opacity: 0, duration: 1.05, stagger: .1, delay: .25, ease: "power4.out" });
      gsap.from(".hero-copy, .hero-actions, .hero-meta", { y: 20, opacity: 0, duration: .75, stagger: .08, delay: .55 });
      gsap.from(".hero-profile", { x: 60, opacity: 0, duration: 1, delay: .35, ease: "power3.out" });
      gsap.to(".signal-dot", { opacity: .25, duration: .8, repeat: -1, yoyo: true, stagger: .12 });
      gsap.to(".ambient-one", { x: -100, y: 50, duration: 9, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".ambient-two", { x: 80, y: -70, duration: 11, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.fromTo(el, { y: 42, opacity: 0 }, { y: 0, opacity: 1, duration: .8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", once: true } });
      });
      gsap.utils.toArray(".stagger-card").forEach((el, i) => {
        gsap.fromTo(el, { y: 28, opacity: 0, rotateX: 5 }, { y: 0, opacity: 1, rotateX: 0, duration: .75, delay: i * .08, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 90%", once: true } });
      });
      gsap.to(".grid-drift", { backgroundPosition: "100px 100px", duration: 18, repeat: -1, ease: "none" });

      const move = (e) => {
        const x = (e.clientX / window.innerWidth - .5) * 2;
        const y = (e.clientY / window.innerHeight - .5) * 2;
        gsap.to(".cursor-glow", { x: e.clientX, y: e.clientY, duration: .35, ease: "power2.out" });
        gsap.to(".hero-art", { x: x * 12, y: y * 9, duration: .8, ease: "power3.out" });
      };
      window.addEventListener("pointermove", move);

      const target = document.querySelector(".hero-console");
      const tilt = (e) => {
        if (!target || window.innerWidth < 900) return;
        const r = target.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        gsap.to(target, { rotateY: (px - .5) * 5, rotateX: (.5 - py) * 4, duration: .35, ease: "power2.out" });
      };
      const resetTilt = () => gsap.to(target, { rotateY: -2, rotateX: 0, duration: .6, ease: "power3.out" });
      target?.addEventListener("pointermove", tilt);
      target?.addEventListener("pointerleave", resetTilt);

      return () => {
        window.removeEventListener("pointermove", move);
        target?.removeEventListener("pointermove", tilt);
        target?.removeEventListener("pointerleave", resetTilt);
      };
    }, page);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={page} className="site">
      <div className="cursor-glow" aria-hidden="true"></div>
      <div className="global-scanlines" aria-hidden="true"></div>
      <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
      <header className="nav">
        <button className="brand" onClick={() => scrollTo("top")}><span className="brand-mark">PK</span><span>PRANAY <i>/</i> CYBER SECURITY</span></button>
        <nav className={menuOpen ? "mobile-open" : ""}>
          {[["about"],["experience"],["projects"],["skills"],["certifications"],["contact"]].map(([id]) => <button key={id} onClick={() => scrollTo(id)}>{id}</button>)}
        </nav>
        <div className="nav-right">
          <a className="icon-link" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/></a>
          <a className="icon-link" href={profile.github} target="_blank" rel="noreferrer"><Github size={16}/></a>
          <button className="nav-cta" onClick={() => scrollTo("contact")}>CONTACT <ArrowUpRight size={15}/></button>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
        </div>
      </header>

      <div className="intel-ticker"><div className="ticker-track"><span>INCIDENT RESPONSE</span><b>✦</b><span className="ticker-cyan">THREAT DETECTION</span><b>✦</b><span>PHISHING ANALYSIS</span><b>✦</b><span className="ticker-violet">IOC VALIDATION</span><b>✦</b><span>NETWORK SECURITY</span><b>✦</b><span className="ticker-green">SOC OPERATIONS</span><b>✦</b><span>INCIDENT RESPONSE</span><b>✦</b><span className="ticker-cyan">THREAT DETECTION</span><b>✦</b><span>PHISHING ANALYSIS</span><b>✦</b><span className="ticker-violet">IOC VALIDATION</span><b>✦</b><span>NETWORK SECURITY</span><b>✦</b><span className="ticker-green">SOC OPERATIONS</span><b>✦</b></div></div>

      <main>
        <section id="top" className="hero section grid-drift">
          <div className="hero-art" aria-hidden="true"><span className="grid-cross cross-a"></span><span className="grid-cross cross-b"></span><span className="grid-cross cross-c"></span><span className="data-stream ds-a">01010110 101011 001101</span><span className="data-stream ds-b">IOC // SIEM // IR // ATT&amp;CK</span></div>
          <div className="hero-grid">
            <div className="hero-left">
              <div className="system-line"><span className="status-dot"></span> SECURE SESSION / ANALYST ACCESS GRANTED</div>
              <div className="hero-role">SOC ANALYST <span>•</span> SIEM <span>•</span> INCIDENT RESPONSE <span>•</span> THREAT HUNTING</div>
              <h1 className="hero-title"><span className="line">Cybersecurity</span><span className="line">analyst <em>focused</em></span><span className="line">on <em>SOC operations.</em></span></h1>
              <p className="hero-copy">{profile.summary}</p>
              <div className="hero-actions"><button className="primary-btn" onClick={() => scrollTo("projects")}>ENTER OPERATIONS <ArrowDownRight size={17}/></button><a className="secondary-btn" href="/Pranay-Kumar-CV.pdf" download><Download size={16}/> RESUME</a></div>
              <div className="hero-meta"><span><MapPin size={14}/> {profile.location}</span><span><ShieldCheck size={14}/> SECURITY+ CERTIFIED</span><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={14}/> LINKEDIN</a><a href={profile.github} target="_blank" rel="noreferrer"><Github size={14}/> GITHUB</a></div><div className="hero-proof"><span><b>3</b> INTERNSHIPS</span><span><b>50+</b> ALERTS</span><span><b>100+</b> LETSDEFEND CASES</span><span><b>IEEE</b> AUTHOR</span></div>
            </div>

            <div className="hero-right">
              <div className="hero-visual" aria-label="Pranay Kumar cybersecurity analyst portrait">
                <div className={`portrait-glow${portraitVerified ? " is-active" : ""}`} aria-hidden="true"></div>
                <div className="portrait-particles" aria-hidden="true">{Array.from({length:18},(_,i)=><i key={i} style={{"--i":i}} />)}</div>
                <div className={`portrait-card${portraitVerified ? " is-verified" : ""}`}>
                  <div className="portrait-image-frame">
                    <img className="portrait-image" src="/pranay-cutout.png" alt="Pranay Kumar" />
                    <span className="portrait-scan" aria-hidden="true"></span>
                    <span className="scan-corner scan-corner-tl" aria-hidden="true"></span><span className="scan-corner scan-corner-br" aria-hidden="true"></span>
                  </div>
                </div>
                <div className={`portrait-caption${portraitScanComplete ? " is-revealed" : ""}`}>
                  <strong className={portraitNameVisible ? "is-visible" : ""}>PRANAY</strong>
                  <span className={`auth-status${portraitStatusVisible ? " is-visible" : ""}`}><i></i><b>IDENTITY VERIFIED</b></span>
                </div>
              </div>
            </div>
          </div>
          <div className="scroll-cue"><ChevronDown size={14}/> SCROLL TO INVESTIGATE</div>
        </section>

        <section className="metrics-strip"><div><Activity/><span>MONITORING</span><strong>ACTIVE</strong></div><div><ShieldAlert/><span>ALERTS</span><strong>50+</strong></div><div><Terminal/><span>SIEM</span><strong>3+ STACK</strong></div><div><GraduationCap/><span>DEGREE</span><strong>B.TECH</strong></div><div><Wifi/><span>AVAILABILITY</span><strong>OPEN</strong></div></section>

        <section id="about" className="section split-section">
          <div className="section-label reveal">01 / ABOUT</div>
          <div className="section-content reveal"><div className="micro-label">ANALYST PROFILE / 2026</div><h2>Security mindset.<br/><span>Hands-on execution.</span></h2><p className="lead">I build my cybersecurity profile around the work a SOC analyst actually does: monitor, triage, investigate, validate evidence and support response.</p><p>My experience includes security alert investigation, Windows Event Log analysis, network traffic analysis, phishing investigation, IOC validation, threat intelligence and incident-response support. Alongside internships, I build practical security labs and detection workflows to turn concepts into repeatable investigations.</p><div className="about-grid"><div><strong>8.37</strong><span>B.TECH CGPA</span></div><div><strong>3</strong><span>SECURITY INTERNSHIPS</span></div><div><strong>50+</strong><span>ALERTS INVESTIGATED</span></div><div><strong>100+</strong><span>LETSDEFEND INVESTIGATIONS</span></div></div></div>
        </section>

        <section className="section dark-panel"><div className="section-head reveal"><div className="section-label">01A / OPERATIONS</div><h2>How I <span>approach</span> an alert.</h2><p>A practical investigation flow built around evidence, context and response.</p></div><div className="ops-flow">{[["01","DETECT","Receive alert / identify signal",Radar],["02","TRIAGE","Validate severity & context",Search],["03","INVESTIGATE","Correlate logs, traffic & IOCs",Terminal],["04","RESPOND","Document, contain & support remediation",ShieldCheck]].map(([n,t,d,I])=><article className="ops-step stagger-card" key={n}><span>{n}</span><I/><h3>{t}</h3><p>{d}</p></article>)}</div></section>

        <section id="experience" className="section"><div className="section-head reveal"><div className="section-label">02 / EXPERIENCE</div><h2>Where I’ve <span>investigated.</span></h2><p>Internship experience spanning SOC analysis, incident investigation and security foundations.</p></div><div className="experience-list">{experiences.map((exp,i)=><article className="experience-card reveal" key={exp.company}><div className="exp-index">{String(i+1).padStart(2,"0")}</div><div className="exp-main"><div className="period">{exp.period}</div><h3>{exp.role}</h3><div className="company">{exp.company} <span>•</span> {exp.location}</div><ul>{exp.bullets.map(b=><li key={b}><CheckCircle2 size={14}/>{b}</li>)}</ul></div><div className="exp-metric"><strong>{exp.metric}</strong><span>{exp.metricLabel}</span></div></article>)}</div></section>

        <section className="section dark-panel"><div className="section-head reveal"><div className="section-label">02A / CASE TYPES</div><h2>Threats I’ve <span>worked around.</span></h2></div><div className="investigation-grid">{investigations.map(([n,t,d])=><article className="investigation-card stagger-card" key={n}><span>{n}</span><ShieldAlert size={18}/><h3>{t}</h3><p>{d}</p></article>)}</div></section>

        <section className="section featured-project-section"><div className="featured-project reveal"><div className="featured-project-main"><div className="section-label">FEATURED / MEMORYSOC</div><div className="featured-kicker"><span className="status-dot"></span> AI SOC INVESTIGATION ENGINE</div><h2>MemorySOC <span>— Hindsight</span></h2><p>Turn security alerts into investigations with persistent memory. MemorySOC combines FastAPI, Hindsight, PostgreSQL and CICIDS2017 to retain investigation context and help analysts reason from previous cases.</p><div className="featured-flow"><div><small>ALERT</small><strong>Detect</strong></div><i>→</i><div><small>CONTEXT</small><strong>Recall</strong></div><i>→</i><div><small>ANALYSIS</small><strong>Investigate</strong></div><i>→</i><div><small>MEMORY</small><strong>Learn</strong></div></div><div className="featured-tags"><span>FastAPI</span><span>Hindsight</span><span>PostgreSQL</span><span>CICIDS2017</span><span>AI SOC</span></div><div className="featured-actions"><a className="primary-btn" href="https://github.com/Mudimanchi-Pranay/MemorySOC-Hindsight" target="_blank" rel="noreferrer">VIEW PROJECT <Github size={15}/></a><button className="secondary-btn" onClick={() => scrollTo("projects")}>ALL PROJECTS <ArrowDownRight size={15}/></button></div></div><div className="featured-project-side"><div className="memory-orbit"><div className="memory-core"><BrainCircuit size={30}/><strong>MEMORY</strong><small>SOC ENGINE</small></div><span className="memory-ring ring-a"></span><span className="memory-ring ring-b"></span><span className="memory-node node-a">ALERTS</span><span className="memory-node node-b">CONTEXT</span><span className="memory-node node-c">IOC</span></div></div></div></section>

        <section id="projects" className="section project-section"><div className="section-head reveal"><div className="section-label">03 / PROJECTS</div><h2>Built to <span>detect.</span></h2><p>Hands-on projects combining defensive security, SIEM analysis and machine-learning based intrusion detection.</p></div><div className="projects-grid">{projects.map(p=>{const I=p.icon; return <article className="project-card stagger-card" key={p.number}><div className="project-top"><span>{p.number}</span><I size={23}/></div><div className="project-status"><span className="status-dot"/>{p.status}</div><div className="project-type">{p.type}</div><h3>{p.title}</h3><p>{p.text}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div><div className="project-footer"><span>CASE FILE / {p.number}</span>{p.link ? <a href={p.link} target="_blank" rel="noreferrer" className="project-link">VIEW GITHUB <ArrowUpRight size={15}/></a> : <ArrowUpRight size={16}/>}</div></article>})}</div></section>

        <section className="section lab-section"><div className="lab-visual reveal"><div className="lab-top"><span><Server size={15}/> SOC HOME LAB</span><b>ENVIRONMENT ONLINE</b></div><div className="lab-screen"><div className="lab-grid-lines"/><div className="network-lines"><span/><span/><span/><span/><span/></div><div className="lab-core"><Shield size={32}/><strong>DEFENSE</strong><small>TELEMETRY CORE</small></div>{[["PFSENSE","FIREWALL",12,28],["SYSMON","ENDPOINT",68,20],["CROWDSEC","DEFENSE",78,64],["SPLUNK","SIEM",20,70]].map(([a,b,x,y])=><div className="lab-node" style={{left:`${x}%`,top:`${y}%`}} key={a}><i/><strong>{a}</strong><small>{b}</small></div>)}</div></div><div className="lab-copy reveal"><div className="section-label">03A / HOME LAB</div><h2>A small <span>SOC</span> that behaves like a big workflow.</h2><p>Practical environments help demonstrate how alerts move from telemetry to investigation. The lab combines firewall, endpoint, detection and SIEM concepts into repeatable scenarios.</p><div className="lab-tags"><span>pfSense</span><span>Sysmon</span><span>CrowdSec</span><span>Splunk</span><span>MITRE ATT&CK</span></div></div></section>

        <section id="skills" className="section"><div className="section-head reveal"><div className="section-label">04 / TOOLKIT</div><h2>Tools, <span>skills & methods.</span></h2><p>The security stack and practical capabilities I use across investigations and projects.</p></div><div className="skills-grid">{skillGroups.map(([name,items])=><article className="skill-group stagger-card" key={name}><div className="skill-head"><span>{name}</span><Code2 size={16}/></div><div className="skill-list">{items.map(item=><span key={item}>{item}</span>)}</div></article>)}</div></section>

        <section id="certifications" className="section dark-panel"><div className="section-head reveal"><div className="section-label">05 / CREDENTIALS</div><h2>Proof of <span>learning.</span></h2><p>Certifications and structured learning paths that support the practical work shown across the portfolio.</p></div><div className="cert-grid">{certifications.map(([name,issuer,type],i)=><article className="cert-card stagger-card" key={name}><span className="cert-number">{String(i+1).padStart(2,"0")}</span><ShieldCheck size={20}/><small>{type}</small><h3>{name}</h3><p>{issuer}</p></article>)}</div></section>

        <section className="section education-section"><div className="section-label reveal">06 / EDUCATION</div><div className="education-card reveal"><div><div className="period">OCT 2022 — MAY 2026</div><h2>B.Tech in Computer Science & Engineering</h2><p>Cyber Security · Institute of Aeronautical Engineering</p><div className="education-tags"><span>CYBER SECURITY</span><span>COMPUTER SCIENCE</span><span>2026 GRADUATE</span></div></div><div className="grade"><strong>8.37</strong><span>CGPA</span></div></div><div className="award reveal"><Award size={22}/><div><strong>Best Paper Award</strong><span>“AI Strategies for Sustainable Management and Practices” · ICCSCP 2024</span></div></div><div className="award reveal"><Award size={22}/><div><strong>IEEE Conference Author</strong><span>“An Improved Hybrid Algorithm for Cyberattack Detection from IOT Environment” · IEEE ACROSET 2026</span></div></div></section>

        <section className="section recruiter-section"><div className="section-head reveal"><div className="section-label">07 / RECRUITER VIEW</div><h2>Everything you need<br/><span>in one place.</span></h2></div><div className="recruiter-grid"><div className="recruiter-card reveal"><UserRound/><small>ROLE TARGET</small><strong>SOC Analyst</strong><span>Cybersecurity Analyst · Security Operations · Incident Response</span></div><div className="recruiter-card reveal"><Shield/><small>PRIMARY STRENGTHS</small><strong>Detection & Investigation</strong><span>SIEM · alert triage · log analysis · phishing · IOC analysis</span></div><div className="recruiter-card reveal"><FileText/><small>DOCUMENTS</small><strong>Resume ready</strong><span>Download the current CV directly from the portfolio.</span><a href="/Pranay-Kumar-CV.pdf" download>DOWNLOAD CV <Download size={14}/></a></div></div></section>

        <section id="contact" className="contact-section"><div className="contact-bg"><div/><div/><div/></div><div className="section contact-inner"><div className="section-label reveal">08 / CONTACT</div><div className="contact-grid"><div className="reveal"><div className="system-line"><span className="status-dot"/> CHANNEL OPEN</div><h2>Let’s secure<br/><em>what matters.</em></h2><p>Open to cybersecurity analyst, SOC and security operations opportunities.</p><div className="contact-buttons"><a className="primary-btn" href={`mailto:${profile.email}`}>START A CONVERSATION <ArrowUpRight size={16}/></a><a className="secondary-btn" href={profile.linkedin} target="_blank" rel="noreferrer">LINKEDIN <ExternalLink size={15}/></a></div></div><div className="contact-links reveal"><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin/><span>LinkedIn / pranay4638</span><ArrowUpRight/></a><a href={profile.github} target="_blank" rel="noreferrer"><Github/><span>GitHub / Mudimanchi-Pranay</span><ArrowUpRight/></a><a href={`mailto:${profile.email}`}><Mail/><span>{profile.email}</span><ArrowUpRight/></a><a href={`tel:${profile.phone}`}><Phone/><span>{profile.phone}</span><ArrowUpRight/></a><div><MapPin/><span>{profile.location}</span></div></div></div></div></section>
      </main>
      <footer><span>© {new Date().getFullYear()} PRANAY KUMAR / CYBERSECURITY ANALYST</span><span>DEFEND • INVESTIGATE • RESPOND</span><button onClick={() => scrollTo("top")}>BACK TO TOP ↑</button></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
