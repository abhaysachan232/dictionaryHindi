"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="left">
          <h1>DictionaryHindi</h1>
          <p>
            DictionaryHindi is a valuable resource for students, educators, and language enthusiasts who want
            to develop their proficiency in both English and Hindi. Whether you're looking to improve your
            grammar, expand your vocabulary, or explore the meanings of words.
          </p>
        </div>

        <div className="right">
          <h3>Quick Links</h3>
          <Link href="/">Home</Link>
          <Link href="/grammar.html">Grammar</Link>
          <Link href="/vocabulary.html">Vocabulary</Link>
          <Link href="/meanings.html">Meanings</Link>
          <Link href="/contact.html">Contact Us</Link>
        </div>
      </div>

      <div className="other-links">
        <a href="./policy.html" target="_blank">Privacy Policy</a>
      </div>

      <hr style={{ border: "1px solid #8EB6D6" }} />

      <div className="copyright">
        <p>© 2025 Dictionary Hindi | All Rights Reserved!</p>
      </div>
    </footer>
  );
}
