import { Lesson } from "@/models/Lesson";
import { LessonCard } from "./lesson-card";
import LessonsList from "@/lessons.json";

export function LessonList() {
  const lessons: Lesson[] = LessonsList;
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
