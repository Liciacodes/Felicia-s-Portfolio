import React from "react";
import { ArrowSquareOut } from "phosphor-react";
import SectionTitle from "./SectionTitle";
import MagneticButton from "./MagneticButton";
import articles from "../data/articles.json";


const PUBLICATION_URL = "https://liciacodes.hashnode.dev";

function formatDate(dateString) {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function ArticleCard({ post, featured }) {
  return (
    <MagneticButton strength={0.1} className="block h-full">
      <a
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`group flex flex-col justify-between h-full rounded-lg border p-5 transition-colors duration-base ease-signature ${
          featured
            ? "border-accent bg-accent/5 hover:bg-accent/10"
            : "border-sand/40 hover:border-accent/50"
        }`}
      >
        <div>
          {featured && (
            <span className="text-[11px] font-semibold uppercase tracking-wide text-accentText">
              Featured
            </span>
          )}
          <h3
            className={`text-ink font-medium mt-1 ${
              featured ? "text-[20px]" : "text-[17px]"
            }`}
          >
            {post.title}
          </h3>
          <p className="text-ink/80 text-sm mt-2">{post.excerpt}</p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="text-sandDark text-[13px]">
            {formatDate(post.publishedAt)}
          </span>
          <span className="inline-flex items-center gap-1 text-accentText text-sm font-medium group-hover:text-ink transition-colors duration-fast ease-signature">
            Read article
            <ArrowSquareOut size={14} weight="bold" />
          </span>
        </div>
      </a>
    </MagneticButton>
  );
}

export default function Writing() {
const sortedArticles = [...articles].sort(
  (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
);

const featuredPost = sortedArticles[0];
const restPosts = sortedArticles.slice(1);

  return (
    <section
      id="writing"
      className="mt-20 md:mt-[148px] px-4 sm:px-6 lg:px-0 w-full flex flex-col sm:max-w-[750px] md:max-w-[950px]"
    >
      <div className="w-full max-w-4xl mx-auto">
        <SectionTitle title={"Writing"} />

        {articles.length === 0 ? (
          <p className="text-ink/70 text-sm">
            No articles published yet — check back soon, or read directly on{" "}
            <a
              href={PUBLICATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accentText hover:text-ink underline"
            >
              Hashnode
            </a>
            .
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featuredPost && (
              <div className="md:col-span-2">
                <ArticleCard post={featuredPost} featured />
              </div>
            )}
            {restPosts.map((post) => (
              <ArticleCard key={post.url} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
