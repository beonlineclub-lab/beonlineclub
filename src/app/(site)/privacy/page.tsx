import LegalPage from "@/components/express/LegalPage";
import { EMAIL, PHONE_DISPLAY } from "@/lib/express";
import { CITY_DISPLAY, pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "/privacy",
  "Privacy Policy",
  "How BeOnline.club collects, uses and protects your contact details and business data, and how to ask for a copy or deletion."
);

// If analytics or ad pixels are added to the site, update "Website visits" below.
export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="11 October 2026"
      intro={`BeOnline.club (“BeOnline”, “we”) is based in ${CITY_DISPLAY}, India. This page explains what information we collect, why, and what you can ask us to do with it.`}
      sections={[
        {
          h: "What we collect",
          body: (
            <ul>
              <li>Contact details you send us on WhatsApp, phone, email or our forms: your name, phone number, email, business name and your message.</li>
              <li>Business data you share so we can build a demo or run your software, such as Excel sheets, orders, stock, customer and staff records.</li>
              <li>Basic technical logs from our servers (such as IP address and browser type), used for security and fixing errors.</li>
            </ul>
          ),
        },
        {
          h: "How we use it",
          body: (
            <ul>
              <li>To reply to you, prepare your free demo, and agree scope and price.</li>
              <li>To build, host, back up, support and improve the software you use with us.</li>
              <li>To send invoices and service updates.</li>
            </ul>
          ),
        },
        {
          h: "What we never do",
          body: <p>We do not sell your information or your business data, and we do not use your business data for anything other than running your software.</p>,
        },
        {
          h: "Who else sees it",
          body: (
            <p>
              Only service providers we need to run the service, such as our hosting provider, email delivery service and WhatsApp
              (Meta), and only for that purpose. We may also share information when the law requires it.
            </p>
          ),
        },
        {
          h: "Your business data is yours",
          body: (
            <p>
              You can ask for a full export of your data in Excel at any time, including after you stop using us. If you decide not
              to go ahead after a demo, or you leave, ask us and we will delete your data, except records we must keep by law, such as
              invoices.
            </p>
          ),
        },
        {
          h: "How we protect it",
          body: <p>Secure logins with roles, SSL encryption, daily backups and uptime monitoring.</p>,
        },
        {
          h: "Website visits",
          body: <p>This website does not use advertising or analytics cookies. If that changes, we will update this page.</p>,
        },
        {
          h: "Your rights and how to reach us",
          body: (
            <p>
              Under India&apos;s Digital Personal Data Protection Act, 2023, you can ask to see, correct or erase your personal data, or
              raise a complaint. Email <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or WhatsApp {PHONE_DISPLAY}, and we will reply within 7
              days.
            </p>
          ),
        },
      ]}
    />
  );
}
