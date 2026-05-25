import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

export async function GET() {
  try {
    // Fetch LeetCode stats
    const lcRes = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `query userProblemsSolved($username: String!) { 
          matchedUser(username: $username) { 
            submitStatsGlobal { 
              acSubmissionNum { difficulty count } 
            } 
          } 
        }`,
        variables: { username: 'hariom_ydv' }
      })
    });
    
    const lcData = await lcRes.json();
    const lcStats = lcData.data?.matchedUser?.submitStatsGlobal?.acSubmissionNum || [];
    
    let leetcode = {
      total: 127,
      easy: 76,
      medium: 40,
      hard: 11
    };
    
    if (lcStats.length > 0) {
      leetcode = {
        total: lcStats.find((s: any) => s.difficulty === 'All')?.count || 0,
        easy: lcStats.find((s: any) => s.difficulty === 'Easy')?.count || 0,
        medium: lcStats.find((s: any) => s.difficulty === 'Medium')?.count || 0,
        hard: lcStats.find((s: any) => s.difficulty === 'Hard')?.count || 0,
      };
    }

    // Fetch GeeksForGeeks stats
    let gfg = {
      total: 218,
      easy: 135,
      medium: 75,
      hard: 8
    };

    try {
      const gfgRes = await fetch('https://www.geeksforgeeks.org/profile/hariom_ydv/', {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      });
      const gfgHtml = await gfgRes.text();
      const $ = cheerio.load(gfgHtml);
      
      const basic = parseInt($('.tabs-title:contains("Basic")').text().replace(/[^0-9]/g, '')) || 0;
      const easy = parseInt($('.tabs-title:contains("Easy")').text().replace(/[^0-9]/g, '')) || 0;
      const medium = parseInt($('.tabs-title:contains("Medium")').text().replace(/[^0-9]/g, '')) || 0;
      const hard = parseInt($('.tabs-title:contains("Hard")').text().replace(/[^0-9]/g, '')) || 0;
      const school = parseInt($('.tabs-title:contains("School")').text().replace(/[^0-9]/g, '')) || 0;
      
      const calculatedTotal = basic + easy + medium + hard + school;
      
      if (calculatedTotal > 0) {
        gfg = {
          total: calculatedTotal,
          easy: easy + basic + school, // combining easy/basic/school to match old logic
          medium: medium,
          hard: hard
        };
      }
    } catch (e) {
      console.error('Failed to fetch GFG stats:', e);
    }

    return NextResponse.json({ leetcode, gfg });
  } catch (error) {
    console.error('Error fetching stats:', error);
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
  }
}
