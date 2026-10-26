import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Shell, PageHeader } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book an Appointment | Kari Jonsson, WHNP-BC" },
      { name: "description", content: "Request an appointment with Kari Jonsson, WHNP-BC." },
      { property: "og:title", content: "Book with Kari Jonsson, WHNP-BC" },
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
      <PageHeader eyebrow="Contact" title="Request an appointment" intro="New and returning patients welcome. We'll reach out within one business day." />
      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-16 md:grid-cols-[1fr_1.4fr]">
        <div className="space-y-4 text-muted-foreground">
          <p><strong className="text-foreground">Phone</strong><br />(555) 123-4567</p>
          <p><strong className="text-foreground">Email</strong><br />hello@karijonssonwhnp.com</p>
          <p><strong className="text-foreground">Hours</strong><br />Mon–Thu 8:30–5:00<br />Fri 8:30–12:00</p>
        </div>
        {sent ? (
          <div className="rounded-2xl bg-secondary p-10 text-center font-display text-2xl">Thank you — we'll be in touch soon.</div>
        ) : (
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <input required placeholder="Full name" className={field} />
            <input required type="email" placeholder="Email" className={field} />
            <input placeholder="Phone" className={field} />
            <textarea rows={5} placeholder="Reason for visit" className={field} />
            <button className="rounded-full bg-primary px-8 py-3 text-primary-foreground hover:opacity-90">Send request</button>
          </form>
        )}
      </div>
    </Shell>
  );
}
