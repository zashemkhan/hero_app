import axios from "axios";
import { useEffect, useState } from "react";

const useApps = () => {
  const [apps, setApps] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("../apps.json")
      .then((data) => setApps(data.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);
  return [apps, error, loading];
};
export default useApps;
