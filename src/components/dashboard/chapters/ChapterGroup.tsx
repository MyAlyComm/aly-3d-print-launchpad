
import { ChapterCard } from "../ChapterCard";
import { Chapter } from "./types";

interface ChapterGroupProps {
  chapters: Chapter[];
  isChapterCompleted: (num: number) => boolean;
}

export const ChapterGroup = ({ chapters, isChapterCompleted }: ChapterGroupProps) => {
  return (
    <div className="grid gap-6">
      {chapters.map((chapter) => (
        <ChapterCard
          key={chapter.number}
          number={chapter.number}
          title={chapter.title}
          description={chapter.description}
          isCompleted={isChapterCompleted(chapter.number)}
          imageUrl={chapter.imageUrl}
        />
      ))}
    </div>
  );
};
