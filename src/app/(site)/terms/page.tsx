import Link from "next/link";
import LegalPage from "@/components/express/LegalPage";
import { EMAIL } from "@/lib/express";
import { CITY_DISPLAY, pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "/terms",
  "Terms of Service",
  "The terms for BeOnline.club's free demo, one-time setup, monthly plan, changes, cancellation and data export."
);

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="11 October 2026"
      intro={`These terms apply when you use BeOnline.club (“BeOnline”, “we”), based in ${CITY_DISPLAY}, India, to build and run software for your business. Your written quote for scope, price and timeline forms part of these terms.`}
      sections={[
        {
          h: "Free demo",
          body: <p>The demo is free and you are under no obligation to buy. You pay nothing until you approve it.</p>,
        },
        {
          h: "Scope, price and timeline",
          body: (
            <p>
              Before you pay, we agree the first version&apos;s scope, the one-time setup fee, the monthly fee and the go-live date in
              writing. Go-live in 7 days assumes the agreed scope and that you share your data and approvals on time.
            </p>
          ),
        },
        {
          h: "Payments",
          body: (
            <p>
              The one-time setup fee is paid when you approve the demo and scope. The monthly fee covers hosting, backups, security,
              weekly updates and WhatsApp support, and is billed in advance each month. Prices are in Indian rupees; GST is added where
              applicable.
            </p>
          ),
        },
        {
          h: "Changes and new features",
          body: (
            <p>
              Small changes are included in your monthly plan. Bigger new features are quoted in writing first, and are only built and
              billed after you approve the quote.
            </p>
          ),
        },
        {
          h: "Your data",
          body: (
            <p>
              Your business data stays yours. You can export it in Excel at any time. See our{" "}
              <Link href="/privacy">Privacy Policy</Link> for how we handle it.
            </p>
          ),
        },
        {
          h: "Cancelling",
          body: (
            <p>
              You can cancel the monthly plan at any time by telling us on WhatsApp or email. Service runs until the end of the period
              already paid, and we hand over a full export of your data. The one-time setup fee is not refundable once work has started.
            </p>
          ),
        },
        {
          h: "Fair use",
          body: <p>Don&apos;t use the software for anything unlawful, or try to access other customers&apos; data or disrupt the service.</p>,
        },
        {
          h: "Liability",
          body: (
            <p>
              We take daily backups and work to keep your software running, but we cannot promise it will never be interrupted. Our total
              liability for any claim is limited to the fees you paid us in the 3 months before the claim.
            </p>
          ),
        },
        {
          h: "Law and disputes",
          body: (
            <p>
              These terms are governed by the laws of India, and the courts in Bengaluru have jurisdiction. Questions? Email{" "}
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
