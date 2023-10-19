import { Episode, RssChannel } from "./types";

const ALL_EPISODES: Episode[] = [
  {
    title: "Final Fantasy XVI",
    slug: "final-fantasi-xvi",
    description: "Great Greagor's Gash! The BoySticks are back, and this time they have a brand new episode format that is sure to disappoint all fans of their earlier work. Plus, Dylan sadly forgets to make his great joke 'This game is an RPG in the same way that LaCroix is a beverage'. Top that off with the fact that they don't even <em>mention</em> everyone's favorite character (Medicine Girl), this one is definitely worth skipping.",
    releasedOn: null,
    fileUrl:
      "https://boysticks-podcast.s3.amazonaws.com/episodes/06_Final_Fantasy_XVI.mp3",
  },
  {
    title: "The Legend of Zelda: Tears of the Kingdom (Part 2)",
    slug: "the-legend-of-zelda-tears-of-the-kingdom-part-2",
    description: "Hold on there, buster! I have it on the authority of someone who looks just like Zelda that *no one* is allowed to listen to this episode under any circumstances. (Unless, of course, they manage to bring me 20 Fortified Pumpkins, which are my ultimate weakness!) So yeah, you heard me, back off!<br/><br/>Clickbait title: DYLAN ALMOST GETS KICKED OFF THE POD FOR NOT CARING ABOUT TARREY TOWN!!! ARE THE BOYSTICKS GONE FOR GOOD???",
    releasedOn: '2023-07-20',
    fileUrl:
      "https://boysticks-podcast.s3.amazonaws.com/episodes/05_The_Legend_of_Zelda_Tears_of_the_Kingdom_2.mp3",
  },
  {
    title: "The Legend of Zelda: Tears of the Kingdom (Part 1)",
    slug: "the-legend-of-zelda-tears-of-the-kingdom-part-1",
    description: "Cryonis. Magnesis. Bomb. Stasis. Long ago, the four Runes lived together in harmony. Then, everything changed when the Zonai Nation attacked. Six years passed, and my co-host and I discovered a new set of abilities, controlled by a Hylian named Link. And although his swordfighting skills may be great, he has a lot to learn before he's ready to engineer anything. But I believe, Link can save the Zelda.",
    releasedOn: '2023-07-20',
    fileUrl:
      "https://boysticks-podcast.s3.amazonaws.com/episodes/05_The_Legend_of_Zelda_Tears_of_the_Kingdom_1.mp3",
  },
  {
    title: "Wild Hearts",
    slug: "wild-hearts",
    description: "Why do you listen to podcasts? For glory? For sport? Perhaps simply to discover that answer for yourself. Join the BoySticks as they discuss the monsters, weapons and 'story' of I Can't Believe It's Not Monster Hunter.",
    releasedOn: "2023-07-02",
    fileUrl:
      "https://boysticks-podcast.s3.amazonaws.com/episodes/04_Wild_Hearts.mp3",
  },
  {
    title: "Final Fantasy VII Remake",
    slug: "final-fantasy-vii-remake",
    description: "Being new in town is hard for Cloud, who doesn't have many friends. To try and impress 2 of his 3 girlfriends, he decides to blow up a nuclear reactor. Shenanigans ensue.",
    releasedOn: "2023-04-06",
    fileUrl:
      "https://boysticks-podcast.s3.amazonaws.com/episodes/03_Final_Fantasy_VII_Remake.mp3",
  },
  {
    title: "God of War: Ragnarok (Part 2)",
    slug: "god-of-war-ragnarok-part-2",
    description:
      'In this sequel to critically-acclaimed BoySticks episode "God of War: Ragnarok (Part 1)", the BoySticks discuss the second half of the critically-acclaimed sequel "God of War: Ragnarok". It\'s all the analysis and antics you know and love, PLUS the dramatic debut of long-anticipated segment "The D Pad".',
    releasedOn: "2023-03-19",
    fileUrl:
      "https://boysticks-podcast.s3.amazonaws.com/episodes/02_God_of_War_Ragnarok_2.mp3",
  },
  {
    title: "God of War: Ragnarok (Part 1)",
    slug: "god-of-war-ragnarok-part-1",
    description:
      'Recall your Leviathan Axe and equip your Sigil Arrows, cuz today the BoySticks are tackling "God of War: Ragnarok". There\'s so much plot to discuss that they barely even have time to argue over the important issues, like: Is Faye hot?',
    releasedOn: "2023-03-18",
    fileUrl:
      "https://boysticks-podcast.s3.amazonaws.com/episodes/02_God_of_War_Ragnarok_1.mp3",
  },
  {
    title: "Horizon Forbidden West",
    slug: "horizon-forbidden-west",
    description:
      "Join the BoySticks as they make at least one decent point about the sequel to Guerilla Games' \"Horizon Zero Dawn\" between digressions into physics and human reproduction. Unfortunately the game's MarioKart mechanic is not discussed.",
    releasedOn: "2023-03-05",
    fileUrl:
      "https://boysticks-podcast.s3.amazonaws.com/episodes/01_Horizon_Forbidden_West.mp3",
  },
];

export async function getAllEpisodes(channel: RssChannel): Promise<Episode[]> {
  switch (channel) {
    case "release":
      return ALL_EPISODES.filter((ep) => Boolean(ep.releasedOn));
    case "draft":
      return ALL_EPISODES.filter((ep) => !ep.releasedOn);
  }
}
