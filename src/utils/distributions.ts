// Distribution generation utilities

export const generateNormalData = (n: number, mean: number, stdDev: number): number[] => {
  const data: number[] = [];
  
  for (let i = 0; i < n; i++) {
    // Box-Muller transform for normal distribution
    const u1 = Math.random();
    const u2 = Math.random();
    const z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
    data.push(mean + z * stdDev);
  }
  
  return data;
};

export const generateUniformData = (n: number, min: number, max: number): number[] => {
  const data: number[] = [];
  
  for (let i = 0; i < n; i++) {
    data.push(min + Math.random() * (max - min));
  }
  
  return data;
};

export const generateExponentialData = (n: number, lambda: number): number[] => {
  const data: number[] = [];
  
  for (let i = 0; i < n; i++) {
    // Inverse transform method
    const u = Math.random();
    data.push(-Math.log(1 - u) / lambda);
  }
  
  return data;
};

export const generateBinomialData = (n: number, trials: number, p: number): number[] => {
  const data: number[] = [];
  
  for (let i = 0; i < n; i++) {
    let successes = 0;
    for (let j = 0; j < trials; j++) {
      if (Math.random() < p) successes++;
    }
    data.push(successes);
  }
  
  return data;
};

export const generatePoissonData = (n: number, lambda: number): number[] => {
  const data: number[] = [];
  
  for (let i = 0; i < n; i++) {
    let k = 0;
    let p = Math.exp(-lambda);
    let s = p;
    const u = Math.random();
    
    while (u > s) {
      k++;
      p *= lambda / k;
      s += p;
    }
    
    data.push(k);
  }
  
  return data;
};

export const generateScatterData = (
  n: number,
  correlation: number = 0.7,
  xMean: number = 50,
  xStd: number = 15,
  yMean: number = 50,
  yStd: number = 15
): { x: number[]; y: number[] } => {
  const x: number[] = [];
  const y: number[] = [];
  
  for (let i = 0; i < n; i++) {
    // Generate correlated data using Cholesky decomposition
    const u1 = Math.random();
    const u2 = Math.random();
    
    const z1 = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
    const z2 = Math.sqrt(-2 * Math.log(u1)) * Math.sin(2 * Math.PI * u2);
    
    const xVal = xMean + xStd * z1;
    const yVal = yMean + yStd * (correlation * z1 + Math.sqrt(1 - correlation * correlation) * z2);
    
    x.push(xVal);
    y.push(yVal);
  }
  
  return { x, y };
};

export const generateClusterData = (
  nClusters: number,
  pointsPerCluster: number,
  spread: number = 10
): { x: number; y: number; cluster: number }[] => {
  const data: { x: number; y: number; cluster: number }[] = [];
  
  // Generate cluster centers
  const centers: { x: number; y: number }[] = [];
  for (let i = 0; i < nClusters; i++) {
    centers.push({
      x: Math.random() * 100,
      y: Math.random() * 100,
    });
  }
  
  // Generate points around each center
  centers.forEach((center, clusterIdx) => {
    for (let i = 0; i < pointsPerCluster; i++) {
      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.random() * spread;
      
      data.push({
        x: center.x + distance * Math.cos(angle),
        y: center.y + distance * Math.sin(angle),
        cluster: clusterIdx,
      });
    }
  });
  
  return data;
};
