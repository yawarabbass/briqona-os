import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BRIQONA OS | Business Operating System",
  description:
    "BRIQONA OS is an intelligent SaaS platform that helps businesses manage operations, workflows, analytics and growth.",
  keywords: [
    "BRIQONA OS",
    "SaaS",
    "Business Operating System",
    "Business Management Platform",
    "AI Business Intelligence",
  ],
  openGraph: {
    title: "BRIQONA OS | Business Operating System",
    description:
      "One intelligent platform for modern businesses.",
    siteName: "BRIQONA OS",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
