import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-background/90 backdrop-blur sticky top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="font-display text-2xl text-primary">
            Kari Jonsson<span className="text-accent-foreground">, MSN, RN, WHNP-BC</span>
          </Link>
          <nav className="hidden gap-8 text-sm md:flex">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="hover:text-primary" activeProps={{ className: "text-primary font-medium" }} activeOptions={{ exact: true }}>
                {n.label}
              </Link>
            ))}
          </nav>
          <Link to="/contact" className="rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground hover:opacity-90">
            Book a visit
          </Link>
        </div>
      </header>
      <main>{children}</main>
      <footer className="mt-24 bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3 text-sm">
          <div>
            <p className="font-display text-xl">Kari Jonsson, MSN, RN, WHNP-BC</p>
            <p className="mt-2 opacity-80">Women's Health Nurse Practitioner</p>
          </div>
          <div className="opacity-80">
            <p>Mon–Thu 8:30am – 5:00pm</p>
            <p>Fri 8:30am – 12:00pm</p>
          </div>
          <div className="opacity-80">
            <p>(415) 830-7750</p>
            <p>karijonsson415@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
        <h1 className="mt-4 font-display text-5xl">{title}</h1>
        <p className="mt-5 text-lg text-muted-foreground">{intro}</p>
      </div>
    </section>
  );
}

export const services = [
  { title: "Annual Well-Woman Exams", text: "Comprehensive preventive visits, Pap smears, HPV testing and breast exams." },
  { title: "Contraception Counseling", text: "IUD and implant placement, pills, patches and personalized family planning." },
  { title: "Menopause & Hormone Care", text: "Evidence-based support for perimenopause, menopause and hormone therapy." },
  { title: "Prenatal & Preconception", text: "Planning for pregnancy, early prenatal care and postpartum follow-up." },
  { title: "STI Testing & Treatment", text: "Confidential, judgment-free screening and treatment." },
  { title: "Gynecologic Concerns", text: "Irregular periods, PCOS, pelvic pain, infections and more." },
];
