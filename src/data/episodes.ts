import { Episode, RssChannel } from "./types";

const ALL_EPISODES: Episode[] = [
  {
    title: "Clair Obscur: Expedition 33",
    slug: "clair-obscur-expedition-33",
    description: `todo`,
    releasedOn: null,
    fileUrl: "https://boysticks-podcast.s3.amazonaws.com/episodes/19_Clair_Obscur_Expedition_33.mp3"
  },
  {
    title: "Animal Well",
    slug: "animal-well",
    description: `YGAGCKGO.O.NEG.HNYEGUT.!U.`,
    releasedOn: '2025-08-14',
    fileUrl: "https://boysticks-podcast.s3.amazonaws.com/episodes/18_Animal_Well.mp3"
  },
  {
    title: "Nine Sols",
    slug: "nine-sols",
    description: `Content warning: Taiwanese independence.`,
    releasedOn: '2025-05-04',
    fileUrl: "https://boysticks-podcast.s3.amazonaws.com/episodes/17_Nine_Sols.mp3"
  },
  {
    title: "Final Fantasy VII Rebirth",
    slug: "final-fantasy-vii-rebirth",
    description: `39,730 seconds til the end.`,
    releasedOn: '2025-02-17',
    fileUrl: "https://boysticks-podcast.s3.amazonaws.com/episodes/16_Final_Fantasy_VII_Rebirth.mp3"
  },
  {
    title: "Suicide Squad: Kill the Justice League",
    slug: "suicide-squad-kill-the-justice-league",
    description: `This is Warner Bros Games publishing; they've got my back. They could fund all of you for twenty years, just like mowin' the lawn. I'd advise not getting acquired by them. Their business practices traps the souls of their games.`,
    releasedOn: '2024-09-25',
    fileUrl: "https://boysticks-podcast.s3.amazonaws.com/episodes/15_Suicide_Squad_Kill_the_Justice_League.mp3"
  },
  {
    title: "BoySticklers React: The Book of Henry",
    slug: "boysticklers-react-the-book-of-henry",
    description: `We can all talk about "making our mark," but isn't it just comfort food to stave off existential crisis? Our legacy isn't what we write on our resum&eacute; or how many commas are in your Apple Podcasts subscriber count. I mean, in the end, you're gonna realize that podcasting... isn't even an Olympic sport.`,
    releasedOn: '2024-08-18',
    fileUrl: "https://boysticks-podcast.s3.amazonaws.com/episodes/14_BoySticklers_React_The_Book_of_Henry.mp3",
  },
  {
    title: "BoySticklers React: Godzilla x Kong: The New Empire",
    slug: "boysticklers-react-godzilla-x-kong-the-new-empire",
    description: `The BoySticklers have struck a licensee deal with Fine Bros Entertainiment to join REACT WORLD! Join them as they watch the new big monster movie without even mentioning any thorny topics such as racism. Please rest assured they will be back to talking about video games soon.`,
    releasedOn: '2024-06-02',
    fileUrl: "https://boysticks-podcast.s3.amazonaws.com/episodes/13_BoySticklers_React_Godzilla_x_Kong_The_New_Empire.mp3",
  },
  {
    title: "Prince of Persia: The Lost Crown",
    slug: "prince-of-persia-the-lost-crown",
    description: `SPOILERS FOR THE EPISODE!!!<br /> <br />
    <b>S</b>: Hallownest, That Time Loop Glitch, Paste Without Formatting, &ldquo;relic&rdquo;, Shadow of the Simurgh, &ldquo;compassly wrong&rdquo;, &ldquo;playing the numbers&rdquo;, Forest Queen, Vahram <br />
    <b>A</b>: price point, Bow &amp; Arrow, <em>Godzilla x Kong: The New Empire</em>, Charlie, &ldquo;I&apos;m putting &lsquo;I&apos;m gonna put &ldquo;Compassly Right&rdquo; in F tier&rsquo; in A tier&rdquo;, Loki S1 <br />
    <b>B</b>: position in the market, Mount Qaf, Paste with Formatting, Orod, Menolias, Loki S2 <br />
    <b>C</b>: prologue, General Uvishka, map, Azhdaha, Map Girl <br />
    <b>D</b>: The Immortals, dyslexia, the logic for getting the bow, Old Royal Road, the Chakram, Dylan <br />
    <b>DD</b>: the Forge Goddess&apos;s Cans <br />
    <b>F</b>: &ldquo;Ubisoft Original&rdquo;, the Queen&apos;s plan, the menus, racism, &ldquo;I&apos;m gonna put &lsquo;Compassly Right&rsquo; in F tier&rdquo;, the completeness of this tier list <br />
    <b>X</b>: This episode`,
    releasedOn: '2024-04-10',
    fileUrl: "https://boysticks-podcast.s3.amazonaws.com/episodes/12_Prince_of_Persia_The_Lost_Crown.mp3",
  },
  {
    title: "BoySticklers: Pillow Cube",
    slug: "boysticklers-pillow-cube",
    description: `Introducing BoySticklers: the first podcast exclusively designed to fill your podcast hole and align your brain.`,
    releasedOn: '2024-02-24',
    fileUrl: "https://boysticks-podcast.s3.amazonaws.com/episodes/11_BoySticklers_Pillow_Cube.mp3",
  },
  {
    title: "God of War Ragnarok: Valhalla",
    slug: "god-of-war-ragnarok-valhalla",
    description: `This is free DLC for the hit BoySticks double-episode "God of War Ragnarok".`,
    releasedOn: '2024-01-16',
    fileUrl: "https://boysticks-podcast.s3.amazonaws.com/episodes/10_God_of_War_Ragnarok_Valhalla.mp3",
  },
  {
    title: "Spider-Man 2",
    slug: "spider-man-2",
    description: `In this episode, the BoySticks discuss the hit triple-A video game "Marvel's Spider-Man PS4 2: PS5", the third game in the Marvel's Spider-Man PS4 series. The devs clearly turned up the plot nonsense way past eleven, so Dylan and Charlie heroically disect every single bit of it in this groundbreaking 4.5-hour episode. Yes, Dylan realized that splitting long episodes in half is kind of pointless. Feel Like Spider-Man. Feel Like Spider-Man. Feel Like Spider-Man.`,
    releasedOn: '2024-01-02',
    fileUrl: "https://boysticks-podcast.s3.amazonaws.com/episodes/09_Spider-Man_2.mp3",
  },
  {
    title: "Lies of P",
    slug: "lies-of-p",
    description: `<em>Ring ring!</em> Ah, another fine day on internet dot com, where half of all content is opinions quite wrong. Now pay close attention, for the time it has come... To answer this riddle, despite that it's dumb! This podcast is long, rambly, and extremely unnecessary. Options: (a) "BoySticks" by Dylan Forbes and Charlie Imhoff. (b) NPR's "Up First".`,
    releasedOn: '2023-11-18',
    fileUrl: "https://boysticks-podcast.s3.amazonaws.com/episodes/08_Lies_of_P.mp3",
  },
  {
    title: "Returnal",
    slug: "returnal",
    description: "A xeno-type audio artifact apparently authored with intent to [UNKNOWN ERROR]. The energy signature of this data bundle matches that of [CORRUPTED TEXT]. Interaction appears safe, but may cause [DATABASE MISMATCH] if consumed in excess. Upon inspection of the metadata, the following message reveals itself:<br/><br/>*^;.\\n't care how many titans she killed; Tali Acheron can suck my ba*#[]]/{",
    releasedOn: '2023-11-04',
    fileUrl: "https://boysticks-podcast.s3.amazonaws.com/episodes/07_Returnal.mp3",
  },
  {
    title: "Final Fantasy XVI",
    slug: "final-fantasi-xvi",
    description: `Great Greagor's Gash! The BoySticks are back, and this time they have a brand new episode format that is sure to disappoint all fans of their earlier work. Additional letdowns include: (1) Dylan forgets to make his great joke "This game is an RPG in the same way that LaCroix is a beverage"; and (2) at no point does either host even <em>mention</em> everyone's favorite character (Medicine Girl)! Of all the episodes on which they could have chosen to renounce copyright, they had to pick this one. Figures.<br/><br/><p style="display:flex" xmlns:cc="http://creativecommons.org/ns#">This work is licensed under CC BY 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"></p>`,
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
    title: "God of War Ragnarok (Part 2)",
    slug: "god-of-war-ragnarok-part-2",
    description:
      `In this sequel to critically-acclaimed BoySticks episode "God of War Ragnarok (Part 1)", the BoySticks discuss the second half of the critically-acclaimed sequel "God of War Ragnarok". It's all the analysis and antics you know and love, PLUS the dramatic debut of long-anticipated segment "The D Pad".`,
    releasedOn: "2023-03-19",
    fileUrl:
      "https://boysticks-podcast.s3.amazonaws.com/episodes/02_God_of_War_Ragnarok_2.mp3",
  },
  {
    title: "God of War Ragnarok (Part 1)",
    slug: "god-of-war-ragnarok-part-1",
    description:
      `Recall your Leviathan Axe and equip your Sigil Arrows, cuz today the BoySticks are tackling "God of War Ragnarok". There's so much plot to discuss that they barely even have time to argue over the important issues, like: Is Faye hot?`,
    releasedOn: "2023-03-18",
    fileUrl:
      "https://boysticks-podcast.s3.amazonaws.com/episodes/02_God_of_War_Ragnarok_1.mp3",
  },
  {
    title: "Horizon Forbidden West",
    slug: "horizon-forbidden-west",
    description:
      `Join the BoySticks as they make at least one decent point about the sequel to Guerilla Games' "Horizon Zero Dawn" between digressions into physics and human reproduction. Unfortunately the game's MarioKart mechanic is not discussed.`,
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
