import { getAllEpisodes } from "@/data/episodes";
import fs from "fs";
import path from "path";
import RSS from "rss";

async function getRssFeed() {
  const siteUrl = process.env.BASE_URL ?? "localhost";
  const now = new Date();
  const options: RSS.FeedOptions = {
    title: "BoySticks",
    description: "A podcast about video games",
    site_url: siteUrl,
    feed_url: `${siteUrl}/rss.xml`,
    image_url: `${siteUrl}/albumart.png`,
    pubDate: now,
    copyright: `All rights reserved ${now.getFullYear()}, Charlie Imhoff`,
  };

  const feed = new RSS(options);
  const episodes = await getAllEpisodes();
  for (const ep of episodes) {
    feed.item({
      title: ep.title,
      description: ep.description,
      url: `${siteUrl}/ep/${ep.slug}`,
      date: ep.timestamp,
    });
  }
  return feed;
}

export async function writeRssFeed() {
  const feed = await getRssFeed();
  const destination = path.join("./public/rss.xml");
  const xmlFile = feed.xml({ indent: true });
  fs.writeFileSync(destination, xmlFile);
}
