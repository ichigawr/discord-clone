import { useEffect, useState } from "react";
import httpRequest from "@/utils/httpRequest";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await httpRequest.get(url);
        setData(res.data.items); // TODO: replace this with the actual data key
      } catch (error) {
        console.error(error);
        setData([]);
      }
    })();
  }, [url]);

  return data;
};

export default useFetch;
