"use client";

import React from "react";
import { CodeBlock } from "@/components/ui/code-block";

export default function CodeBlockDemo() {
  const code = `# CampusLoop Hiring Alert 🚀

import sys

roles = [
    "Interns (Product | Growth | Ops)",
    "Software Developers (Full-Stack)",
    "Python Developers (Backend & Data)",
    "Frontend Engineers (React / Next.js)",
    "UI/UX Designers"
]

print("We are hiring at CampusLoop!")
print("Open Roles:")
for role in roles:
    print(" -", role)

print("\\nApply now → careers@campusloop.in")
`;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-24">
      <div className="max-w-3xl w-full">
        <h2 className="text-4xl font-bold text-center mb-8 text-foreground">Join Our Team</h2>
        <CodeBlock
          language="python"
          filename="hiring.py"
          highlightLines={[1, 14, 19]}
          code={code}
        />
      </div>
    </div>
  );
}
