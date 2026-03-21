import { NextResponse } from 'next/server';

export async function GET() {
  const projects = [
    {
      id: 1,
      name: "Portfolio Project",
      description: "This very portfolio project migrated to TypeScript and App Router.",
      imageProjectLink: "portfolio.png",
      projectLink: "https://github.com/alexjcm/portfolio"
    },
    {
      id: 2,
      name: "Example App",
      description: "An example application showcase.",
      imageProjectLink: "example.png",
      projectLink: "https://example.com"
    }
  ];

  return NextResponse.json(projects);
}
