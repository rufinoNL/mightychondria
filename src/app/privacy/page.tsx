import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for The Human Energy Journey."
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Policy"
        title="Privacy Policy"
        description="A plain-language placeholder policy for the MVP. This should be reviewed before public launch."
      />
      <Section className="pt-0">
        <div className="rounded-lg border border-ink/10 bg-white p-6 text-ink/75 shadow-sm">
          <p className="leading-8">
            The MVP does not collect account information or personal health data.
            Future analytics, advertising, and consent behavior will be documented
            here before launch.
          </p>
        </div>
      </Section>
    </>
  );
}
