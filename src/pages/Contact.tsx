import { Metadata } from "../components/Metadata";
import { SubscribeForm } from "../components/SubscribeForm";
import { site } from "../data/site";

export function Contact() {
  return (
    <>
      <Metadata
        title="Contact"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <section className="page-intro">
        <p className="eyebrow">Contact</p>
        <h1 className="page-title">Reach out, follow along, or subscribe.</h1>
        <p className="page-copy">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <a className="contact-card" href={`mailto:${site.email}`}>
          <span className="eyebrow">Email</span>
          <strong>{site.email}</strong>
        </a>
        <a
          className="contact-card"
          href={site.links.linkedin}
          rel="noreferrer"
          target="_blank"
        >
          <span className="eyebrow">LinkedIn</span>
          <strong>omardia</strong>
        </a>
        <a
          className="contact-card"
          href={site.links.github}
          rel="noreferrer"
          target="_blank"
        >
          <span className="eyebrow">GitHub</span>
          <strong>o-dia</strong>
        </a>
      </section>

      <div className="mt-10">
        <SubscribeForm />
      </div>
    </>
  );
}
