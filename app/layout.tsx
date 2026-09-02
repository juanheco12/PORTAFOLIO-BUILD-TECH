import type { Metadata } from "next";
import AmbientBackground from "@/components/AmbientBackground";
import ScrollRobot from "@/components/ScrollRobot";
import "./globals.css";

export const metadata: Metadata = {
  title: "BUILD TECH | Full-Stack Development & Tech Consulting",
  description:
    "Desarrollo full-stack, automatización legal y soluciones geoespaciales con inteligencia artificial. Conoce CatIA, Sentinela y más proyectos.",
  keywords: [
    "full-stack developer",
    "automatización",
    "geoespacial",
    "inteligencia artificial",
    "Next.js",
    "catastro",
  ],
  openGraph: {
    title: "BUILD TECH | Full-Stack Development & Tech Consulting",
    description:
      "Desarrollo full-stack, automatización legal y soluciones geoespaciales con inteligencia artificial.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        <AmbientBackground />
        <ScrollRobot />
        {children}
      </body>
    </html>
  );
}
