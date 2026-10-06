import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useEffect } from "react";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy | HACxLab";
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
          <span className="section-label"><span>[09]</span><span>Privacy and OAuth access</span></span>
          <h1>Privacy Policy</h1>
          <p className="policy-lead">How HACxLab handles information across our public website, Google OAuth application, and self-hosted n8n workspace.</p>
          <p className="policy-date">Last updated: October 5, 2026</p>
        </div>

        <div className="policy-content">
          <section>
            <h2>1. Who we are</h2>
            <p>HACxLab operates a research and learning lab. This policy applies to the HACxLab website at <a href="https://hacxlab.com/">hacxlab.com</a>, the HACxLab Google OAuth application, and the HACxLab n8n workspace at <a href="https://n8n.neonetwork.cc/">n8n.neonetwork.cc</a>.</p>
            <p>Questions about this policy or requests concerning your data can be sent to <a href="mailto:myhacxlab@gmail.com">myhacxlab@gmail.com</a>.</p>
          </section>

          <section>
            <h2>2. Website information</h2>
            <p>You can browse the public HACxLab website without creating an account or submitting information through a form. The website may receive ordinary technical information from hosting infrastructure, such as an IP address, browser type, device information, requested pages, and timestamps, for delivery, security, and troubleshooting.</p>
            <p>Our contact links open your own email application. Information you choose to send by email is used to respond to your request and is handled by the email services involved in sending and receiving it.</p>
          </section>

          <section>
            <h2>3. Cookies and third-party services</h2>
            <p>The website does not use analytics, advertising cookies, or tracking pixels, and does not sell visitor information. The site uses Google Fonts to display its typography, which may cause your browser to connect to Google’s font service. Those services may process technical information according to their own policies.</p>
          </section>

          <section>
            <h2>4. What Google information we access</h2>
            <p>The current Google Cloud OAuth configuration does not request Drive, Sheets, Docs, Gmail, Calendar, or other Google API data scopes. Enabling an API in Google Cloud does not by itself give HACxLab access to your data.</p>
            <p>When you sign in, the OAuth flow may provide basic account information needed to identify your n8n account, such as your Google email address, name, profile identifier, and authentication status. We do not access Google files or other private Google content unless a future workflow requests a specific scope and you separately approve it.</p>
          </section>

          <section>
            <h2>5. How we use information</h2>
            <p>Basic account information is used only to authenticate you, associate you with your HACxLab n8n account, provide access to the workspace, and protect the service. We do not sell Google information or use it for advertising.</p>
            <p>If HACxLab later adds Google API scopes, the requested permissions will be shown in Google’s consent screen. We will update this policy before using those permissions and request only access needed for the relevant n8n workflow.</p>
          </section>

          <section>
            <h2>6. n8n storage and sharing</h2>
            <p>Authentication information and n8n account data are processed and stored on HACxLab’s self-hosted n8n instance. Access is limited to the member and authorized HACxLab administrators who need it to operate, secure, or support the workspace.</p>
            <p>We do not intentionally share your Google account information with other lab members or unrelated third parties. n8n workflow data is available only to the users and workflows permitted by the n8n workspace configuration.</p>
          </section>

          <section>
            <h2>7. Retention and deletion</h2>
            <p>We retain your authentication information for as long as you are an active HACxLab member and your n8n account remains active. When either condition ends, access is revoked and associated data is scheduled for deletion, subject to security logs, backups, and any period reasonably needed to complete those processes.</p>
            <p>You may request access, correction, or deletion of your information by emailing <a href="mailto:myhacxlab@gmail.com">myhacxlab@gmail.com</a>. You can also revoke the application’s Google access from your Google Account security settings.</p>
          </section>

          <section>
            <h2>8. Security</h2>
            <p>HACxLab uses HTTPS, access controls, and reasonable administrative and technical safeguards to protect the n8n workspace and OAuth credentials. No internet service can guarantee absolute security. Please report suspected unauthorized access promptly to the contact address above.</p>
          </section>

          <section>
            <h2>9. Changes to this policy</h2>
            <p>We may update this policy when the OAuth application, n8n workspace, or data practices change. The current version will remain available at this URL, with the latest update date shown above.</p>
          </section>
          <p className="policy-related-links"><a href="/terms-of-service">Read the HACxLab Terms of Service <ArrowUpRight size={14} /></a></p>
        </div>
      </main>

      <footer className="site-footer policy-footer">
        <span>HACxLab / Google OAuth privacy policy</span>
        <a href="mailto:myhacxlab@gmail.com">Contact HACxLab <ArrowUpRight size={14} /></a>
      </footer>
    </div>
  );
}
