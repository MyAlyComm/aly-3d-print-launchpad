
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useChapterForm } from "@/hooks/useChapterForm";
import { ProductScoreCard } from "./ProductScoreCard";
import { ProductTrinitySelection } from "./ProductTrinitySelection";
import { SaveIndicator } from "@/components/ui/save-indicator/SaveIndicator";
import { 
  calculateProfitsTotal, 
  calculateMatchTotal, 
  calculateFinalScore 
} from "@/utils/scoringUtils";

export const ProductWorksheet = () => {
  const { toast } = useToast();
  const { formState, saveResponse, isLoading, saveStatus } = useChapterForm(4, 'worksheet');
  
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

  const [trinity, setTrinity] = useState({
    safeBet: '',
    profitMaximizer: '',
    strengthShowcase: '',
    plusOne: '',
  });

  // Initialize form state from saved data if available
  useEffect(() => {
    if (!isLoading && formState) {
      // Extract saved data from the formState
      const savedData = formState.worksheet?.textInputs || {};
      
      // Initialize product names if they exist in saved data
      if (savedData.productNames) {
        try {
          const parsedProductNames = JSON.parse(savedData.productNames);
          if (parsedProductNames && typeof parsedProductNames === 'object') {
            setProductNames(parsedProductNames);
          }
        } catch (e) {
          console.error("Error parsing product names:", e);
        }
      }

      // Initialize profits scores if they exist in saved data
      if (savedData.profitsScores) {
        try {
          const parsedProfitsScores = JSON.parse(savedData.profitsScores);
          if (parsedProfitsScores && typeof parsedProfitsScores === 'object') {
            setProfitsScores(parsedProfitsScores);
          }
        } catch (e) {
          console.error("Error parsing profits scores:", e);
        }
      }

      // Initialize match scores if they exist in saved data
      if (savedData.matchScores) {
        try {
          const parsedMatchScores = JSON.parse(savedData.matchScores);
          if (parsedMatchScores && typeof parsedMatchScores === 'object') {
            setMatchScores(parsedMatchScores);
          }
        } catch (e) {
          console.error("Error parsing match scores:", e);
        }
      }

      // Initialize final scores if they exist in saved data
      if (savedData.finalScores) {
        try {
          const parsedFinalScores = JSON.parse(savedData.finalScores);
          if (parsedFinalScores && typeof parsedFinalScores === 'object') {
            setFinalScores(parsedFinalScores);
          }
        } catch (e) {
          console.error("Error parsing final scores:", e);
        }
      }

      // Initialize trinity selections if they exist in saved data
      if (savedData.trinity) {
        try {
          const parsedTrinity = JSON.parse(savedData.trinity);
          if (parsedTrinity && typeof parsedTrinity === 'object') {
            setTrinity(parsedTrinity);
          }
        } catch (e) {
          console.error("Error parsing trinity:", e);
        }
      }
    }
  }, [isLoading, formState]);

  // Handle product name change
  const handleProductNameChange = (product: string, value: string) => {
    setProductNames(prev => ({
      ...prev,
      [product]: value
    }));

    // Auto-save the product names
    const newProductNames = {
      ...productNames,
      [product]: value
    };

    saveResponse('worksheet', {
      textInputs: {
        productNames: JSON.stringify(newProductNames)
      }
    });
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
      const updatedScores = {
        ...profitsScores[product],
        [factor]: value
      };
      
      const total = calculateProfitsTotal(updatedScores);
      
      const newProfitsScores = {
        ...profitsScores,
        [product]: {
          ...updatedScores,
          total: total.toString()
        }
      };
      
      setProfitsScores(newProfitsScores);
      calculateFinalScore(product, total.toString(), matchScores[product].total, setFinalScores);
      
      // Auto-save the profits scores
      saveResponse('worksheet', {
        textInputs: {
          profitsScores: JSON.stringify(newProfitsScores),
          finalScores: JSON.stringify({
            ...finalScores,
            [product]: Math.round((total + (parseInt(matchScores[product].total) || 0)) / 2).toString()
          })
        }
      });
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
      const updatedScores = {
        ...matchScores[product],
        [factor]: value
      };
      
      const total = calculateMatchTotal(updatedScores);
      
      const newMatchScores = {
        ...matchScores,
        [product]: {
          ...updatedScores,
          total: total.toString()
        }
      };
      
      setMatchScores(newMatchScores);
      calculateFinalScore(product, profitsScores[product].total, total.toString(), setFinalScores);
      
      // Auto-save the match scores
      saveResponse('worksheet', {
        textInputs: {
          matchScores: JSON.stringify(newMatchScores),
          finalScores: JSON.stringify({
            ...finalScores,
            [product]: Math.round(((parseInt(profitsScores[product].total) || 0) + total) / 2).toString()
          })
        }
      });
    }, 100);
  };

  // Handle trinity selection changes
  const handleTrinityChange = (type: string, value: string) => {
    const newTrinity = {
      ...trinity,
      [type]: value
    };
    
    setTrinity(newTrinity);
    
    // Auto-save trinity selection
    saveResponse('worksheet', {
      textInputs: {
        trinity: JSON.stringify(newTrinity)
      }
    });
  };

  // Save all worksheet responses
  const handleSave = () => {
    // Convert state objects to JSON strings for storage in textInputs
    saveResponse('worksheet', {
      textInputs: {
        productNames: JSON.stringify(productNames),
        profitsScores: JSON.stringify(profitsScores),
        matchScores: JSON.stringify(matchScores),
        finalScores: JSON.stringify(finalScores),
        trinity: JSON.stringify(trinity)
      },
      checkboxes: { completed: true }
    }, true);
  };

  // Generate product options with names for the trinity selection
  const productOptions = Object.entries(productNames).map(([key, name]) => ({
    value: key,
    label: name || `Product ${key.replace('product', '')}`
  }));
  
  if (isLoading) {
    return (
      <div className="flex justify-center p-6">
        <div className="animate-pulse text-primary">Loading your product evaluation data...</div>
      </div>
    );
  }
  
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Chapter 4 Worksheet: Evaluating Your First Products</h2>
        <SaveIndicator status={saveStatus} />
      </div>
      
      <p className="text-lg">
        Based on the PROFITS MATCH framework, evaluate at least five potential products to identify 
        your optimal Product Trinity.
      </p>
      
      {[1, 2, 3, 4, 5].map((num) => {
        const productKey = `product${num}` as keyof typeof productNames;
        return (
          <ProductScoreCard
            key={num}
            productNumber={num}
            productName={productNames[productKey]}
            onProductNameChange={(value) => handleProductNameChange(productKey, value)}
            profitsScores={profitsScores[productKey]}
            matchScores={matchScores[productKey]}
            finalScore={finalScores[productKey]}
            onProfitsChange={(factor, value) => handleProfitsChange(productKey, factor, value)}
            onMatchChange={(factor, value) => handleMatchChange(productKey, factor, value)}
          />
        );
      })}

      <ProductTrinitySelection
        trinity={trinity}
        onTrinityChange={handleTrinityChange}
        productOptions={productOptions}
      />

      <div className="flex justify-end mt-8">
        <Button 
          onClick={handleSave} 
          size="lg"
          className="px-8"
        >
          Complete Product Evaluation
        </Button>
      </div>
    </div>
  );
};
