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
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Lessons Schedule
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-shadow duration-200 flex flex-col justify-between"
          >
            <div>
              <p className="text-sm text-gray-500 mb-1">{lesson.date}</p>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {lesson.topic}
              </h3>
              <span
                className={`inline-block text-xs font-medium px-2 py-1 rounded-md ${
                  lesson.level === "base"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {lesson.level}
              </span>
              {lesson.videoLink && (
                <div className="mt-4">
                  <a
                    href={lesson.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 text-sm hover:text-blue-700 underline transition-colors duration-200"
                  >
                    Watch Replay
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LessonList;
