import { Episode } from "@/data/types";
import { getAllEpisodes } from "@/data/episodes";
import dayjs from "dayjs";

type EpPageParams = { slug: string };
type EpPageProps = { episode: Episode };
export default function EpPage({ episode }: EpPageProps) {
  return (
    <div>
      <h1 className="text-2xl font-black">{episode.title}</h1>
      <h2 className="text font-bold text-slate-600">
        {dayjs(episode.timestamp).format("MMMM D, YYYY")}
      </h2>
      <p className="mt-8">{episode.description}</p>

      {/* TODO: Media player or something */}
    </div>
  );
}

export async function getStaticProps({ params }: { params: EpPageParams }) {
  const { slug } = params;
  const episodes = await getAllEpisodes();
  const episode = episodes.find((ep) => ep.slug === slug);
  if (!episode) throw new Error("No episode with slug: " + slug);
  const props: EpPageProps = { episode };
  return { props };
}

export async function getStaticPaths() {
  const episodes = await getAllEpisodes();
  const paths: { params: EpPageParams }[] = episodes.map((ep) => ({
    params: { slug: ep.slug },
  }));
  return { paths, fallback: false };
}
