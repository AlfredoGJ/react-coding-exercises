import axios from "axios";
import { useEffect, useState } from "react";
import config from "../../config";

export default function useTrackAnalysis(token) {
  const [analysis, setAnalysis] = useState([]);

  function requestAnalysis(token) {
    axios
      .get(
        `${config.api.baseUrl}/audio-analysis/5bNfEhOdYOg3xymezctqvS?si=e6748573e2144280`,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        }
      )
      .then((result) => {
        console.log(result.data);
        //setAnalysis(result.data?.albums?.items);
      })
      .catch((error) => {
        console.log("could not fetch new releases");
      });
  }

  useEffect(() => {
    if (token) {
        requestAnalysis(token)
    }
  }, [token]);

  return analysis;
}
