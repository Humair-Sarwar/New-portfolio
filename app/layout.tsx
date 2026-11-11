import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://humairsarwar.dev"
  ),
  title: "Humair Sarwar | Full Stack Web Developer | React.js, Next.js & Laravel",
  description:
    "Humair Sarwar is a Full Stack Web Developer specializing in React.js, Next.js, Node.js, PHP, Laravel, REST APIs, and AI-assisted software development.",
  keywords: [
    "Humair Sarwar",
    "Full Stack Web Developer",
    "Multi-Stack Developer",
    "AI-Assisted Developer",
    "React.js Developer",
    "Next.js Developer",
    "Laravel Developer",
    "Node.js Developer",
    "PHP Developer",
    "MERN Stack Developer",
    "REST API Development",
    "E-commerce Developer",
  ],
  authors: [{ name: "Humair Sarwar", url: "https://github.com/Humair-Sarwar" }],
  creator: "Humair Sarwar",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Humair Sarwar | Full Stack Web Developer | React.js, Next.js & Laravel",
    description:
      "Full Stack Web Developer specializing in React.js, Next.js, Node.js, PHP, Laravel, REST APIs, and AI-assisted software development.",
    siteName: "Humair Sarwar Portfolio",
    images: [
      {
        url: "/full-stack.jpg",
        width: 1200,
        height: 630,
        alt: "Humair Sarwar – Full Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Humair Sarwar | Full Stack Web Developer | React.js, Next.js & Laravel",
    description:
      "Full Stack Web Developer specializing in React.js, Next.js, Node.js, PHP, Laravel, REST APIs, and AI-assisted software development.",
    images: ["/full-stack.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Humair Sarwar",
  jobTitle: "Full Stack Web Developer | Multi-Stack Developer | AI-Assisted Developer",
  email: "mailto:humairsarwar956@gmail.com",
  telephone: "+92-308-8340373",
  sameAs: [
    "https://github.com/Humair-Sarwar",
    "https://www.linkedin.com/in/humair-sarwar/",
  ],
  knowsAbout: [
    "JavaScript (ES6+)",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "PHP",
    "Laravel",
    "RESTful APIs",
    "MVC Architecture",
    "MySQL",
    "MongoDB",
    "Tailwind CSS",
    "Bootstrap",
    "AI-Assisted Software Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
