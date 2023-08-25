import { ChartCard } from "./chartCard";
import { LiveCard } from "./liveCard";

export function Section() {
  return (
    <section className="bg-stone-50 px-4 pt-4 pb-2">
      <div>
        <ChartCard />
        <LiveCard />
      </div>
    </section>
  );
}
