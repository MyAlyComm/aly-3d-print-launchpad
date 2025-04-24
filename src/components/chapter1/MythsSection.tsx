
import React from 'react';

export const MythsSection = () => {
  return (
    <section id="myths" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Breaking Through Misconceptions: The Stained Glass Effect</h2>
      
      <div className="mb-8">
        <img
          src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
          alt="Matrix-like digital visualization"
          className="w-full h-[300px] object-cover rounded-lg mb-4"
        />
        <p className="text-sm text-gray-500 italic text-center">Breaking through common misconceptions in the 3D printing industry</p>
      </div>

      <p className="text-gray-700 mb-6">
        Like the eras before it, our current phase has created a world of opportunity, but it's also spawned 
        widespread misinformation and misconceptions. I call these the "Stained Glass Effect" – views that might 
        contain fragments of truth but distort reality so severely that they blind people to the opportunities 
        right in front of them.
      </p>

      <p className="text-gray-700 mb-6">
        The irony of these stained glass viewpoints is that although they are sometimes rooted in partial truth, 
        they cloud the vision of the viewer so badly that they create even more windows of opportunity. Since so 
        many people think it can't be done, there's even more room for people like you to do it.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="p-6 bg-red-50 rounded-lg border border-red-100">
          <h3 className="text-xl font-semibold mb-4 text-red-800">Common Myths</h3>
          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="font-semibold">"It's too late to start a 3D printing business."</h4>
              <p className="text-gray-700">This misconception tends to come from non-creative middle-aged men sitting reclined in an armchair somewhere, keyboard warrioring their way around the internet late at night. They have this misconception because a quick glance at marketplaces like Etsy reveals an overwhelming amount of what they'd consider to be "junk products"—things like articulating toys, dragons, and fidgets. What they don't realize is that while some verticals like toys on Etsy are indeed quite crowded, the people who are good at marketing and know how to get customers are still starting businesses and being successful in this space. Not only that, but there's a world of opportunity far beyond the realms of Etsy.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">"You need technical expertise to succeed."</h4>
              <p className="text-gray-700">This red-tinted pane makes people believe they need an engineering degree to operate a modern 3D printer. The reality? Today's printers require about as much technical knowledge as setting up a coffee maker. The technology has evolved to the point where success depends far more on marketing and business skills than technical prowess.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">"The profit margins aren't sustainable."</h4>
              <p className="text-gray-700">Looking through this amber glass, skeptics see only material costs while ignoring the value of design, problem-solving, and customer experience. While commodity products have seen margin compression, unique and solution-oriented items still command premium prices and robust margins exceeding 80%.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">"You need dozens of printers to make real money."</h4>
              <p className="text-gray-700">This blue-hued distortion blinds people to the strategy of high-margin, low-volume products. Smart product selection and pricing can generate substantial revenue even with a single printer, as I proved in my first weeks.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">"It's just a hobby, not a real business."</h4>
              <p className="text-gray-700">Perhaps the darkest pane of all, this perspective fails to see the legitimate enterprise beneath the creative exterior. Tell that to the thousands of entrepreneurs who've built six and seven-figure businesses from their spare bedroom.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">"The electricity cost is so high."</h4>
              <p className="text-gray-700">Through this green-tinted glass, people obsess over pennies while ignoring dollars. A modern 3D printer uses about the same electricity as a laptop computer—around 50-150 watts. Even running 24/7, that's $10-30 per month, while your products can sell for hundreds or thousands. It's like worrying about the cost of water when opening a diamond mine.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">"It's just a fad."</h4>
              <p className="text-gray-700">This cloudy pane prevents people from seeing the revolution happening around them. 3D printing isn't just about plastic trinkets—it's the forefront of a manufacturing revolution with widespread applications in robotics, biomedical fields, construction, food production, and custom consumer goods. Dismissing 3D printing as a fad is like calling the internet a passing trend in 1995.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">"I don't know how to design products."</h4>
              <p className="text-gray-700">This fractured glass creates the illusion that you need to be a master designer to succeed. The reality offers multiple paths: you can license existing designs with commercial rights, hire designers for custom work (often for as little as $20-50 per design), or master AI-assisted design tools that can turn concepts into printable models in minutes. I built my first $20K months without creating a single design from scratch myself.</p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-green-50 rounded-lg border border-green-100">
          <h3 className="text-xl font-semibold mb-4 text-green-800">The Reality</h3>
          <p className="mb-4 text-gray-700">Every time someone looks through these stained glass panes and walks away from the opportunity, they're creating more space for you. Their distorted perception becomes your market advantage.</p>
          <p className="text-gray-700">This is why I believe so strongly in sharing this blueprint now. The misconceptions are creating an even wider arbitrage window for those who can see clearly – those who have the correct perspective and are willing to act.</p>
        </div>
      </div>
    </section>
  );
};
