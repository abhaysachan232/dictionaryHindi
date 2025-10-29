import { notFound } from "next/navigation";
import articles from "../../../public/data.json";
import Head from "next/head";

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug); // <-- Slug matching
  if (!article) return notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": article.title,
    "description": article.summary,
    "author": { "@type": "Person", "name": article.author || "Admin" },
    "publisher": {
      "@type": "Organization",
      "name": "DictionaryHindi",
      "logo": {
        "@type": "ImageObject",
        "url": "https://learnaigalaxy.com/images/DictioanaryHindi-faviIcon.jpg"
      }
    },
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished,
    "image": article.image,
    "keywords": article.keywords?.join(", ")
  };

  return (
    <>
      <Head>
        <title>{article.title}</title>
        <meta name="description" content={article.summary} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
        <p className="text-gray-700 mb-6">{article.summary}</p>

        {article.sections.map((sec, idx) => (
          <section key={idx} className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">{sec.heading}</h2>
            <p className="text-gray-700">{sec.content}</p>
          </section>
        ))}
      </main>
    </>
  );
}
