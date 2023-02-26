import { getAllEpisodes } from "@/data/episodes";
import { Episode } from "@/data/types";
import Link from "next/link";

type EpIndexPageProps = { episodes: Episode[] };
export default function EpIndexPage({ episodes }: EpIndexPageProps) {
  return (
    <div>
      <ol>
        {episodes.map((ep) => (
          <li key={ep.slug}>
            {"- "}
            <Link href={`ep/${ep.slug}`}>{ep.title}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

export async function getStaticProps() {
  const episodes = await getAllEpisodes();
  const props: EpIndexPageProps = { episodes };
  return { props };
}
