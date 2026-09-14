"use client";

import Clarity from "@microsoft/clarity";
import { useEffect } from "react";

// Inlined at build time by Next.js, so the static export carries the id without a runtime env lookup.
const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

export function ClarityAnalytics() {
  useEffect(() => {
    if (!projectId) {
      return;
    }

    // Clarity.init touches window/document, so it can only run after mount.
    Clarity.init(projectId);
  }, []);

  return null;
}
