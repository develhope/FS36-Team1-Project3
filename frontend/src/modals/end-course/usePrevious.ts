import { useEffect, useRef } from 'react';

const usePrevious = (value: boolean) => {
  const ref = useRef<boolean | undefined>(undefined);

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

export default usePrevious;