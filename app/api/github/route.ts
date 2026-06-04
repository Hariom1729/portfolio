import { NextResponse } from 'next/server';

const GITHUB_GRAPHQL_API = "https://api.github.com/graphql";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username') || "Hariom1729";
  
  // Use the provided token, otherwise fallback to public/unauthenticated requests (which will fail for GraphQL, but we can try)
  const token = process.env.GITHUB_ACCESS_TOKEN;
  
  if (!token) {
    return NextResponse.json(
      { error: "GITHUB_ACCESS_TOKEN is missing in environment variables." },
      { status: 401 }
    );
  }

  const query = `
    query($username: String!) {
      user(login: $username) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                contributionLevel
                date
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(GITHUB_GRAPHQL_API, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { username }
      }),
      // Revalidate every hour
      next: { revalidate: 3600 }
    });

    const data = await response.json();

    if (data.errors) {
      console.error("GitHub API Errors:", data.errors);
      return NextResponse.json({ error: "Failed to fetch from GitHub API" }, { status: 500 });
    }

    const calendar = data.data?.user?.contributionsCollection?.contributionCalendar;
    
    if (!calendar) {
      return NextResponse.json({ error: "User not found or no contribution data" }, { status: 404 });
    }

    // Map GitHub's contribution levels to 0-4 for react-activity-calendar
    const levelMap: Record<string, number> = {
      'NONE': 0,
      'FIRST_QUARTILE': 1,
      'SECOND_QUARTILE': 2,
      'THIRD_QUARTILE': 3,
      'FOURTH_QUARTILE': 4
    };

    const contributions = calendar.weeks.flatMap((week: any) =>
      week.contributionDays.map((day: any) => ({
        date: day.date,
        count: day.contributionCount,
        level: levelMap[day.contributionLevel] || 0
      }))
    );

    return NextResponse.json({
      total: calendar.totalContributions,
      contributions
    });

  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
