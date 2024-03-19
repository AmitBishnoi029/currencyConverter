import { useState, useEffect } from "react";

// Design custom hook
function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return; // Check if currency is defined
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
      .catch((error) => console.error("Error fetching currency data:", error));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
