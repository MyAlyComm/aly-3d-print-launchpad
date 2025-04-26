
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface TimeAvailabilitySectionProps {
  value: string;
  onChange: (value: string) => void;
}

export const TimeAvailabilitySection = ({ value, onChange }: TimeAvailabilitySectionProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Time Availability</h3>
      <RadioGroup value={value} className="space-y-2">
        <div className="flex items-center space-x-2">
          <RadioGroupItem id="time-1" value="1-5 hours" onClick={() => onChange('1-5 hours')} />
          <Label htmlFor="time-1">1-5 hours (Minimal commitment)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem id="time-2" value="5-15 hours" onClick={() => onChange('5-15 hours')} />
          <Label htmlFor="time-2">5-15 hours (Part-time focus)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem id="time-3" value="15-30 hours" onClick={() => onChange('15-30 hours')} />
          <Label htmlFor="time-3">15-30 hours (Significant part-time)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem id="time-4" value="30+ hours" onClick={() => onChange('30+ hours')} />
          <Label htmlFor="time-4">30+ hours (Full-time dedication)</Label>
        </div>
      </RadioGroup>
    </div>
  );
};
