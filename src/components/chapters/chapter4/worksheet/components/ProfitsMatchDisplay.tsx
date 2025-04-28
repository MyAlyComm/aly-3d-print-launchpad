
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface ScoringData {
  [key: string]: {
    p?: string;
    r?: string;
    o?: string;
    f?: string;
    i?: string;
    t?: string;
    s?: string;
    m?: string;
    a?: string;
    c?: string;
    h?: string;
    total?: string;
  };
}

interface ProfitsMatchDisplayProps {
  productName: string;
  profitsScores: ScoringData[keyof ScoringData];
  matchScores: ScoringData[keyof ScoringData];
  finalScore: string;
  bgColor?: string;
  borderColor?: string;
}

export const ProfitsMatchDisplay = ({
  productName,
  profitsScores,
  matchScores,
  finalScore,
  bgColor = "bg-white",
  borderColor = "border-gray-200"
}: ProfitsMatchDisplayProps) => {
  const profitsLabels = {
    p: "Problem-solving",
    r: "Return on Investment",
    o: "Opportunity",
    f: "Feasibility", 
    i: "In-demand",
    t: "Time-to-Money",
    s: "Staying Power"
  };

  const matchLabels = {
    m: "Maker Skills",
    a: "Artistic Alignment", 
    t: "Time Available",
    c: "Competition Analysis",
    h: "Home Location"
  };

  return (
    <Card className={`${bgColor} shadow-sm`}>
      <CardHeader>
        <CardTitle>{productName || "Unnamed Product"}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2">PROFITS Framework</h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Criteria</TableHead>
                  <TableHead>Score</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Object.entries(profitsLabels).map(([key, label]) => (
                  <TableRow key={key}>
                    <TableCell>{label}</TableCell>
                    <TableCell>{profitsScores[key] || '0'}</TableCell>
                  </TableRow>
                ))}
                <TableRow className="font-bold">
                  <TableCell>Total PROFITS</TableCell>
                  <TableCell>{profitsScores.total || '0'}/100</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div>
            <h4 className="font-semibold mb-2">MATCH Framework</h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Criteria</TableHead>
                  <TableHead>Score</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Object.entries(matchLabels).map(([key, label]) => (
                  <TableRow key={key}>
                    <TableCell>{label}</TableCell>
                    <TableCell>{matchScores[key] || '0'}</TableCell>
                  </TableRow>
                ))}
                <TableRow className="font-bold">
                  <TableCell>Total MATCH</TableCell>
                  <TableCell>{matchScores.total || '0'}/100</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        <div className={`mt-4 pt-4 border-t ${borderColor}`}>
          <div className="flex items-center justify-between">
            <span className="font-bold">FINAL SCORE:</span>
            <span className="font-bold">{finalScore || '0'}/100</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
