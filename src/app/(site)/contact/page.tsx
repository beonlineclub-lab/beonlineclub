import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { EMAIL, PHONE_DISPLAY, PHONE_LINK, WA_EXCEL_MSG, commitments, waLink } from "@/lib/express";
import { PageHero, WhatsAppButton } from "@/components/express/ui";
import JsonLd from "@/components/express/JsonLd";
import { CITY_DISPLAY, ORG_ID, SITE_URL, breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "/contact",
  "Contact BeOnline: WhatsApp, Phone & Email",
  `Talk to BeOnline.club about custom business software. WhatsApp or call ${PHONE_DISPLAY}, or email ${EMAIL}. Based in ${CITY_DISPLAY}, serving businesses across India.`
);

const channels = [
  { icon: MessageCircle, label: "WhatsApp", value: PHONE_DISPLAY, href: waLink(WA_EXCEL_MSG), note: "Fastest. Send your Excel sheets here." },
  { icon: Phone, label: "Phone", value: PHONE_DISPLAY, href: PHONE_LINK, note: "Call us to talk it through." },
  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, note: "For documents, quotes and invoices." },
  { icon: MapPin, label: "Based in", value: CITY_DISPLAY, note: "Serving businesses across India, online and on WhatsApp." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Talk to a real person, the same day."
        sub="BeOnline.club builds custom business software for Indian small businesses. Send us a message on WhatsApp, call, or email, whichever is easiest for you."
      >
        <WhatsAppButton label="WhatsApp us" />
      </PageHero>

      <section className="pb-16 sm:pb-24">
        <div className="mx-auto grid max-w-4xl gap-4 px-4 sm:grid-cols-2 sm:px-6">
          {channels.map(({ icon: Icon, label, value, href, note }) => {
            const body = (
              <>
                <Icon size={22} className="text-ex-green" strokeWidth={2.5} />
                <div className="mt-3 text-xs font-bold uppercase tracking-wider text-ex-muted">{label}</div>
                <div className="mt-1 break-words font-grotesk text-lg font-bold text-ex-ink">{value}</div>
                <p className="mt-1 text-sm text-ex-muted">{note}</p>
              </>
            );
            return href ? (
              <a
                key={label}
                href={href}
                {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                className="rounded-2xl border border-ex-line bg-white p-6 transition-colors hover:border-ex-ink"
              >
                {body}
              </a>
            ) : (
              <div key={label} className="rounded-2xl border border-ex-line bg-white p-6">
                {body}
              </div>
            );
          })}
        </div>

        <ul className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 px-4 sm:grid-cols-4 sm:px-6">
          {commitments.map((c) => (
            <li key={c.k} className="rounded-2xl bg-ex-yellow-soft p-4 text-center">
              <div className="font-grotesk font-bold text-ex-ink">{c.k}</div>
              <div className="text-sm text-ex-muted">{c.v}</div>
            </li>
          ))}
        </ul>
      </section>

      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            url: `${SITE_URL}/contact`,
            name: "Contact BeOnline.club",
            about: { "@id": ORG_ID },
          },
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
    </>
  );
}
