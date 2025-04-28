
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useChapterProgress } from "@/hooks/useChapterProgress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import { ProfitsMatchDisplay } from "@/components/chapters/chapter4/worksheet/components/ProfitsMatchDisplay";
import { ProductTrinityDisplay } from "@/components/chapters/chapter4/worksheet/components/ProductTrinityDisplay";

const MySubmissions = () => {
  const { chapterProgresses } = useChapterProgress();

  // Find Chapter 4 worksheet responses
  const chapter4Data = chapterProgresses?.find(
    (progress) => progress.chapter_number === 4 && progress.section_id === 'worksheet'
  );

  // Parse the stored JSON data
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

        {chapter4ParsedData ? (
          <div className="space-y-8">
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
          </div>
        ) : (
          <Card>
            <CardContent className="py-8">
              <p className="text-center text-muted-foreground">
                No submissions found for Chapter 4. Complete the worksheet to see your results here.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
};

export default MySubmissions;
