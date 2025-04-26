
export const MatchFramework = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">STEP 2: EVALUATING PERSONAL ALIGNMENT (MATCH SCORE)</h2>
      
      <p>
        After determining that a product has strong market potential through the PROFITS scoring system, 
        the next critical step is to evaluate how well the product aligns with YOUR specific situation, 
        skills, and circumstances. This is where the MATCH scoring system comes into play.
      </p>
      
      <p>
        While a product might have excellent market potential in general, it may not be the right fit for 
        YOU specifically. The MATCH evaluation ensures you're choosing products that leverage your unique 
        advantages and fit your individual circumstances.
      </p>

      <div className="mt-6 p-4 bg-purple-50 border border-purple-100 rounded-lg">
        <h3 className="text-xl font-bold mb-2">M - Maker Skills (0-25 points)</h3>
        <p><strong>Key Question:</strong> How well does the product leverage your strongest personal skills?</p>
        
        <ul className="mt-2 space-y-1">
          <li>20-25 points: Product fully leverages your strongest skill and creates a competitive advantage</li>
          <li>14-19 points: Product moderately uses your strongest skill</li>
          <li>7-13 points: Product minimally uses your strongest skill</li>
          <li>0-6 points: Product doesn't utilize your strongest skill at all</li>
        </ul>
        
        <h4 className="font-semibold mt-4">Evaluation Tips:</h4>
        <ul className="list-disc ml-6">
          <li>Start by identifying your strongest skill category:
            <ul className="list-disc ml-6">
              <li>Design Skills: Creating, customizing, visualizing, artistic abilities</li>
              <li>Marketing Skills: Communication, persuasion, content creation, social media</li>
              <li>Technical Skills: Engineering, troubleshooting, optimization, precision</li>
              <li>Business Skills: Organization, planning, customer service, negotiation</li>
            </ul>
          </li>
          <li>Consider how directly the product allows you to apply this skill</li>
          <li>Higher scores should be reserved for products where your skill creates a genuine advantage</li>
        </ul>
        
        <h4 className="font-semibold mt-4">Examples:</h4>
        <ul className="list-disc ml-6">
          <li>A designer evaluating a custom modular organizer system: 24/25</li>
          <li>A marketer evaluating a product with viral content potential: 22/25</li>
          <li>A technical person evaluating a precision engineering solution: 23/25</li>
          <li>A business-oriented person evaluating a high-volume standardized product: 21/25</li>
          <li>Anyone evaluating a product that doesn't utilize their core strength: 5/25</li>
        </ul>
      </div>

      <div className="mt-6 p-4 bg-purple-50 border border-purple-100 rounded-lg">
        <h3 className="text-xl font-bold mb-2">A - Artistic Alignment (0-25 points)</h3>
        <p><strong>Key Question:</strong> How well does the product match your creative orientation?</p>
        
        <ul className="mt-2 space-y-1">
          <li>20-25 points: Product perfectly matches your creative orientation and natural work style</li>
          <li>14-19 points: Product mostly aligns with your creative approach</li>
          <li>7-13 points: Product has neutral alignment with your creative style</li>
          <li>0-6 points: Product conflicts with your natural creative orientation</li>
        </ul>
        
        <h4 className="font-semibold mt-4">Evaluation Tips:</h4>
        <ul className="list-disc ml-6">
          <li>First identify your creative orientation:
            <ul className="list-disc ml-6">
              <li>Visionary: Creating entirely new concepts, seeing possibilities others don't</li>
              <li>Improver: Enhancing existing ideas, refining and optimizing</li>
              <li>Executor: Implementing efficiently, focusing on reliability and consistency</li>
              <li>Analytical: Systematic approach, data-driven optimization</li>
            </ul>
          </li>
          <li>Consider how the product development process matches your natural way of working</li>
          <li>Products that fight against your natural style will lead to frustration</li>
        </ul>
        
        <h4 className="font-semibold mt-4">Examples:</h4>
        <ul className="list-disc ml-6">
          <li>A visionary evaluating a novel product category with no established patterns: 23/25</li>
          <li>An improver evaluating a product with clear optimization opportunities: 22/25</li>
          <li>An executor evaluating a standardized product requiring consistent quality: 24/25</li>
          <li>An analytical person evaluating a product with measurable performance metrics: 21/25</li>
          <li>Anyone evaluating a product that conflicts with their work style: 4/25</li>
        </ul>
      </div>

      <div className="mt-6 p-4 bg-purple-50 border border-purple-100 rounded-lg">
        <h3 className="text-xl font-bold mb-2">T - Time Available (0-10 points)</h3>
        <p><strong>Key Question:</strong> How well does the product fit within your available time?</p>
        
        <ul className="mt-2 space-y-1">
          <li>8-10 points: Product workflow fits easily within your available weekly time</li>
          <li>4-7 points: Product requires some time management adjustments</li>
          <li>0-3 points: Product demands significantly more time than you have available</li>
        </ul>
        
        <h4 className="font-semibold mt-4">Evaluation Tips:</h4>
        <ul className="list-disc ml-6">
          <li>Be realistic about your actual available time for the business</li>
          <li>Consider the entire workflow (setup, printing, post-processing, marketing, shipping)</li>
          <li>Factor in batch efficiency and whether the product can "work while you sleep"</li>
          <li>Remember that complex products often require more customer service time</li>
        </ul>
        
        <h4 className="font-semibold mt-4">Examples:</h4>
        <p>For someone with 5-10 hours/week available:</p>
        <ul className="list-disc ml-6">
          <li>A simple product with minimal oversight needs: 9/10</li>
          <li>A product requiring moderate attention but manageable within constraints: 6/10</li>
          <li>A complex product demanding constant attention: 2/10</li>
        </ul>
      </div>

      <div className="mt-6 p-4 bg-purple-50 border border-purple-100 rounded-lg">
        <h3 className="text-xl font-bold mb-2">C - Competition Analysis (0-25 points)</h3>
        <p><strong>Key Question:</strong> What's the competitive landscape for this product in YOUR chosen sales channels?</p>
        
        <ul className="mt-2 space-y-1">
          <li>20-25 points: Low competition or strong differentiation in your specific sales channels</li>
          <li>14-19 points: Moderate competition with clear differentiation possible</li>
          <li>7-13 points: Significant competition with some differentiation challenges</li>
          <li>0-6 points: Extremely high competition or saturated market in your channels</li>
        </ul>
        
        <h4 className="font-semibold mt-4">Evaluation Tips:</h4>
        <ul className="list-disc ml-6">
          <li>This analysis should be specific to YOUR sales channels, not the market in general</li>
          <li>Research competitors on the exact platforms you plan to use (Etsy, Facebook, local markets)</li>
          <li>Consider your ability to differentiate (through quality, features, branding, service)</li>
          <li>Look at how established competitors are and their review metrics</li>
          <li>Assess whether you can carve out a specific niche or angle</li>
        </ul>
        
        <h4 className="font-semibold mt-4">Examples:</h4>
        <ul className="list-disc ml-6">
          <li>An innovative design with few competitors on your target platform: 23/25</li>
          <li>A product with moderate competition but clear differentiation opportunity: 16/25</li>
          <li>A common product with many competitors but some differentiation possible: 10/25</li>
          <li>A saturated market with many established sellers and minimal differentiation: 3/25</li>
        </ul>
      </div>

      <div className="mt-6 p-4 bg-purple-50 border border-purple-100 rounded-lg">
        <h3 className="text-xl font-bold mb-2">H - Home Location (0-15 points)</h3>
        <p><strong>Key Question:</strong> How well does the product leverage the advantages of your location type?</p>
        
        <ul className="mt-2 space-y-1">
          <li>12-15 points: Product perfectly leverages the advantages of your location type</li>
          <li>8-11 points: Product works well with your location characteristics</li>
          <li>4-7 points: Product has neutral fit with your location</li>
          <li>0-3 points: Product is disadvantaged by your location</li>
        </ul>
        
        <h4 className="font-semibold mt-4">Evaluation Tips:</h4>
        <ul className="list-disc ml-6">
          <li>Consider your specific location type:
            <ul className="list-disc ml-6">
              <li>Urban: Access to local markets, in-person sales opportunities, higher shipping costs</li>
              <li>Suburban: Good shipping access, some local sales, moderate costs</li>
              <li>Rural: Lower operational costs, strong shipping dependence, limited local market</li>
            </ul>
          </li>
          <li>Think about shipping considerations (size, weight, fragility)</li>
          <li>Consider local market opportunities and regional preferences</li>
          <li>Factor in regional material availability and costs</li>
        </ul>
        
        <h4 className="font-semibold mt-4">Examples:</h4>
        <ul className="list-disc ml-6">
          <li>Urban seller evaluating a product that benefits from in-person markets: 14/15</li>
          <li>Suburban seller evaluating a product with balanced local/shipping potential: 13/15</li>
          <li>Rural seller evaluating a lightweight, high-value item easily shipped: 14/15</li>
          <li>Anyone evaluating a product that is disadvantaged by their location: 3/15</li>
        </ul>
      </div>

      <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
        <h3 className="text-xl font-bold mb-4">CALCULATING YOUR MATCH SCORE</h3>
        <p>Add the scores from all five factors to determine how well the product aligns with your personal situation:</p>
        <p className="mt-2">
          M - Maker Skills: ___ / 25
          <br />A - Artistic Alignment: ___ / 25
          <br />T - Time Available: ___ / 10
          <br />C - Competition Analysis: ___ / 25
          <br />H - Home Location: ___ / 15
        </p>
        <p className="mt-4 text-lg font-bold">TOTAL MATCH SCORE: ___ / 100</p>
        
        <h3 className="text-xl font-bold mt-6 mb-2">INTERPRETING YOUR MATCH SCORE</h3>
        <ul className="space-y-1">
          <li><strong>85-100:</strong> Exceptional personal alignment — ideal fit for your situation</li>
          <li><strong>70-84:</strong> Strong personal alignment — good leverage of your advantages</li>
          <li><strong>55-69:</strong> Moderate personal alignment — workable but with some gaps</li>
          <li><strong>40-54:</strong> Limited personal alignment — significant challenges likely</li>
          <li><strong>Below 40:</strong> Poor personal alignment — consider products better suited to you</li>
        </ul>
      </div>
    </div>
  );
};
