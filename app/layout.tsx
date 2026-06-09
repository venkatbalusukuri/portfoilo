import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Venkat Balusukuri | Data Analyst Portfolio",
  description:
    "Lifting weightless insights out of heavy datasets. Expert in Oracle SQL, Python, Power BI, and Advanced Data Analytics.",
  keywords: ["Venkat Balusukuri", "Data Analyst", "Power BI", "Python", "Oracle SQL", "Portfolio", "Data Science"],
  openGraph: {
    title: "Venkat Balusukuri | Data Analyst Portfolio",
    description: "Lifting weightless insights out of heavy datasets.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
