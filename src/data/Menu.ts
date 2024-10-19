import type { Menu } from "@models/Menu"

const menu: Menu = [
  {
    title: "HR Solutions",
    href: "/solutions",
    children: [
      {
        title: "Full-Service HR for Small Businesses",
        href: "/small-business",
        description:
          "A complete HR service designed for the unique needs of small businesses.",
        icon: "lucide:store"
      },
      {
        title: "Full-Service HR for Middle Market Business",
        description:
          "A comprehensive HR solution to support fast-growing middle market businesses.",
        href: "/market-business",
        icon: "lucide:building"
      }
    ]
  },
  {
    title: "Industry Expertise",
    href: "/expertise"
  },
  {
    title: "Resources",
    href: "/resources",
    children: [
      {
        title: "IntegriBot",
        href: "/app",
        description:
          "Meet IntegriBot, your friendly, 24/7 virtual HR assistant, here to simplify all your HR tasks and support your team effortlessly.",
        icon: "lucide:bot-message-square"
      },
      {
        title: "Templates",
        href: "/resources/templates",
        description:
          "Access a library of ready-to-use HR templates, from onboarding to performance reviews, designed to save you time and ensure compliance.",
        icon: "lucide:file-text"
      },
      {
        title: "Blog",
        href: "/blog",
        description:
          "Explore expert HR insights, tips, and the latest trends to keep your organization informed and ahead of the curve.",
        icon: "lucide:rss"
      }
    ]
  },
  {
    title: "Company",
    href: "/company",
    children: [
      {
        title: "About Us Overview",
        href: "/company/about-us",
        description:
          "Integri has been showing companies how to harness the power of HR. Find out what makes us tick.",
        icon: "lucide:building-2"
      },
      {
        title: "Culture & Values",
        href: "/company/values",
        description:
          "Based on our company values, our corporate culture is the foundation of how we do business – with our clients and with each other.",
        icon: "lucide:message-circle-heart"
      },
      {
        title: "Partner with us",
        href: "/company/parther",
        description:
          "Discover the rewards of connecting your clients or organization members with Integri services as a channel partner.",
        icon: "lucide:handshake"
      }
    ]
  },
  {
    title: "Customer Service",
    href: "/customer-service"
  }
]
export default menu
