import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Factory, Flag, Warehouse, Package, Zap, Store, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const manufacturers = [
  {
    name: "Prusament",
    origin: "EU - Czech Republic",
    warehouses: "",
    specialty: "Premium PLA, PETG, ASA",
    highSpeed: true,
    store: "https://www.prusa3d.com/category/filament/",
    notes: "Premium filaments with exceptional consistency and accuracy; higher priced but widely considered worth it for quality results."
  },
  {
    name: "Polymaker",
    origin: "China",
    warehouses: "USA, EU, Others",
    specialty: "Wide Range + Engineering",
    highSpeed: true,
    store: "https://us.polymaker.com/collections/all",
    notes: "Well-regarded filaments with innovative materials and reliable performance; mid-range pricing with particularly strong specialty options."
  },
  {
    name: "ColorFabb",
    origin: "Netherlands",
    warehouses: "",
    specialty: "Composites",
    highSpeed: true,
    store: "https://colorfabb.us/",
    notes: "Premium European filaments known for unique materials and color options; higher-priced but valued for exceptional quality, specialty composites, and consistent performance."
  },
  {
    name: "Proto-pasta",
    origin: "Washington, USA",
    warehouses: "",
    specialty: "PLA",
    highSpeed: true,
    store: "https://proto-pasta.com/collections/all",
    notes: "Boutique, high-end filaments, specialty materials and vibrant colors; premium-priced with excellent quality control and innovative composites."
  },
  {
    name: "Fillamentum",
    origin: "Czech Republic",
    warehouses: "",
    specialty: "General High-Quality",
    highSpeed: true,
    store: "https://fillamentum.com/",
    notes: "Czech-made premium filaments known for exceptional color accuracy and specialty materials; higher-priced with outstanding QC and unique options like Timberfill and ASA Extrafill."
  },
  {
    name: "BASF Ultrafuse",
    origin: "Germany",
    warehouses: "EU, Worldwide",
    specialty: "Industrial",
    highSpeed: false,
    store: "https://forward-am.com/partners/distributors/",
    notes: "Industrial-grade filaments from a chemical giant; premium-priced with exceptional reliability for engineering applications and specialized materials like metal-infused and CF composites."
  },
  {
    name: "3DXTech",
    origin: "USA",
    warehouses: "",
    specialty: "High-Performance",
    highSpeed: true,
    store: "https://www.3dxtech.com/",
    notes: "Offers high-performance, engineered filaments tailored for industrial, aerospace, and automotive-grade applications."
  },
  {
    name: "Taulman3D",
    origin: "USA",
    warehouses: "",
    specialty: "Nylon",
    highSpeed: true,
    store: "https://www.digitmakers.ca/pages/search-results-page?q=taulman",
    notes: "Known for specialty nylons and industrial-grade materials, delivering strength, durability, and advanced print capabilities."
  },
  {
    name: "Matter3D",
    origin: "Canada",
    warehouses: "Victoria, BC",
    specialty: "High-Performance PLA, food safe materials, wood-filled PLA",
    highSpeed: true,
    store: "https://www.matter3d.com/",
    notes: "Engineering-grade Performance PLA with high heat resistance and strength; food-safe; wood-filled PLA with real cedar. Praised for strength, stiffness, and matte finish; some reports of filament moisture issues out of the box"
  },
  {
    name: "NinjaTek",
    origin: "USA",
    warehouses: "",
    specialty: "Flexible TPU",
    highSpeed: true,
    store: "https://ninjatek.com/",
    notes: "Industrial-grade filaments from a chemical giant; premium-priced with exceptional reliability for engineering applications and specialized materials like metal-infused and CF composites."
  }
];

export const FilamentManufacturers = () => {
  return (
    <div className="rounded-lg border shadow-sm overflow-hidden">
      <Table>
        <TableHeader className="bg-gray-50">
          <TableRow>
            <TableHead className="font-semibold">
              <span className="flex items-center gap-2">
                <Factory className="h-4 w-4 text-primary" />
                Manufacturer
              </span>
            </TableHead>
            <TableHead className="font-semibold">
              <span className="flex items-center gap-2">
                <Flag className="h-4 w-4 text-primary" />
                Origin
              </span>
            </TableHead>
            <TableHead className="font-semibold">
              <span className="flex items-center gap-2">
                <Warehouse className="h-4 w-4 text-primary" />
                Warehouses
              </span>
            </TableHead>
            <TableHead className="font-semibold">
              <span className="flex items-center gap-2">
                <Package className="h-4 w-4 text-primary" />
                Specialty
              </span>
            </TableHead>
            <TableHead className="font-semibold">
              <span className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                High Speed
              </span>
            </TableHead>
            <TableHead className="font-semibold">
              <span className="flex items-center gap-2">
                <Store className="h-4 w-4 text-primary" />
                Store
              </span>
            </TableHead>
            <TableHead className="font-semibold">
              <span className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" />
                Notes
              </span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {manufacturers.map((manufacturer) => (
            <TableRow key={manufacturer.name} className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium">{manufacturer.name}</TableCell>
              <TableCell>
                <Badge variant="outline" className="bg-gray-50">
                  {manufacturer.origin}
                </Badge>
              </TableCell>
              <TableCell>{manufacturer.warehouses || "—"}</TableCell>
              <TableCell>
                <Badge variant="secondary" className="font-medium">
                  {manufacturer.specialty}
                </Badge>
              </TableCell>
              <TableCell>
                {manufacturer.highSpeed ? (
                  <Badge variant="default" className="bg-green-500">✓ Compatible</Badge>
                ) : (
                  <Badge variant="destructive">✗ Limited</Badge>
                )}
              </TableCell>
              <TableCell>
                <a 
                  href={manufacturer.store} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  <Store className="h-4 w-4" />
                  Visit Store
                </a>
              </TableCell>
              <TableCell className="max-w-md text-sm text-gray-600">
                {manufacturer.notes}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
