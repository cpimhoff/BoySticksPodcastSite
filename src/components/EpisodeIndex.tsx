import Link from "next/link";
import dayjs from "dayjs";

import { Episode } from "@/data/types";

type EpisodeIndexProps = { episodes: Episode[] };
export default function EpisodeIndex({ episodes }: EpisodeIndexProps) {
  return (
    <div>
      <h1 className="text-2xl font-black">All Episodes</h1>
      <h2 className="text font-bold text-slate-600">
        {episodes.length} episodes
      </h2>
      <ol className="mt-4 space-y-8">
        {episodes.map((ep) => (
          <Link key={ep.slug} href={`ep/${ep.slug}`}>
            <li className="rounded-md p-4 -mx-4 hover:bg-slate-200 active:bg-slate-300 transition-colors">
              <h3 className="font-bold text-slate-900">{ep.title}</h3>
              <h4 className="text-slate-500">
                {dayjs(ep.timestamp).format("MMMM D, YYYY")}
              </h4>
              <p className="mt-2">{ep.description}</p>
            </li>
          </Link>
        ))}
      </ol>
    </div>
  );
}
