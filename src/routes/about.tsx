import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHeader } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Kari Jonsson, MSN, RN, WHNP-BC" },
      { name: "description", content: "Vanderbilt-trained Women's Health Nurse Practitioner with UCSF obstetric training and years of doula experience." },
      { property: "og:title", content: "About Kari Jonsson, MSN, RN, WHNP-BC" },
      { property: "og:description", content: "Trauma-informed, inclusive, evidence-based women's health care." },
    ],
  }),
  component: About,
});

const education = [
  { when: "August 2026", where: "Vanderbilt University School of Nursing", what: "Master of Science in Nursing — Women's Health / Gender-Related Nurse Practitioner · GPA 3.93" },
  { when: "Undergraduate", where: "New York University, Gallatin School of Individualized Study", what: "BA, Global Maternal and Child Health · Magna Cum Laude (top 10%) · GPA 3.99" },
];

const experience = [
  { where: "University of California San Francisco (UCSF)", what: "Obstetrics outpatient care — 500 clinical hours. Prenatal & postpartum assessments, care plans, complication monitoring, patient education, IUD placement and inductions." },
  { where: "Mendocino Community Health Center", what: "Gynecology outpatient care — preventive care, Pap smears, routine and acute gynecologic care." },
  { where: "Vanderbilt University Medical Center", what: "Acute care and labor & delivery rotations." },
  { where: "Carriage House Birth · 2019–2024", what: "Trained birth & postpartum doula providing holistic, trauma-informed bedside support." },
  { where: "NewYork-Presbyterian Brooklyn Methodist", what: "PREM volunteer surveyor advocating for maternal and postpartum patient experience." },
];

function About() {
  return (
    <Shell>
      <PageHeader eyebrow="About" title="Meet Kari" intro="Kari Jonsson, MSN, RN, WHNP-BC — Women's Health / Gender-Related Nurse Practitioner." />
      <div className="mx-auto max-w-4xl space-y-16 px-6 py-16">
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>Kari's path into women's health began at the bedside as a birth and postpartum doula, where she learned how much safety, trust and being heard shape a patient's experience.</p>
          <p>Trained at Vanderbilt, UCSF and Mendocino Community Health Center, she now brings that same presence to clinical care: trauma-informed, inclusive of every gender and identity, and grounded in current evidence — from prenatal and postpartum care to gynecology, contraception, and sexual & reproductive health.</p>
        </div>

        <section>
          <h2 className="font-display text-3xl">Education</h2>
          <ol className="mt-8 space-y-8 border-l-2 border-accent pl-8">
            {education.map((e) => (
              <li key={e.where} className="relative">
                <span className="absolute -left-[2.45rem] top-1.5 h-3 w-3 rounded-full bg-primary" />
                <p className="text-xs uppercase tracking-widest text-primary">{e.when}</p>
                <h3 className="mt-1 font-display text-xl">{e.where}</h3>
                <p className="text-muted-foreground">{e.what}</p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="font-display text-3xl">Clinical experience</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {experience.map((x) => (
              <div key={x.where} className="rounded-2xl border border-border p-6">
                <h3 className="font-display text-xl text-primary">{x.where}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{x.what}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-secondary p-8">
          <h2 className="font-display text-2xl">Certifications & memberships</h2>
          <ul className="mt-4 list-disc space-y-1 pl-5">
            <li>Registered Nurse (RN)</li>
            <li>Basic Life Support (BLS) & ACLS — American Heart Association</li>
            <li>Member, Nursing Students for Sexual and Reproductive Health (NSSRH)</li>
          </ul>
        </section>
      </div>
    </Shell>
  );
}
