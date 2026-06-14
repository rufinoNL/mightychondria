interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 lg:px-8">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-wide text-leaf">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="mt-3 text-4xl font-bold tracking-normal text-ink sm:text-5xl">
        {title}
      </h1>
      <p className="mt-5 text-lg leading-8 text-ink/70">{description}</p>
    </div>
  );
}
