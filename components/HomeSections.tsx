"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Compass, Sparkles, Users } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Find your corner",
    description: "Browse the communities, causes, and creative spaces that make NSUT feel like home.",
    icon: Compass,
    color: "#4285F4",
  },
  {
    number: "02",
    title: "Meet your people",
    description: "See what each society does, discover its departments, and find the kind of work you want to try.",
    icon: Users,
    color: "#EA4335",
  },
  {
    number: "03",
    title: "Make your move",
    description: "Apply with confidence and start building the skills, friendships, and memories that stay with you.",
    icon: Sparkles,
    color: "#FBBC05",
  },
];

export default function HomeSections() {
  return (
    <section className="overflow-hidden flex justify-center bg-mist-950  py-28 text-mist-100 lg:px-0 lg:py-40">
      <div className="px-2 w-full lg:max-w-3xl xl:max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-end"
        >
          <div>
            <p className="mb-4 font-mont text-xs font-bold uppercase tracking-[0.24em] text-[#34A853]">
              More than a directory
            </p>
            <h2 className="max-w-xl font-mono text-4xl font-bold leading-[0.95] tracking-[-0.06em] sm:text-6xl">
              Your next chapter starts from here.
            </h2>
          </div>
          <p className="max-w-lg font-mont text-base leading-8 text-mist-400 lg:justify-self-end">
            College is not only about what you study. It is the people you meet,
            the side quests you take, and the confidence you build along the way.
            SoxFindr helps you make the first move.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-4 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                className="group relative min-h-80 overflow-hidden rounded-2xl border border-mist-800 bg-mist-900/70 p-6 transition-colors duration-300 hover:border-mist-600"
              >
                <div
                  className="absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-10 blur-3xl transition-opacity duration-300 group-hover:opacity-30"
                  style={{ backgroundColor: step.color }}
                />
                <div className="relative flex items-start justify-between">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{ color: step.color, backgroundColor: `${step.color}18` }}
                  >
                    <Icon size={22} />
                  </div>
                  <span className="font-mono text-sm text-mist-600">{step.number}</span>
                </div>
                <div className="relative mt-20">
                  <h3 className="font-mono text-2xl font-bold">{step.title}</h3>
                  <p className="mt-3 font-mont text-sm leading-7 text-mist-400">{step.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="mt-24 flex flex-col justify-between gap-8 rounded-3xl border border-[#4285F4]/40 bg-gradient-to-br from-[#4285F4]/15 via-mist-900 to-[#4285F4]/10 p-8 sm:p-12 lg:flex-row lg:items-center"
        >
          <div>
            <p className="font-mont text-xs font-bold uppercase tracking-[0.22em] text-[#4285F4]">Built for NSUT</p>
            <h2 className="mt-3 max-w-2xl font-mono text-3xl font-bold tracking-tight sm:text-5xl">
              Don&apos;t wait for the perfect society. Find the right starting point.
            </h2>
          </div>
          <Link href="/societies" >
          <ArrowUpRight className="h-12 w-12 shrink-0 text-[#4285F4] transition-transform duration-300 hover:rotate-45" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
