import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Factory, Flag, Warehouse, Package, Zap, Store, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const manufacturers = {
  premium: [
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
  ],
  professional: [
    {
      name: "Atomic Filament",
      origin: "Indiana, USA",
      warehouses: "",
      specialty: "Standard+ Specialty",
      highSpeed: false,
      store: "https://atomicfilament.com/",
      notes: "American-made premium filaments known for tight tolerances and consistency; moderately-priced with excellent technical support and particularly strong PETG offerings."
    },
    {
      name: "MatterHackers",
      origin: "California, USA",
      warehouses: "Pennsylvania, USA",
      specialty: "PRO Series PLA, Nylon",
      highSpeed: true,
      store: "https://www.matterhackers.com/",
      notes: "Diverse range of quality filaments with good value; competitive pricing with reliable performance and broad material selection including PRO series for demanding applications."
    },
    {
      name: "Spectrum Filaments",
      origin: "Poland",
      warehouses: "",
      specialty: "General Purpose",
      highSpeed: true,
      store: "https://spectrumfilaments.com/en/",
      notes: "Polish-made quality filaments with excellent color variety; mid-range pricing with good dimensional accuracy and strong PLA/PETG options."
    },
    {
      name: "FormFutura",
      origin: "Netherlands",
      warehouses: "Nijmegen",
      specialty: "Engineering, Exotic",
      highSpeed: true,
      store: "https://formfutura.com/",
      notes: "High-end European filaments focused on specialized engineering materials; premium-priced with exceptional technical grades and innovative composites like EasyWood and HDglass."
    },
    {
      name: "Blackmagic 3D",
      origin: "USA",
      warehouses: "",
      specialty: "Specialty CF, Metal Filled",
      highSpeed: false,
      store: "https://3dprint.com/51502/black-magic-3d-graphene/",
      notes: "Specializes in premium filaments with a focus on vibrant colors and reliable printing performance for makers and pros alike."
    },
    {
      name: "FilamentOne",
      origin: "USA",
      warehouses: "Amazon",
      specialty: "Engineering, Flexible",
      highSpeed: false,
      store: "https://hartsmartproducts.com/",
      notes: "Trusted for high-quality filaments and printing supplies, offering consistency, variety, and professional-grade results."
    },
    {
      name: "Filamentive",
      origin: "UK",
      warehouses: "",
      specialty: "Recycled, Eco-friendly",
      highSpeed: false,
      store: "https://www.filamentive.com/",
      notes: "Eco-friendly filament brand combining sustainability with top-notch print quality for conscious creators."
    },
    {
      name: "IC3D",
      origin: "USA",
      warehouses: "",
      specialty: "Open-Source, USA-Made",
      highSpeed: true,
      store: "https://www.ic3dprinters.com/shop/",
      notes: "Pioneers of open-source and industrial-grade filaments, delivering strength, reliability, and innovation."
    },
    {
      name: "Village Plastics",
      origin: "USA",
      warehouses: "",
      specialty: "Standard+ Specialty",
      highSpeed: false,
      store: "https://www.villageplastics.com/",
      notes: "Leading manufacturer known for dependable, high-performance filaments made in the USA for hobbyists and industry."
    },
    {
      name: "Kimya",
      origin: "France",
      warehouses: "",
      specialty: "Engineering",
      highSpeed: true,
      store: "https://www.kimya.fr/",
      notes: "Offers technical and specialty filaments tailored for industrial applications and demanding prints."
    },
    {
      name: "Raise3D",
      origin: "USA",
      warehouses: "",
      specialty: "Standard, Engineering",
      highSpeed: true,
      store: "https://www.raise3d.com/",
      notes: "Delivers professional-grade filaments engineered for precision, strength, and seamless compatibility with Raise3D printers."
    },
    {
      name: "TreeD Filaments",
      origin: "Italy",
      warehouses: "",
      specialty: "Engineering, Flexible",
      highSpeed: false,
      store: "https://treedfilaments.com/",
      notes: "Specializes in advanced and exotic filaments, ideal for creators seeking unique materials and high-end results."
    },
    {
      name: "Ultimaker",
      origin: "Netherlands",
      warehouses: "",
      specialty: "PLA, CPE, Nylon",
      highSpeed: true,
      store: "https://ultimaker.com/",
      notes: "Provides reliable, easy-to-use filaments optimized for professional and industrial 3D printing workflows."
    },
    {
      name: "Zortrax",
      origin: "Poland",
      warehouses: "",
      specialty: "Proprietary for Zortrax Printers",
      highSpeed: false,
      store: "https://zortrax.com/",
      notes: "Offers high-quality, precision-engineered filaments designed for seamless integration with Zortrax printers."
    },
  ],
  budget: [
    {
      name: "Hatchbox",
      origin: "USA",
      warehouses: "Amazon Focused",
      specialty: "PLA, ABS",
      highSpeed: false,
      store: "https://www.hatchbox3d.com/",
      notes: "Budget-friendly filaments with consistent quality and wide color selection; affordable pricing with reliable performance across common materials, particularly strong PLA offerings."
    },
    {
      name: "Overture",
      origin: "China",
      warehouses: "USA - Amazon Focused",
      specialty: "PLA, PETG, TPU",
      highSpeed: true,
      store: "https://overture3d.com/",
      notes: "Value-oriented filaments with good quality control; competitive pricing with build plate adherence solutions and reliable all-around performance for everyday printing."
    },
    {
      name: "Sunlu",
      origin: "China",
      warehouses: "Aliexpress-Amazon-Direct",
      specialty: "PLA, PETG",
      highSpeed: true,
      store: "https://www.sunlu.com/",
      notes: "Budget-friendly Chinese filaments with decent consistency; economically priced with satisfactory performance and particularly known for their dry storage packaging system."
    },
    {
      name: "eSUN",
      origin: "China",
      warehouses: "Amazon Focused - Global",
      specialty: "PLA+, PETG",
      highSpeed: true,
      store: "https://esun3dstore.com/",
      notes: "Well-established Chinese brand with good quality-to-price ratio; affordable with innovative materials like PLA+ and water-soluble PVA options."
    },
    {
      name: "Jamghe",
      origin: "China",
      warehouses: "",
      specialty: "PLA, PLA+, PETG",
      highSpeed: true,
      store: "https://www.jamghe.com/",
      notes: "Produces vibrant and specialty filaments designed to add creativity and flair to everyday 3D prints."
    },
    {
      name: "Inland",
      origin: "USA - Private label Micro center",
      warehouses: "",
      specialty: "PLA, PETG",
      highSpeed: true,
      store: "https://www.microcenter.com/category/4294866996/filaments-and-resins",
      notes: "Microcenter's house brand offering good value; budget-priced with surprisingly consistent quality and wide material selection for everyday printing needs."
    },
    {
      name: "SainSmart",
      origin: "China",
      warehouses: "USA - EU",
      specialty: "Flexible (TPU)",
      highSpeed: true,
      store: "https://www.sainsmart.com/collections/filaments",
      notes: "Diverse filament line with specialty focus; moderately priced with notable TPU flexibility options and reliable technical materials for functional prints."
    },
    {
      name: "123-3D",
      origin: "Netherlands",
      warehouses: "",
      specialty: "Budget, General Purpose",
      highSpeed: true,
      store: "https://www.123-3d.nl/",
      notes: "Delivers affordable and versatile filaments, balancing quality and value for everyday 3D printing needs."
    },
    {
      name: "3D Universe",
      origin: "USA",
      warehouses: "",
      specialty: "General Purpose",
      highSpeed: false,
      store: "https://shop3duniverse.com/",
      notes: "Supplies a curated selection of reliable filaments focused on quality, ease of use, and community-driven support."
    },
    {
      name: "American Filament",
      origin: "USA",
      warehouses: "",
      specialty: "General Purpose",
      highSpeed: true,
      store: "https://americanfilament.us/",
      notes: "Produces durable, cost-effective filaments proudly made in the USA for makers of all levels."
    },
    {
      name: "Amolen",
      origin: "China",
      warehouses: "",
      specialty: "Specialty Colors",
      highSpeed: true,
      store: "https://www.amolen.com/",
      notes: "Known for creative specialty filaments, including glow-in-the-dark, color-changing, and silk finishes for standout prints."
    },
    {
      name: "Das Filament",
      origin: "Germany",
      warehouses: "",
      specialty: "Budget PLA",
      highSpeed: true,
      store: "https://www.dasfilament.de/",
      notes: "Offers premium, German-engineered filaments known for consistency, precision, and professional-grade results."
    },
    {
      name: "GST3D",
      origin: "EU",
      warehouses: "",
      specialty: "Budget PLA",
      highSpeed: false,
      store: "https://gst3d.eu/",
      notes: "Provides budget-friendly filaments with a wide color selection, catering to hobbyists and everyday makers."
    },
    {
      name: "Gizmo Dorks",
      origin: "China",
      warehouses: "USA",
      specialty: "Budget, General Purpose",
      highSpeed: false,
      store: "https://gizmodorks.com/",
      notes: "Offers a diverse range of reliable and affordable filaments suited for both beginners and seasoned makers."
    },
    {
      name: "Jama3D",
      origin: "Netherlands",
      warehouses: "",
      specialty: "Budget, General Purpose",
      highSpeed: false,
      store: "www.jama3d.com",
      notes: "Focuses on vibrant, high-quality filaments crafted to meet the needs of creative and professional 3D printing projects."
    },
    {
      name: "Material4print",
      origin: "Germany, EU",
      warehouses: "",
      specialty: "Budget, General Purpose",
      highSpeed: false,
      store: "https://www.material4print.de/",
      notes: "Specializes in performance-driven filaments designed for demanding applications and consistent print quality."
    },
    {
      name: "Paramount 3D",
      origin: "USA",
      warehouses: "",
      specialty: "PLA, PETG",
      highSpeed: false,
      store: "https://www.paramount-3d.com/",
      notes: "Delivers professional-grade filaments with vibrant colors and dependable performance for consistent, high-quality prints."
    },
    {
      name: "Plasticz",
      origin: "Netherlands",
      warehouses: "",
      specialty: "Budget, General Purpose",
      highSpeed: false,
      store: "https://www.plasticz.nl/en/",
      notes: "Provides affordable, user-friendly filaments with a focus on reliability and everyday printing versatility."
    },
    {
      name: "PrintBed",
      origin: "Michigan, USA",
      warehouses: "",
      specialty: "Budget, General Purpose",
      highSpeed: false,
      store: "https://www.printbed.com/",
      notes: "Offers reliable, cost-effective filaments tailored for smooth printing and consistent results."
    },
    {
      name: "Solutech",
      origin: "USA",
      warehouses: "Amazon",
      specialty: "Budget PLA",
      highSpeed: false,
      store: "https://3dsolutech.com/",
      notes: "Delivers budget-friendly filaments known for ease of use, making them ideal for beginners and everyday projects."
    },
  ],
  industrial: [
    {
      name: "Stratasys",
      origin: "USA",
      warehouses: "",
      specialty: "Proprietary ABS, Nylon",
      highSpeed: false,
      store: "https://www.stratasys.com/en/materials/materials-catalog/",
      notes: "Industrial-grade proprietary filaments with exceptional reliability; premium-priced with superior mechanical properties designed specifically for their enterprise printing systems."
    },
    {
      name: "Markforged",
      origin: "Massachusetts, USA",
      warehouses: "",
      specialty: "Carbon Fiber",
      highSpeed: false,
      store: "https://markforged.com/",
      notes: "High-performance composite materials for functional parts; premium-priced with outstanding strength-to-weight ratios featuring continuous fiber reinforcement options."
    },
    {
      name: "DSM / Covestro",
      origin: "Netherlands / Germany",
      warehouses: "",
      specialty: "High-Temp Polymers",
      highSpeed: false,
      store: "https://www.partsbuilt.com/",
      notes: "Engineering-grade materials from chemical industry leaders; high-end pricing with exceptional thermal and mechanical properties for demanding industrial applications."
    },
    {
      name: "3D-Fuel",
      origin: "North Dakota, USA",
      warehouses: "",
      specialty: "Eco-friendly",
      highSpeed: false,
      store: "https://www.3dfuel.com/",
      notes: "American-made eco-conscious filaments with consistent quality; moderately-priced with innovative sustainable materials including hemp-based and recycled options."
    },
    {
      name: "AM Polymers",
      origin: "Germany",
      warehouses: "",
      specialty: "Industrial Polymers",
      highSpeed: false,
      store: "https://am-polymers.de/en/homepage/",
      notes: "Focuses on industrial-grade filaments engineered for high-performance and demanding additive manufacturing applications."
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
      name: "Evonik",
      origin: "Germany",
      warehouses: "",
      specialty: "Base Polymers",
      highSpeed: false,
      store: "https://www.evonik.com/en.html",
      notes: "Leads in high-performance polymer solutions, offering advanced materials for professional and industrial 3D printing."
    },
    {
      name: "Fusion3",
      origin: "USA",
      warehouses: "",
      specialty: "Industrial",
      highSpeed: false,
      store: "https://www.fusion3design.com/",
      notes: "Provides optimized filaments engineered for compatibility and high-quality results with Fusion3 printers."
    },
    {
      name: "HP inc.",
      origin: "USA",
      warehouses: "",
      specialty: "MJF Powders",
      highSpeed: false,
      store: "https://www.hp.com/us-en/home.html",
      notes: "Supplies industrial-grade filaments designed for precision, durability, and seamless integration with HP 3D printing systems."
    },
    {
      name: "Kexcelled 3D",
      origin: "China",
      warehouses: "",
      specialty: "Engineering filaments",
      highSpeed: false,
      store: "https://www.kexcelled3d.com/",
      notes: "Offers innovative filaments with a focus on high-performance materials for professional and industrial applications."
    },
    {
      name: "Makerbot",
      origin: "USA",
      warehouses: "",
      specialty: "PLA, Tough PLA",
      highSpeed: false,
      store: "https://www.makerbot.com/",
      notes: "Delivers reliable, easy-to-use filaments optimized for education, prototyping, and professional 3D printing."
    },
    {
      name: "Multi3D LLC",
      origin: "USA",
      warehouses: "",
      specialty: "Conductive Filaments",
      highSpeed: false,
      store: "https://www.multi3dllc.com/",
      notes: "Specializes in conductive and functional filaments, enabling advanced applications like electronics and wearable tech."
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
  ]
};

type FilamentManufacturersProps = {
  category: keyof typeof manufacturers;
};

export const FilamentManufacturers = ({ category }: FilamentManufacturersProps) => {
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
          {manufacturers[category].map((manufacturer) => (
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
