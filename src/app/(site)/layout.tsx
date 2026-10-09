import ExpressNav from "@/components/express/ExpressNav";
import SiteFooter from "@/components/express/SiteFooter";
import MobileStickyBar from "@/components/express/MobileStickyBar";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="theme-express min-h-screen overflow-x-hidden bg-ex-bg text-ex-ink">
      <ExpressNav />
      <main>{children}</main>
      <SiteFooter />
      <MobileStickyBar />
    </div>
  );
}
