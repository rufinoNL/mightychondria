import Link from "next/link";
import type { Article } from "@/types/content";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="rounded-lg border border-ink/10 bg-white p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-leaf">
        {article.category}
      </p>
      <h3 className="mt-3 text-xl font-semibold text-ink">
        <Link href={`/learn/${article.slug}`} className="hover:text-leaf">
          {article.title}
        </Link>
      </h3>
      <p className="mt-3 text-sm leading-6 text-ink/70">{article.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-leaf/10 px-3 py-1 text-xs font-medium text-leaf"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
