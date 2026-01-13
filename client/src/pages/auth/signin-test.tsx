// src/pages/auth/signin-test.tsx
import { SignIn } from "@clerk/clerk-react";

export const SignInTest = () => {
  return (
    <div style={{ marginTop: "100px", textAlign: "center" }}>
      <h2>Sign In to Continue</h2>
      <SignIn routing="path" path="/signin-test" />
    </div>
  );
};
