import { Episode } from "@/data/types";
import { getAllEpisodes } from "@/data/episodes";

type EpPageParams = { slug: string };
type EpPageProps = { episode: Episode };
export default function EpPage({ episode }: EpPageProps) {
  return <div>{episode.title}</div>;
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
