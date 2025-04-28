import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useChapterForm } from "@/hooks/useChapterForm";
import { ProductScoreCard } from "./ProductScoreCard";
import { ProductTrinitySelection } from "./ProductTrinitySelection";
import { SaveButton } from "../../chapter3/worksheet/SaveButton";
import { WorksheetFooter } from "../../chapter3/worksheet/WorksheetFooter";
import { 
  calculateProfitsTotal, 
  calculateMatchTotal, 
  calculateFinalScore 
} from "@/utils/scoringUtils";

export const ProductWorksheet = () => {
  const { toast } = useToast();
  const { formState, saveResponse, isLoading } = useChapterForm(4, 'worksheet');
  
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

  useEffect(() => {
    if (!isLoading && formState) {
      const savedData = formState.worksheet?.textInputs || {};
      
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

  const handleProductNameChange = (product: string, value: string) => {
    setProductNames(prev => ({
      ...prev,
      [product]: value
    }));
  };

  const handleProfitsChange = (product: string, factor: string, value: string) => {
    setProfitsScores(prev => ({
      ...prev,
      [product]: {
        ...prev[product],
        [factor]: value
      }
    }));
    
    setTimeout(() => {
      const total = calculateProfitsTotal(profitsScores[product]);
      setProfitsScores(prev => ({
        ...prev,
        [product]: {
          ...prev[product],
          ...profitsScores[product],
          total: total.toString()
        }
      }));
      
      calculateFinalScore(product, total.toString(), matchScores[product].total, setFinalScores);
    }, 100);
  };

  const handleMatchChange = (product: string, factor: string, value: string) => {
    setMatchScores(prev => ({
      ...prev,
      [product]: {
        ...prev[product],
        [factor]: value
      }
    }));
    
    setTimeout(() => {
      const total = calculateMatchTotal(matchScores[product]);
      setMatchScores(prev => ({
        ...prev,
        [product]: {
          ...prev[product],
          ...matchScores[product],
          total: total.toString()
        }
      }));
      
      calculateFinalScore(product, profitsScores[product].total, total.toString(), setFinalScores);
    }, 100);
  };

  const handleTrinityChange = (type: string, value: string) => {
    setTrinity(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const handleSave = () => {
    saveResponse('worksheet', {
      textInputs: {
        productNames: JSON.stringify(productNames),
        profitsScores: JSON.stringify(profitsScores),
        matchScores: JSON.stringify(matchScores),
        finalScores: JSON.stringify(finalScores),
        trinity: JSON.stringify(trinity)
      }
    }, true);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Chapter 4 Worksheet: Evaluating Your First Products</h2>
      
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
      />

      <WorksheetFooter>
        <div className="flex justify-end mt-8">
          <SaveButton onSave={handleSave} />
        </div>
      </WorksheetFooter>
    </div>
  );
};
