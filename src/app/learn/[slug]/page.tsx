import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { articles, getArticleBySlug } from "@/content/articles";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.description
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles
    .filter((candidate) => candidate.slug !== article.slug)
    .filter(
      (candidate) =>
        candidate.category === article.category ||
        candidate.tags.some((tag) => article.tags.includes(tag))
    )
    .slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow={article.category}
        title={article.title}
        description={article.description}
      />
      <article className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
          {article.body.map((paragraph) => (
            <p key={paragraph} className="mb-5 text-lg leading-8 text-ink/75 last:mb-0">
              {paragraph}
            </p>
          ))}
          <div className="mt-8 rounded-md border border-leaf/20 bg-leaf/10 p-5">
            <h2 className="text-xl font-semibold text-ink">
              See this in the journey
            </h2>
            <p className="mt-3 text-sm leading-6 text-ink/70">
              Connect this article to the full path from digestion to
              mitochondrial ATP production.
            </p>
            <div className="mt-4">
              <ButtonLink href="/journey">Open interactive journey</ButtonLink>
            </div>
          </div>
          {relatedArticles.length > 0 ? (
            <div className="mt-6 rounded-md border border-ink/10 bg-white p-5">
              <h2 className="text-xl font-semibold text-ink">Related lessons</h2>
              <div className="mt-4 grid gap-3">
                {relatedArticles.map((relatedArticle) => (
                  <ButtonLink
                    key={relatedArticle.slug}
                    href={`/learn/${relatedArticle.slug}`}
                    variant="secondary"
                  >
                    {relatedArticle.title}
                  </ButtonLink>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </article>
    </>
  );
}
