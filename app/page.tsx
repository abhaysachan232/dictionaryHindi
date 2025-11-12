import Image from "next/image";
import Link from "next/link";
import Articles from "@/components/articles";
import Head from "next/head";

export default function Home() {
  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Head>
        <title>DictionaryHindi – Learn English to Hindi Meanings & Grammar (2025)</title>
        <meta
          name="description"
          content="DictionaryHindi provides 3000+ English to Hindi meanings, grammar lessons, and vocabulary practice for students and learners."
        />
        <meta
          name="keywords"
          content="English to Hindi dictionary, learn English, Hindi meanings, grammar rules, DictionaryHindi"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="DictionaryHindi – English to Hindi Meanings & Grammar Lessons" />
        <meta
          property="og:description"
          content="Improve your English vocabulary and grammar with 3000+ bilingual word meanings on DictionaryHindi."
        />
        <meta property="og:image" content="/images/banner-logo.webp" />
        <meta property="og:url" content="https://www.dictionaryhindi.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.dictionaryhindi.com/" />
      </Head>

      {/* ✅ Hero Section */}
      <section
        className="flex flex-col md:flex-row items-center justify-between 
        px-8 sm:px-10 md:px-24 lg:px-32 
        py-16 md:py-24 
        bg-gradient-to-r from-blue-50 via-white to-indigo-50 
        rounded-3xl shadow-sm mt-8 mb-16 gap-10"
      >
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left space-y-6 md:pl-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            3000+ English to Hindi Meanings
            <br className="hidden md:block" />
            <span className="text-indigo-600"> and Grammar Lessons</span>
          </h1>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            <strong>DictionaryHindi</strong> helps you improve your vocabulary and grammar skills 
            through simple bilingual lessons designed for students, educators, and language enthusiasts.
          </p>

          {/* CTA Button */}
          <div className="pt-2">
            <Link
              href="/index.html"
              className="inline-block bg-indigo-600 text-white px-10 py-3 rounded-full 
              text-lg font-semibold hover:bg-indigo-700 transition-all duration-300 
              shadow-md hover:shadow-lg"
            >
              Visit Now →
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            src="/images/banner-logo.webp"
            alt="DictionaryHindi learning banner"
            width={420}
            height={420}
            className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            priority
          />
        </div>
      </section>

      {/* ✅ Articles Section */}
      <section className="px-8 sm:px-10 md:px-24 lg:px-32 py-12 bg-white">
        <Articles />
      </section>

      {/* ✅ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "DictionaryHindi",
            "url": "https://www.dictionaryhindi.com/",
            "logo": "https://www.dictionaryhindi.com/images/banner-logo.webp",
            "description":
              "DictionaryHindi offers 3000+ English to Hindi meanings and grammar lessons for learners, students, and teachers.",
            "sameAs": [
              "https://www.facebook.com/DictionaryHindi",
              "https://twitter.com/DictionaryHindi",
              "https://www.instagram.com/DictionaryHindi"
            ],
          }),
        }}
      />
    </>
  );
}
