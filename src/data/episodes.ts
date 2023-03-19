import { Episode } from "./types";

const ALL_EPISODES: Episode[] = [
  {
    title: "Horizon Forbidden West",
    slug: "horizon-forbidden-west",
    description:
      "Join the BoySticks as they make at least one decent point about the sequel to Guerilla Games' \"Horizon Zero Dawn\" between digressions into physics and human reproduction. Unfortunately the game's MarioKart mechanic is not discussed.",
    timestamp: "2023-03-05",
    fileUrl:
      "https://boysticks-podcast.s3.amazonaws.com/episodes/1_Horizon_Forbidden_West.mp3",
  },
  {
    title: "God of War: Ragnarok (Part 1)",
    slug: "god-of-war-ragnarok-part-1",
    description:
      "Recall your Leviathan Axe and equip your Sigil Arrows, cuz today the BoySticks are tackling 'God of War: Ragnarok'. There's so much plot to discuss that they barely even have time to argue over the important issues, like: Is Faye hot?",
    timestamp: "2023-03-18",
    fileUrl:
      "https://boysticks-podcast.s3.amazonaws.com/episodes/2_God_of_War_Ragnarok_1.mp3"
  },

];

export async function getAllEpisodes(): Promise<Episode[]> {
  return ALL_EPISODES;
}
