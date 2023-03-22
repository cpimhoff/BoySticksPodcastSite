export type Episode = {
  slug: string;
  title: string;
  description: string;
  releasedOn: Timestamp | null;
  fileUrl: string;
};

// YYYY-DD-MM timestamp
type Timestamp = `202${d}-${"0" | "1"}${d}-${"0" | "1" | "2" | "3"}${d}`;
type d = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

export type RssChannel = "release" | "draft";
