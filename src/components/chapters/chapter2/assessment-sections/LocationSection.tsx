
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";

interface LocationSectionProps {
  locationType: string;
  region: string;
  country: string;
  onLocationTypeChange: (value: string) => void;
  onRegionChange: (value: string) => void;
  onCountryChange: (value: string) => void;
}

export const LocationSection = ({
  locationType,
  region,
  country,
  onLocationTypeChange,
  onRegionChange,
  onCountryChange,
}: LocationSectionProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Geographic Location</h3>
      
      <div className="mb-4">
        <h4 className="text-base mb-2">Location Type:</h4>
        <RadioGroup value={locationType} className="space-y-2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem id="loc-1" value="Major City" onClick={() => onLocationTypeChange('Major City')} />
            <Label htmlFor="loc-1">Major City (Large metropolitan area)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem id="loc-2" value="Mid-Size City" onClick={() => onLocationTypeChange('Mid-Size City')} />
            <Label htmlFor="loc-2">Mid-Size City (Smaller city with good infrastructure)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem id="loc-3" value="Suburban" onClick={() => onLocationTypeChange('Suburban')} />
            <Label htmlFor="loc-3">Suburban (Residential area near a city)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem id="loc-4" value="Rural/Remote" onClick={() => onLocationTypeChange('Rural/Remote')} />
            <Label htmlFor="loc-4">Rural/Remote (Small town or countryside)</Label>
          </div>
        </RadioGroup>
      </div>
      
      <div className="mb-4">
        <h4 className="text-base mb-2">Region:</h4>
        <RadioGroup value={region} className="space-y-2">
          {[
            "North America",
            "Europe",
            "Asia",
            "Australia & New Zealand",
            "Latin America",
            "Africa",
            "Middle East"
          ].map((r, index) => (
            <div key={r} className="flex items-center space-x-2">
              <RadioGroupItem 
                id={`reg-${index + 1}`} 
                value={r} 
                onClick={() => onRegionChange(r)} 
              />
              <Label htmlFor={`reg-${index + 1}`}>{r}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      
      <div className="mb-4">
        <Label htmlFor="country">Country:</Label>
        <Input 
          id="country" 
          value={country} 
          onChange={(e) => onCountryChange(e.target.value)} 
          placeholder="Enter your country"
          className="mt-1" 
        />
      </div>
    </div>
  );
};
