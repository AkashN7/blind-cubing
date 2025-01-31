"use client";

import React from "react";

// Build a header component that can take as input an array of any react components and render them separated by flex-grow divs.
// The flex-grow divs should go in between the components, and should not be rendered before the first component or after the last component.

export default function HeaderBuilder({components}: {components: React.ReactNode[]}) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex h-16 shrink-0 items-center gap-2 px-4">
      {components.map((component, index) => (
        <React.Fragment key={index}>
          {index > 0 && <div className="flex-grow" />}
          {component}
        </React.Fragment>
      ))}
    </header>
  );
}