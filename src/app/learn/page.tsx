import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { articles } from "@/content/articles";

export const metadata: Metadata = {
  title: "Learn",
  description:
    "Educational articles about digestion, metabolism, mitochondria, oxygen, and ATP production."
};

export default function LearnPage() {
  return (
    <>
      <PageHeader
        eyebrow="Learn"
        title="Metabolism articles"
        description="Plain-language lessons that support the interactive journey and build a foundation for deeper metabolism topics."
      />
      <section className="mx-auto grid max-w-6xl gap-5 px-4 pb-16 sm:px-6 md:grid-cols-2 lg:px-8">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-leaf/20 bg-leaf/10 p-6">
          <h2 className="text-2xl font-bold text-ink">
            Learn by following the full path
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-ink/75">
            Articles explain individual concepts. The journey connects them into
            one sequence from digestion to mitochondrial ATP production.
          </p>
          <div className="mt-5">
            <ButtonLink href="/journey">Open interactive journey</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
