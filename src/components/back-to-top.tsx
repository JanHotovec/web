import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      // Show once user is roughly in the lower portion of the page (>= 60%)
      // and always after a decent scroll distance.
      const ratio = total > 0 ? scrolled / total : 0;
      setVisible(scrolled > 600 && ratio > 0.55);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Zpět nahoru"
      className={`liquid-pill fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center rounded-full text-primary transition-all duration-300 hover:-translate-y-0.5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 md:bottom-8 md:right-8 md:h-12 md:w-12 ${
        visible
          ? "pointer-events-auto opacity-100 translate-y-0"
          : "pointer-events-none opacity-0 translate-y-3"
      }`}
    >
      <ArrowUp className="h-5 w-5" strokeWidth={2.25} />
    </button>
  );
}