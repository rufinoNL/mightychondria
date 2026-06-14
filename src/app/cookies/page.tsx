import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie policy for The Human Energy Journey."
};

export default function CookiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Policy"
        title="Cookie Policy"
        description="A placeholder cookie policy for the MVP. Consent logic is planned for a later phase."
      />
      <Section className="pt-0">
        <div className="rounded-lg border border-ink/10 bg-white p-6 text-ink/75 shadow-sm">
          <p className="leading-8">
            This initial implementation does not load analytics, advertising, or
            consent-management scripts. Cookie preferences will be added before
            analytics or advertising are enabled.
          </p>
        </div>
      </Section>
    </>
  );
}
