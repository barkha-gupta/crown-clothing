import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

export const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDofRef = await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <div>sign-in.component</div>
      <button onClick={logGoogleUser}>Sign in with google</button>
      <SignUpForm />
    </>
  );
};
