import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useEffect } from "react";

export default function TermsOfService() {
  useEffect(() => {
    document.title = "Terms of Service | HACxLab";
    return () => {
      document.title = "HACxLab — Human–AI Communication & Experience Lab";
    };
  }, []);

  return (
    <div className="site-shell policy-shell">
      <header className="site-header">
        <a href="/" className="brand-lockup">
          <img className="brand-mark" src="/images/hacxlab-logo_91e4f056.webp" alt="HACxLab mark" />
          <span className="brand-copy">
            <b>HACxLab</b>
            <small>Human–AI Communication &amp; Experience Lab</small>
          </span>
        </a>
        <a className="policy-back-link" href="/">
          <ArrowLeft size={14} /> Back to HACxLab
        </a>
      </header>

      <main className="policy-main">
        <div className="policy-intro">
          <span className="section-label"><span>[10]</span><span>Workspace terms</span></span>
          <h1>Terms of Service</h1>
          <p className="policy-lead">The terms for using the HACxLab website, n8n workspace, and connected Google OAuth services.</p>
          <p className="policy-date">Last updated: October 5, 2026</p>
        </div>

        <div className="policy-content">
          <section>
            <h2>1. Agreement</h2>
            <p>These Terms of Service govern use of the HACxLab website at <a href="https://hacxlab.com/">hacxlab.com</a> and access to HACxLab’s self-hosted n8n workspace at <a href="https://n8n.neonetwork.cc/">n8n.neonetwork.cc</a>. By using these services, you agree to these terms and our <a href="/privacy-policy">Privacy Policy</a>.</p>
          </section>
          <section>
            <h2>2. Public website use</h2>
            <p>You may browse and use the public website for lawful, personal, educational, and informational purposes. Do not copy, misuse, disrupt, or attempt to gain unauthorized access to the website or its supporting systems.</p>
            <p>Website content is provided for general information about HACxLab and does not constitute professional, legal, or technical advice.</p>
          </section>
          <section>
            <h2>3. Eligibility and accounts</h2>
            <p>Access is provided to approved HACxLab lab members and collaborators. You must provide accurate account information, keep your credentials secure, and use only your own account. Do not share passwords, OAuth tokens, client secrets, or private workflow credentials.</p>
          </section>
          <section>
            <h2>4. Google OAuth access</h2>
            <p>Google authentication and any connected Google services are authorized by you through Google OAuth. You are responsible for reviewing the permissions shown by Google before granting access. HACxLab’s current OAuth configuration does not request Drive, Sheets, Docs, Gmail, or other Google API data scopes.</p>
            <p>Do not connect an account or data source that you are not authorized to use. Future workflows may require additional permissions and will be subject to Google’s consent process and applicable policy updates.</p>
          </section>
          <section>
            <h2>5. Acceptable use</h2>
            <p>You may use the workspace for legitimate HACxLab research, learning, collaboration, and approved automation. You must not use it to break the law, infringe another person’s rights, distribute malware or harmful content, bypass security controls, overload the service, or access another member’s data without permission.</p>
          </section>
          <section>
            <h2>6. Workflows and content</h2>
            <p>You are responsible for the workflows you create, the data they process, and the actions they perform. Review automations before enabling them, use the least access necessary, and keep sensitive information out of workflows unless the use is approved and appropriately protected.</p>
            <p>You retain responsibility for content and data you provide. You grant HACxLab permission to host and process that content only as needed to operate, secure, maintain, and support the workspace.</p>
          </section>
          <section>
            <h2>7. Availability and changes</h2>
            <p>The workspace is provided for lab use and may be changed, interrupted, or unavailable for maintenance, security, infrastructure, or other operational reasons. HACxLab does not guarantee uninterrupted operation or that every workflow will run without error. You should keep independent copies of important work and data.</p>
          </section>
          <section>
            <h2>8. Suspension and termination</h2>
            <p>HACxLab may suspend or end access when membership ends, these terms are violated, security is at risk, or continued access could harm the lab or another person. When access ends, connected credentials may be revoked and workspace data may be deleted according to our <a href="/privacy-policy">Privacy Policy</a>.</p>
          </section>
          <section>
            <h2>9. Contact</h2>
            <p>Questions about these terms or the HACxLab workspace can be sent to <a href="mailto:myhacxlab@gmail.com">myhacxlab@gmail.com</a>.</p>
          </section>
        </div>
      </main>

      <footer className="site-footer policy-footer">
        <span>HACxLab / terms of service</span>
        <a href="mailto:myhacxlab@gmail.com">Contact HACxLab <ArrowUpRight size={14} /></a>
      </footer>
    </div>
  );
}
