import Link from "next/link";
import Image from "next/image";
import articles from "../public/data.json";

export default function Articles() {
  return (
    <section className="py-10 bg-transparent">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6 sm:px-10 md:px-16 lg:px-24">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white border-2 border-indigo-600 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 aspect-square flex flex-col justify-between p-[10px]"
          >
            {/* Header Strip */}
            <div className="bg-indigo-600 text-white text-center py-2 font-semibold text-sm rounded-md">
              {article.meta.keywords?.[0]?.toUpperCase() || "ARTICLE"}
            </div>

            {/* Image (optional) */}
            {/* {article.image && (
              <div className="relative w-full h-[50%] mt-3 rounded-md overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            )} */}

            {/* Title & Summary */}
            <div className="flex-1 flex flex-col justify-between mt-3">
              <Link href={`/articles/${article.slug}`}>
                <h2 className="text-base md:text-lg font-bold text-gray-900 hover:text-indigo-700 leading-tight mb-2 line-clamp-2">
                  {article.title}
                </h2>
              </Link>
              <p className="text-gray-600 text-sm line-clamp-3 mb-2">
                {article.summary}
              </p>

              <div className="flex justify-between items-center mt-auto text-xs text-gray-500">
                <span>
                  {new Date(article.datePublished).toLocaleDateString("en-IN")}
                </span>
                <Link
                  href={`/articles/${article.slug}`}
                  className="text-indigo-600 font-semibold hover:underline"
                >
                  Read →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
