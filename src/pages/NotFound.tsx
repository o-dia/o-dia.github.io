import { Link } from "react-router-dom";
import { Metadata } from "../components/Metadata";

export function NotFound() {
  return (
    <>
      <Metadata
        title="Page not found"
        description="The requested page could not be found."
      />
      <section className="page-intro">
        <p className="eyebrow">404</p>
        <h1 className="page-title">This page is outside the field.</h1>
        <p className="page-copy">
          The route does not exist yet, or the piece has moved.
        </p>
        <Link className="button-primary mt-8 inline-flex" to="/">
          Return home
        </Link>
      </section>
    </>
  );
}
