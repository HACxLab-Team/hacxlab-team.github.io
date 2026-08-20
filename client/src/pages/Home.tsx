/**
 * HACxLab / Research Atelier style guide: editorial academic default, warm paper surfaces,
 * Marginal Green (#1E5B51), annotated indices, DM Serif Display + Manrope; the Strategic
 * The website now presents only this editorial academic direction.
 */
import { Button } from "@/components/ui/button";
import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpenText,
  ChevronDown,
  CircleCheck,
  GraduationCap,
  Menu,
  MessageSquareMore,
  Network,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

const researchDirections = [
  {
    index: "01",
    title: "Emotional feedback\nto AI content",
    description:
      "How students emotionally respond to AI-generated texts, summaries, images, interpretations, and learning content.",
    icon: Sparkles,
  },
  {
    index: "02",
    title: "Trust, verification,\nand ethical use of AI",
    description:
      "How students judge credibility, accuracy, cultural appropriateness, bias, and ethical risks in AI-generated content.",
    icon: ShieldCheck,
  },
  {
    index: "03",
    title: "Dialogic\nanalysis",
    description:
      "How students ask questions, follow up, revise, challenge, and co-construct meaning with AI and peers.",
    icon: MessageSquareMore,
  },
  {
    index: "04",
    title: "From collaboration\nto cocreation",
    description:
      "How students move from using AI to collaborating with AI, peers, international students, and industry partners.",
    icon: Network,
  },
];

const competencies = [
  "Human–AI communication",
  "Prompting and questioning",
  "AI literacy and ethical judgment",
  "Emotional understanding and reflection",
  "Literary and cultural interpretation",
  "Intercultural communication",
  "Research design and data analysis",
  "Prototype development and user feedback",
];

const activities = [
  "Conceptual and hands-on lab meetings",
  "Topic-specific industry mentor workshops",
  "Cross-cultural co-learning activities",
  "Research poster presentation showcase",
];

function Label({ children, number }: { children: string; number?: string }) {
  return (
    <div className="section-label">
      {number && <span>[{number}]</span>}
      <span>{children}</span>
    </div>
  );
}

