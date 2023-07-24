import { useState, useEffect } from "react";

const useLocalStorage = (key, defaultData) => {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem(key);
    const data = JSON.parse(saved);
    return data || defaultData;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [key, data]);

  return [data, setData];
};

export { useLocalStorage };