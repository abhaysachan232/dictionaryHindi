import { Metadata } from "next";
import { notFound } from "next/navigation";
import articles from "../../../public/data.json";

type Section = {
  heading: string;
  content: string;
};

type Article = {
  slug: string;
  title: string;
  summary: string;
  author?: string;
  datePublished: string;
  dateModified?: string;
  image: string;
  keywords?: string[];
  sections?: Section[];
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

// ✅ Metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article: Article | undefined = articles.find((a: Article) => a.slug === slug);

  if (!article) {
    return { title: "Not Found", description: "Content not available" };
  }

  return {
    title: article.title,
    description: article.summary,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article: Article | undefined = articles.find((a: Article) => a.slug === slug);

  if (!article) return notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.summary,
    author: { "@type": "Person", name: article.author || "Admin" },
    publisher: {
      "@type": "Organization",
      name: "DictionaryHindi",
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    image: article.image,
    keywords: article.keywords?.join(", "),
  };

  return (
    <main className="container mx-auto p-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p className="mb-6 text-gray-700">{article.summary}</p>

      {article.sections?.map((sec: Section, idx: number) => (
        <section key={idx} className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">{sec.heading}</h2>
          <p className="text-gray-700 whitespace-pre-line">{sec.content}</p>
        </section>
      ))}
    </main>
  );
}

// ✅ Static params for prerendering
export function generateStaticParams() {
  return articles.map((a: Article) => ({ slug: a.slug }));
}
