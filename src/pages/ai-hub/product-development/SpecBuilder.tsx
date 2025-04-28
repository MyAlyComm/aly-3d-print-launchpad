
import React, { useState } from "react";
import { AIHubLayout } from "@/components/ai-hub/AIHubLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FileText, Plus } from "lucide-react";

export default function SpecBuilder() {
  const [specs, setSpecs] = useState([{ name: "", description: "" }]);

  const addSpec = () => {
    setSpecs([...specs, { name: "", description: "" }]);
  };

  const updateSpec = (index: number, field: "name" | "description", value: string) => {
    const newSpecs = specs.map((spec, i) => {
      if (i === index) {
        return { ...spec, [field]: value };
      }
      return spec;
    });
    setSpecs(newSpecs);
  };

  return (
    <AIHubLayout title="Specification Builder">
      <div className="container mx-auto py-6 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Product Specifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {specs.map((spec, index) => (
              <div key={index} className="space-y-2 p-4 border rounded-lg">
                <div>
                  <Label>Specification Name</Label>
                  <Input
                    value={spec.name}
                    onChange={(e) => updateSpec(index, "name", e.target.value)}
                    placeholder="e.g., Dimensions, Material, Print Time"
                  />
                </div>
                <div>
                  <Label>Description</Label>
                  <Textarea
                    value={spec.description}
                    onChange={(e) => updateSpec(index, "description", e.target.value)}
                    placeholder="Enter specification details"
                  />
                </div>
              </div>
            ))}
            <Button onClick={addSpec} variant="outline" className="w-full">
              <Plus className="mr-2 h-4 w-4" />
              Add Specification
            </Button>
            <Button className="w-full">
              <FileText className="mr-2 h-4 w-4" />
              Generate Full Specification Document
            </Button>
          </CardContent>
        </Card>
      </div>
    </AIHubLayout>
  );
}
