import { ArticleCard } from "@/components/ui/ArticleCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/ui/Section";
import { featuredArticles } from "@/content/articles";

const topics = [
  "Digestion",
  "Glucose",
  "Fat metabolism",
  "Mitochondria",
  "Oxygen",
  "ATP"
];

export default function HomePage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-leaf">
              Interactive metabolism education
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-normal text-ink sm:text-6xl">
              The Human Energy Journey
            </h1>
            <p className="mt-6 text-lg leading-8 text-ink/70">
              Travel from food to ATP and see how digestion, circulation, cells,
              oxygen, and mitochondria work together to convert nutrient energy
              into usable cellular energy.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/journey">Start the journey</ButtonLink>
              <ButtonLink href="/learn" variant="secondary">
                Browse lessons
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-lg border border-ink/10 bg-leaf/10 p-6 shadow-soft">
            <div className="grid h-full min-h-[280px] place-items-center rounded-lg bg-white">
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-wide text-leaf">
                  Journey preview
                </p>
                <p className="mt-3 max-w-xs text-2xl font-bold text-ink">
                  Mouth → Bloodstream → Cell → Mitochondrion → ATP
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-leaf">
              What happens after eating?
            </p>
            <h2 className="mt-3 text-3xl font-bold text-ink">
              Food becomes molecules your cells can use.
            </h2>
          </div>
          <p className="text-lg leading-8 text-ink/70">
            Meals are broken into nutrients, absorbed into circulation, and
            delivered to cells. Mitochondria then help convert energy from those
            nutrients into ATP, while oxygen helps complete the electron
            transport process and water is produced.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
          <div className="grid gap-6 md:grid-cols-3">
            {["Digest food", "Deliver nutrients", "Produce ATP"].map((item, index) => (
              <div key={item}>
                <p className="text-sm font-semibold text-leaf">0{index + 1}</p>
                <h3 className="mt-2 text-xl font-semibold text-ink">{item}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/70">
                  {index === 0
                    ? "Break meals into absorbable molecules."
                    : index === 1
                      ? "Move nutrients and oxygen through the bloodstream."
                      : "Use mitochondrial pathways to make ATP available."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-leaf">
              Popular topics
            </p>
            <h2 className="mt-3 text-3xl font-bold text-ink">Learn the system</h2>
          </div>
          <ButtonLink href="/learn" variant="secondary">
            View all
          </ButtonLink>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <div key={topic} className="rounded-lg border border-ink/10 bg-white p-4 text-sm font-semibold text-ink">
              {topic}
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-leaf">
            Featured articles
          </p>
          <h2 className="mt-3 text-3xl font-bold text-ink">Start with the basics</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {featuredArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </Section>
    </>
  );
}
