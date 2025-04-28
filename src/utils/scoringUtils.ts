
import { type Dispatch, type SetStateAction } from 'react';

// Calculate PROFITS total score
export const calculateProfitsTotal = (scores: {
  p: string;
  r: string;
  o: string;
  f: string;
  i: string;
  t: string;
  s: string;
}, choices?: {
  [key: string]: Array<{
    value: string;
    label: string;
    score: number;
  }>;
}) => {
  const calculateScore = (value: string, key: string) => {
    if (choices && choices[key]) {
      return choices[key].find(c => c.value === value)?.score || 0;
    }
    return parseInt(value) || 0;
  };

  const p = calculateScore(scores.p, 'p');
  const r = calculateScore(scores.r, 'r');
  const o = calculateScore(scores.o, 'o');
  const f = calculateScore(scores.f, 'f');
  const i = calculateScore(scores.i, 'i');
  const t = calculateScore(scores.t, 't');
  const s = calculateScore(scores.s, 's');
  
  return p + r + o + f + i + t + s;
};

// Calculate MATCH total score
export const calculateMatchTotal = (scores: {
  m: string;
  a: string;
  t: string;
  c: string;
  h: string;
}, choices?: {
  [key: string]: Array<{
    value: string;
    label: string;
    score: number;
  }>;
}) => {
  const calculateScore = (value: string, key: string) => {
    if (choices && choices[key]) {
      return choices[key].find(c => c.value === value)?.score || 0;
    }
    return parseInt(value) || 0;
  };

  const m = calculateScore(scores.m, 'm');
  const a = calculateScore(scores.a, 'a');
  const t = calculateScore(scores.t, 't');
  const c = calculateScore(scores.c, 'c');
  const h = calculateScore(scores.h, 'h');
  
  return m + a + t + c + h;
};

// Calculate final score (average of PROFITS and MATCH)
export const calculateFinalScore = (
  product: string,
  profitsTotal: string,
  matchTotal: string,
  setFinalScores: Dispatch<SetStateAction<{ [key: string]: string }>>
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
