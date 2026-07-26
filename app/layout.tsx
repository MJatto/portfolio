import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Enesi Jatto | Cloud, DevOps & Backend Engineer",
  description:
    "Portfolio of Enesi Jatto, a Toronto-based IT Technical Specialist focused on cloud infrastructure, DevOps automation, and backend engineering.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
