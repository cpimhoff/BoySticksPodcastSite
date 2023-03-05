import { Episode } from "./types";

const ALL_EPISODES: Episode[] = [
  {
    title: "Horizon Forbidden West",
    slug: "horizon-forbidden-west",
    description:
      "The BoySticks gab on for a while about the sequel to Horizon Zero Dawn.",
    timestamp: "2023-03-05",
    fileUrl:
      "https://boysticks-podcast.s3.amazonaws.com/episodes/1_Horizon_Forbidden_West.mp3",
  },
];

export async function getAllEpisodes(): Promise<Episode[]> {
  return ALL_EPISODES;
}
