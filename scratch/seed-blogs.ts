import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import * as fs from 'fs';
import * as path from 'path';

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const artifactDir = "C:\\Users\\sable\\.gemini\\antigravity-ide\\brain\\84df3176-76f2-4ad1-baf6-1341aadec3f1";

const articles = [
  'article-1-vba-automation.md',
  'article-2-powerbi-vs-excel.md',
  'article-3-data-cleaning.md',
  'article-4-mis-reports.md',
  'article-5-excel-finance.md',
  'article-6-powerbi-insights.md',
  'article-7-excel-dashboards.md',
  'article-8-bad-data.md',
  'article-9-vba-macros.md',
  'article-10-dashboard-design.md'
];

async function main() {
  for (const filename of articles) {
    const fullPath = path.join(artifactDir, filename);
    if (!fs.existsSync(fullPath)) {
      console.log(`Skipping ${filename}, not found`);
      continue;
    }
    
    const content = fs.readFileSync(fullPath, 'utf8');
    
    // Parse the markdown
    const parts = content.split('---');
    const frontmatter = parts[1];
    const body = parts.slice(2).join('---').trim();
    
    let title = "Untitled";
    let description = "Description";
    let keywords = "keywords";
    let slug = "slug-" + Date.now();
    let image = "/images/placeholder.jpg";
    
    if (frontmatter) {
      const titleMatch = frontmatter.match(/title:\s*"([^"]+)"/);
      if (titleMatch) title = titleMatch[1];
      
      const descMatch = frontmatter.match(/description:\s*"([^"]+)"/);
      if (descMatch) description = descMatch[1];
      
      const keyMatch = frontmatter.match(/keywords:\s*"([^"]+)"/);
      if (keyMatch) keywords = keyMatch[1];
      
      const slugMatch = frontmatter.match(/slug:\s*"([^"]+)"/);
      if (slugMatch) slug = slugMatch[1];
      
      const imageMatch = frontmatter.match(/image:\s*"([^"]+)"/);
      if (imageMatch) image = imageMatch[1];
    }
    
    try {
      await prisma.post.upsert({
        where: { slug },
        update: {
          title,
          content: body,
          excerpt: description,
          image: image,
          category: "Data & Reporting",
          date: new Date().toISOString()
        },
        create: {
          title,
          slug,
          content: body,
          excerpt: description,
          image: image,
          published: true,
          category: "Data & Reporting",
          date: new Date().toISOString()
        }
      });
      console.log(`Successfully seeded: ${title}`);
    } catch (e) {
      console.error(`Error seeding ${title}:`, e);
    }
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
