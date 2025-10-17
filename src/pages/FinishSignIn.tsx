import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FinishSignIn() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [message, setMessage] = useState("Finishing sign-in...");

  useEffect(() => {
    async function complete() {
      try {
        if (isSignInWithEmailLink(auth, window.location.href)) {
          let email = window.localStorage.getItem("emailForSignIn");
          if (!email) {
            email = window.prompt("Please enter your email again for confirmation");
          }
          await signInWithEmailLink(auth, email!, window.location.href);
          window.localStorage.removeItem("emailForSignIn");
          setMessage("Signed in successfully!");
          navigate("/dashboard"); // redirect after login
        } else {
          setMessage("Invalid or expired link");
        }
      } catch (err) {
        console.error(err);
        setMessage("Error signing in");
      }
    }

    complete();
  }, [auth, navigate]);

  return <div className="p-5 text-center">{message}</div>;
}
