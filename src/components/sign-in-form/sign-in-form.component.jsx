import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import "./sign-in-form.styles.scss";
import Button from "../button/button.component";

const SignInForm = () => {
  const defaultFormFields = {
    email: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const handleTnputChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  async function handleSignInForm(event) {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      const authToken = user.authToken;
      localStorage.setItem("authToken", authToken);

      console.log(user);

      resetFormFields;
    } catch (error) {
      console.log(error.code);
      alert("User sign-in failed");
    }
  }
  return (
    <div className="sign-up-container">
      {/* <pre>{JSON.stringify(formFields)}</pre> */}
      <h2>Already have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSignInForm}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          onChange={handleTnputChange}
          value={email}
          required
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          onChange={handleTnputChange}
          value={password}
          required
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button buttonType="google" type="button" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
