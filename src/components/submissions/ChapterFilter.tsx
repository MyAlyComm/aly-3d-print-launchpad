
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ChapterFilterProps {
  chapters: string[];
  selectedChapter: string;
  onChapterChange: (value: string) => void;
}

export const ChapterFilter = ({ chapters, selectedChapter, onChapterChange }: ChapterFilterProps) => {
  return (
    <div className="mb-8">
      <Label htmlFor="chapter-filter" className="mb-2 block">Filter by chapter</Label>
      <Select 
        value={selectedChapter}
        onValueChange={onChapterChange}
      >
        <SelectTrigger id="chapter-filter" className="w-full max-w-xs">
          <SelectValue placeholder="Select a chapter" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Chapters</SelectItem>
          {chapters.map((chapterNumber) => (
            <SelectItem key={chapterNumber} value={chapterNumber}>
              {parseInt(chapterNumber) === 0 ? "Introduction" : `Chapter ${chapterNumber}`}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
