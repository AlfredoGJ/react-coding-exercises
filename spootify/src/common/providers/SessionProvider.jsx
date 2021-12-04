import axios from "axios";
import React, { useState } from "react";
import config from "../../config";

export const SessionContext = React.createContext();

function sessionDataPipe(data) {
  return {
    token: data.access_token,
    refresh_token: data.refresh_token,
    token_type: data.token_type,
    expires_in: data.expires_in,
    session_start: Date.now(),
  };
}

export default function SessionProvider({ children }) {
  const [session, setSession] = useState({
    token: null,
    refresh_token: null,
    token_type: null,
    expires_in: null,
    session_start: null,
  });

  function exchange(code) {
    console.log(code);

    const params = new URLSearchParams();
    params.append("code", code);
    params.append("grant_type", "authorization_code");
    params.append("redirect_uri", "http://localhost:3000");

    axios
      .post(`${config.api.spotifyAccounts}/api/token`, params, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${btoa(
            config.api.clientId + ":" + config.api.clientSecret
          )}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setSession(sessionDataPipe(response.data));
      })
      .catch((error) => {
        console.log(error);
        return null;
      });
  }

  const logged = () => {
    if (session.session_start && session.expires_in) {
      const ms = Date.now() - session.session_start;
      console.log(ms);
      return ms < session.expires_in;
    }
    return false;
  };

  return (
    <SessionContext.Provider value={{ session, exchange, logged }}>
      {children}
    </SessionContext.Provider>
  );
}
