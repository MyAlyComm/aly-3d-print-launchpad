
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg p-2">
              <AccordionTrigger className="text-lg font-semibold">
                How much money can I make with 3D printing?
              </AccordionTrigger>
              <AccordionContent>
                With proper strategy and execution, you can generate $5,000+ monthly through 3D printing services. The blueprint provides a detailed roadmap to achieve this goal, starting with just a $500 investment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg p-2">
              <AccordionTrigger className="text-lg font-semibold">
                Do I need prior experience with 3D printing?
              </AccordionTrigger>
              <AccordionContent>
                No prior experience is necessary. The Ultimate Blueprint is designed for complete beginners and includes step-by-step guidance on setting up and operating your 3D printing business.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg p-2">
              <AccordionTrigger className="text-lg font-semibold">
                What's included in the blueprint?
              </AccordionTrigger>
              <AccordionContent>
                The blueprint includes comprehensive guides, STL files with commercial licenses, marketing strategies, pricing templates, and step-by-step instructions for starting and scaling your 3D printing business.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg p-2">
              <AccordionTrigger className="text-lg font-semibold">
                How quickly can I start making money?
              </AccordionTrigger>
              <AccordionContent>
                With dedication and following the blueprint, you can start generating revenue within your first month. The guide includes proven strategies for quick market entry and customer acquisition.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
