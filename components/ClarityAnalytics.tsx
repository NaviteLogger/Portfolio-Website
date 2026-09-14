"use client";

import Clarity from "@microsoft/clarity";
import { useEffect } from "react";

import { clarityProjectId } from "@/lib/analytics";

export function ClarityAnalytics() {
  useEffect(() => {
    if (!clarityProjectId) {
      return;
    }

    // Clarity.init touches window/document, so it can only run after mount.
    Clarity.init(clarityProjectId);
  }, []);

  return null;
}
