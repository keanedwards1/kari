import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/site";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kari Jonsson, MSN, RN, WHNP-BC | Women's Health Nurse Practitioner" },
      { name: "description", content: "Kari Jonsson, MSN, RN, WHNP-BC — Women's Health / Gender-Related Nurse Practitioner trained at Vanderbilt and UCSF." },
      { property: "og:title", content: "Kari Jonsson, MSN, RN, WHNP-BC | Women's Health" },
      { property: "og:description", content: "Women's Health Nurse Practitioner — trauma-informed, inclusive, evidence-based." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Shell>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Women's Health Nurse Practitioner</p>
          <h1 className="mt-5 font-display text-5xl leading-tight md:text-6xl">Care that listens, at every stage of life.</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            I'm Kari Jonsson, MSN, RN, WHNP-BC. My clinical focus is trauma-informed, inclusive, evidence-based care across prenatal, postpartum, gynecologic and sexual &amp; reproductive health.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/about" className="rounded-full bg-primary px-6 py-3 text-primary-foreground hover:opacity-90">About Kari</Link>
            <Link to="/contact" className="rounded-full border border-primary px-6 py-3 text-primary hover:bg-secondary">Get in touch</Link>
          </div>
        </div>
        <img src={hero} alt="Calm, welcoming exam room" className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-xl" />
      </section>


      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="font-display text-3xl italic leading-snug">
          "Every woman deserves a provider who takes the time to understand her whole story."
        </p>
        <p className="mt-4 text-sm uppercase tracking-widest text-primary">— Kari Jonsson</p>
      </section>
    </Shell>
  );
}
