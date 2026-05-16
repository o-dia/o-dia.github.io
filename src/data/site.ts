export const site = {
  name: "omar dia",
  title: "Omar Dia | about me, my writing and projects",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  email: "hello@example.com",
  links: {
    github: "https://github.com/o-dia",
    linkedin: "https://www.linkedin.com/in/omardia",
  },
  nav: [
    { label: "about", href: "/about" },
    { label: "writing", href: "/writing" },
    { label: "projects", href: "/projects" },
    { label: "contact", href: "/contact" },
  ],
  newsletter: {
    provider: "buttondown",
    action: "https://buttondown.email/api/emails/embed-subscribe/YOUR-USERNAME",
    emailFieldName: "email",
  },
} as const;
