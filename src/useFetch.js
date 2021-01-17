import { useState, useEffect } from "react";
import paginate from "./utils";
const url = "https://api.github.com/users/arsalan98m/followers?per_page=100";

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const getProducts = async () => {
    const response = await fetch(url);

    if (response.status >= 200 && response.status <= 300) {
      const data = await response.json();

      setData(paginate(data));
      setLoading(false);
      setError(null);
    } else {
      setData([]);
      setError("Data not found");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return { loading, data, error };
};
