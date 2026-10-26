import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHeader } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Kari Jonsson, MSN, RN, WHNP-BC" },
      { name: "description", content: "Meet Kari Jonsson, a board-certified Women's Health Nurse Practitioner." },
      { property: "og:title", content: "About Kari Jonsson, MSN, RN, WHNP-BC" },
      { property: "og:description", content: "Board-certified Women's Health Nurse Practitioner." },
    ],
  }),
  component: () => (
    <Shell>
      <PageHeader eyebrow="About" title="Meet Kari" intro="Board-certified Women's Health Nurse Practitioner." />
      <div className="mx-auto max-w-3xl space-y-6 px-6 py-16 text-lg leading-relaxed text-muted-foreground">
        <p>Kari Jonsson is a board-certified Women's Health Nurse Practitioner (MSN, RN, WHNP-BC) dedicated to providing compassionate, patient-centered care.</p>
        <p>Her approach blends the latest clinical evidence with genuine partnership — taking time to listen, explain options clearly, and support each patient's goals.</p>
        <div className="rounded-2xl bg-secondary p-8 text-base text-foreground">
          <h2 className="font-display text-2xl">Credentials</h2>
          <ul className="mt-4 list-disc space-y-1 pl-5">
            <li>Board Certified, National Certification Corporation (NCC)</li>
            <li>Master of Science in Nursing, Women's Health</li>
            <li>Member, NPWH</li>
          </ul>
        </div>
      </div>
    </Shell>
  ),
});
