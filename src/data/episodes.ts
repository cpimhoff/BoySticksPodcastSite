import { Episode } from "./types";

const ALL_EPISODES: Episode[] = [
  {
    title: "Horizon: Forbidden West",
    slug: "horizon-forbidden-west",
    description: "The sequel to Horizon: Zero Dawn.",
    timestamp: "2023-02-25",
    fileUrl: "",
  },
];

export async function getAllEpisodes(): Promise<Episode[]> {
  return ALL_EPISODES;
}
