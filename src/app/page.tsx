import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Works from "@/components/Works";
import Service from "@/components/Service";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  X_PROFILE_URL,
} from "@/lib/site";

// 検索エンジンに「このサイトの運営者は誰か」を機械的に伝える構造化データ(JSON-LD)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "ja",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "くま",
      alternateName: SITE_NAME,
      url: SITE_URL,
      jobTitle: "Frontend Developer",
      sameAs: [X_PROFILE_URL],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // "<" をエスケープして、万一データに "</script>" が混ざっても構造が壊れないようにする
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Works />
        <Service />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
