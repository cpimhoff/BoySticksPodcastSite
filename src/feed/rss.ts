import { getAllEpisodes } from "@/data/episodes";
import { RssChannel } from "@/data/types";
import fs from "fs";
import path from "path";
import RSS from "rss";

async function getRssFeed(channel: RssChannel) {
  const siteUrl = process.env.BASE_URL ?? "localhost";
  const feedUrl = `${siteUrl}/rss.xml`;
  const albumArt = `${siteUrl}/album.jpg`;

  const now = new Date();
  const options: RSS.FeedOptions = {
    title: channel === "release" ? "BoySticks" : `BoySticks [DRAFT]`,
    description:
      "BoySticks is a podcast about video games, hosted by Dylan Forbes and Charlie Imhoff",
    site_url: siteUrl,
    feed_url: feedUrl,
    image_url: albumArt,
    pubDate: now,
    language: "en-us",
    copyright: `All rights reserved ${now.getFullYear()}, Dylan Forbes and Charlie Imhoff, except where noted.`,
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
  const episodes = await getAllEpisodes(channel);
  for (const ep of episodes) {
    const fileMetadata = await fetch(ep.fileUrl, { method: "HEAD" });
    const fileSizeBytes = parseInt(
      fileMetadata.headers.get("content-length") ?? "0"
    );

    feed.item({
      title: ep.title,
      description: ep.description,
      url: `${siteUrl}/ep/${ep.slug}`,
      date: ep.releasedOn ?? new Date(),
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

export async function writeRssFeed(channel: RssChannel) {
  const feed = await getRssFeed(channel);
  const destination = path.join(
    "./public",
    channel === "release" ? "rss.xml" : `rss_${channel}.xml`
  );
  const xmlFile = feed.xml({ indent: true });
  fs.writeFileSync(destination, xmlFile);
  console.log(`Wrote RSS feed to ${destination}`);
}
