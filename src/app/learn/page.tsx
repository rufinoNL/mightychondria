import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ArticleCard } from "@/components/ui/ArticleCard";
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
    </>
  );
}
