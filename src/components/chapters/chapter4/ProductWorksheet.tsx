
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { useChapterForm } from "@/hooks/useChapterForm";
import { Label } from "@/components/ui/label";

export const ProductWorksheet = () => {
  const { toast } = useToast();
  const { formState, saveResponse, isLoading } = useChapterForm(4, 'worksheet');
  
  // PROFITS score state for each product
  const [profitsScores, setProfitsScores] = useState<{
    [key: string]: {
      p: string;
      r: string;
      o: string;
      f: string;
      i: string;
      t: string;
      s: string;
      total: string;
    }
  }>({
    product1: { p: '', r: '', o: '', f: '', i: '', t: '', s: '', total: '' },
    product2: { p: '', r: '', o: '', f: '', i: '', t: '', s: '', total: '' },
    product3: { p: '', r: '', o: '', f: '', i: '', t: '', s: '', total: '' },
    product4: { p: '', r: '', o: '', f: '', i: '', t: '', s: '', total: '' },
    product5: { p: '', r: '', o: '', f: '', i: '', t: '', s: '', total: '' },
  });

  // MATCH score state for each product
  const [matchScores, setMatchScores] = useState<{
    [key: string]: {
      m: string;
      a: string;
      t: string;
      c: string;
      h: string;
      total: string;
    }
  }>({
    product1: { m: '', a: '', t: '', c: '', h: '', total: '' },
    product2: { m: '', a: '', t: '', c: '', h: '', total: '' },
    product3: { m: '', a: '', t: '', c: '', h: '', total: '' },
    product4: { m: '', a: '', t: '', c: '', h: '', total: '' },
    product5: { m: '', a: '', t: '', c: '', h: '', total: '' },
  });

  // Final scores and product names
  const [productNames, setProductNames] = useState({
    product1: '',
    product2: '',
    product3: '',
    product4: '',
    product5: '',
  });

  const [finalScores, setFinalScores] = useState({
    product1: '',
    product2: '',
    product3: '',
    product4: '',
    product5: '',
  });

  // Trinity selections
  const [trinity, setTrinity] = useState({
    safeBet: '',
    profitMaximizer: '',
    strengthShowcase: '',
    plusOne: '',
  });

  // Initialize form state from saved data if available
  useState(() => {
    if (!isLoading && formState) {
      if (formState.productNames) {
        setProductNames(formState.productNames);
      }

      if (formState.profitsScores) {
        setProfitsScores(formState.profitsScores);
      }

      if (formState.matchScores) {
        setMatchScores(formState.matchScores);
      }

      if (formState.finalScores) {
        setFinalScores(formState.finalScores);
      }

      if (formState.trinity) {
        setTrinity(formState.trinity);
      }
    }
  });

  // Handle product name change
  const handleProductNameChange = (product: string, value: string) => {
    setProductNames(prev => ({
      ...prev,
      [product]: value
    }));
  };

  // Handle PROFITS score change
  const handleProfitsChange = (product: string, factor: string, value: string) => {
    setProfitsScores(prev => ({
      ...prev,
      [product]: {
        ...prev[product],
        [factor]: value
      }
    }));
    
    // Recalculate total
    setTimeout(() => {
      calculateProfitsTotal(product);
    }, 100);
  };

  // Handle MATCH score change
  const handleMatchChange = (product: string, factor: string, value: string) => {
    setMatchScores(prev => ({
      ...prev,
      [product]: {
        ...prev[product],
        [factor]: value
      }
    }));
    
    // Recalculate total
    setTimeout(() => {
      calculateMatchTotal(product);
    }, 100);
  };

  // Calculate PROFITS total score
  const calculateProfitsTotal = (product: string) => {
    const scores = profitsScores[product];
    const p = parseInt(scores.p) || 0;
    const r = parseInt(scores.r) || 0;
    const o = parseInt(scores.o) || 0;
    const f = parseInt(scores.f) || 0;
    const i = parseInt(scores.i) || 0;
    const t = parseInt(scores.t) || 0;
    const s = parseInt(scores.s) || 0;
    
    const total = p + r + o + f + i + t + s;
    
    setProfitsScores(prev => ({
      ...prev,
      [product]: {
        ...prev[product],
        total: total.toString()
      }
    }));
    
    // Update final score
    calculateFinalScore(product, total.toString(), matchScores[product].total);
  };

  // Calculate MATCH total score
  const calculateMatchTotal = (product: string) => {
    const scores = matchScores[product];
    const m = parseInt(scores.m) || 0;
    const a = parseInt(scores.a) || 0;
    const t = parseInt(scores.t) || 0;
    const c = parseInt(scores.c) || 0;
    const h = parseInt(scores.h) || 0;
    
    const total = m + a + t + c + h;
    
    setMatchScores(prev => ({
      ...prev,
      [product]: {
        ...prev[product],
        total: total.toString()
      }
    }));
    
    // Update final score
    calculateFinalScore(product, profitsScores[product].total, total.toString());
  };

  // Calculate final score
  const calculateFinalScore = (product: string, profitsTotal: string, matchTotal: string) => {
    const profits = parseInt(profitsTotal) || 0;
    const match = parseInt(matchTotal) || 0;
    
    if (profits > 0 && match > 0) {
      const final = Math.round((profits + match) / 2);
      
      setFinalScores(prev => ({
        ...prev,
        [product]: final.toString()
      }));
    }
  };

  // Handle trinity selection changes
  const handleTrinityChange = (type: string, value: string) => {
    setTrinity(prev => ({
      ...prev,
      [type]: value
    }));
  };

  // Save all worksheet responses
  const handleSave = () => {
    saveResponse('worksheet', {
      productNames,
      profitsScores,
      matchScores,
      finalScores,
      trinity
    }, true);
  };
  
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Chapter 4 Worksheet: Evaluating Your First Products</h2>
      
      <p className="text-lg">
        Based on the PROFITS MATCH framework, evaluate at least five potential products to identify 
        your optimal Product Trinity.
      </p>
      
      {/* Product 1 */}
      <div className="space-y-6 border border-gray-200 rounded-lg p-6">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-bold">PRODUCT 1:</h3>
          <Input 
            className="max-w-xs" 
            value={productNames.product1} 
            onChange={(e) => handleProductNameChange('product1', e.target.value)}
            placeholder="Enter product name"
          />
        </div>
        
        <Card className="bg-blue-50">
          <CardHeader>
            <CardTitle>PROFITS Score</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="p1-problem">P - Problem-solving:</Label>
                <div className="flex items-center gap-2">
                  <Input 
                    id="p1-problem"
                    className="w-20" 
                    value={profitsScores.product1.p}
                    onChange={(e) => handleProfitsChange('product1', 'p', e.target.value)}
                    type="number"
                    min="0"
                    max="15"
                  />
                  <span>/ 15</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="p1-roi">R - Return on Investment:</Label>
                <div className="flex items-center gap-2">
                  <Input 
                    id="p1-roi"
                    className="w-20" 
                    value={profitsScores.product1.r}
                    onChange={(e) => handleProfitsChange('product1', 'r', e.target.value)}
                    type="number"
                    min="0"
                    max="15"
                  />
                  <span>/ 15</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="p1-opportunity">O - Opportunity:</Label>
                <div className="flex items-center gap-2">
                  <Input 
                    id="p1-opportunity"
                    className="w-20" 
                    value={profitsScores.product1.o}
                    onChange={(e) => handleProfitsChange('product1', 'o', e.target.value)}
                    type="number"
                    min="0"
                    max="15"
                  />
                  <span>/ 15</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="p1-feasibility">F - Feasibility:</Label>
                <div className="flex items-center gap-2">
                  <Input 
                    id="p1-feasibility"
                    className="w-20" 
                    value={profitsScores.product1.f}
                    onChange={(e) => handleProfitsChange('product1', 'f', e.target.value)}
                    type="number"
                    min="0"
                    max="15"
                  />
                  <span>/ 15</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="p1-demand">I - In-demand:</Label>
                <div className="flex items-center gap-2">
                  <Input 
                    id="p1-demand"
                    className="w-20" 
                    value={profitsScores.product1.i}
                    onChange={(e) => handleProfitsChange('product1', 'i', e.target.value)}
                    type="number"
                    min="0"
                    max="25"
                  />
                  <span>/ 25</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="p1-time">T - Time-to-Money:</Label>
                <div className="flex items-center gap-2">
                  <Input 
                    id="p1-time"
                    className="w-20" 
                    value={profitsScores.product1.t}
                    onChange={(e) => handleProfitsChange('product1', 't', e.target.value)}
                    type="number"
                    min="0"
                    max="15"
                  />
                  <span>/ 15</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="p1-staying">S - Staying Power:</Label>
                <div className="flex items-center gap-2">
                  <Input 
                    id="p1-staying"
                    className="w-20" 
                    value={profitsScores.product1.s}
                    onChange={(e) => handleProfitsChange('product1', 's', e.target.value)}
                    type="number"
                    min="0"
                    max="15"
                  />
                  <span>/ 15</span>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-blue-200 font-bold">
              <div className="flex items-center gap-2">
                <span>TOTAL PROFITS SCORE:</span>
                <Input 
                  className="w-20 font-bold" 
                  value={profitsScores.product1.total}
                  readOnly
                />
                <span>/ 100</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-purple-50">
          <CardHeader>
            <CardTitle>MATCH Score</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="p1-maker">M - Maker Skills:</Label>
                <div className="flex items-center gap-2">
                  <Input 
                    id="p1-maker"
                    className="w-20" 
                    value={matchScores.product1.m}
                    onChange={(e) => handleMatchChange('product1', 'm', e.target.value)}
                    type="number"
                    min="0"
                    max="25"
                  />
                  <span>/ 25</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="p1-artistic">A - Artistic Alignment:</Label>
                <div className="flex items-center gap-2">
                  <Input 
                    id="p1-artistic"
                    className="w-20" 
                    value={matchScores.product1.a}
                    onChange={(e) => handleMatchChange('product1', 'a', e.target.value)}
                    type="number"
                    min="0"
                    max="25"
                  />
                  <span>/ 25</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="p1-time-avail">T - Time Available:</Label>
                <div className="flex items-center gap-2">
                  <Input 
                    id="p1-time-avail"
                    className="w-20" 
                    value={matchScores.product1.t}
                    onChange={(e) => handleMatchChange('product1', 't', e.target.value)}
                    type="number"
                    min="0"
                    max="10"
                  />
                  <span>/ 10</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="p1-competition">C - Competition Analysis:</Label>
                <div className="flex items-center gap-2">
                  <Input 
                    id="p1-competition"
                    className="w-20" 
                    value={matchScores.product1.c}
                    onChange={(e) => handleMatchChange('product1', 'c', e.target.value)}
                    type="number"
                    min="0"
                    max="25"
                  />
                  <span>/ 25</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="p1-home">H - Home Location:</Label>
                <div className="flex items-center gap-2">
                  <Input 
                    id="p1-home"
                    className="w-20" 
                    value={matchScores.product1.h}
                    onChange={(e) => handleMatchChange('product1', 'h', e.target.value)}
                    type="number"
                    min="0"
                    max="15"
                  />
                  <span>/ 15</span>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-purple-200 font-bold">
              <div className="flex items-center gap-2">
                <span>TOTAL MATCH SCORE:</span>
                <Input 
                  className="w-20 font-bold" 
                  value={matchScores.product1.total}
                  readOnly
                />
                <span>/ 100</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <div className="flex items-center gap-2 font-bold">
            <span>FINAL SCORE:</span>
            <Input 
              className="w-20 font-bold" 
              value={finalScores.product1} 
              readOnly
            />
            <span>/ 100</span>
          </div>
        </div>
      </div>

      {/* Products 2-5 (simplified to save space) */}
      {/* Product 2 */}
      <div className="space-y-6 border border-gray-200 rounded-lg p-6">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-bold">PRODUCT 2:</h3>
          <Input 
            className="max-w-xs" 
            value={productNames.product2}
            onChange={(e) => handleProductNameChange('product2', e.target.value)}
            placeholder="Enter product name"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center gap-2 font-bold mb-2">
              <span>PROFITS SCORE:</span>
              <Input 
                className="w-20 font-bold" 
                value={profitsScores.product2.total}
                onChange={(e) => handleProfitsChange('product2', 'total', e.target.value)}
              />
              <span>/ 100</span>
            </div>
          </div>
          
          <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
            <div className="flex items-center gap-2 font-bold mb-2">
              <span>MATCH SCORE:</span>
              <Input 
                className="w-20 font-bold" 
                value={matchScores.product2.total}
                onChange={(e) => handleMatchChange('product2', 'total', e.target.value)}
              />
              <span>/ 100</span>
            </div>
          </div>
          
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-2 font-bold">
              <span>FINAL SCORE:</span>
              <Input 
                className="w-20 font-bold" 
                value={finalScores.product2}
                readOnly
              />
              <span>/ 100</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product 3 */}
      <div className="space-y-6 border border-gray-200 rounded-lg p-6">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-bold">PRODUCT 3:</h3>
          <Input 
            className="max-w-xs" 
            value={productNames.product3}
            onChange={(e) => handleProductNameChange('product3', e.target.value)}
            placeholder="Enter product name"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center gap-2 font-bold mb-2">
              <span>PROFITS SCORE:</span>
              <Input 
                className="w-20 font-bold" 
                value={profitsScores.product3.total}
                onChange={(e) => handleProfitsChange('product3', 'total', e.target.value)}
              />
              <span>/ 100</span>
            </div>
          </div>
          
          <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
            <div className="flex items-center gap-2 font-bold mb-2">
              <span>MATCH SCORE:</span>
              <Input 
                className="w-20 font-bold" 
                value={matchScores.product3.total}
                onChange={(e) => handleMatchChange('product3', 'total', e.target.value)}
              />
              <span>/ 100</span>
            </div>
          </div>
          
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-2 font-bold">
              <span>FINAL SCORE:</span>
              <Input 
                className="w-20 font-bold" 
                value={finalScores.product3}
                readOnly
              />
              <span>/ 100</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product 4 */}
      <div className="space-y-6 border border-gray-200 rounded-lg p-6">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-bold">PRODUCT 4:</h3>
          <Input 
            className="max-w-xs" 
            value={productNames.product4}
            onChange={(e) => handleProductNameChange('product4', e.target.value)}
            placeholder="Enter product name"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center gap-2 font-bold mb-2">
              <span>PROFITS SCORE:</span>
              <Input 
                className="w-20 font-bold" 
                value={profitsScores.product4.total}
                onChange={(e) => handleProfitsChange('product4', 'total', e.target.value)}
              />
              <span>/ 100</span>
            </div>
          </div>
          
          <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
            <div className="flex items-center gap-2 font-bold mb-2">
              <span>MATCH SCORE:</span>
              <Input 
                className="w-20 font-bold" 
                value={matchScores.product4.total}
                onChange={(e) => handleMatchChange('product4', 'total', e.target.value)}
              />
              <span>/ 100</span>
            </div>
          </div>
          
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-2 font-bold">
              <span>FINAL SCORE:</span>
              <Input 
                className="w-20 font-bold" 
                value={finalScores.product4}
                readOnly
              />
              <span>/ 100</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product 5 */}
      <div className="space-y-6 border border-gray-200 rounded-lg p-6">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-bold">PRODUCT 5:</h3>
          <Input 
            className="max-w-xs" 
            value={productNames.product5}
            onChange={(e) => handleProductNameChange('product5', e.target.value)}
            placeholder="Enter product name"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center gap-2 font-bold mb-2">
              <span>PROFITS SCORE:</span>
              <Input 
                className="w-20 font-bold" 
                value={profitsScores.product5.total}
                onChange={(e) => handleProfitsChange('product5', 'total', e.target.value)}
              />
              <span>/ 100</span>
            </div>
          </div>
          
          <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
            <div className="flex items-center gap-2 font-bold mb-2">
              <span>MATCH SCORE:</span>
              <Input 
                className="w-20 font-bold" 
                value={matchScores.product5.total}
                onChange={(e) => handleMatchChange('product5', 'total', e.target.value)}
              />
              <span>/ 100</span>
            </div>
          </div>
          
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-2 font-bold">
              <span>FINAL SCORE:</span>
              <Input 
                className="w-20 font-bold" 
                value={finalScores.product5}
                readOnly
              />
              <span>/ 100</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Trinity */}
      <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg">
        <h3 className="text-xl font-bold mb-6">MY PRODUCT TRINITY:</h3>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="safe-bet">
              My "Safe Bet" (highest overall score):
            </Label>
            <Input 
              id="safe-bet"
              className="max-w-lg" 
              value={trinity.safeBet}
              onChange={(e) => handleTrinityChange('safeBet', e.target.value)}
              placeholder="Enter your safe bet product"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="profit-maximizer">
              My "Profit Maximizer" (highest PROFITS score):
            </Label>
            <Input 
              id="profit-maximizer"
              className="max-w-lg" 
              value={trinity.profitMaximizer}
              onChange={(e) => handleTrinityChange('profitMaximizer', e.target.value)}
              placeholder="Enter your profit maximizer product"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="strength-showcase">
              My "Strength Showcase" (highest MATCH score):
            </Label>
            <Input 
              id="strength-showcase"
              className="max-w-lg" 
              value={trinity.strengthShowcase}
              onChange={(e) => handleTrinityChange('strengthShowcase', e.target.value)}
              placeholder="Enter your strength showcase product"
            />
          </div>
        </div>
      </div>

      {/* Plus 1 Innovation */}
      <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg">
        <div className="space-y-2">
          <Label htmlFor="plus-one">
            MY FIRST PLUS 1 INNOVATION:
          </Label>
          <Textarea 
            id="plus-one"
            className="min-h-20" 
            value={trinity.plusOne}
            onChange={(e) => handleTrinityChange('plusOne', e.target.value)}
            placeholder="Describe your first Plus 1 innovation project"
          />
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-muted-foreground">
        <p>
          Complete this evaluation worksheet before moving to the next chapter. In Chapter 5, we'll explore 
          choosing the right production tools to bring your Product Trinity to life efficiently and effectively.
        </p>
      </div>
      
      <div className="flex justify-end mt-8">
        <Button 
          onClick={handleSave} 
          className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
        >
          Save Progress
        </Button>
      </div>
    </div>
  );
};
