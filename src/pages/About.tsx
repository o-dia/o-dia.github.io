import { Metadata } from "../components/Metadata";

const interests = [
  "Lorem ipsum",
  "Dolor sit amet",
  "Consectetur",
  "Adipiscing elit",
];

const values = [
  "Sed do eiusmod",
  "Tempor incididunt",
  "Ut labore",
  "Dolore magna",
];

export function About() {
  return (
    <>
      <Metadata
        title="About"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <section className="page-intro">
        <p className="eyebrow">About</p>
        <h1 className="page-title">A short frame for the person behind the work.</h1>
        <p className="page-copy">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="overflow-hidden rounded-lg border border-graphite-line bg-ink/[0.045]">
          <img
            src="/images/portrait.jpg"
            alt="Portrait"
            className="aspect-[4/5] h-full w-full object-cover"
            onError={(event) => {
              event.currentTarget.src = "/images/portrait-placeholder.svg";
            }}
          />
        </div>
        <div className="space-y-6">
          <div className="surface-panel p-6 sm:p-8">
            <h2 className="section-title">Career narrative</h2>
            <p className="mt-4 text-sm leading-7 text-ink-muted sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <InfoList title="Areas of interest" items={interests} />
            <InfoList title="Operating style" items={values} />
          </div>
        </div>
      </section>
    </>
  );
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="surface-panel p-6">
      <h2 className="text-lg font-semibold text-ink">{title}</h2>
      <ul className="mt-5 space-y-4 text-sm leading-6 text-ink-muted">
        {items.map((item) => (
          <li className="border-l border-ember/50 pl-4" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
