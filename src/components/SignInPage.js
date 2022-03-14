import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from "firebase/auth";

const firebaseUIConfig = {
  signInOptions: [
    { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true },
    GoogleAuthProvider.PROVIDER_ID,
  ],
  signInFlow: "popup",
  credentialHelper: "none",
  callbacks: {
    signInSuccessWithAuthResult: () => {
      return false; 
    },
  },
};

export default function SignInPage() {
  let auth = getAuth();
  return (
      <div>
        <p>Please Sign In:</p>
        <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} aria-label="sign in" />
      </div>
      );
}