import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merch",
  description: "Taylor Swift Merchandise page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>layout</div>;
}
