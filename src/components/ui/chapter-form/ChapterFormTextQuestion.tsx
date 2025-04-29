
import React from "react";
import { Button } from "@/components/ui/button";
import { Save, CheckCircle } from "lucide-react";

interface ChapterFormTextQuestionProps {
  id: string;
  question: string;
  value: string;
  index?: number;
  isSaved?: boolean;
  onChange: (value: string) => void;
  onSave: () => void;
}

export function ChapterFormTextQuestion({
  id,
  question,
  value,
  index,
  isSaved = false,
  onChange,
  onSave
}: ChapterFormTextQuestionProps) {
  return (
    <div className="space-y-2 bg-white p-5 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center">
        <label htmlFor={id} className="text-sm font-medium text-gray-700">
          {index !== undefined ? `Question ${index + 1}:` : ""}
        </label>
        {isSaved && (
          <span className="flex items-center text-green-500 text-sm">
            <CheckCircle className="h-4 w-4 mr-1" />
            Saved
          </span>
        )}
      </div>
      <p className="font-medium mb-2">{question}</p>
      <textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full min-h-[100px] p-3 rounded-md border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary"
        placeholder="Type your answer here..."
      />
      <div className="flex justify-end">
        <Button
          size="sm"
          variant="outline"
          onClick={onSave}
          disabled={!value?.trim()}
          className="mt-2"
        >
          <Save className="h-4 w-4 mr-2" />
          Save Answer
        </Button>
      </div>
    </div>
  );
}
