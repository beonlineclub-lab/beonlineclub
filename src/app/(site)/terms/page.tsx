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
      updated="12 October 2026"
      intro={`These terms apply when you use BeOnline.club (“BeOnline”, “we”), based in ${CITY_DISPLAY}, India, to build and run software for your business. The agreement we sign with you for your project forms part of these terms.`}
      sections={[
        {
          h: "Free demo",
          body: <p>The demo is free and you are under no obligation to buy. You pay nothing until you approve it.</p>,
        },
        {
          h: "Prices on this website are estimates",
          body: (
            <>
              <p>
                All prices on this website, including plan prices, kit prices and the price calculator, are approximate. They are there
                to give you an idea of the budget to plan for. They are not a quote or an offer.
              </p>
              <p>
                Your actual cost depends on the scope and complexity of your project, which we understand after our first discussion
                with you. We then share a quote for your project, which can be discussed and negotiated, including any discounts.
              </p>
              <p>
                The final cost and payment plan are binding only once both of us sign a written agreement.
              </p>
            </>
          ),
        },
        {
          h: "Scope, price and timeline",
          body: (
            <p>
              Before you pay, we agree the first version&apos;s scope, the one-time setup fee, the monthly fee, the payment plan and the
              go-live date in a written agreement signed by both of us. Go-live in 7 days assumes the agreed scope and that you share
              your data and approvals on time.
            </p>
          ),
        },
        {
          h: "Payments",
          body: (
            <p>
              The one-time setup fee is paid as set out in the payment plan in your agreement. The monthly fee covers hosting, backups, security,
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
