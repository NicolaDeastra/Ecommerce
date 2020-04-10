import React from "react";

import SignIn from "../../components/sing-in/sing-in.component";
import SignUp from "../../components/sign-up/sing-up.component";

import { SignInAndSignUpContainer } from "./sign-in-and-sign-up.styles";

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
