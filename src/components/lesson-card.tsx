import { Lesson } from "@/models/Lesson";
import { PlayIcon } from "@heroicons/react/24/solid";

export function LessonCard({lesson}: {lesson: Lesson}) {
  return (
    <div
      className="bg-gray1 shadow-md rounded-lg p-4 border border-gray2 hover:shadow-lg transition-shadow duration-200 flex flex-col justify-between"
    >
      <div>
        <p className="text-sm mb-1">{lesson.date}</p>
        <h3 className="text-xl font-semibold mb-2 text-text-white2">
          {lesson.topic}
        </h3>
        <span
          className={`inline-block text-xs font-medium px-2 py-1 rounded-md ${
            lesson.level === "base"
            ? "bg-green-100 text-green-700"
            : "bg-orange-100 text-orange-700"
          }`}
        >
          {lesson.level}
        </span>
      </div>
      {lesson.videoLink && (
        <div className="mt-4">
          <a
            href={lesson.videoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-top justify-center gap-x-1 bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors duration-200"
          >
            <p>Guarda</p>
            <PlayIcon className="size-5"/>
          </a>
        </div>
      )}
    </div>
  );
}