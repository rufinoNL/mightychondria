import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the mission and editorial principles behind The Human Energy Journey."
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A clearer way to understand metabolism"
        description="The Human Energy Journey is built to make cellular energy education visual, accurate, and approachable."
      />
      <Section className="pt-0">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Mission", "Help curious learners understand how food, oxygen, cells, and mitochondria connect."],
            ["Accuracy", "Use careful language: mitochondria convert energy from nutrients into ATP; they do not create energy from nothing."],
            ["Roadmap", "Grow from one ATP journey into reusable simulations for food, fasting, exercise, sleep, and mitochondrial health."]
          ].map(([title, copy]) => (
            <section key={title} className="rounded-lg border border-ink/10 bg-white p-5 shadow-sm">
              <h2 className="text-xl font-semibold text-ink">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-ink/70">{copy}</p>
            </section>
          ))}
        </div>
      </Section>
    </>
  );
}
