import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Shell, PageHeader } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Kari Jonsson, MSN, RN, WHNP-BC" },
      { name: "description", content: "Get in touch with Kari Jonsson, MSN, RN, WHNP-BC." },
      { property: "og:title", content: "Contact Kari Jonsson, MSN, RN, WHNP-BC" },
      { property: "og:description", content: "Get in touch with Kari." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const field = "w-full rounded-lg border border-input bg-background px-4 py-3";
  return (
    <Shell>
      <PageHeader eyebrow="Contact" title="Get in touch" intro="Questions, collaborations or professional inquiries — I'd love to hear from you." />
      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-16 md:grid-cols-[1fr_1.4fr]">
        <div className="space-y-4 text-muted-foreground">
          <p><strong className="text-foreground">Phone</strong><br />(415) 830-7750</p>
          <p><strong className="text-foreground">Email</strong><br />karijonsson415@gmail.com</p>
          <p><strong className="text-foreground">Location</strong><br />San Francisco Bay Area, CA</p>
        </div>
        {sent ? (
          <div className="rounded-2xl bg-secondary p-10 text-center font-display text-2xl">Thank you — I'll be in touch soon.</div>
        ) : (
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <input required placeholder="Full name" className={field} />
            <input required type="email" placeholder="Email" className={field} />
            <input placeholder="Phone" className={field} />
            <textarea rows={5} placeholder="Message" className={field} />
            <button className="rounded-full bg-primary px-8 py-3 text-primary-foreground hover:opacity-90">Send message</button>
          </form>
        )}
      </div>
    </Shell>
  );
}
