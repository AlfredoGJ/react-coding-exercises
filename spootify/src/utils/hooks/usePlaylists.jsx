import axios from "axios";
import { useEffect, useState } from "react";
import config from "../../config";

export default function usePlaylists(token) {
  const [playlists, setPlaylists] = useState([]);

  function requestReleases(token) {
    axios
      .get(
        `${config.api.baseUrl}/browse/featured-playlists`,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        }
      )
      .then((result) => {
        console.log(result.data);
        setPlaylists(result.data?.playlists?.items);
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

  return playlists;
}
