"use client";

import { useState } from "react";
import { Landmark, Copy, Check, Info } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const nursery = {
  registration: [
    { item: "Form Collection", amount: "5,000/=" },
    { item: "Form Submission", amount: "25,000/=" },
    { item: "Health Checkups", amount: "20,000/=" },
    { item: "T-Shirts", amount: "15,000/=" },
    { item: "First Three/Four Months Fees", amount: "160,000/= or 120,000/=" },
  ],
  registrationTotal: "225,000/= or 185,000/=",
  tuition: [
    { period: "April – June", amount: "160,000/= or 120,000/=" },
    { period: "July – September", amount: "160,000/= or 120,000/=" },
    { period: "October – December", amount: "— or 120,000/=" },
  ],
  tuitionTotal: "320,000/= or 360,000/=",
  materials: [
    "9 lined notebooks (Pg 200) for Baby, 10 for KGI & KGII",
    "Room notebooks: 2 (Pg 200)",
    "Drawing notebooks: 1 (Pg 200)",
    "Pencils: Box of 3",
    "Crayons: 1 box",
    "Covers for notebooks: 2",
    "Erasers: 5",
    "1 Ream of Paper",
  ],
  extras: [
    { label: "Madrassa (Three Months)", amount: "90,000/=" },
    { label: "Graduation and Field Trip", amount: "40,000/=" },
    { label: "Transportation", amount: "Varies based on location" },
  ],
};

const primary = {
  registration: [
    { item: "Form Collection", amount: "5,000/=" },
    { item: "Form Submission", amount: "30,000/=" },
    { item: "Health Checkups", amount: "20,000/=" },
    { item: "T-Shirts", amount: "15,000/=" },
    { item: "First Three/Four Months Fees", amount: "200,000/= or 150,000/=" },
  ],
  registrationTotal: "270,000/= or 220,000/=",
  tuition: [
    { period: "April – June", amount: "200,000/= or 150,000/=" },
    { period: "July – September", amount: "200,000/= or 150,000/=" },
    { period: "October – December", amount: "— or 150,000/=" },
  ],
  tuitionTotal: "400,000/= or 450,000/=",
  materials: ["1 Ream of Paper"],
  extras: [
    { label: "Madrassa (Three Months)", amount: "90,000/=" },
    { label: "Graduation and Field Trip", amount: "40,000/=" },
    { label: "Transportation", amount: "Varies based on location" },
  ],
};

