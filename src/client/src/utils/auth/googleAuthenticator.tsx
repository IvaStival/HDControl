// TODO - THE CONTROL INVERSE
import { IAuthenticator } from "./iauthenticator";
class GoogleAuthenticator implements IAuthenticator {
  authenticate(auth: any): boolean {
    if (auth.isSignedIn.get()) {
      return true;
    }
    return true;
  }
}

export default GoogleAuthenticator;
