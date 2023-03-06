import { getAllEpisodes } from "@/data/episodes";
import fs from "fs";
import path from "path";
import RSS from "rss";

async function getRssFeed() {
  const siteUrl = process.env.BASE_URL ?? "localhost";
  const feedUrl = `${siteUrl}/rss.xml`;
  const albumArt = `${siteUrl}/albumart.png`;

  const now = new Date();
  const options: RSS.FeedOptions = {
    title: "BoySticks",
    description:
      "BoySticks is a podcast about video games, hosted by Dylan Forbes and Charlie Imhoff",
    site_url: siteUrl,
    feed_url: feedUrl,
    image_url: albumArt,
    pubDate: now,
    language: "en-us",
    copyright: `All rights reserved ${now.getFullYear()}, Dylan Forbes and Charlie Imhoff`,
    custom_namespaces: {
      itunes: "http://www.itunes.com/dtds/podcast-1.0.dtd",
    },
    custom_elements: [
      { "itunes:image": { _attr: { href: albumArt } } },
      { "itunes:author": "Dylan Forbes and Charlie Imhoff" },
      { "itunes:explicit": "true" },
      { "itunes:type": "episodic" },
      {
        "itunes:owner": [
          { "itunes:name": "Charlie Imhoff" },
          { "itunes:email": "cpimhoffdesign@gmail.com" },
        ],
      },
      {
        "itunes:category": [
          { _attr: { text: "Leisure" } },
          { "itunes:category": { _attr: { text: "Video Games" } } },
        ],
      },
    ],
  };

  const feed = new RSS(options);
  const episodes = await getAllEpisodes();
  for (const ep of episodes) {
    const fileMetadata = await fetch(ep.fileUrl, { method: "HEAD" });
    const fileSizeBytes = parseInt(
      fileMetadata.headers.get("content-length") ?? "0"
    );

    feed.item({
      title: ep.title,
      description: ep.description,
      url: `${siteUrl}/ep/${ep.slug}`,
      date: ep.timestamp,
      guid: ep.slug,
      enclosure: {
        url: ep.fileUrl,
        size: fileSizeBytes,
        type: "audio/mpeg",
      },
      custom_elements: [
        { "itunes:subtitle": ep.description },
        { "itunes:image": { _attr: { href: albumArt } } },
      ],
    });
  }
  return feed;
}

export async function writeRssFeed() {
  const feed = await getRssFeed();
  const destination = path.join("./public/rss.xml");
  const xmlFile = feed.xml({ indent: true });
  fs.writeFileSync(destination, xmlFile);
  console.log(`Wrote RSS feed to ${destination}`);
}
