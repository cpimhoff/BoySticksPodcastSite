import Image from "next/image";

import { getAllEpisodes } from "@/data/episodes";
import { Episode } from "@/data/types";
import EpisodeIndex from "@/components/EpisodeIndex";

type HomePageProps = { episodes: Episode[] };
export default function Home({ episodes }: HomePageProps) {
  return (
    <>
      <Image
        src="key.png"
        width={1000}
        height={1000}
        alt={"BoySticks"}
        className="mx-auto w-full -mt-8 sm:-mt-16"
      />

      <p className="my-8">
        BoySticks is a podcast about video games, hosted by <b>Dylan Forbes </b>
        and <b>Charlie Imhoff</b>.
      </p>

      <div className="mt-16">
        <EpisodeIndex episodes={episodes} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const episodes = await getAllEpisodes("release");
  const props: HomePageProps = { episodes };
  return { props };
}
