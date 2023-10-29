import { Episode, RssChannel } from "./types";

const ALL_EPISODES: Episode[] = [
  {
    title: "Returnal",
    slug: "returnal",
    description: "A xeno-type audio artifact apparently authored with intent to [UNKNOWN ERROR]. The energy signature of this data bundle matches that of [CORRUPTED TEXT]. Interaction appears safe, but may cause [DATABASE MISMATCH] if consumed in excess. Upon inspection of the metadata, the following message reveals itself:.<br/><br/>*^;.\\n't care how many titans she killed; Tali Acheron can suck my ba*#[]]/{",
    releasedOn: null,
    fileUrl: "https://boysticks-podcast.s3.amazonaws.com/episodes/07_Returnal.mp3",
  },
  {
    title: "Final Fantasy XVI",
    slug: "final-fantasi-xvi",
    description: `Great Greagor's Gash! The BoySticks are back, and this time they have a brand new episode format that is sure to disappoint all fans of their earlier work. Additional letdowns include: (1) Dylan forgets to make his great joke 'This game is an RPG in the same way that LaCroix is a beverage'; and (2) at no point does either host even <em>mention</em> everyone's favorite character (Medicine Girl)! Of all the episodes on which they could have chosen to renounce copyright, they had to pick this one. Figures.<br/><br/><p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://boysticks.cpimhoff.com/ep/final-fantasy-xvi">BoySticks Podcast, Episode "Final Fantasy XVI"</a> by <span property="cc:attributionName">Dylan Forbes and Charlie Imhoff</span> is licensed under <a href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"></a></p>`,
    releasedOn: '2023-10-28',
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
