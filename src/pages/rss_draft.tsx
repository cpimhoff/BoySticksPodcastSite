import { writeRssFeed } from "@/feed/rss";
import Link from "next/link";

export default function RssPage() {
  return (
    <div>
      <Link href={"/rss_draft.xml"}>View Draft RSS Feed</Link>
    </div>
  );
}

// hook into build step to generate the `rss.xml` file into `public/`
export async function getStaticProps() {
  await writeRssFeed("draft");
  return { props: {} };
}
