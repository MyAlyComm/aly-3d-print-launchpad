
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "💰 How much money can I make with 3D printing?",
      answer: "Starting with just a $500 investment, many of our users achieve:\n\n• $5,000+ monthly revenue\n• First sales within 30 days\n• Break-even within 2-3 months\n\nThe blueprint provides a detailed roadmap to help you reach these milestones systematically.",
      gradient: "from-green-50 to-emerald-50"
    },
    {
      question: "🎯 Do I need prior experience with 3D printing?",
      answer: "Absolutely not! Our blueprint is designed for complete beginners. We guide you through:\n\n• Basic printer setup and operation\n• Finding profitable products\n• Marketing and sales strategies\n• Step-by-step business growth",
      gradient: "from-blue-50 to-indigo-50"
    },
    {
      question: "📚 What's included in the blueprint?",
      answer: "The blueprint is your complete business toolkit, including:\n\n• Step-by-step video tutorials\n• Ready-to-use STL files with commercial licenses\n• Marketing templates and strategies\n• Pricing calculator spreadsheets\n• Private community access",
      gradient: "from-purple-50 to-violet-50"
    },
    {
      question: "⏱️ How quickly can I start making money?",
      answer: "With dedication and following our proven system:\n\n• First sale: Within 2-4 weeks\n• Break-even: 2-3 months\n• Consistent income: 3-6 months\n\nThe guide includes specific strategies for quick market entry and customer acquisition.",
      gradient: "from-orange-50 to-amber-50"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index + 1}`} 
                className={`bg-gradient-to-r ${faq.gradient} rounded-lg p-2 border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300`}
              >
                <AccordionTrigger className="text-lg font-semibold px-4 hover:no-underline data-[state=open]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 pt-2 pb-4 text-gray-600 whitespace-pre-line">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
