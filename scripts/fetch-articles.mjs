import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const RSS_URL = "https://liciacodes.hashnode.dev/rss.xml";
const OUTPUT_PATH = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "../src/data/articles.json"
);
const EXCERPT_LENGTH = 160;

function extractTag(block, tag) {
  const match = block.match(
    new RegExp(`<${tag}>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${tag}>`)
  );
  return match ? match[1].trim() : "";
}

function truncate(text, maxLength) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= maxLength) return clean;
  return clean.slice(0, clean.lastIndexOf(" ", maxLength)) + "...";
}

async function main() {
  let xml;
  try {
    const res = await fetch(RSS_URL);
    if (!res.ok) throw new Error(`RSS fetch failed with status ${res.status}`);
    xml = await res.text();
  } catch (err) {
    console.warn(
      `[sync:articles] Could not fetch Hashnode RSS feed (${err.message}). Keeping existing src/data/articles.json as-is.`
    );
    return;
  }

  const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];
  const articles = items.map((item) => ({
    title: extractTag(item, "title"),
    excerpt: truncate(extractTag(item, "description"), EXCERPT_LENGTH),
    url: extractTag(item, "link"),
    publishedAt: extractTag(item, "pubDate"),
  }));

  await writeFile(OUTPUT_PATH, JSON.stringify(articles, null, 2) + "\n", "utf-8");
  console.log(`[sync:articles] Wrote ${articles.length} article(s) to ${OUTPUT_PATH}`);
}

main();
