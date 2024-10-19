import type { FooterLink } from "@models/FooterLinks"

const footer: FooterLink[] = [
  {
    title: "Company",
    children: [
      {
        title: "Team",
        href: "/company/team"
      },
      {
        title: "Recruitment Process",
        href: "/company/recruitment-process"
      },
      {
        title: "Job Seekers/Candidates",
        href: "/company/job-seekers-candidates"
      }
    ]
  },
  {
    title: "Services",
    children: [
      {
        title: "Services",
        href: "/services"
      },
      {
        title: "Industries We Serve",
        href: "/services/industries-we-serve"
      },
      {
        title: "Clients",
        href: "/services/clients"
      }
    ]
  },
  {
    title: "Solutions",
    children: [
      {
        title: "Sign In",
        href: "/members/sign-in"
      },
      {
        title: "Sign Up",
        href: "/members/sign-up"
      },
      {
        title: "Online Consultation",
        href: "/members/consultation"
      },
      {
        title: "Ask Away...",
        href: "/members/ask-away"
      }
    ]
  }
]
export default footer
