import { useEffect, useState } from "react";

const useDebounce = (value, duration) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(value), duration);
    return () => clearTimeout(timer);
  }, [value, duration]);

  return debounceValue;
};

export default useDebounce;
