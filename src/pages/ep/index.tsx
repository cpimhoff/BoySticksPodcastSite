import EpisodeIndex from "@/components/EpisodeIndex";
import { getAllEpisodes } from "@/data/episodes";
import { Episode } from "@/data/types";

type EpIndexPageProps = { episodes: Episode[] };
export default function EpIndexPage({ episodes }: EpIndexPageProps) {
  return <EpisodeIndex episodes={episodes} />;
}

export async function getStaticProps() {
  const episodes = await getAllEpisodes();
  const props: EpIndexPageProps = { episodes };
  return { props };
}
