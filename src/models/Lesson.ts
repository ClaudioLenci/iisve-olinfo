export type Lesson = {
  id: number;
  date: string;
  level: "base" | "advanced";
  topic: string;
  videoLink?: string;
};
