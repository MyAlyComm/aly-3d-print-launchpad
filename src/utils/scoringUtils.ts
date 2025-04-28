
// Calculate PROFITS total score
export const calculateProfitsTotal = (scores: {
  p: string;
  r: string;
  o: string;
  f: string;
  i: string;
  t: string;
  s: string;
}) => {
  const p = parseInt(scores.p) || 0;
  const r = parseInt(scores.r) || 0;
  const o = parseInt(scores.o) || 0;
  const f = parseInt(scores.f) || 0;
  const i = parseInt(scores.i) || 0;
  const t = parseInt(scores.t) || 0;
  const s = parseInt(scores.s) || 0;
  
  return p + r + o + f + i + t + s;
};

// Calculate MATCH total score
export const calculateMatchTotal = (scores: {
  m: string;
  a: string;
  t: string;
  c: string;
  h: string;
}) => {
  const m = parseInt(scores.m) || 0;
  const a = parseInt(scores.a) || 0;
  const t = parseInt(scores.t) || 0;
  const c = parseInt(scores.c) || 0;
  const h = parseInt(scores.h) || 0;
  
  return m + a + t + c + h;
};

// Calculate final score (average of PROFITS and MATCH)
export const calculateFinalScore = (
  product: string,
  profitsTotal: string,
  matchTotal: string,
  setFinalScores: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>
) => {
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
