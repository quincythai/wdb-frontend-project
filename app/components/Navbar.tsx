"use client";

import React from "react";
import { Link } from "@chakra-ui/next-js";

export default function Navbar() {
  return (
    <nav>
      <h1>
        <Link href="/">Home</Link>
        <Link href="/merch">Merch</Link>
        <Link href="/events">Events</Link>
      </h1>
    </nav>
  );
}
