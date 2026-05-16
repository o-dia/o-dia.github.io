import { site } from "../data/site";

export function SubscribeForm() {
  const { action, emailFieldName, provider } = site.newsletter;

  return (
    <section className="surface-panel p-6 sm:p-8">
      <div className="max-w-2xl">
        <p className="eyebrow">Updates</p>
        <h2 className="section-title mt-3">Get new writing when it ships.</h2>
        <p className="mt-4 text-sm leading-7 text-ink-muted sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Provider:
          {provider}.
        </p>
      </div>
      <form
        action={action}
        method="post"
        target="_blank"
        className="mt-6 flex flex-col gap-3 sm:flex-row"
      >
        <label className="sr-only" htmlFor="newsletter-email">
          Email address
        </label>
        <input
          id="newsletter-email"
          name={emailFieldName}
          type="email"
          required
          placeholder="you@example.com"
          className="min-h-12 flex-1 rounded-full border border-graphite-line bg-graphite-soft/80 px-5 text-sm text-ink outline-none transition placeholder:text-ink-soft focus:border-ember focus:ring-2 focus:ring-ember/30"
        />
        <button className="button-primary" type="submit">
          Subscribe
        </button>
      </form>
    </section>
  );
}
