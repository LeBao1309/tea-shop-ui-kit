import { useState, useEffect } from 'react';

/**
 * LOADING SIMULATION HOOK
 * Simulates loading state for demo/development purposes
 * In production, this would be replaced with actual data fetching
 * 
 * PHP Integration Note:
 * Replace this hook with actual API calls:
 * const { data, isLoading } = useQuery(['products'], fetchProducts);
 */

export const useLoadingSimulation = (duration: number = 1500) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return isLoading;
};

export default useLoadingSimulation;
