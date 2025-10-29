import Image from "next/image";
import Articles from '@/components/articles'
import Link from "next/link";

export default function Home() {
  return (
<>
      <div className="banner-content">
        <div className="right-content" id="lg-none">
          <img src="/images/banner-logo.webp" alt="banner-logo" width={400} />
        </div>

        <div className="left-content">
          <h1>
            3000+ Meanings
            <br /> and Grammar
          </h1>
          <p>
            DictionaryHindi is a valuable resource for students,{" "}
            <br className="none768" />
            educators, and language enthusiasts who want to{" "}
            <br className="none768" />
            develop their proficiency in both English and Hindi.
          </p>
          <Link href="/index.html">
            <button>Visit Now</button>
          </Link>
        </div>

        <div className="right-content" id="sm-none">
          <img src="/images/banner-logo.webp" alt="banner-logo" width={400} />
        </div>
      </div>
<Articles/>
</>
  );
}
