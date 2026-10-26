import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHeader, services } from "@/components/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Kari Jonsson, WHNP-BC" },
      { name: "description", content: "Well-woman exams, contraception, menopause, prenatal and gynecologic care." },
      { property: "og:title", content: "Services | Kari Jonsson, WHNP-BC" },
      { property: "og:description", content: "Comprehensive women's health services." },
    ],
  }),
  component: () => (
    <Shell>
      <PageHeader eyebrow="Services" title="Comprehensive women's health" intro="From adolescence through menopause and beyond, care tailored to you." />
      <div className="mx-auto grid max-w-5xl gap-6 px-6 py-16 md:grid-cols-2">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl border border-border p-8">
            <h2 className="font-display text-2xl text-primary">{s.title}</h2>
            <p className="mt-3 text-muted-foreground">{s.text}</p>
          </div>
        ))}
      </div>
    </Shell>
  ),
});
