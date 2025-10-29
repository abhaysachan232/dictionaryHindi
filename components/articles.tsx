import Link from "next/link";
import articles from "../public/data.json";

export default function ArticleListPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 md:px-16">
      <h1 className="text-3xl md:text-5xl font-bold text-indigo-900 mb-10 text-center">
        Trending Articles
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/articles/${article.slug}`}
            className="block p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 group"
          >
            {article.keywords?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="text-xs font-semibold bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                  {article.keywords[0]}
                </span>
              </div>
            )}

            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 group-hover:text-indigo-700 mb-2">
              {article.title}
            </h2>

            <p className="text-gray-700 text-sm line-clamp-4 mb-3">{article.summary}</p>

            <div className="flex justify-between items-center text-gray-400 text-xs">
              <span>{new Date(article.datePublished).toLocaleDateString()}</span>
              <span className="text-indigo-600 font-medium hover:underline">Read More →</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
