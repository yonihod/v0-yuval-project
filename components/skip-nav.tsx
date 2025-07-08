"use client";

import React from "react";

export function SkipNav() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md focus:font-medium focus:shadow-lg focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200"
      tabIndex={0}
    >
      דלג לתוכן הראשי
    </a>
  );
}

export function SkipToNav() {
  return (
    <a
      href="#navigation"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-20 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md focus:font-medium focus:shadow-lg focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200"
      tabIndex={0}
    >
      דלג לניווט
    </a>
  );
} 