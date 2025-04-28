
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useChapterProgress } from "@/hooks/useChapterProgress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import { ProfitsMatchDisplay } from "@/components/chapters/chapter4/worksheet/components/ProfitsMatchDisplay";
import { ProductTrinityDisplay } from "@/components/chapters/chapter4/worksheet/components/ProductTrinityDisplay";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const MySubmissions = () => {
  const { chapterProgresses } = useChapterProgress();
  const [selectedChapter, setSelectedChapter] = useState<string>("all");

  // Find Chapter 4 worksheet responses
  const chapter4Data = chapterProgresses?.find(
    (progress) => progress.chapter_number === 4 && progress.section_id === 'worksheet'
  );

  // Parse the stored JSON data for Chapter 4
  const getChapter4Data = () => {
    if (!chapter4Data?.response_data) return null;

    try {
      // Check if response_data has worksheet property
      const responseData = chapter4Data.response_data as Record<string, any>;
      if (!responseData.worksheet || !responseData.worksheet.textInputs) return null;
      
      const textInputs = responseData.worksheet.textInputs;
      return {
        productNames: JSON.parse(textInputs.productNames || '{}'),
        profitsScores: JSON.parse(textInputs.profitsScores || '{}'),
        matchScores: JSON.parse(textInputs.matchScores || '{}'),
        finalScores: JSON.parse(textInputs.finalScores || '{}'),
        trinity: JSON.parse(textInputs.trinity || '{}'),
      };
    } catch (e) {
      console.error("Error parsing chapter 4 data:", e);
      return null;
    }
  };

  // Group responses by chapter for filtering
  const responsesByChapter = chapterProgresses?.reduce((acc, progress) => {
    if (!acc[progress.chapter_number]) {
      acc[progress.chapter_number] = [];
    }
    acc[progress.chapter_number].push(progress);
    return acc;
  }, {} as Record<number, typeof chapterProgresses>) || {};

  // Filter chapters based on selection
  const chaptersToDisplay = selectedChapter === "all" 
    ? Object.keys(responsesByChapter).map(Number) 
    : [parseInt(selectedChapter)];

  const chapter4ParsedData = getChapter4Data();

  return (
    <DashboardLayout title="My Chapter Submissions">
      <div className="max-w-7xl mx-auto py-6">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="h-5 w-5 text-primary" />
          <h1 className="text-2xl font-semibold">My Chapter Submissions</h1>
        </div>
        
        <p className="text-muted-foreground mb-6">
          Review your submissions for all chapters. These responses are automatically saved.
        </p>

        <div className="mb-8">
          <Label htmlFor="chapter-filter" className="mb-2 block">Filter by chapter</Label>
          <Select 
            value={selectedChapter}
            onValueChange={setSelectedChapter}
          >
            <SelectTrigger id="chapter-filter" className="w-full max-w-xs">
              <SelectValue placeholder="Select a chapter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Chapters</SelectItem>
              {Object.keys(responsesByChapter).map((chapterNumber) => (
                <SelectItem key={chapterNumber} value={chapterNumber}>
                  {parseInt(chapterNumber) === 0 ? "Introduction" : `Chapter ${chapterNumber}`}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-8">
          {chaptersToDisplay.includes(2) && (
            <Card>
              <CardHeader>
                <CardTitle>Chapter 2: Self-Assessment Results</CardTitle>
              </CardHeader>
              <CardContent>
                {renderChapter2Data(responsesByChapter[2])}
              </CardContent>
            </Card>
          )}

          {chaptersToDisplay.includes(4) && chapter4ParsedData ? (
            <Card>
              <CardHeader>
                <CardTitle>Chapter 4: Product Evaluation Results</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {Object.keys(chapter4ParsedData.productNames).map((productKey) => (
                  <ProfitsMatchDisplay
                    key={productKey}
                    productName={chapter4ParsedData.productNames[productKey]}
                    profitsScores={chapter4ParsedData.profitsScores[productKey]}
                    matchScores={chapter4ParsedData.matchScores[productKey]}
                    finalScore={chapter4ParsedData.finalScores[productKey]}
                    bgColor="bg-white"
                    borderColor="border-gray-200"
                  />
                ))}

                <ProductTrinityDisplay trinity={chapter4ParsedData.trinity} />
              </CardContent>
            </Card>
          ) : chaptersToDisplay.includes(4) ? (
            <Card>
              <CardHeader>
                <CardTitle>Chapter 4: Product Evaluation Results</CardTitle>
              </CardHeader>
              <CardContent className="py-8">
                <p className="text-center text-muted-foreground">
                  No submissions found for Chapter 4. Complete the worksheet to see your results here.
                </p>
              </CardContent>
            </Card>
          ) : null}

          {renderOtherChapters(chaptersToDisplay, responsesByChapter)}
        </div>
      </div>
    </DashboardLayout>
  );
};

// Helper function to render Chapter 2 assessment data
const renderChapter2Data = (responses: any[] | undefined) => {
  if (!responses) return <p className="text-center text-muted-foreground">No data available</p>;

  const worksheetResponse = responses.find(r => r.section_id === 'worksheet');
  if (!worksheetResponse?.response_data?.assessment?.textInputs) {
    return <p className="text-center text-muted-foreground">No assessment data available</p>;
  }

  const textInputs = worksheetResponse.response_data.assessment.textInputs;
  
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="border p-4 rounded-md">
          <h3 className="font-medium mb-2">Budget</h3>
          <p>{formatAssessmentValue(textInputs.budget)}</p>
        </div>
        <div className="border p-4 rounded-md">
          <h3 className="font-medium mb-2">Experience Level</h3>
          <p>{formatAssessmentValue(textInputs.experience)}</p>
        </div>
        <div className="border p-4 rounded-md">
          <h3 className="font-medium mb-2">Time Availability</h3>
          <p>{formatAssessmentValue(textInputs.timeAvailable)}</p>
        </div>
        <div className="border p-4 rounded-md">
          <h3 className="font-medium mb-2">Market Focus</h3>
          <p>{formatAssessmentValue(textInputs.locationType)}</p>
        </div>
      </div>
      
      {textInputs.skills && (
        <div className="border p-4 rounded-md">
          <h3 className="font-medium mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {textInputs.skills.split(',').map((skill: string) => (
              <span key={skill} className="bg-primary/10 text-primary px-2 py-1 text-sm rounded">
                {skill.trim()}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {(textInputs.advantages || textInputs.challenges || textInputs.markets) && (
        <div className="border p-4 rounded-md space-y-4">
          {textInputs.advantages && (
            <div>
              <h3 className="font-medium mb-1">Advantages</h3>
              <p className="text-sm">{textInputs.advantages}</p>
            </div>
          )}
          {textInputs.challenges && (
            <div>
              <h3 className="font-medium mb-1">Challenges</h3>
              <p className="text-sm">{textInputs.challenges}</p>
            </div>
          )}
          {textInputs.markets && (
            <div>
              <h3 className="font-medium mb-1">Target Markets</h3>
              <p className="text-sm">{textInputs.markets}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Helper to format assessment values in a readable way
const formatAssessmentValue = (value: string) => {
  if (!value) return "Not specified";
  
  // Format budget values
  if (value === "low") return "Low Budget (Under $500)";
  if (value === "medium") return "Medium Budget ($500-$1500)";
  if (value === "high") return "High Budget ($1500+)";
  
  // Format experience values
  if (value === "none") return "No Experience";
  if (value === "beginner") return "Beginner (Some 3D knowledge)";
  if (value === "intermediate") return "Intermediate (Created prints before)";
  if (value === "advanced") return "Advanced (Regular printing experience)";
  
  // Format time values
  if (value === "minimal") return "Minimal (5-10 hours/week)";
  if (value === "moderate") return "Moderate (10-20 hours/week)";
  if (value === "substantial") return "Substantial (20+ hours/week)";
  
  // Format location values
  if (value === "local") return "Local Markets";
  if (value === "regional") return "Regional Markets";
  if (value === "global") return "Global Markets";
  
  return value;
};

// Helper function to render other chapters
const renderOtherChapters = (chaptersToDisplay: number[], responsesByChapter: Record<number, any[]>) => {
  const otherChapters = chaptersToDisplay.filter(chapter => chapter !== 2 && chapter !== 4);
  
  if (otherChapters.length === 0) return null;
  
  return otherChapters.map(chapterNum => {
    const responses = responsesByChapter[chapterNum];
    if (!responses || responses.length === 0) return null;
    
    return (
      <Card key={chapterNum}>
        <CardHeader>
          <CardTitle>
            {chapterNum === 0 ? "Introduction" : `Chapter ${chapterNum}`} Responses
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {responses.map(response => {
              // Skip worksheet sections as they need special handling
              if (response.section_id === 'worksheet') {
                return renderWorksheetSummary(chapterNum, response);
              }
              
              return (
                <div key={response.section_id} className="border p-4 rounded-md">
                  <h3 className="font-medium mb-2">{formatSectionId(response.section_id)}</h3>
                  <p className="text-sm text-muted-foreground">
                    Completed on {formatDate(response.completed_at)}
                  </p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    );
  });
};

// Helper to format section IDs to be more readable
const formatSectionId = (sectionId: string) => {
  return sectionId
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Format dates in a user-friendly way
const formatDate = (dateString: string | null) => {
  if (!dateString) return "Not completed";
  
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

// Render worksheet summary for chapters other than 2 and 4
const renderWorksheetSummary = (chapterNum: number, response: any) => {
  if (!response.response_data) return null;
  
  return (
    <div key={`${chapterNum}-worksheet`} className="border p-4 rounded-md">
      <h3 className="font-medium mb-2">Worksheet Responses</h3>
      <p className="text-sm text-muted-foreground mb-2">
        Completed on {formatDate(response.completed_at)}
      </p>
      <p>View the full responses in the chapter worksheet section.</p>
    </div>
  );
};

export default MySubmissions;
