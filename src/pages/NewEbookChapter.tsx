
import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";

const NewEbookChapter = () => {
  return (
    <DashboardLayout title="Chapter Content">
      <div className="container max-w-4xl mx-auto px-4 py-6">
        <Card>
          <CardContent className="p-6">
            <h1 className="text-2xl font-bold mb-4">Ready for New Content</h1>
            <p className="text-gray-600">
              The chapter content has been cleared and is ready for new material.
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default NewEbookChapter;
