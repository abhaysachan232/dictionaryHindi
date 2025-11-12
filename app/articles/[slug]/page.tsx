import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import articles from "../../../public/data.json";

type Section = { heading: string; content: string };
type FAQ = { question: string; answer: string };
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
  faq?: FAQ[];
};
type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article: Article | undefined = articles.find((a: Article) => a.slug === slug);
  if (!article) return { title: "Not Found", description: "Content not available" };

  return {
    title: article.title,
    description: article.summary,
    keywords: article.keywords,
    openGraph: {
      title: article.title,
      description: article.summary,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article: Article | undefined = articles.find((a: Article) => a.slug === slug);
  if (!article) return notFound();

  // ✅ Related articles
  const related = articles.filter((a) => a.slug !== slug).slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://learnaigalaxy.com/" },
          { "@type": "ListItem", position: 2, name: "Articles", item: "https://learnaigalaxy.com/articles" },
          { "@type": "ListItem", position: 3, name: article.title, item: `https://learnaigalaxy.com/${article.slug}` },
        ],
      },
      {
        "@type": "NewsArticle",
        headline: article.title,
        description: article.summary,
        author: { "@type": "Person", name: article.author || "Abhay Sachan" },
        publisher: {
          "@type": "Organization",
          name: "Learnaigalaxy",
          logo: {
            "@type": "ImageObject",
            url: "https://learnaigalaxy.com/images/banner-logo.webp",
          },
        },
        datePublished: article.datePublished,
        dateModified: article.dateModified || article.datePublished,
        image: article.image,
        keywords: article.keywords?.join(", "),
        mainEntityOfPage: `https://learnaigalaxy.com/${article.slug}`,
      },
    ],
  };

  return (
    <main className="articles min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="max-w-4xl mx-auto bg-white/95 rounded-3xl shadow-lg border border-indigo-100 p-6 sm:p-12 backdrop-blur-sm">
        {/* Breadcrumb */}
        {/* <nav className="text-sm text-gray-500 mb-6 text-center">
          <Link href="/" className="hover:text-indigo-600">Home</Link> &nbsp;›&nbsp;
          <Link href="/articles" className="hover:text-indigo-600">Articles</Link> &nbsp;›&nbsp;
          <span className="text-gray-700 font-medium">{article.title}</span>
        </nav> */}

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center leading-tight mb-5 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
          {article.title}
        </h1>

        {/* Meta Info */}
        <p className="text-center text-gray-500 text-sm mb-8">
          ✍️ <span className="font-semibold text-indigo-600">{article.author || "Admin"}</span> •{" "}
          {new Date(article.datePublished).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </p>

        {/* Banner */}
        {/* {article.image && (
          <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md mb-10">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>
        )} */}

        {/* Summary */}
        <div className="text-lg text-gray-700 mb-10 text-center leading-relaxed bg-gradient-to-r from-indigo-50 via-white to-blue-50 px-6 py-5 rounded-xl border-l-4 border-indigo-600 shadow-sm">
          {article.summary}
          <br />
          Learn more on our{" "}
          <Link href="/articles/english-fast-kaise-sikhein" className="text-indigo-600 font-semibold hover:underline">
            English Learning Tips
          </Link>{" "}
          or get{" "}
          <Link href="https://sarkariresult.rest" className="text-blue-600 font-semibold hover:underline">
            Sarkari Result job updates
          </Link>.
        </div>

        {/* ✅ Article Body */}
        <article className="text prose prose-lg max-w-none text-gray-800 prose-headings:text-indigo-700 prose-a:text-indigo-600 prose-a:underline-offset-4">
          {article.sections?.map((sec, idx) => (
            <section key={idx} className="mb-12">
              <h2 className="heading text-2xl font-bold mb-4 text-indigo-700 border-b-2 border-indigo-100 pb-2">
                {sec.heading}
              </h2>
              <div
                className="
                  leading-relaxed text-gray-700 prose-p:mb-4 prose-li:list-disc prose-li:ml-6
                  prose-pre:bg-gradient-to-br from-gray-50 to-indigo-50 prose-pre:p-5 prose-pre:rounded-xl prose-pre:overflow-x-auto prose-pre:whitespace-pre-wrap prose-pre:shadow-sm
                  prose-code:text-indigo-700 prose-code:font-semibold prose-code:bg-indigo-50 prose-code:px-1.5 prose-code:rounded-md
                "
                dangerouslySetInnerHTML={{ __html: sec.content }}
              />
            </section>
          ))}
        </article>

        {/* ✅ FAQ Section */}
        {article.faq && article.faq.length > 0 && (
          <section className="mt-20">
            <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {article.faq.map((q, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-r from-indigo-50 via-white to-blue-50 border border-indigo-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <h3 className="heading font-semibold text-gray-900 mb-2 text-lg" dangerouslySetInnerHTML={{__html:q.question}}></h3>
                  <p className=" heading text-gray-700 text-base leading-relaxed" dangerouslySetInnerHTML={{__html:q.answer}}></p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ✅ Related Articles */}
        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8 text-indigo-700">Related Articles</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  href={`/articles/${r.slug}`}
                  key={r.slug}
                  className="block bg-gradient-to-br from-white to-indigo-50 border border-indigo-100 rounded-xl p-5 shadow-sm hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-gray-800 mb-2">{r.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{r.summary}</p>
                  <span className="text-indigo-600 text-sm font-medium hover:underline">Read More →</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Footer */}
        <div className="mt-16 pt-6 border-t border-gray-100 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Learnaigalaxy • Written by{" "}
          <span className="text-indigo-600 font-medium">{article.author || "Abhay Sachan"}</span>
        </div>
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return articles.map((a: Article) => ({ slug: a.slug }));
}
