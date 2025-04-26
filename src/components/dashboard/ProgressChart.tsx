
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useChapterProgress } from "@/hooks/useChapterProgress";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

export const ProgressChart = () => {
  const { chapterProgresses } = useChapterProgress();
  
  const progressData = chapterProgresses?.reduce((acc: any[], progress) => {
    if (progress.completed_at) {
      const date = new Date(progress.completed_at).toLocaleDateString();
      const existingEntry = acc.find(entry => entry.date === date);
      
      if (existingEntry) {
        existingEntry.completed += 1;
      } else {
        acc.push({ date, completed: 1 });
      }
    }
    return acc;
  }, []).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Learning Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={progressData}>
              <XAxis
                dataKey="date"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="completed"
                stroke="#8884d8"
                strokeWidth={2}
                dot={{ fill: "#8884d8" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
