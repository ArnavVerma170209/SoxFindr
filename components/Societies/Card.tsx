import type { Society } from "@/db/schema";
import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";

const categoryColors: Record<string, string> = {
  Technical: "#4285F4",
  Cultural: "#EA4335",
  Literary: "#FBBC05",
  Social: "#34A853",
};

const Card = (soc: Society) => {
  const color = categoryColors[soc.category] ?? "#4285F4";

  return (
    <div
      className="group relative h-full min-h-[290px] overflow-hidden flex flex-col justify-between p-6 text-mist-100 w-full bg-mist-800/90 border border-mist-700/70 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-mist-500 hover:bg-mist-800"
      style={{ "--society-color": color } as CSSProperties}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-16 h-40 w-40 rounded-full opacity-20 blur-2xl transition-opacity duration-300 group-hover:opacity-40"
        style={{ backgroundColor: color }}
      />
      <div className="relative flex items-start justify-between gap-4">
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

      <div className="relative mt-8">
        <h2 className="max-w-[18rem] font-mono text-2xl font-bold leading-tight tracking-tight text-mist-50">
          {soc.name}
        </h2>
        <p className="mt-4 line-clamp-4 font-mont text-sm leading-relaxed text-mist-300">
          {soc.description}
        </p>
      </div>

      <div className="relative mt-8 flex items-center justify-between border-t border-mist-700/70 pt-4">
        <span className="font-mont text-xs font-semibold uppercase tracking-wider text-mist-400">
          Explore society
        </span>
        <span
          className="flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 group-hover:rotate-45"
          style={{ borderColor: `${color}80`, color }}
        >
          <ArrowUpRight size={17} strokeWidth={2.5} />
        </span>
      </div>
    </div>
  );
};

export default Card;