function Mark() {
  return (
    <img
      className="brand-mark"
      src="/images/hacxlab-logo_91e4f056.png"
      alt="HACxLab mark"
    />
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a href="#top" className="brand-lockup" onClick={closeMenu}>
          <Mark />
          <span className="brand-copy">
            <b>HACxLab</b>
            <small>Human–AI Communication &amp; Experience Lab</small>
          </span>
        </a>

        <nav className={menuOpen ? "primary-nav nav-open" : "primary-nav"} aria-label="Primary navigation">
          <a href="#research" onClick={closeMenu}>Research</a>
          <a href="#learning" onClick={closeMenu}>Learning</a>
          <a href="#community" onClick={closeMenu}>Community</a>
          <a href="#join" onClick={closeMenu}>Join</a>
        </nav>

        <div className="header-actions">
          <Button className="header-cta" asChild>
            <a href="#join">Join the lab <ArrowUpRight size={15} /></a>
          </Button>
          <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <h1><span>HACx</span>Lab</h1>
            <p className="hero-deck">
              An innovative AI lab that focuses on language, learning, and the changing shape of communication in an interdisciplinary research environment.
            </p>
            <div className="hero-actions">
              <Button className="hero-button" asChild>
                <a href="#about">Explore our approach <ArrowDownRight size={17} /></a>
              </Button>
            </div>
          </div>
          <div className="hero-visual" aria-label="HACxLab research atmosphere">
            <div className="hero-image academic-image" />
            <div className="hero-orbit orbit-a" />
            <div className="hero-orbit orbit-b" />
          </div>
          <div className="hero-footnote"><span>Scroll to read</span><ChevronDown size={16} /></div>
        </section>

        <section id="about" className="case-section">
          <div className="case-sidebar">
            <Label number="01">Why HACxLab matters</Label>
            <span className="side-caption">THE CASE FOR HUMANITIES</span>
          </div>
          <div className="case-body">
            <h2>Tomorrow’s AI needs people who can read its answers <em>closely.</em></h2>
            <div className="case-text">
              <p>
                Generative AI is changing how people read, write, learn, translate, interpret culture, and communicate across languages. For humanities and foreign-language students, that shift creates a new opportunity.
              </p>
              <p>
                The future of AI is not only about coding. It is about asking better questions, interpreting meaning, identifying bias, evaluating AI-generated content, and communicating clearly with intelligent systems.
              </p>
            </div>
            <div className="positioning-statement">
              <span>HACxLab positions humanities students as</span>
              <strong>communicators / evaluators / researchers / co-creators</strong>
            </div>
          </div>
        </section>

        <section className="mission-section">
          <div className="mission-head">
            <Label number="02">Our mission</Label>
            <p>Long-term, team-based research that connects the classroom with the world.</p>
          </div>
          <div className="mission-statement">
            <span className="quote-mark">“</span>
            <h2>We train students to become not only AI users, but also <em>AI evaluators, dialogue designers, research collaborators, and prototype builders.</em></h2>
          </div>
          <div className="mission-list">
            <div><span>01</span><p>Advance humanities-centered AI research.</p></div>
            <div><span>02</span><p>Study how learners communicate with and evaluate AI.</p></div>
            <div><span>03</span><p>Build AI literacy, research methods, intercultural communication, and public presentation.</p></div>
            <div><span>04</span><p>Transform classroom learning into research outputs, platform feedback, and prototypes.</p></div>
          </div>
        </section>

        <section id="research" className="research-section">
          <div className="research-heading">
            <Label number="03">Research directions</Label>
            <h2>Four ways we make the AI conversation <em>more human.</em></h2>
            <p>We study how learners encounter, question, and build meaning with intelligent systems in real learning environments.</p>
          </div>
          <div className="research-grid">
            {researchDirections.map((item) => {
              const Icon = item.icon;
              return (
                <article className="research-card" key={item.index}>
                  <div className="card-top"><span>{item.index}</span><Icon size={21} strokeWidth={1.5} /></div>
                  <div className="research-evidence"><span>FIELD NOTE</span><i /></div>
                  <h3>{item.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="learning" className="learning-section">
          <div className="learning-image"><img src="/images/hacxlab-workshop_4cc83a6d.jpg" alt="Students collaborating during a humanities-centered AI workshop" /></div>
          <div className="learning-content">
            <Label number="04">Student learning</Label>
            <h2>Develop your distinct strengths for the AI era.</h2>
            <p>
              HACxLab helps language and humanities students turn close reading, cultural understanding, and clear communication into practical research capability.
            </p>
            <div className="competency-list">
              {competencies.map((competency, index) => <span key={competency}><i>{String(index + 1).padStart(2, "0")}</i>{competency}</span>)}
            </div>
          </div>
        </section>

        <section id="community" className="team-section">
          <div className="team-heading">
            <Label number="05">Lab team members</Label>
            <h2>Vertical integration makes every member both a learner and a contributor.</h2>
            <p>Students across years and backgrounds work in long-term research teams, supported by faculty, senior peers, TEEP international students, and industry mentors.</p>
          </div>
          <div className="team-graph" aria-hidden="true">
            <span className="node node-one">Academic<br />faculty</span><span className="node node-two">Industry<br />mentors</span><span className="node node-three">Graduate<br />students</span><span className="node node-four">Undergrad<br />students</span><span className="node node-six">International<br />students</span><i className="graph-line l1" /><i className="graph-line l2" /><i className="graph-line l3" /><i className="graph-line l4" />
          </div>
        </section>

        <section className="international-section">
          <div className="international-header">
            <Label number="06">International collaboration</Label>
            <div><span className="globe-mark">◎</span><span>NIU × TEEP</span></div>
          </div>
          <div className="international-content">
            <h2>Bring many languages, cultures, and readings into the same room.</h2>
            <p>HACxLab connects students from Taiwan’s National Ilan University (NIU) and TEEP international students through cross-cultural AI reading, English discussion, digital storytelling, and human–AI communication research.</p>
          </div>
          <div className="international-activities">
            {["TEEP × NIU reading workshops", "Human–AI communication roundtables", "Digital storytelling showcase", "AI & humanities mini research forum", "Cross-cultural dialogue analysis"].map((item) => <span key={item}>{item}</span>)}
          </div>
        </section>

        <section className="activities-section">
          <div className="activities-copy">
            <Label number="07">Lab activities</Label>
            <h2>A steady rhythm of inquiry, making, and sharing.</h2>
            <p>HACxLab combines research meetings, team activities, industry collaboration, cross-cultural co-learning, and academic showcases.</p>
          </div>
          <ol className="activity-list">
            {activities.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p><i className="activity-rule" /></li>)}
          </ol>
        </section>

        <section id="join" className="join-section">
          <div className="join-index"><Label number="08">Join HACxLab</Label><span>Open invitation / 2026</span></div>
          <div className="join-content">
            <h2>Bring your questions <em>to the lab.</em></h2>
            <p>We welcome students interested in AI, language, humanities, literature, communication, intercultural learning, research, data analysis, design, and prototype development.</p>
            <Button className="join-button" asChild><a href="mailto:myhacxlab@gmail.com">9/3/2026 Info Session- Request For More Info <ArrowUpRight size={18} /></a></Button>
          </div>
          <div className="join-graphic"><BookOpenText size={70} strokeWidth={1} /><GraduationCap size={46} strokeWidth={1} /></div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand"><Mark /><span><b>HACxLab</b><small>Human–AI Communication and Experience Lab</small></span></div>
        <div className="footer-meta"><p>Language, learning, and humanities-centered AI research.</p><a href="mailto:myhacxlab@gmail.com">Contact: myhacxlab@gmail.com</a></div>
        <a href="#top">Back to top <ArrowUpRight size={14} /></a>
      </footer>
    </div>
  );
}
