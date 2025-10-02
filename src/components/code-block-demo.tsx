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
    <div className="max-w-3xl mx-auto w-full py-16">
      <CodeBlock
        language="python"
        filename="hiring.py"
        highlightLines={[1, 14, 19]}
        code={code}
      />
    </div>
  );
}
