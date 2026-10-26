import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Shell, PageHeader } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book an Appointment | Kari Jonsson, MSN, RN, WHNP-BC" },
      { name: "description", content: "Request an appointment with Kari Jonsson, MSN, RN, WHNP-BC." },
      { property: "og:title", content: "Book with Kari Jonsson, MSN, RN, WHNP-BC" },
      { property: "og:description", content: "Request an appointment today." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const field = "w-full rounded-lg border border-input bg-background px-4 py-3";
  return (
    <Shell>
      <PageHeader eyebrow="Contact" title="Book an appointment or consultation" intro="New and returning patients welcome. We'll reach out within one business day." />
      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-16 md:grid-cols-[1fr_1.4fr]">
        <div className="space-y-4 text-muted-foreground">
          <p><strong className="text-foreground">Phone</strong><br />(415) 830-7750</p>
          <p><strong className="text-foreground">Email</strong><br />karijonsson415@gmail.com</p>
          <p><strong className="text-foreground">Location</strong><br />San Francisco Bay Area, CA</p>
        </div>
        {sent ? (
          <div className="rounded-2xl bg-secondary p-10 text-center font-display text-2xl">Thank you — we'll be in touch soon.</div>
        ) : (
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <input required placeholder="Full name" className={field} />
            <input required type="email" placeholder="Email" className={field} />
            <input placeholder="Phone" className={field} />
            <select className={field} defaultValue="">
              <option value="" disabled>Type of visit</option>
              <option>Prenatal care</option><option>Postpartum wellness</option><option>Gynecology / preventive</option>
              <option>Contraception</option><option>Sexual &amp; reproductive health</option><option>Consultation</option>
            </select>
            <textarea rows={5} placeholder="Reason for visit" className={field} />
            <button className="rounded-full bg-primary px-8 py-3 text-primary-foreground hover:opacity-90">Send request</button>
          </form>
        )}
      </div>
    </Shell>
  );
}
