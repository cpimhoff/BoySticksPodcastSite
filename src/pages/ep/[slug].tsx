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
        {dayjs(episode.releasedOn).format("MMMM D, YYYY")}
      </h2>
      <div
        className="my-8"
        dangerouslySetInnerHTML={{
        __html: episode.description,
        }}
      />

      <a
        href={episode.fileUrl}
        target="_blank"
        className="py-2 px-4 rounded-md inline-block bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-center transition-colors"
      >
        Download
      </a>
    </div>
  );
}

export async function getStaticProps({ params }: { params: EpPageParams }) {
  const { slug } = params;
  const episodes = await getAllEpisodes("release");
  const episode = episodes.find((ep) => ep.slug === slug);
  if (!episode) throw new Error("No episode with slug: " + slug);
  const props: EpPageProps = { episode };
  return { props };
}

export async function getStaticPaths() {
  const episodes = await getAllEpisodes("release");
  const paths: { params: EpPageParams }[] = episodes.map((ep) => ({
    params: { slug: ep.slug },
  }));
  return { paths, fallback: false };
}