function FeeTable({ headers, rows, totalLabel, totalValue, accent }) {
  const totalClasses =
    accent === "primary"
      ? "bg-amber text-navy"
      : "bg-navy text-white";

  return (
    <div className="rounded-2xl border border-line overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm min-w-[420px]">
          <thead>
            <tr className="bg-sky text-navy">
              <th className="text-left font-semibold px-5 py-3.5">{headers[0]}</th>
              <th className="text-right font-semibold px-5 py-3.5">{headers[1]}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className={i % 2 === 0 ? "bg-white" : "bg-sky-2"}
              >
                <td className="px-5 py-3.5 text-ink">{row[0]}</td>
                <td className="px-5 py-3.5 text-right text-slate tabular-nums">
                  {row[1]}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className={totalClasses}>
              <td className="px-5 py-3.5 font-semibold">{totalLabel}</td>
              <td className="px-5 py-3.5 text-right font-semibold tabular-nums">
                {totalValue}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

function LevelPanel({ data, level }) {
  return (
    <div className="space-y-10">
      {/* Registration */}
      <div>
        <h3 className="font-display text-xl font-semibold text-navy mb-4">
          Registration and Initial Fees
        </h3>
        <FeeTable
          headers={["Item", "Amount"]}
          rows={data.registration.map((r) => [r.item, r.amount])}
          totalLabel="Total"
          totalValue={data.registrationTotal}
          accent={level}
        />
      </div>

      {/* Tuition */}
      <div>
        <h3 className="font-display text-xl font-semibold text-navy mb-4">
          Tuition Fees
        </h3>
        <FeeTable
          headers={["Period", "Amount"]}
          rows={data.tuition.map((r) => [r.period, r.amount])}
          totalLabel="Total"
          totalValue={data.tuitionTotal}
          accent={level}
        />
      </div>

      {/* Additional fees */}
      <div>
        <h3 className="font-display text-xl font-semibold text-navy mb-4">
          Additional Fees
        </h3>
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="rounded-2xl bg-white border border-line p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-3">
              Materials
            </p>
            <ul className="space-y-2">
              {data.materials.map((m, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-ink leading-relaxed">
                  <span
                    className={`mt-2 h-1 w-1 shrink-0 rounded-full ${
                      level === "primary" ? "bg-amber" : "bg-brand"
                    }`}
                  />
                  {m}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-white border border-line p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-3">
              Other Charges
            </p>
            <ul className="space-y-3">
              {data.extras.map((e, i) => (
                <li
                  key={i}
                  className="flex items-baseline justify-between gap-4 text-sm"
                >
                  <span className="text-ink">{e.label}</span>
                  <span className="text-slate tabular-nums whitespace-nowrap">
                    {e.amount}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function PaymentInfo({ level }) {
  const [copied, setCopied] = useState(false);
  const accountNo = "0726551001";
  const isPrimary = level === "primary";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(accountNo);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard not available — ignore */
    }
  };

  const cardClasses = isPrimary ? "bg-amber text-navy" : "bg-navy text-white";
  const iconWrapClasses = isPrimary ? "bg-navy/10" : "bg-white/10";
  const bodyTextClasses = isPrimary ? "text-navy/70" : "text-white/70";
  const labelClasses = isPrimary ? "text-navy/50" : "text-white/50";
  const copyBtnClasses = isPrimary
    ? "bg-navy/10 hover:bg-navy/20"
    : "bg-white/10 hover:bg-white/20";

  return (
    <div className={`rounded-3xl p-8 sm:p-10 transition-colors duration-200 ${cardClasses}`}>
      <div className="flex items-center gap-3 mb-6">
        <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconWrapClasses}`}>
          <Landmark size={20} />
        </div>
        <h3 className="font-display text-xl font-semibold">Payment Information</h3>
      </div>

      <p className={`text-sm mb-6 ${bodyTextClasses}`}>
        All payments should be made to the account below.
      </p>

      <dl className="grid sm:grid-cols-3 gap-5">
        <div>
          <dt className={`text-xs uppercase tracking-widest mb-1 ${labelClasses}`}>
            Bank
          </dt>
          <dd className="font-semibold">Islamic Bank PBZ</dd>
        </div>
        <div>
          <dt className={`text-xs uppercase tracking-widest mb-1 ${labelClasses}`}>
            Account Number
          </dt>
          <dd className="flex items-center gap-2 font-semibold tabular-nums">
            {accountNo}
            <button
              onClick={handleCopy}
              aria-label="Copy account number"
              className={`flex h-6 w-6 items-center justify-center rounded-md transition ${copyBtnClasses}`}
            >
              {copied ? <Check size={12} /> : <Copy size={12} />}
            </button>
          </dd>
        </div>
        <div>
          <dt className={`text-xs uppercase tracking-widest mb-1 ${labelClasses}`}>
            Account Name
          </dt>
          <dd className="font-semibold">AB Higher Career Academic Ltd</dd>
        </div>
      </dl>
    </div>
  );
}

export default function FeesPage() {
  const [level, setLevel] = useState("nursery");
  const data = level === "nursery" ? nursery : primary;

  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="Fees and Tuition"
        text="A clear breakdown of registration, tuition, and additional fees for Nursery and Primary."
      />

      <section className="section-pad">
        <div className="container-hc">
          {/* Level switcher */}
          <Reveal>
            <div className="flex justify-center mb-6">
              <div className="flex w-full sm:w-auto rounded-full bg-sky p-1.5 sm:p-2">
                {[
                  { key: "nursery", label: "Nursery" },
                  { key: "primary", label: "Primary" },
                ].map((tab) => {
                  const isActive = level === tab.key;
                  const activeColor =
                    tab.key === "primary" ? "bg-amber" : "bg-navy";
                  return (
                    <button
                      key={tab.key}
                      onClick={() => setLevel(tab.key)}
                      className={`flex-1 sm:flex-none px-6 sm:px-10 py-3 sm:py-3.5 rounded-full text-base sm:text-lg font-semibold transition-colors duration-200 ${
                        isActive
                          ? `${activeColor} text-white shadow-sm`
                          : "text-navy hover:bg-white/60"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="flex items-start justify-center gap-2 text-sm text-slate mb-10 max-w-2xl mx-auto text-center">
              <Info size={16} className="mt-0.5 shrink-0 text-brand" />
              Explore the breakdown of tuition and fees for{" "}
              {level === "nursery" ? "Nursery" : "Primary"}. Where two amounts
              are shown, they reflect the two available payment plans.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <LevelPanel data={data} level={level} />
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10">
              <PaymentInfo level={level} />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}