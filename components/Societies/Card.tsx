import type { Society } from "@/db/schema";
import { ArrowUpRight } from "lucide-react";

const categoryColors: Record<string, string> = {
  Technical: "#4285F4",
  Cultural: "#EA4335",
  Literary: "#FBBC05",
  Social: "#34A853",
};

type SocietyCardProps = Society & { image?: string };

const Card = (soc: SocietyCardProps) => {
  const color = categoryColors[soc.category] ?? "#4285F4";
  return (
    <div
      className="group relative h-full min-h-[330px] overflow-hidden flex flex-col justify-between p-6 text-mist-100 w-full bg-mist-800/90 border border-mist-700/70 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:border-mist-500 hover:bg-mist-800"
    >
      {soc.image && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-cover bg-center grayscale opacity-25 transition-all duration-500 group-hover:scale-105 group-hover:opacity-35"
          style={{ backgroundImage: `url("${soc.image}")` }}
        />
      )}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-mist-950/20 via-mist-950/45 to-mist-950/95"
      />
      <div className="relative z-10 flex items-start justify-between gap-4">
        <p
          className="rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] font-mont"
          style={{
            color,
            backgroundColor: `${color}18`,
            borderColor: `${color}80`,
          }}
        >
          {soc.category}
        </p>
        <span className="font-mono text-xs text-mist-500">
          {String(soc.id + 1).padStart(2, "0") }
        </span>
      </div>

      <div className="relative z-10 mt-8">
        <h2 className="max-w-[18rem] font-mono text-2xl font-bold leading-tight tracking-tight text-mist-50 transition-colors duration-300 group-hover:text-white">
          {soc.name}
        </h2>
        <p className="mt-3 line-clamp-3 font-mont text-sm leading-relaxed text-mist-300 transition-transform duration-300 group-hover:translate-x-1">
          {soc.description}
        </p>
      </div>

      <div className="relative z-10 mt-8 flex items-center justify-between border-t border-mist-700/70 pt-4">
        <span className="font-mont text-xs font-semibold uppercase tracking-wider text-mist-400">
          Explore society
        </span>
        <span
          className="flex h-9 w-9 items-center justify-center rounded-full border border-mist-600 text-mist-300 transition-all duration-300 group-hover:rotate-45"
        >
          <ArrowUpRight size={17} strokeWidth={2.5} />
        </span>
      </div>
    </div>
  );
};

export default Card;