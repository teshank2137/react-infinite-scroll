import { useState, useEffect } from "react";

const useGetItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalEntries, setTotalEntries] = useState(10);

  const fetchItems = async () => {
    console.log("called");
    if (totalEntries === items.length) return;
    setLoading(true);
    setError(null);
    try {
      let response = await fetch(
        `https://dummyjson.com/quotes?limit=30&skip=${items.length}`
      );
      let data = await response.json();
      setTotalEntries(data.total);
      setItems([...items, ...data.quotes]);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return [items, loading, error, fetchItems];
};

export default useGetItems;
