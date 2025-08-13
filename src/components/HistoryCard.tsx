import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { loadHistory, toCSV } from "@/lib/history";
import { Download } from "lucide-react";

const HistoryCard = () => {
  const history = loadHistory();

  const handleDownload = () => {
    const csv = toCSV(loadHistory());
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "typing_history.csv";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <section aria-label="Results History">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between gap-4">
          <CardTitle>Results History</CardTitle>
          <Button onClick={handleDownload} variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Download CSV
          </Button>
        </CardHeader>
        <CardContent>
          {history.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No results yet. Complete a test to populate your history.
            </p>
          ) : (
            <Table>
              <TableCaption>Your last 10 results</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>WPM</TableHead>
                  <TableHead>Accuracy</TableHead>
                  <TableHead>Errors</TableHead>
                  <TableHead>Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {history.map((h, idx) => (
                  <TableRow key={`${h.timestamp}-${idx}`}>
                    <TableCell>
                      {new Date(h.timestamp).toLocaleString()}
                    </TableCell>
                    <TableCell className="font-medium text-primary">
                      {h.wpm}
                    </TableCell>
                    <TableCell className="text-success">{h.accuracy}%</TableCell>
                    <TableCell className="text-error">{h.errors}</TableCell>
                    <TableCell className="text-warning">{h.timeElapsed}s</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </section>
  );
};

export default HistoryCard;
