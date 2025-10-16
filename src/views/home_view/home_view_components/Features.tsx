import { features_data } from "../home_data";
import Feature_Card from "./Feature_Card";

export function Features() {
  return (
    <section className="px-6 py-20 md:py-28 max-w-[1200px] mx-auto w-[95%]">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-[#00BFFF]">
          Everything you need in one app
        </h2>
        <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Powerful features designed to make managing your money simple, secure,
          and accessible from anywhere.
        </p>
      </div>

      <Feature_Card cardData={features_data} />
    </section>
  );
}
