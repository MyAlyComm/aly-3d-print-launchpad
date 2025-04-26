
export const ProfitsFramework = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">The PROFITS MATCH Framework: A Complete Evaluation System</h2>
      
      <p>
        In Chapter 3, you learned about the 3 Plus 1 Equals 40 system and the power of focusing on three core 
        products plus one innovation project. But this system only works if you select the right products 
        for your unique situation. This chapter introduces the P.R.O.F.I.T.S. MATCH framework—a comprehensive 
        evaluation system for identifying high-potential 3D printing business opportunities that align with 
        your personal strengths.
      </p>

      <div className="my-8 p-6 bg-violet-50 rounded-lg border border-violet-200">
        <h3 className="text-xl font-bold mb-4">The PROFITS MATCH Framework: A Complete Evaluation System</h3>
        <p>
          The PROFITS MATCH framework is a comprehensive two-part evaluation system designed to identify 
          high-potential 3D printing business opportunities. It recognizes that successful 3D printing 
          businesses depend on two equally important factors:
        </p>
        <ul className="list-disc ml-6 mt-3">
          <li><strong>PROFITS Score (0-100 points):</strong> Evaluates the objective market potential of a product</li>
          <li><strong>MATCH Score (0-100 points):</strong> Assesses how well the product aligns with your unique skills and situation</li>
        </ul>
        <p className="mt-3">
          These scores are combined to create a final score that identifies products with both strong market 
          potential AND good personal alignment—the ideal combination for success.
        </p>
      </div>

      <p>The framework follows a sequential evaluation process:</p>
      <ol className="list-decimal ml-6">
        <li>Step 1: Evaluate the product's market potential using the PROFITS factors</li>
        <li>Step 2: Evaluate your personal alignment with the product using the MATCH factors</li>
        <li>Step 3: Calculate the final score and make your decision</li>
      </ol>
      
      <p>Let's dive into each step of this framework.</p>

      <div className="mt-10">
        <h2 className="text-2xl font-bold">STEP 1: EVALUATING MARKET POTENTIAL (PROFITS SCORE)</h2>
        <p className="mt-2">
          Before considering your personal fit with a product, you must first determine if the product itself 
          has good market potential. This is done using the PROFITS scoring system, which evaluates seven critical factors.
        </p>

        <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
          <h3 className="text-xl font-bold mb-2">P - Problem-solving (0-15 points)</h3>
          <p><strong>Key Question:</strong> How well does the product solve a genuine customer problem?</p>
          
          <ul className="mt-2 space-y-1">
            <li>12-15 points: Solves a frequent, annoying problem in a unique or superior way</li>
            <li>8-11 points: Addresses a moderate problem or improves an existing solution</li>
            <li>4-7 points: Offers minor improvements or convenience</li>
            <li>0-3 points: Primarily decorative with minimal functional benefits</li>
          </ul>
          
          <h4 className="font-semibold mt-4">Evaluation Tips:</h4>
          <ul className="list-disc ml-6">
            <li>Research customer pain points in online forums, social media, and product reviews</li>
            <li>Look for problems people mention repeatedly in your target market</li>
            <li>Consider both functional and emotional problems (e.g., organization, self-expression)</li>
            <li>Higher scores should be reserved for solutions that address problems affecting many people frequently</li>
          </ul>
          
          <h4 className="font-semibold mt-4">Examples:</h4>
          <ul className="list-disc ml-6">
            <li>A custom drawer organizer that perfectly fits a specific kitchen drawer: 14/15</li>
            <li>An improved phone stand with better angles and stability: 10/15</li>
            <li>A decorative vase with some practical improvements: 6/15</li>
            <li>A purely decorative figurine: 2/15</li>
          </ul>
        </div>

        <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
          <h3 className="text-xl font-bold mb-2">R - Return on Investment (0-15 points)</h3>
          <p><strong>Key Question:</strong> What's the profit margin percentage?</p>
          <p>Calculate profit margin: ((Selling Price - Total Costs) / Selling Price) × 100</p>
          
          <p>Where Total Costs include:</p>
          <ul className="list-disc ml-6">
            <li>Material costs (e.g., 100 grams of PLA at $20/kg would cost $2)</li>
            <li>Electricity estimate (typically $0.02-$0.03 per hour for printers like Bambu Lab P1P)</li>
            <li>License cost per unit or amortized development cost (if applicable)</li>
          </ul>
          
          <ul className="mt-4 space-y-1">
            <li>12-15 points: 80%+ profit margin</li>
            <li>8-11 points: 60-79% profit margin</li>
            <li>4-7 points: 40-59% profit margin</li>
            <li>0-3 points: Below 40% profit margin</li>
          </ul>
          
          <h4 className="font-semibold mt-4">Evaluation Tips:</h4>
          <ul className="list-disc ml-6">
            <li>Be honest and thorough in calculating ALL costs</li>
            <li>Research comparable product pricing in your target marketplaces</li>
            <li>Consider the balance between volume and margin</li>
            <li>Include shipping costs in your calculations if they affect margins</li>
          </ul>
          
          <h4 className="font-semibold mt-4">Examples:</h4>
          <ul className="list-disc ml-6">
            <li>Product selling for $35 with $5 in materials and $1 in electricity: 83% margin, 13/15 points</li>
            <li>Product selling for $25 with $8 in total costs: 68% margin, 9/15 points</li>
            <li>Product selling for $15 with $7 in total costs: 53% margin, 6/15 points</li>
          </ul>
        </div>

        <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
          <h3 className="text-xl font-bold mb-2">O - Opportunity (0-15 points)</h3>
          <p><strong>Key Question:</strong> How much potential does the product have for variations or expansion?</p>
          
          <ul className="mt-2 space-y-1">
            <li>12-15 points: Clear pathway to expand into multiple variations or complementary products</li>
            <li>8-11 points: Several obvious variations or customization options</li>
            <li>4-7 points: Some potential for expansion or customization</li>
            <li>0-3 points: Standalone product with limited variation potential</li>
          </ul>
          
          <h4 className="font-semibold mt-4">Evaluation Tips:</h4>
          <ul className="list-disc ml-6">
            <li>Consider how the product could evolve into a product family or ecosystem</li>
            <li>Evaluate potential for customization (colors, sizes, features)</li>
            <li>Look for ways to create recurring purchases or complementary items</li>
            <li>Higher scores should go to products that could become product lines</li>
          </ul>
          
          <h4 className="font-semibold mt-4">Examples:</h4>
          <ul className="list-disc ml-6">
            <li>A modular wall organization system with endless expansion possibilities: 14/15</li>
            <li>A desk organizer with several potential variations for different setups: 10/15</li>
            <li>A phone stand with limited customization options: 5/15</li>
            <li>A movie character figurine with no natural extensions: 2/15</li>
          </ul>
        </div>

        <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
          <h3 className="text-xl font-bold mb-2">F - Feasibility (0-15 points)</h3>
          <p><strong>Key Question:</strong> How reliably can you produce this product with your equipment?</p>
          
          <ul className="mt-2 space-y-1">
            <li>12-15 points: Easy production with high success rate (90%+) and minimal post-processing</li>
            <li>8-11 points: Good success rate (75-90%) with manageable post-processing</li>
            <li>4-7 points: Moderate success rate (50-75%) or significant post-processing</li>
            <li>0-3 points: Low success rate (below 50%) or extensive post-processing requirements</li>
          </ul>
          
          <h4 className="font-semibold mt-4">Evaluation Tips:</h4>
          <ul className="list-disc ml-6">
            <li>Consider print orientation, support requirements, and potential failure points</li>
            <li>Evaluate post-processing time and complexity</li>
            <li>Consider material constraints and printer limitations</li>
            <li>Test print representative sections before scoring if possible</li>
          </ul>
          
          <h4 className="font-semibold mt-4">Examples:</h4>
          <ul className="list-disc ml-6">
            <li>A simple, support-free design with high reliability: 14/15</li>
            <li>A product requiring some supports but with good success rate: 9/15</li>
            <li>A complex model requiring significant post-processing: 5/15</li>
            <li>A challenging print with frequent failures: 2/15</li>
          </ul>
        </div>

        <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
          <h3 className="text-xl font-bold mb-2">I - In-demand (0-25 points)</h3>
          <p><strong>Key Question:</strong> How strong is the proven market demand for this product?</p>
          
          <ul className="mt-2 space-y-1">
            <li>20-25 points: Multiple evidence points of strong, consistent demand</li>
            <li>14-19 points: Clear evidence of moderate or growing demand</li>
            <li>7-13 points: Some evidence of potential demand</li>
            <li>0-6 points: Limited evidence or purely speculative demand</li>
          </ul>
          
          <h4 className="font-semibold mt-4">Evaluation Tips:</h4>
          <ul className="list-disc ml-6">
            <li>This is the highest-weighted factor because demand is critical to success</li>
            <li>Look for multiple data points, not just a single indicator</li>
            <li>Consider both search volume and social media engagement metrics</li>
            <li>Study competitor sales when available (e.g., Etsy sales estimates)</li>
            <li>Analyze trend data to determine if demand is growing or declining</li>
          </ul>
          
          <h4 className="font-semibold mt-4">Evidence Types:</h4>
          <ul className="list-disc ml-6">
            <li>Search volume data (Google Trends, Keywords Everywhere)</li>
            <li>Social media engagement (saves, shares, comments)</li>
            <li>Competitor sales and reviews</li>
            <li>Marketplace demand (Etsy, Amazon, etc.)</li>
            <li>Industry reports and trend analyses</li>
          </ul>
          
          <h4 className="font-semibold mt-4">Examples:</h4>
          <ul className="list-disc ml-6">
            <li>Home organization product with high search volume, multiple successful sellers, and growing trend data: 23/25</li>
            <li>Product with moderate search volume and some competitors showing consistent sales: 16/25</li>
            <li>Product with limited search data but some social media interest: 10/25</li>
            <li>Product with minimal evidence of market interest: 3/25</li>
          </ul>
        </div>

        <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
          <h3 className="text-xl font-bold mb-2">T - Time-to-Money (0-15 points)</h3>
          <p><strong>Key Question:</strong> How efficient is the production time-to-profit ratio?</p>
          
          <p>Calculate your hourly profit rate, accounting for batch production:</p>
          <p className="font-semibold">Hourly Profit Rate = (Profit per Batch ÷ Active Minutes per Batch) × 60</p>
          
          <p>Where:</p>
          <ul className="list-disc ml-6">
            <li>Profit per Batch = Profit per Unit × Number of Units in a Batch</li>
            <li>Active Minutes per Batch = Total hands-on time spent on the entire batch</li>
          </ul>
          
          <ul className="mt-4 space-y-1">
            <li>12-15 points: $60+ profit per active hour</li>
            <li>8-11 points: $40-59 profit per active hour</li>
            <li>4-7 points: $25-39 profit per active hour</li>
            <li>0-3 points: Below $25 profit per active hour</li>
          </ul>
          
          <h4 className="font-semibold mt-4">Evaluation Tips:</h4>
          <ul className="list-disc ml-6">
            <li>Focus on active time (setup, monitoring, post-processing) not print time</li>
            <li>Consider batch efficiency (can you print multiple units at once?)</li>
            <li>Be realistic about how much active attention the product requires</li>
            <li>Include packaging and shipping preparation time</li>
          </ul>
          
          <h4 className="font-semibold mt-4">Examples:</h4>
          <ul className="list-disc ml-6">
            <li>4 units with $96 total profit and 45 minutes active time: $128/hour, 15/15 points</li>
            <li>2 units with $50 total profit and 60 minutes active time: $50/hour, 9/15 points</li>
            <li>1 unit with $25 profit and 60 minutes active time: $25/hour, 4/15 points</li>
          </ul>
        </div>

        <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
          <h3 className="text-xl font-bold mb-2">S - Staying Power (0-15 points)</h3>
          <p><strong>Key Question:</strong> How long will this product maintain market relevance?</p>
          
          <ul className="mt-2 space-y-1">
            <li>12-15 points: Evergreen product with year-round appeal for years to come</li>
            <li>8-11 points: Long-term trend (2+ years) or strong seasonal recurring demand</li>
            <li>4-7 points: Medium-term trend (6-24 months)</li>
            <li>0-3 points: Short-term fad (less than 6 months) or one-time seasonal demand</li>
          </ul>
          
          <h4 className="font-semibold mt-4">Evaluation Tips:</h4>
          <ul className="list-disc ml-6">
            <li>Distinguish between fads, trends, and evergreen products</li>
            <li>Consider seasonal factors and whether demand recurs annually</li>
            <li>Evaluate whether the product solves a persistent problem</li>
            <li>Higher scores should go to products with multi-year relevance</li>
          </ul>
          
          <h4 className="font-semibold mt-4">Examples:</h4>
          <ul className="list-disc ml-6">
            <li>Home organization products: 14/15 (evergreen)</li>
            <li>Wedding/event products with annual cycle: 11/15 (recurring seasonal)</li>
            <li>Products tied to a current style trend: 6/15 (medium-term)</li>
            <li>Products based on a viral meme: 2/15 (short-term fad)</li>
          </ul>
        </div>

        <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
          <h3 className="text-xl font-bold mb-4">CALCULATING YOUR PROFITS SCORE</h3>
          <p>Add the scores from all seven factors to determine your product's market potential:</p>
          <p className="mt-2">
            P - Problem-solving: ___ / 15
            <br />R - Return on Investment: ___ / 15
            <br />O - Opportunity: ___ / 15
            <br />F - Feasibility: ___ / 15
            <br />I - In-demand: ___ / 25
            <br />T - Time-to-Money: ___ / 15
            <br />S - Staying Power: ___ / 15
          </p>
          <p className="mt-4 text-lg font-bold">TOTAL PROFITS SCORE: ___ / 100</p>
          
          <h3 className="text-xl font-bold mt-6 mb-2">INTERPRETING YOUR PROFITS SCORE</h3>
          <ul className="space-y-1">
            <li><strong>85-100:</strong> Exceptional market potential — proceed to MATCH evaluation</li>
            <li><strong>70-84:</strong> Strong market potential — proceed to MATCH evaluation</li>
            <li><strong>55-69:</strong> Moderate market potential — proceed with caution</li>
            <li><strong>40-54:</strong> Limited market potential — significant improvements needed</li>
            <li><strong>Below 40:</strong> Poor market potential — reconsider this product</li>
          </ul>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold">Special Considerations for the PROFITS Method</h3>
          
          <h4 className="text-lg font-semibold mt-4">Factoring in Commercial Licensing Costs</h4>
          <p>
            When you're using licensed designs rather than creating your own, you need to adjust how 
            you calculate the R (Return on Investment) factor. Here's how to handle subscription-based 
            commercial licenses:
          </p>
          
          <h4 className="text-lg font-semibold mt-4">For Commercial License Subscriptions</h4>
          <ol className="list-decimal ml-6 space-y-2">
            <li>
              <strong>Step 1: Calculate your effective per-design cost</strong>
              <p>If you pay $30/month for access to 15 designs, but only plan to sell 3 of them:</p>
              <p>Example: $30 ÷ 3 designs = $10 per design per month</p>
            </li>
            <li>
              <strong>Step 2: Estimate your monthly sales per design</strong>
              <p>Based on your research, estimate how many of each design you'll sell per month.</p>
              <p>Example: 5 units per design per month</p>
            </li>
            <li>
              <strong>Step 3: Calculate your license cost per unit</strong>
              <p>Example: $10 per design ÷ 5 units = $2 license cost per unit</p>
            </li>
            <li>
              <strong>Step 4: Add this to your material costs when calculating ROI</strong>
              <p>Use the same profit margin formula, but include the license cost:</p>
              <p>Example: $3 material + $0.30 electricity + $2 license = $5.30 total cost</p>
            </li>
            <li>
              <strong>Step 5: Calculate your profit margin as normal</strong>
            </li>
          </ol>
          
          <div className="bg-gray-100 p-4 rounded-lg mt-4">
            <p><strong>Effective Per-Design Cost</strong> = Monthly Subscription ÷ Number of Designs You Actually Sell</p>
            <p><strong>License Cost Per Unit</strong> = Effective Per-Design Cost ÷ Expected Monthly Units Sold</p>
            <p><strong>Total Costs</strong> = Material Costs + Electricity Costs + License Cost Per Unit</p>
            <p>Example: Selling at $30 with $5.30 costs = 82% margin ((30-5.30)/30 × 100)</p>
          </div>
          
          <div className="mt-4">
            <p><strong>Pro Tip:</strong> The key to maximizing ROI with licensed designs is to:</p>
            <ul className="list-disc ml-6">
              <li>Use a higher percentage of the designs you're paying for</li>
              <li>Sell higher volumes of each design</li>
              <li>Select designs that can command premium prices</li>
            </ul>
          </div>
          
          <h4 className="text-lg font-semibold mt-6">The Break-Even Analysis for Licenses</h4>
          <p>To determine if a subscription is worth it, calculate your break-even point:</p>
          <p>
            Example: For a $30 subscription, selling products at $30 with $3.30 in material/electricity costs:<br />
            $30 ÷ ($30 - $3.30) = 1.12 units
          </p>
          <p>
            This means you need to sell just over 1 unit per month to cover your subscription cost. 
            Anything beyond that is profit.
          </p>
          
          <div className="bg-gray-100 p-4 rounded-lg mt-4">
            <p><strong>Profit Margin %</strong> = ((Selling Price - Total Costs) / Selling Price) × 100</p>
            <p><strong>Break-Even Units</strong> = Monthly Subscription Cost ÷ (Selling Price - Material/Electricity Costs)</p>
          </div>
          
          <h4 className="text-lg font-semibold mt-6">Factoring in Product Development Costs</h4>
          <p>
            If you're creating your own designs, you need to account for the upfront investment in 
            design and development. Here's how to adjust your ROI calculation:
          </p>
          
          <h4 className="text-lg font-semibold mt-4">For Self-Developed Products</h4>
          <ol className="list-decimal ml-6 space-y-2">
            <li>
              <strong>Step 1: Calculate your total development investment</strong>
              <p>Include costs for:</p>
              <ul className="list-disc ml-6">
                <li>Design time (your time or hired designer)</li>
                <li>3D modeling</li>
                <li>Prototype iterations</li>
                <li>Testing and refinement</li>
                <li>Example: $750 total development cost</li>
              </ul>
            </li>
            <li>
              <strong>Step 2: Determine your sales lifetime horizon</strong>
              <p>How long do you expect to be able to sell this product?</p>
              <ul className="list-disc ml-6">
                <li>For evergreen products: 24+ months</li>
                <li>For trend products: 12-24 months</li>
                <li>For fad products: 3-6 months</li>
                <li>Example: For an evergreen organization product, estimate 24 months</li>
              </ul>
            </li>
            <li>
              <strong>Step 3: Calculate your development cost per month</strong>
              <p>Example: $750 ÷ 24 months = $31.25 per month</p>
            </li>
            <li>
              <strong>Step 4: Estimate your monthly sales volume</strong>
              <p>Based on your research, estimate how many units you'll sell per month.</p>
              <p>Example: 20 units per month</p>
            </li>
            <li>
              <strong>Step 5: Calculate your development cost per unit</strong>
              <p>Example: $31.25 ÷ 20 units = $1.56 development cost per unit</p>
            </li>
            <li>
              <strong>Step 6: Add this to your costs when calculating ROI for the first months</strong>
              <p>Example: $3 material + $0.30 electricity + $1.56 development = $4.86 total cost</p>
            </li>
            <li>
              <strong>Step 7: Calculate your profit margin as normal</strong>
              <p>Example: Selling at $30 with $4.86 costs = 84% margin ((30-4.86)/30 × 100)</p>
            </li>
          </ol>
          
          <p className="mt-4">
            <strong>Pro Tip:</strong> The development cost per unit decreases as you sell more units. After you've 
            "paid off" your development investment, your margins will increase significantly.
          </p>
          
          <div className="bg-gray-100 p-4 rounded-lg mt-4">
            <p><strong>Monthly Development Cost</strong> = Total Development Cost ÷ Expected Sales Lifetime</p>
            <p><strong>Development Cost Per Unit</strong> = Monthly Development Cost ÷ Expected Monthly Units</p>
            <p><strong>Total Costs</strong> = Material Costs + Electricity Costs + Development Cost Per Unit</p>
            <p><strong>Profit Margin %</strong> = ((Selling Price - Total Costs) / Selling Price) × 100</p>
          </div>
          
          <h4 className="text-lg font-semibold mt-6">The ROI Timeline for Developed Products</h4>
          <p>For custom-developed products, it's helpful to calculate your development ROI timeline:</p>
          <p>
            Example: For a $750 development cost, selling 20 units per month at $26.70 profit per unit:<br />
            $750 ÷ (20 × $26.70) = 1.4 months
          </p>
          <p>
            This means you'll recover your development investment in about 1.4 months, after which your 
            ROI improves dramatically.
          </p>
          
          <div className="bg-gray-100 p-4 rounded-lg mt-4">
            <p><strong>Investment Recovery Period (in months)</strong> = Total Development Cost ÷ (Monthly Units × Profit Per Unit)</p>
          </div>
          
          <h4 className="text-lg font-semibold mt-6">License vs. Develop Decision Framework</h4>
          <p>When deciding whether to license or develop a product, consider:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div>
              <p><strong>License when:</strong></p>
              <ul className="list-disc ml-6">
                <li>The product has limited sales potential (low expected volume)</li>
                <li>The product has a short market life (fad or short-term trend)</li>
                <li>You need to get to market quickly</li>
                <li>The design is complex and would be costly to develop</li>
                <li>The subscription offers many other viable products you can sell</li>
              </ul>
            </div>
            <div>
              <p><strong>Develop when:</strong></p>
              <ul className="list-disc ml-6">
                <li>The product has substantial sales potential (high expected volume)</li>
                <li>The product has longevity (evergreen or long-term trend)</li>
                <li>You have time for development before launch</li>
                <li>The design is relatively simple or within your capabilities</li>
                <li>You want to build unique intellectual property</li>
                <li>You plan to create a product family or ecosystem</li>
              </ul>
            </div>
          </div>
          
          <p className="mt-6">
            <strong>Remember:</strong> Using the P.R.O.F.I.T.S. method with these additional calculations helps 
            you make data-driven decisions rather than relying on guesswork or emotions. This systematic 
            approach is one of the key differentiators between hobbyists and successful 3D printing entrepreneurs.
          </p>
        </div>
      </div>
    </div>
  );
};
