import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Assessment - Assessment Platform",
  description: "Turning Exams Into a Powerful Learning Habit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
