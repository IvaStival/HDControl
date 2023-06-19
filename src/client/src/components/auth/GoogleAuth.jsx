import { useEffect, useRef, useState } from "react";

import Button from "../common/Button/Button";
import { google_auth } from "../../utils/constants";

// Client ID: 246123248219-0j0cephkp4gas424o4pikrfmcf834eri.apps.googleusercontent.com
const GoogleAuth = () => {
  const [isSigned, setIsSigned] = useState(false);
  let auth = useRef();

  useEffect(() => {
    window.gapi.load(
      "client:auth2",
      () => {
        window.gapi.client
          .init({
            clientId:
              "246123248219-0j0cephkp4gas424o4pikrfmcf834eri.apps.googleusercontent.com",
            scope: "email",
            plugin_name: "streamy",
          })
          .then(() => {
            // get the auth instance
            auth.current = window.gapi.auth2.getAuthInstance();
            setIsSigned({ isSignedIn: auth.current.isSignedIn.get() });
            auth.current.isSignedIn.listen(onAuthChange);
          })
          .catch((error) => {
            console.log(error);
          });
      },
      []
    );
  });

  const onAuthChange = (e) => {
    setIsSigned(auth.current.isSignedIn.get());
  };

  const handleClick = (e) => {
    auth.current.signIn();
  };

  return (
    <Button onClick={handleClick} danger>
      Google
    </Button>
  );
};

export default GoogleAuth;
