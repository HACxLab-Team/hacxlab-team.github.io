# HACxLab Design Directions

## Three approaches considered

| Theme Name | Very Brief Intro | Probability |
| --- | --- | --- |
| **The Research Atelier** | An academic, editorial environment that makes humanities-centered AI research feel scholarly, curious, and people-led. It uses a field-notebook sensibility rather than a conventional university template. | 0.072 |
| **The Strategic Commons** | A business-professional direction that frames HACxLab as a focused research and collaboration partner for academia and industry. It communicates clarity, rigor, and institutional confidence. | 0.034 |
| **The Cultural Signal** | A more expressive digital-humanities direction built around language fragments, annotation, and cultural exchange. It is intentionally energetic but remains secondary to credibility. | 0.088 |

## Selected approach: The Research Atelier

**Design Movement.** Contemporary editorial design informed by research journals, reading-room ephemera, and human-centered digital humanities.

**Core Principles.** The experience should make research feel accessible without becoming casual; let language, annotation, and evidence lead the visual hierarchy; use asymmetry and sectional pacing instead of a generic centered landing-page stack; and make cross-cultural exchange feel visibly participatory.

**Color Philosophy.** The primary environment is warm paper and deep ink to evoke close reading and long-form thinking. A restrained library-green establishes academic trust, while a precise vermilion note color signals active inquiry, links, and discussion rather than generic decoration.

**Layout Paradigm.** The page is organized as a reading desk: a narrow navigational rail, an oversized research statement, adjacent annotated evidence cards, and alternating full-bleed working surfaces. Content advances as a guided dossier rather than a sequence of uniform cards.

**Signature Elements.** A bracketed research index (for example, `[01]`), fine annotation rules with small labels, and offset "marginalia" cards that hold supporting concepts or actions.

**Interaction Philosophy.** Hover and focus states feel like revealing a marginal note. The academic/business style selector operates as a transparent concept-comparison control, allowing stakeholders to judge the same information architecture through two intentional visual languages.

**Animation.** Use short, purposeful opacity and transform transitions only. Section labels and supporting cards enter with a 40–70 ms stagger; style switching crossfades color and surface treatments over 220 ms; all non-essential motion is disabled when reduced motion is requested.

**Typography System.** `DM Serif Display` carries moments of intellectual weight, especially the hero and key statements. `Manrope` handles navigation, body copy, labels, and data-like content for crisp readability. Use compressed uppercase labels sparingly, with generous letter-spacing, and maintain an obvious contrast between editorial display language and operational UI language.

**Brand Essence.** HACxLab is the research home for language and humanities students who want to shape, question, and co-create with AI. **Thoughtful, dialogic, rigorous.**

**Brand Voice.** Headlines should be invitational and research-led; CTAs should name the next meaningful act, while microcopy should be exact and quietly optimistic. Example lines: “AI is a conversation worth studying.” and “Bring your questions to the lab.” Generic welcome language and vague productivity promises are prohibited.

**Wordmark & Logo.** A simple three-part knot-like mark of interlocking dialogue brackets, representing human, AI, and culture in active exchange. The logotype pairs a small, measured uppercase `HACxLab` with the full lab name in a restrained serif line.

**Signature Brand Color.** **Marginal Green — `#1E5B51`**. This evergreen tone should consistently signify research continuity and thoughtful action.

## Required alternate presentation: The Strategic Commons

The business-professional style retains the exact information architecture and wording but shifts expression rather than merely recoloring the page. It uses a graphite-blue canvas, clean white working surfaces, a calibrated cobalt action color, a compact sans-serif hierarchy, and a structured "research portfolio" rhythm. This version prioritizes stakeholder confidence, collaboration pathways, team capability, and the lab’s bridge between university research and industry mentorship.

## Style Decisions

- The live website defaults to **The Research Atelier** while giving reviewers a first-class toggle into **The Strategic Commons**.
- Both directions will use original, text-free generated visual assets, with dark text used on the light editorial image treatment and light text used only over the dark business-professional surface.
- The review package will include a single editable **Figma-importable SVG** with grouped vectors and two JPG boards for rapid comparison. The SVG can be opened/imported in Figma for native editing; a proprietary `.fig` binary is not generated outside Figma.
- Every major Research Atelier section uses a visible dossier cue: a marginal reference, annotation rule, excerpt surface, or offset evidence card.
- The interlocking dialogue-bracket knot is used as a recurring research seal; Marginal Green holds primary brand moments and vermilion is reserved for annotation, inquiry, and calls to action.
- The Strategic Commons direction uses a compact Manrope-only content hierarchy and structured white portfolio surfaces; serif typography remains limited to the retained HACxLab logotype.
