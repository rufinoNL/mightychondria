import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Educational disclaimer for The Human Energy Journey."
};

export default function DisclaimerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Disclaimer"
        title="Educational use only"
        description="The Human Energy Journey explains biology for learning purposes and is not medical advice."
      />
      <Section className="pt-0">
        <div className="rounded-lg border border-ink/10 bg-white p-6 text-ink/75 shadow-sm">
          <p className="leading-8">
            Content on this site is educational and should not be used to diagnose,
            treat, or prevent any medical condition. Consult a qualified health
            professional for personal medical guidance.
          </p>
        </div>
      </Section>
    </>
  );
}
