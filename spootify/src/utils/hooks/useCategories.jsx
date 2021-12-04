import axios from "axios";
import { useEffect, useState } from "react";
import config from "../../config";

export default function useCategories(token) {
  const [categories, setCategories] = useState([]);

  function requestReleases(token) {
    axios
      .get(
        `${config.api.baseUrl}/browse/categories`,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        }
      )
      .then((result) => {
        console.log(result.data);
        setCategories(result.data?.categories?.items);
      })
      .catch((error) => {
        console.log("could not fetch new releases");
      });
  }

  useEffect(() => {
    if (token) {
        requestReleases(token)
    }
  }, [token]);

  return categories;
}
