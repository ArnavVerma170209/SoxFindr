import type { Society } from "@/db/schema";
import { cn } from "@/lib/utils";

const categoryColors: Record<string, string> = {
  Technical: "#7562eb",
  Cultural: "#eb6262",
  Literary: "#e7eb62",
  Social: "#62ebe0",
};

const Card = (soc: Society) => {
  const color = categoryColors[soc.category] ?? "#7562eb";

  return (
    <div className="lg:h-full h-72  flex flex-col justify-between px-4 py-3 text-mist-100 w-full bg-mist-800 rounded-xl">
      <div className="flex h-full flex-col justify-between">
       <div>
        <span className="font-mono text-[22px] font-bold">
          {soc.name}
        </span>

        <br />

        <p
          className={cn(
            "flex w-min rounded-full px-2 py-1 mt-2 text-[12px] tracking-tighter font-mont gap-4 font-normal"
          )}
          style={{
            color: color,
            backgroundColor: `${color}40`,
            border: `1px solid ${color}`,
          }}
        >
          {soc.category}
        </p>
</div>
        <br />

        <p className="font-mont tracking-tighter  flex h-full items-end justify-end ">
          {soc.description}
        </p>
      </div>

      {/* <div>
        Apply
      </div> */}
    </div>
  );
};

export default Card;