
import { Checkbox } from "@/components/ui/checkbox";

interface CheckboxSectionProps {
  title: string;
  items: { id: string; label: string; checked: boolean; }[];
  onCheckboxChange: (id: string) => void;
}

export const CheckboxSection = ({ title, items, onCheckboxChange }: CheckboxSectionProps) => {
  return (
    <div className="space-y-2">
      <h3 className="font-bold text-lg mb-4">{title}</h3>
      {items.map(({ id, label, checked }) => (
        <div key={id} className="flex items-center space-x-2">
          <Checkbox 
            id={id} 
            checked={checked}
            onCheckedChange={() => onCheckboxChange(id)}
          />
          <label htmlFor={id}>{label}</label>
        </div>
      ))}
    </div>
  );
};
