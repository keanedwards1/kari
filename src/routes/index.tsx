import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell, services } from "@/components/site";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kari Jonsson, MSN, RN, WHNP-BC | Women's Health Nurse Practitioner" },
      { name: "description", content: "Compassionate, personalized women's health care from Kari Jonsson, MSN, RN, WHNP-BC — well-woman exams, contraception, menopause care and more." },
      { property: "og:title", content: "Kari Jonsson, MSN, RN, WHNP-BC | Women's Health" },
      { property: "og:description", content: "Compassionate women's health care at every stage of life." },
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
            I'm Kari Jonsson, MSN, RN, WHNP-BC. I provide thoughtful, evidence-based gynecologic and reproductive care in an unhurried, welcoming setting.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="rounded-full bg-primary px-6 py-3 text-primary-foreground hover:opacity-90">Schedule an appointment</Link>
            <Link to="/services" className="rounded-full border border-primary px-6 py-3 text-primary hover:bg-secondary">View services</Link>
          </div>
        </div>
        <img src={hero} alt="Calm, welcoming exam room" className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-xl" />
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-display text-4xl">How I can help</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl bg-card p-7 shadow-sm">
                <div className="mb-4 h-1 w-10 rounded bg-accent" />
                <h3 className="font-display text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
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
