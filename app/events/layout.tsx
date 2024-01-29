import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description: "Taylor Swift Events page",
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
