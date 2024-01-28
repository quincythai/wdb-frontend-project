import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merch",
  description: "Taylor Swift Merchandise page",
};

export default function MerchLayout({
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
