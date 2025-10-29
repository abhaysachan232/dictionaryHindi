"use client";

import Link from "next/link";
import { useEffect } from "react";


export default function Header() {
  useEffect(() => {
    // purani site ka JS (menu toggle etc.)
    const script = document.createElement("script");
    script.src = "/js/app.js"; // ✅ public folder se load hoga
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <header id="header">
      <nav>
        <div className="logo">
          <Link href="/">
            <h1>DictionaryHindi</h1>
          </Link>
        </div>

        <div id="menu-bar" onClick={() => (window as any).menuOnClick?.()}>
          <div id="bar1" className="bar"></div>
          <div id="bar2" className="bar"></div>
          <div id="bar3" className="bar"></div>
        </div>

        <div className="navlinks">
          <ul>
            <li className="active">
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/grammar.html">Grammar</Link>
            </li>
            <li>
              <Link href="/vocabulary.html">Vocabulary</Link>
            </li>
            <li>
              <Link href="/meanings.html">Meanings</Link>
            </li>
            <li>
              <Link href="/contact.html">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
