import axios from "axios";
import { useEffect, useState } from "react";
import config from "../../config";

export default function useReleases(token) {
  const [releases, setReleases] = useState([]);

  function requestReleases(token) {
    axios
      .get(
        `${config.api.baseUrl}/browse/new-releases`,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        }
      )
      .then((result) => {
        console.log(result.data);
        setReleases(result.data?.albums?.items);
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

  return releases;
}
