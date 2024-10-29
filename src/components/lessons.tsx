import { LessonCard } from "./lesson-card";

type Lesson = {
  id: number;
  date: string;
  level: "base" | "advanced";
  topic: string;
  videoLink?: string;
};

export function LessonList() {
  const lessons: Lesson[] = [
    {
      id: 1,
      date: "2021-09-01",
      level: "base",
      topic: "Introduction to React",
      videoLink: "https://www.youtube.com/watch?v=0KlRgFEEz0g",
    },
    { id: 2, date: "2021-09-08", level: "advanced", topic: "React Hooks" },
    { id: 3, date: "2021-09-15", level: "base", topic: "React Router" },
  ];
  /*const today = new Date().toISOString().split("T")[0];
  /*const previousLessons = lessons.filter((lesson) => lesson.date < today);
  const upcomingLessons = lessons.filter((lesson) => lesson.date >= today);*/

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">
        Lezioni
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson) => (
          <LessonCard lesson={lesson} key={lesson.id}/>
        ))}
      </div>
    </div>
  );
}

export default LessonList;
