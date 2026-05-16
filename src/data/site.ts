export const site = {
  name: "Omar Dia",
  title: "Omar Dia | Writing, projects, and systems-oriented work",
  description:
    "A personal website for Omar Dia's writing, projects, and systems-oriented work.",
  email: "hello@example.com",
  links: {
    github: "https://github.com/o-dia",
    linkedin: "https://www.linkedin.com/in/omardia",
  },
  nav: [
    { label: "About", href: "/about" },
    { label: "Writing", href: "/writing" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ],
  newsletter: {
    provider: "buttondown",
    action: "https://buttondown.email/api/emails/embed-subscribe/YOUR-USERNAME",
    emailFieldName: "email",
  },
} as const;
