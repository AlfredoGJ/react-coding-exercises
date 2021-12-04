import React, { useContext, useState } from "react";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import "../styles/_discover.scss";
import { SessionContext } from "../../../common/providers/SessionProvider";
import Button from "../../../common/components/Button/Button";
import config from "../../../config";
import useReleases from "../../../utils/hooks/useReleases";
import usePlaylists from "../../../utils/hooks/usePlaylists";
import useCategories from "../../../utils/hooks/useCategories";
import useTrackAnalysis from "../../../utils/hooks/useTrackAnalysis";

function redirect() {
  window.location = `${config.api.spotifyAccounts}/authorize?client_id=${config.api.clientId}&client_secret=${config.api.clientSecret}&redirect_uri=http://localhost:3000&scopes=user-read-private user-read-email&response_type=code&state=state`;
}

export default function Discover(props) {
  const { session, logged } = useContext(SessionContext);

  const newReleases = useReleases(session.token);
  const playlists = usePlaylists(session.token);
  const categories = useCategories(session.token);
  const analysis = useTrackAnalysis(session.token)

  return logged() ? (
    <div className="discover">
      <DiscoverBlock
        text="RELEASED THIS WEEK"
        id="released"
        data={newReleases}
      />
      <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
      <DiscoverBlock
        text="BROWSE"
        id="browse"
        data={categories}
        imagesKey="icons"
      />
    </div>
  ) : (
    <div>
      <p>Log in to spotify if you want to acces all the features of this app</p>
      <Button onClick={redirect}>Log in</Button>
    </div>
  );
}
