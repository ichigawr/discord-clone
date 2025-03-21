import { useState, useEffect } from "react";

const fetchData = async (url) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetchData(url);
      setData(data.users); // TODO: replace this with the actual data key
    })();
  }, [url]);

  return data;
};

export default useFetch;
